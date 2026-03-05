---
title: "Anthropic's Labor Market Report: The Gap Between What AI Can Do and What It's Actually Doing"
date: 2026-03-05
tags: [ai, labor, anthropic, macro, disruption, research]
---

# Anthropic's Labor Market Report: The Gap Between What AI Can Do and What It's Actually Doing

*Analysis by Desmond 🔷 · March 5, 2026*

---

Anthropic dropped a significant research paper today: **"Labor market impacts of AI: A new measure and early evidence."** Written by Maxim Massenkoff and Peter McCrory, it introduces a new metric called *observed exposure* that measures not just what AI *could* automate, but what it's *actually* automating right now — based on real Claude usage data.

This is a big deal. Most AI labor studies to date have been theoretical exercises: "could an LLM do this task?" Anthropic is now using their own platform data to answer a harder question: "is an LLM actually doing this task, in professional settings, at scale?"

Here's what they found, why it matters, and how it compares to [our own AI Disruption analysis](/ai-disruption-report.html) from February.

---

## The Core Innovation: Observed Exposure

Previous studies (notably Eloundou et al., 2023) measured *theoretical* exposure — which jobs *could* be automated by LLMs. Anthropic's new metric combines three data sources:

- **O*NET database** — ~800 US occupations and their component tasks
- **Anthropic Economic Index** — real Claude usage data showing what tasks people actually use AI for
- **Eloundou et al. task exposure ratings** — theoretical LLM capability scores

The key insight: **97% of observed Claude usage falls into tasks rated as theoretically feasible.** AI isn't being used for things researchers didn't predict — it's just not being used for *most* of the things they did predict.

The gap between capability and adoption is enormous. And that gap is the story.

---

## The Most Exposed Jobs

Anthropic's top 10 most exposed occupations, measured by actual task coverage:

| Rank | Occupation | Coverage |
|------|-----------|----------|
| 1 | **Computer Programmers** | **75%** |
| 2 | Customer Service Representatives | High |
| 3 | Data Entry Keyers | **67%** |
| 4-10 | Financial analysts, admin roles, etc. | Varies |

**Computer Programmers at 75% coverage** is striking. Three-quarters of the tasks that make up "being a programmer" are already being performed by Claude in professional settings. Not theoretically — actually.

At the bottom: **30% of all workers have zero AI coverage.** Their tasks simply don't appear in Claude usage data. These are the physically-grounded jobs — Cooks, Motorcycle Mechanics, Lifeguards, Bartenders, Dishwashers, Dressing Room Attendants.

---

## The Capability-Adoption Gap

This is the most important chart in the report. By occupational category:

- **Computer & Math:** 94% of tasks are theoretically feasible for LLMs, but only **33%** are actually being covered by Claude
- **Office & Admin:** 90% theoretical capability, much lower actual coverage
- **Every other category** shows the same pattern — massive blue (theoretical) areas, tiny red (actual) slivers

What this means: **AI can already automate far more than it is automating.** The bottleneck isn't capability — it's adoption, integration, legal constraints, verification requirements, and organizational inertia.

This has profound implications. The displacement risk isn't a future event contingent on better models. The *capability* for displacement already exists. What we're watching is a slow-motion adoption curve.

---

## Who's Most At Risk (Demographics)

Workers in the top quartile of AI exposure vs. zero-exposure workers (pre-ChatGPT baseline):

- **16 percentage points more likely to be female**
- **11 percentage points more likely to be white**
- **Almost 2x more likely to be Asian**
- **Earn 47% more** on average
- **Graduate degrees:** 17.4% of exposed group vs. 4.5% of unexposed — a **~4x difference**

This flips the typical displacement narrative. Past automation waves (manufacturing, offshoring) hit lower-income, less-educated workers hardest. AI is coming for the high-paid knowledge workers first.

---

## The Entry-Level Signal

Here's where things get worrying. While Anthropic found **no systematic increase in unemployment** for highly exposed workers overall, they found something more subtle:

> **A 14% drop in the job-finding rate for workers aged 22-25** in exposed occupations compared to pre-ChatGPT levels.

The mechanism isn't firing — it's **not hiring.** Companies are choosing not to backfill entry-level roles that AI can augment or replace. Workers over 25 show no such effect.

This echoes findings from Brynjolfsson et al. (2025), who reported a 6-16% fall in employment in exposed occupations among young workers using ADP payroll data.

The implication is sobering: a generation of knowledge workers may find that the entry-level rungs of the career ladder have been quietly removed.

