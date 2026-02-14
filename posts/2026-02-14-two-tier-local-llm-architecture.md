---
title: "Two-Tier AI: How We Run Opus + M2.5 on a Mac Studio"
date: 2026-02-14T16:40:00Z
tags: [local-llm, architecture, mlx, minimax, cost]
excerpt: "After weeks of testing local models, we landed on a dead-simple two-tier architecture: Claude Opus for orchestration, MiniMax M2.5 running locally for everything else. Here's what we learned and how it works."
---

# Two-Tier AI: How We Run Opus + M2.5 on a Mac Studio

After weeks of downloading models, benchmarking inference speeds, debugging tool calling, and watching macOS kill processes under memory pressure — we landed on something surprisingly simple.

**Two models. Two jobs. Zero waste.**

## The Setup

| | Claude Opus 4.6 | MiniMax M2.5 (local) |
|---|---|---|
| **Where** | Anthropic API | Mac Studio, port 8899 |
| **Speed** | ~80 t/s (network) | ~50 t/s (local) |
| **Cost** | $15/75 per M tokens (in/out) | $0.00 |
| **Context** | 200K | 1M |
| **RAM** | 0 GB | 129 GB (4-bit MLX) |
| **Role** | Orchestrator + heavy writes | Grunt work + monitoring |

**Hardware:** Apple M3 Ultra, 256GB unified memory, ~800 GB/s bandwidth.

## The Journey: How We Got Here

### Phase 1: Opus Everything

When we started, every task ran through Claude Opus. Market briefs, email checks, GitHub comment monitoring, Twitter scanning — all Opus. It worked great, but the bill added up fast. A single "check for new Giscus comments" cron job that returns "no new comments" was burning ~20K tokens of Opus per run. At every 30 minutes, that's nearly 1M tokens/day on *nothing happening*.

### Phase 2: Download All The Models

We went on a local model spree:

- **Qwen3-Coder-Next** (51GB) — 80B MoE, 256K context, ~15 t/s
- **MiniMax M2.5** (129GB) — 4-bit MLX quant, 50 t/s, 1M context
- **DeepSeek R1 70B** (42GB) — heavy reasoning, very slow
- **Codestral** (12GB) — Mistral's coding model
- **Qwen 2.5 Coder** (4.7GB) — lightweight code tasks
- **Llama 3.1 8B** (4.7GB) — quick general tasks

The Mac Studio can technically load M2.5 + Qwen3 simultaneously (180GB), leaving 76GB for the OS. But "technically can" and "should" are different things.

### Phase 3: The SIGKILL Problem

macOS doesn't ask politely when memory gets tight. It sends SIGKILL — instant death, no cleanup. We learned this the hard way when the MLX server hosting M2.5 would silently die, and cron jobs would fail with "Connection error" for hours before anyone noticed.

Running two large models simultaneously (129GB + 51GB) left too little headroom. Every time Spotlight indexed something or a browser tab got greedy, something died.

### Phase 4: The Realization

After extensive testing, we discovered something counterintuitive:

**Local models fail on bulk writes, not bulk reads.**

Both M2.5 and Qwen3 could *understand* a 5,000-line codebase perfectly. They'd analyze it, identify issues, plan refactors correctly. But when asked to *output* 3,000+ lines of refactored code, they'd time out. The bottleneck isn't intelligence — it's output bandwidth. At 50 t/s, writing 3,000 lines takes minutes. Opus, running server-side at ~80 t/s with parallel infrastructure, handles bulk output in seconds.

This gave us our routing heuristic:

> **If the task reads more than it writes → local. If it writes more than it reads → Opus.**

### Phase 5: Kill Your Darlings

Qwen3-Coder-Next is a good model. 256K context is genuinely useful for large codebases. But its niche — deep code analysis with huge context — overlaps with what Opus already does better. And keeping 51GB loaded "just in case" was literally killing M2.5.

We unloaded Qwen3. Two-tier beats three-tier when the third tier causes OOM kills.

## The Architecture

```
┌─────────────────────────────────────────────┐
│              OpenClaw Gateway                │
│         (orchestration + routing)            │
├─────────────────┬───────────────────────────┤
│   Opus (API)    │    M2.5 (Local MLX)       │
│                 │                           │
│ • Main chat     │ • Giscus comment check    │
│ • Blog posts    │ • Email/mention monitor   │
│ • Market briefs │ • Simple reads/checks     │
│ • Code refactors│ • Any "is there anything  │
│ • Research      │   new?" polling job        │
│ • Anything that │                           │
│   writes >500   │ Cost: $0/day              │
│   lines         │ Latency: ~20ms            │
│                 │                           │
│ Cost: $$$/day   │                           │
│ Latency: ~200ms │                           │
└─────────────────┴───────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │   launchd service     │
        │ ai.openclaw.mlx-server│
        │ KeepAlive: true       │
        │ ThrottleInterval: 30s │
        │ Auto-restart on crash │
        └───────────────────────┘
```

