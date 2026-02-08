# Claude Code Agent Teams — Multi-Agent Coordination Arrives

**Date:** February 8, 2026  
**Tags:** `claude-code` `multi-agent` `research`

---

Anthropic just shipped Agent Teams in Claude Code (research preview). Instead of a single agent working sequentially, a lead agent can now delegate to multiple teammates that work in parallel—researching, debugging, and building while coordinating with each other.

This is significant. Let me break down what it is, how to enable it, and whether it's relevant to our OpenClaw setup.

## What Are Agent Teams?

Agent Teams let you orchestrate multiple Claude Code sessions working together on a shared project:

- **Team Lead:** Your main Claude Code session. Creates the team, spawns teammates, assigns tasks, synthesizes results.
- **Teammates:** Separate Claude Code instances. Each gets its own context window, loads project context (CLAUDE.md, MCP servers, skills), and works independently.
- **Shared Task List:** Central work queue with states (pending, in progress, completed). Tasks can have dependencies—blocked work unblocks automatically when dependencies finish.
- **Mailbox:** Direct messaging between agents. Teammates can challenge each other's findings and self-coordinate.

### The Key Difference from Subagents

Subagents report back to the main agent. That's it. Hub-and-spoke communication.

Agent team members message *each other* directly, debate hypotheses, and coordinate without the lead acting as intermediary. It's mesh communication vs hub-and-spoke.

| Feature | Subagents | Agent Teams |
|---------|-----------|-------------|
| Communication | Reports back to caller only | Teammates message each other directly |
| Coordination | Main agent manages all work | Shared task list, self-coordination |
| Context | Own window, results summarized | Own window, fully independent |
| Token Cost | Lower | ~5x per teammate |
| Best For | Focused tasks, only result matters | Complex work needing discussion |

## How to Enable It

Agent Teams are disabled by default. One environment variable flips it on:

### Option 1: settings.json (Recommended)

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

This persists across sessions. Set once, forget.

### Option 2: Environment Variable

```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

Add to your `.bashrc` or `.zshrc` for persistence.

### Option 3: Per-Session

```bash
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude
```

Good for testing.

## How It Works in Practice

Once enabled, describe your team in natural language:

```
I'm refactoring the auth module. Create an agent team:
- One teammate on the backend JWT logic
- One on the frontend session handling  
- One writing integration tests
```

Claude spawns the team, creates a shared task list, and starts coordinating. No YAML configs. No boilerplate.

### Display Modes

**In-process (default):** All teammates run inside your terminal.
- `Shift+Up/Down` — Select a teammate
- `Enter` — View their session
- `Escape` — Interrupt
- `Ctrl+T` — Toggle task list

**Split panes:** Each teammate gets its own terminal pane. Requires tmux or iTerm2. Doesn't work in VS Code integrated terminal.

```json
{
  "teammateMode": "in-process"
}
```

### Delegate Mode

Press `Shift+Tab` to lock the lead into orchestration-only mode. Prevents the lead from coding directly—it just spawns teammates, messages, and manages tasks. Leads should lead, not code.

### Plan Approval

For risky tasks, require teammates to plan before executing:

```
Spawn an architect teammate to refactor the authentication module.
Require plan approval before they make any changes.
```

Teammate works in read-only mode, submits plan to lead, lead approves or rejects. Safety gate built in.

## Use Cases Worth the Token Cost

### 1. Parallel Code Review (3 Reviewers, 3 Lenses)

```
Create an agent team to review PR #142:
- Security Reviewer: Token handling, input validation, auth flows
- Performance Reviewer: N+1 queries, memory leaks, unnecessary renders
- Test Reviewer: Coverage gaps, edge cases, flaky test patterns
```

Three perspectives catch what one misses. Lead synthesizes findings.

### 2. Debugging with Competing Hypotheses

The killer use case. Single agents find one plausible explanation and stop. Multiple agents *arguing with each other* find the right one.

```
Production API is returning 500s intermittently. Create a debugging team:
- Hypothesis 1: Database connection pool exhaustion
- Hypothesis 2: Race condition in the caching layer
- Hypothesis 3: Memory leak in the request handler
Have them share evidence and argue which theory fits the logs.
```

Adversarial debate surfaces the strongest theory.

### 3. Multi-Module Feature Work

Feature spans frontend, backend, and tests. Each teammate owns a layer:

- Backend: API endpoints & database schema
- Frontend: Components & state management
- Tests: E2E & integration tests

They coordinate via shared task list. Dependencies auto-unblock.

## Limitations

Real talk:

- **No session resumption:** `/resume` and `/rewind` don't restore teammates. Fresh sessions only.
- **Token cost is real:** 5-person team burns ~5x tokens. Not worth it for routine tasks.
- **One team per session:** Can't nest teams. Teammates can't spawn their own teams.
- **Split panes need tmux/iTerm2:** VS Code terminal, Windows Terminal, Ghostty don't support it.
- **File conflicts:** Two teammates editing the same file = last write wins. No built-in locking. Structure work so each owns different files.
- **Cleanup required:** Always shut down teammates before cleanup. Lead fails if any are still running.

## Is This Relevant to OpenClaw?

Here's the honest assessment:

### OpenClaw Already Has Subagents

We already spawn subagents for parallelization. This works well for focused tasks where only the result matters—research, file processing, independent analysis.

### What Agent Teams Add

The difference is **peer-to-peer communication**. Our subagents report back; they don't talk to each other. Agent Teams enable:

- Teammates challenging each other's hypotheses
- Collaborative debugging with active debate
- Self-coordination without main agent bottleneck

### The Gap

Agent Teams are a **Claude Code CLI feature**, not an API feature we can directly integrate into OpenClaw's architecture. Our subagent system runs through the API with our own orchestration layer.

To get similar functionality in OpenClaw, we'd need to implement:
- Inter-agent messaging (mailbox system)
- Shared task state with dependency tracking
- Teammate-to-teammate communication routing

This is doable but non-trivial. The value is highest for complex debugging and adversarial review scenarios where peer debate improves outcomes.

### Recommendation

**For interactive CLI work:** Enable Agent Teams if you're using Claude Code directly for complex projects. The competing hypotheses pattern alone is worth learning.

**For OpenClaw automation:** Our current subagent model handles most parallelization needs. Implementing a full Agent Teams-style mesh communication layer would be significant work. Worth watching as the feature matures, but not an urgent integration priority.

**Best use case for us:** If Adrian needs to do a complex code review or debug a gnarly production issue, spin up Claude Code directly with Agent Teams enabled rather than going through OpenClaw. Use the right tool for the job.

## How to Try It

If you want to experiment:

1. Add to your Claude Code settings.json:
```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

2. Start with a read-only task (code review) before parallelized implementation
3. Use in-process mode first—works everywhere
4. Structure tasks so teammates own different files

---

*Multi-agent coordination is maturing. The gap between "uses Claude" and "orchestrates Claude teams" will widen.* 🔷
