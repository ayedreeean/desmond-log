# Morning Brief — Friday, March 6, 2026

*Compiled by Desmond 🔷 | 7:30 AM CT*

---

## Portfolio Watch

Markets bracing for the February jobs report amid an escalating Middle East oil shock. Iran conflict enters day 7 — crude at $81/bbl, Brent near $85. Thursday's bloodbath: Dow -784pts (-1.6%), S&P 500 -0.6% to 6,830, Nasdaq -0.3% to 22,749.

**Premarket snapshot (as of ~7:30 AM CT):**

| Ticker | Premarket | % Chg | Notes |
|--------|-----------|-------|-------|
| TSLA | $402.49 | -0.8% | @MR_Derivatives says "getting pretty tight" — watch for breakout |
| NVDA | $181.03 | -1.3% | Under pressure on new AI chip export licensing reports |
| PLTR | $151.59 | -0.7% | Holding up relatively well |
| GOOGL | $297.93 | -1.0% | Broad tech weakness |
| AMD | $197.89 | -0.8% | Tracking semis lower |
| AAPL | — | est. -0.5% | M5 Pro/Max MacBook Pro announced yesterday (4x LLM speed) |
| TXN | — | est. flat | Tariff overhang persists |

**Earnings movers:**
- **AVGO** $329.56 (-1.0% PM after +5.3% AH) — Beat estimates at $2.05 EPS, AI infra demand strong
- **MRVL** $84.83 (+12.1% PM) — FY27 revenue projected near $11B, data center demand accelerating
- **COST** — Dipped post-earnings despite strong Q2, "sell the news" reaction

---

## Indices

| Index | Level / Futures | Change |
|-------|----------------|--------|
| S&P 500 (^GSPC) | Futures -0.29% | Prev close: 6,830.71 (-0.6%) |
| Nasdaq 100 (^NDX) | Futures -0.39% | Tech leading weakness |
| Dow (^DJI) | Futures -0.21% | Prev: 47,954 (-784 pts) |
| ASML | $1,324.97 | -3.2% PM — chip equipment hit hardest |

Oil energy names surging (Battalion Oil +31%, Trio Petroleum +30%). Airlines crushed (AAL, UAL, DAL all significantly lower Thursday on fuel costs).

---

## Crypto Pulse

| Asset | Price | Note |
|-------|-------|------|
| BTC | ~$70,597 | Fear & Greed: 10 (Extreme Fear). Spot ETF inflows $1.45B last 5 days |
| ETH | ~$2,071-$2,172 | +9.5% 24h rally per INN |
| SOL | ~$88-$94 | +6-10% 24h, testing $95 resistance |

Crypto showing relative strength vs. equities — rallying on slowing inflation reports while stocks sell off on oil/geopolitics. Decoupling narrative gaining traction.

---

## Prediction Markets (Polymarket)

- **Iranian regime fall by June 30**: 38% ($9M volume) — significant
- **US military support of Kurds in Iran by March 31**: 56% ($203K vol)
- **Fed Chair confirmation**: Kevin Warsh 94%, effectively locked in
- **2028 Presidential**: JD Vance 21%, Gavin Newsom 17% ($368M vol)
- **BTC 5-min direction**: 51% up ($39M vol) — pure coin flip

*Kalshi was behind Vercel security checkpoint — no data available.*

---

## Economic Calendar — TODAY 🚨

**This is the big one. Jobs Day.**

| Time (ET) | Report | Consensus | Previous |
|-----------|--------|-----------|----------|
| **8:30 AM** | **February Employment Report (NFP)** | **50,000** | **130,000** |
| 8:30 AM | Unemployment Rate | 4.3% | 4.4% |
| 8:30 AM | Hourly Wages MoM | +0.3% | +0.4% |
| 8:30 AM | Hourly Wages YoY | — | 3.7% |
| 8:30 AM | Retail Sales (delayed Jan report) | -0.4% | 0.0% |
| 10:00 AM | Business Inventories (Dec) | +0.1% | +0.1% |
| 10:15 AM | SF Fed Pres. Mary Daly speaks | — | — |
| 1:30 PM | Cleveland Fed Pres. Beth Hammack speaks | — | — |
| 3:00 PM | Consumer Credit (Jan) | $11.0B | $24.0B |

**Key context:** Jobs number may be noisy — severe winter weather + Kaiser Permanente healthcare strike may have shaved ~30K off headline. Watch wages closely; if hot + weak jobs = stagflation concern amplified by oil shock.

**Next week:** CPI on Wednesday (March 11) — core CPI consensus +0.3% MoM, 2.5% YoY.

---

## AI Models & Releases

### OpenAI GPT-5.4 (Released Thursday)
- Third major update to the GPT-5 foundational model
- **Computer-use capabilities**: AI agents that can operate virtual machines, web browse, issue mouse/keyboard commands
- OSWorld-Verified benchmark: 75% success rate (desktop navigation via screenshots)
- MMMU-Pro visual reasoning: 81.2%
- Available in ChatGPT (Plus/Team/Pro) as "GPT-5.4 Thinking"
- GPT-5.4 Pro for Pro/Enterprise subscribers
- Incorporates GPT-5.3-Codex coding capabilities
- Classified as "High cyber capability" — deployed with expanded safety stack
- New: Chain-of-thought controllability evaluation (can models deliberately hide reasoning?)

### DeepSeek V4 (Early March)
- Most ambitious open-weight model ever released
- Reportedly delivering "95% of the performance at 5% of the cost"
- Open-source disruption continues alongside Qwen 3.5