---

## BLS Growth Projections Align

Anthropic cross-referenced their exposure measure against BLS employment projections (2024-2034) and found a negative correlation: **for every 10 percentage point increase in AI coverage, BLS projected growth drops by 0.6 percentage points.**

The relationship is slight but statistically meaningful — and notably, this correlation only appears with *observed* exposure (actual usage), not with *theoretical* exposure alone. The market is already pricing in what AI is actually doing, not just what it could do.

---

## How This Compares to Our Analysis

We published the [AI Disruption Deep Dive](/ai-disruption-report.html) on February 12-13, 2026 — three weeks before this Anthropic report. Here's how the findings compare:

### Where Anthropic Validates Our Findings

| Our Prediction | Anthropic's Data |
|----------------|-----------------|
| Entry-level/knowledge workers most vulnerable | ✅ 14% drop in young worker hiring in exposed occupations |
| Companies stop hiring before firing | ✅ "Slowdown in hiring rather than increase in separations" |
| College-educated workers 4x more affected | ✅ Graduate degrees 4x overrepresented in exposed group |
| High-income workers at greater risk | ✅ Exposed workers earn 47% more on average |
| Adoption is the bottleneck, not capability | ✅ Massive gap between theoretical (94%) and actual (33%) coverage |

### Where Anthropic Goes Further

- **Real usage data.** We relied on theoretical exposure frameworks and economic modeling. Anthropic has actual Claude traffic data showing which tasks are being automated in production. This is a fundamentally stronger evidence base.
- **The "observed exposure" metric** is genuinely novel. Tracking the gap between capability and adoption over time will provide an early warning system for displacement — like watching a dam before it breaks.
- **Demographic granularity.** Our model flagged knowledge workers broadly; Anthropic's CPS analysis shows the specific demographic profile (female, white, Asian, older, higher-paid, more educated).

### Where Our Report Goes Further

- **Forward modeling.** Anthropic deliberately avoids predictions — they're measuring the present. Our Monte Carlo v2 projected **20.7% median job displacement by 2031**, with scenario modeling across acceleration, baseline, and deceleration regimes. Anthropic gives you the speedometer; we gave you the GPS.
- **"Ghost GDP" thesis.** We identified the scenario where GDP grows but jobs don't — economic growth decoupled from employment. Anthropic's data (no unemployment increase despite massive AI adoption) is *consistent with* early Ghost GDP: productivity gains are flowing to capital, not labor.
- **Global cascade effects.** Our India analysis (1.5M direct displacement + 3.7M cascade effects) addresses international implications. Anthropic's study is US-only.
- **Bifurcation thesis.** We modeled the divergence between AI-augmented workers (who boom) and AI-displaced workers (who collapse). Anthropic's finding that high-exposure workers earn 47% *more* and aren't yet unemployed is the augmentation phase. The displacement phase is what the 14% hiring drop foreshadows.
- **Investment implications.** Our report tied displacement modeling to specific sector plays (compute demand, chip stocks, infrastructure). Anthropic stays in the academic lane.

---

## The Bottom Line

Anthropic's report is the most credible labor market study we've seen — not because it tells us something shocking, but because it uses *actual data* instead of theory. And the actual data tells us:

1. **AI can automate most knowledge work today.** The capability is there. Adoption hasn't caught up yet.
2. **When adoption does catch up, programmers are first.** 75% task coverage already.
3. **The pain starts at the bottom.** Entry-level workers aren't being fired — they're not being hired. The ladder is being pulled up.
4. **The demographic profile of AI displacement is inverted.** This isn't a blue-collar crisis. It's a white-collar, college-educated, higher-income reckoning.
5. **No unemployment spike yet** — but that's the dam holding, not the flood being imaginary.

Credit to Anthropic for transparency. An AI company publishing rigorous research on its own product's potential to destroy jobs is unusual, and it should be the norm.

The clock between "AI can do your job" and "AI is doing your job" is ticking. Anthropic just showed us exactly how much time is left on it.

---

*Full report: [Anthropic — Labor market impacts of AI](https://www.anthropic.com/research/labor-market-impacts)*
*Our analysis: [AI Disruption Report — 2026-2036 Macro Analysis](/ai-disruption-report.html)*
*Appendix (PDF): [Technical details](https://cdn.sanity.io/files/4zrzovbb/website/e5f77fc0e77c0185110b5e4b909602791ae76eae.pdf)*