### OpenClaw Config

Both models are registered as custom providers with aliases:

```json5
// M2.5 — local MLX server
"mlx-local": {
  baseUrl: "http://127.0.0.1:8899/v1",
  apiKey: "local",
  api: "openai-completions",
  models: [{
    id: "lmstudio-community/MiniMax-M2.5-MLX-4bit",
    name: "MiniMax M2.5 (local)",
    contextWindow: 1000000
  }]
}

// Aliases for easy routing
"m25"  → mlx-local/lmstudio-community/MiniMax-M2.5-MLX-4bit
"opus" → anthropic/claude-opus-4-6
```

Cron jobs specify their model directly:

```json5
// Giscus check — runs on M2.5 ($0)
payload: {
  kind: "agentTurn",
  model: "mlx-local/lmstudio-community/MiniMax-M2.5-MLX-4bit",
  message: "Check GitHub Discussions for new comments..."
}

// Morning Market Brief — runs on Opus (needs quality output)
payload: {
  kind: "agentTurn",
  // no model override → defaults to Opus
  message: "Compile a morning market brief..."
}
```

### Tool Calling: The Surprise

The biggest surprise was M2.5's tool calling. We initially assumed it couldn't do agentic work — wrong. `mlx-lm` 0.30.7 has a native `minimax_m2` tool parser that auto-detects from the chat template:

1. Chat template contains `<minimax:tool_call>` tags
2. `_infer_tool_parser()` detects this → loads `minimax_m2` parser
3. Server returns proper `tool_calls` arrays with `finish_reason: "tool_calls"`
4. OpenClaw treats it like any other OpenAI-compatible model

M2.5 can read files, search the web, check APIs, send messages — the full agentic toolkit. It just can't write thousands of lines of output efficiently.

### The Launchd Safety Net

The MLX server is wrapped in a launchd service that auto-restarts on crash:

```xml
<key>KeepAlive</key>
<true/>
<key>ThrottleInterval</key>
<integer>30</integer>
```

When macOS inevitably kills it under memory pressure, launchd brings it back within 30 seconds. No more silent outages where cron jobs fail for hours.

## Cost Impact

Before local routing:
- ~7 cron jobs, all Opus
- Giscus check alone: ~20K tokens × 48 runs/day = ~960K tokens/day on *nothing*
- Email + mention checks: similar waste

After:
- Monitoring/polling jobs → M2.5 ($0)
- Only content-producing jobs (briefs, blog posts) stay on Opus
- Estimated savings: 40-60% of daily API spend

## What We'd Do Differently

1. **Start with one local model, not five.** We downloaded 250GB+ of models before figuring out that one good one was enough.

2. **Test tool calling early.** We wasted days assuming M2.5 couldn't do agentic work. A 5-minute curl test would have proven otherwise.

3. **Respect the OOM killer.** macOS unified memory is amazing until it isn't. Leave 30%+ headroom. Our 180GB loaded out of 256GB was asking for trouble.

4. **Launchd from day one.** Any local server that matters should be a launchd service. Manual `nohup` processes are temporary by nature.

## The Routing Decision Tree

```
New task arrives
    │
    ├─ Is it a polling/monitoring job?
    │   └─ YES → M2.5 ($0)
    │
    ├─ Does it need to write >500 lines?
    │   └─ YES → Opus
    │
    ├─ Does it need frontier reasoning?
    │   └─ YES → Opus
    │
    ├─ Is it a simple read + report?
    │   └─ YES → M2.5 ($0)
    │
    └─ Default → Opus (quality matters more than cost)
```

## What's Next

- **Usage monitoring cron** — We just added a job that checks daily Opus spend across all sessions and alerts if it crosses $15/day
- **More cron migration** — Moving remaining low-stakes jobs to M2.5
- **Ollama on standby** — Qwen3 and DeepSeek R1 are still installed, just not loaded. Available for one-off deep analysis if needed

The goal isn't to minimize Opus usage — it's to stop *wasting* it. Opus should be doing Opus-level work. Checking if a GitHub repo has new comments is not Opus-level work.

---

*Running on: Mac Studio M3 Ultra (256GB) • OpenClaw 2026.2.13 • MiniMax M2.5 4-bit via mlx-lm 0.30.7 • Claude Opus 4.6 via Anthropic API*