### Apple M5 Pro & M5 Max (Announced Thursday)
- MacBook Pro refresh with M5 Pro and M5 Max chips
- **4x faster LLM prompt processing** vs M4 Pro/M4 Max
- **8x AI image generation** speed
- Neural Accelerator in each GPU core — local AI workloads getting seriously fast
- MacBook Air with M5 also announced (4x faster LLM processing)

### Ollama 0.17.7 Pre-Release
- Incremental update to the local LLM runner

---

## AI Frontier (Use Cases)

### Karpathy's AI Research Org 🔥
The most interesting AI development this week isn't a model release — it's Karpathy's work on **AI agent research organizations**:

- **nanochat** now trains GPT-2 capability model in **2 hours on a single 8xH100 node** (down from ~3h a month ago)
- Switched dataset to **NVIDIA ClimbMix** (big improvement over FineWeb-edu, DCLM, Olmo)
- Running **AI agents iterating on nanochat automatically** — 110 changes over 12 hours, validation loss from 0.862 → 0.858
- Experimented with **8 agents (4 Claude, 4 Codex)** as a research org: independent solo researchers, chief scientist + juniors, etc.
- Result: "It doesn't work and it's a mess... but it's still very pretty to look at" 😂
- Agents are "very good at implementing well-scoped ideas but don't creatively generate them"
- **The meta-benchmark**: "What research org agent code produces improvements on nanochat the fastest?"

On **continual learning**: Karpathy thinks current memory implementations are "crappy, first examples" that can be generalized via RL tools. Suspects humans do weight-based updates (mostly during sleep). More exotic approaches needed.

### Tesla FSD
- @aelluswamy RTing impressive FSD v14.2.2.5 clips — car anticipating collisions before the car in front, backing up proactively
- Robotaxi demos showing situational awareness improvement

### Levelsio on OpenClaw
Levelsio posted a detailed review of running OpenClaw for over a month — biggest value: "just the best LLM experience on Telegram now, better than the LLM apps." His girlfriend stopped using ChatGPT in favor of OpenClaw via Telegram. Notes autonomous push stuff isn't useful yet but "direction everything will be going."

---

## Earnings Watch

**Thursday after-hours (just reported):**
- **AVGO (Broadcom)**: Beat — $2.05 EPS vs $2.02 est., AI chip demand strong, +5.3% AH
- **MRVL (Marvell)**: Optimistic outlook, FY27 revenue near $11B, +14% AH
- **COST (Costco)**: Strong Q2 results but stock dipped, sell-the-news reaction

**Today:** No major reports expected (Jobs Day dominance).

**S&P 500 earnings season:** 14.2% growth rate with 96% reported — fifth consecutive quarter of double-digit growth.

---

## Notable Tweets

**@elonmusk** — RTing Tesla Diner LA (fried pickles now available lol). Quote-tweeting Dario Amodei's "Anthropic has much more in common with the Department of War" comment with a 🤔. Continuing his anti-Anthropic arc.

**@karpathy** — nanochat GPT-2 training down to 2 hours. Running AI agent research orgs. The future benchmark: how fast does your AI org produce research progress? Deep thread on continual learning and weight-based memory updates.

**@MR_Derivatives** — "Oil spiking hard. Ruh roh." TSLA "getting pretty tight" with chart. VIX humor. Futures snapshot showing red across the board.

**@levelsio** — Detailed OpenClaw review. Bullish on AI agents managing life via "intents" but says "we're just in the hype stage."

**@aelluswamy** — RTing impressive Tesla FSD clips, Robotaxi situational awareness demos.

**@realDonaldTrump** — Last tweets from Feb 28, mostly Melania documentary promotion (record-breaking opening). Quiet on the Iran situation (relative to X activity).

---

## News

1. **Iran conflict day 7** — Strait of Hormuz supply disruption fears pushing oil to highest since mid-2024. Crude +8% Thursday to ~$81/bbl.
2. **AI chip export rules** — US drafting global licensing requirements for advanced AI accelerator exports (GB300 etc.), hitting NVDA and ASML.
3. **Broadcom AI demand** — Strong quarter confirms enterprise AI infrastructure spending continues despite macro headwinds.
4. **Apple M5 Pro/Max** — 4x faster LLM processing, Neural Accelerator in every GPU core. Significant for local AI.
5. **OpenAI GPT-5.4** — Computer-use capabilities go mainstream. Agent-first AI is here.
6. **Spot Bitcoin ETFs** — $1.45B net inflows over 5 days, ending a 5-week $4B outflow streak.

---

## Outlook

**The setup:** Jobs report at 7:30 AM CT is THE event. Consensus is weak (50K) with noise from weather and strikes. Market is already fragile from the oil shock and Thursday's selloff.

**Bull case:** Weak jobs + cool wages = more room for Fed cuts, providing a floor. Crypto's rally and ETF inflows suggest risk appetite isn't dead. AVGO/MRVL earnings show AI spending is real.

**Bear case:** Hot wages + weak jobs = stagflation signal, compounded by $81 oil. New AI chip export rules could extend semi weakness. Middle East escalation has no clear off-ramp.

**Watch for:** Knee-jerk reaction at 8:30 AM ET, then recalibration. Fed speakers Daly and Hammack will be parsed for any oil/rate commentary. Oil remains the wildcard — if it crosses $85 Brent, things get ugly for equities.

**The vibe:** Cautious. A lot of crosscurrents today. Stay nimble.

---

*Next brief: Evening wrap after market close.*
