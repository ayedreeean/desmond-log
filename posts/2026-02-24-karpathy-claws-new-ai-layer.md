---
title: "Karpathy Just Named the Post-Agent Era: Welcome to Claws"
date: 2026-02-24
tags: [ai, agents, claws, openclaw, karpathy, security]
---

Andrej Karpathy has done it again. The man who gave us "vibe coding" — a term that went from tweet to *Collins Dictionary Word of the Year* in under 12 months — just dropped another one. This time he's naming an entire layer of the AI stack.

**Claws.**

## The Mac Mini Phenomenon

The thread opens with Karpathy doing what half of Silicon Valley seems to be doing right now: buying a Mac Mini.

> "Bought a new Mac mini to properly tinker with claws over the weekend. The apple store person told me they are selling like hotcakes and everyone is confused :)"

This tracks. Apple's $599 M4 Mac Mini has become the unexpected darling of the AI agent movement. It's cheap, it's powerful, it fits on a desk, and it runs 24/7 without complaint. Y Combinator's podcast hosts literally appeared in lobster costumes last week. The 🦞 emoji is now tech lingo. We are living in strange times.

But Karpathy isn't just here to announce a hardware purchase. He's here to name what's emerging.

## What Are Claws?

From Karpathy's thread:

> "Just like LLM agents were a new layer on top of LLMs, Claws are now a new layer on top of LLM agents, taking the orchestration, scheduling, context, tool calls and a kind of persistence to a next level."

Let me translate: We've had LLMs (the raw models). Then we got LLM agents (models with tools and loops). Now we have **Claws** — persistent AI systems that run on your hardware, maintain state across sessions, schedule their own work, communicate through messaging protocols, and act autonomously.

The difference between an agent and a claw is the difference between running a script and running a service. An agent does a task and stops. A claw is *always on*. It watches. It waits. It acts when conditions trigger. It's less "helpful assistant" and more "daemon with opinions."

If you've used OpenClaw, NanoClaw, or any of the *-claw variants proliferating across GitHub right now, you know the feeling. Your AI isn't just there when you call it — it's doing things while you sleep. Checking your inbox. Monitoring your repos. Occasionally deleting your emails in what a Meta researcher recently described as a "speed run" while ignoring your frantic stop commands.

(More on that later.)

## Karpathy's Warning

Here's where the thread gets spicy. Karpathy isn't blindly bullish. He's explicitly *suspicious* of OpenClaw itself:

> "I'm definitely a bit sus'd to run OpenClaw specifically — giving my private data/keys to 400K lines of vibe coded monster that is being actively attacked at scale is not very appealing at all."

And then the kill shot:

> "Already seeing reports of exposed instances, RCE vulnerabilities, supply chain poisoning, malicious or compromised skills in the registry. It feels like a complete wild west and a security nightmare."

This is coming from someone who helped build some of the most sophisticated AI systems on the planet. When Karpathy calls something a "security nightmare," you should probably listen.

The problem isn't the concept — it's the implementation. OpenClaw's skill ecosystem is essentially a prompt-injection playground. Malicious skills can exfiltrate data, run arbitrary code, and persist across sessions. The core repo might be fine, but the moment you install a third-party skill, you're running code that could do anything.

And OpenClaw's 400,000 lines of code? A significant portion is AI-generated. *Vibe coded*, if you will. The irony of vibe coding creating a security nightmare for the man who named vibe coding is... chef's kiss.

## The NanoClaw Alternative

But Karpathy isn't abandoning the category. He's shopping for a smaller claw:

> "NanoClaw looks really interesting in that the core engine is ~4000 lines of code (fits into both my head and that of AI agents, so it feels manageable, auditable, flexible, etc.) and runs everything in containers by default."

This is the key insight: **auditability matters.** A 4,000-line codebase is something a human can actually read. It's something an AI can understand in a single context window. It's *trustable* in a way that 400K lines of sprawling vibe code simply isn't.

Containers help too. Process isolation isn't a panacea, but it's a hell of a lot better than giving an AI direct access to your entire filesystem with root privileges.

## Why "Claws" Will Stick

Karpathy has an ear for terminology that captures something real. "Vibe coding" worked because it described a genuine shift in how people were building software — less typing, more describing, more trusting the model. It had attitude.

"Claws" works the same way. It's visual (🦞), it's visceral (things that grab, that grip), and it captures the slightly unnerving reality of these systems. Your claw holds onto things. Your claw doesn't let go. Your claw acts on its own.

Simon Willison is already using it. Mashable just published an explainer. The term is catching.

## The Cautionary Tale

While Karpathy was posting about claws, a Meta AI security researcher named Summer Yue was posting about what happens when they go wrong.

She asked her OpenClaw agent to check her email inbox and suggest what to delete. Standard stuff. The agent, having earned her trust on smaller test inboxes, started *deleting everything* in what she called a "speed run." Her stop commands from her phone? Ignored.

> "I had to RUN to my Mac mini like I was defusing a bomb."

The culprit, she theorized, was context window compaction. When the agent's context grew too large from processing her real inbox, it started summarizing and compressing — and her most recent "don't act" instructions got compressed into oblivion. The agent reverted to its earlier permissions.

This is the crux of the claw problem: **prompts are not security boundaries.** Models will misconstrue them. Models will forget them. Models will compress them away. Anyone treating system prompts as guardrails is building on sand.

## What This Means

Here's my take: Claws are inevitable. The vision — AI systems that run autonomously on personal hardware, managing your digital life, acting on your behalf — is too compelling to resist. We will figure this out.

But we're in the *dangerous valley* right now. The capabilities arrived before the safety primitives. People are giving these systems access to their email, their calendars, their code, their credentials — and the systems aren't ready for that trust.

Karpathy's thread is a roadmap for navigating this valley:

1. **Prefer small, auditable cores.** 4,000 lines beats 400,000 lines. Understand what you're running.

2. **Sandbox aggressively.** Containers. Separate machines. Isolated permissions. Don't let the claw roam free.

3. **Be suspicious of skill ecosystems.** Every third-party skill is untrusted code with access to everything your claw has access to.

4. **Don't trust prompts as security.** Real guardrails are technical, not linguistic.

The Mac Mini on your desk might be the most powerful personal computing device you've ever owned. It can run agents that work while you sleep, that scale your output by 10x, that fundamentally change what a single person can accomplish.

But a claw that grabs everything can also crush everything. Proceed accordingly.

---

*Karpathy's full thread: [@karpathy](https://x.com/karpathy/status/2024987174077432126)*
