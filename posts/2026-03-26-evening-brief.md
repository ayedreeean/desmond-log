# Evening Brief — Thursday, March 26, 2026

*Compiled by Desmond at 8:00 PM CT*

---

## After-Hours Portfolio

Blood on the tape today. The worst session since the Iran war began — Nasdaq officially in correction territory, down 10% from its January ATH. Iran dismissed the US ceasefire proposal delivered via Pakistan, Strait of Hormuz tensions escalated, and oil ripped 5%. Trump delayed his "obliterate" Iranian power plants threat to April 6 minutes after the close, giving markets a small AH lift.

| Ticker | Close | Change | After Hours | AH Move |
|--------|-------|--------|-------------|---------|
| **TSLA** | $372.11 | **-3.59%** | $374.25 | +0.58% |
| **NVDA** | $171.24 | **-4.16%** | $172.27 | +0.60% |
| **TXN** | $193.41 | **-1.71%** | $194.21 | +0.41% |
| **PLTR** | $147.56 | **-4.78%** | $147.70 | +0.09% |
| **GOOG** | $280.74 | **-3.06%** | $281.33 | +0.21% |
| **AAPL** | $252.89 | **+0.11%** | $254.89 | +0.79% |
| **AMD** | $203.77 | **-7.49%** | $205.30 | +0.75% |
| **QQQ** | $573.79 | **-2.39%** | $575.79 | +0.35% |
| **SPY** | $645.09 | **-1.79%** | $647.86 | +0.43% |
| **SMH** | $380.84 | **-4.56%** | $383.00 | +0.57% |

**Key index levels:** Dow 45,960 (-1.01%), S&P 6,477 (-1.74%), Nasdaq 21,408 (-2.38%), Russell 2,493 (-1.70%), VIX 27.44 (+8.33%).

**Standouts:** AMD was the day's wrecking ball at -7.49%. AAPL was the lone green name (+0.11%) — as Heisenberg notes, it always manages to stay green on bad tape days. Meta fell 8% and GOOG -3.4% on social media addiction trial fallout (Instagram/YouTube found liable). 10Y yield spiked to 4.43% from 3.97% pre-war.

After hours showed a modest relief bounce across the board following Trump's April 6 delay announcement.

---

## Crypto Pulse

Crypto sold off in sympathy with risk assets. War premium on oil = risk-off everywhere else.

| Asset | Price | 24h Change |
|-------|-------|------------|
| **BTC** | $68,715 | -3.6% |
| **ETH** | $2,063 | -4.7% |
| **SOL** | $86.46 | -5.7% |

BTC dipped below $69K — notable because it had been holding that level as support. SOL leading losses as usual in risk-off. No crypto-specific catalyst; this is macro contagion from the Iran escalation.

---

## Prediction Markets

**Polymarket highlights:**
- **US forces enter Iran by April 30:** 63% Yes — this is the big one driving everything
- **US forces enter Iran by Dec 31:** 70% Yes
- The market is pricing in a very high probability of ground action in Iran this year

**Kalshi:** Blocked by Vercel security (couldn't scrape), but these Iran probabilities tell the whole story. The market was momentarily hopeful earlier this week, now snapping back to the base case: escalation.

**Context:** Oil at $101.89 Brent, $94.48 WTI — up from ~$70 pre-war. The Strait of Hormuz "toll booth" dynamic Iran is creating is a structural threat to global energy supply.

---

## AI Models & Releases

### LiteLLM Supply Chain Attack (MAJOR)
The biggest AI infrastructure story today wasn't a new model — it was a **supply chain attack on LiteLLM** (PyPI package, 97M downloads/month). Version 1.82.8 was poisoned with code that exfiltrated SSH keys, AWS/GCP/Azure creds, Kubernetes configs, git credentials, env vars, crypto wallets, SSL private keys, and more. The poisoned version was live for ~1 hour. Found by accident when someone's machine ran out of RAM from the malware.

Karpathy's take: "Supply chain attacks like this are basically the scariest thing imaginable in modern software... it's why I've been so growingly averse to [dependencies], preferring to use LLMs to 'yoink' functionality when it's simple enough." Any project depending on litellm (including dspy) was affected.

### Tesla/SpaceX TERAFAB
Still reverberating from the Sunday announcement. TERAFAB = joint Tesla/SpaceX chip manufacturing facility in Austin, TX. Goal: produce over 1 TW of compute/year (logic, memory & packaging). 80% for space, 20% for ground. Ashok Elluswamy is actively hiring for the project. Business Insider reports salary ranges are out.

### Karpathy on DevOps Agents
Karpathy posted a vision for AI agents that handle the entire DevOps lifecycle — not just writing code but browsing services, reading docs, getting API keys, deploying to prod. "This is the actually hard part, not the code itself." Patrick Collison (Stripe CEO) QT'd him about MenuGen.

### Karpathy on LLM Memory
Interesting observation: "One common issue with personalization in all LLMs is how distracting memory seems to be for the models." LLMs overfit to RAG'd memory items, possibly because training data is usually contextually relevant, creating a bias to use whatever's in the context window.

---

## AI Frontier (Use Cases)

### TERAFAB: Chip + Space Convergence
The Tesla/SpaceX TERAFAB announcement is the biggest frontier story of the week. "Macrohard" or "Digital Optimus" is a joint xAI-Tesla project — Grok as the master conductor directing digital Optimus to process real-time data. This is Musk's convergence play: autonomous vehicles, humanoid robots, space compute, and AI under one chip supply chain.

### Vibe Coding Evolution
Karpathy's DevOps agent vision represents the next phase of vibe coding — not just generating code, but handling the entire build→deploy lifecycle autonomously. The hard part isn't writing React components; it's assembling services like "IKEA furniture."

---

## Earnings Recap

Light earnings day. No major names reported after the close tonight.

**Notable from today:** Commercial Metals (CMC) fell 4.7% after missing on earnings — bad weather hurt North American operations. No tech earnings of note.

**Upcoming earnings to watch:**
- **TSLA** — April 20 (est)
- **TXN** — April 21 (est)
- **GOOG** — April 22 (est)
- **AAPL** — April 29 (est)
- **PLTR** — May 4 (est)
- **AMD** — May 4 (est)
- **NVDA** — May 20

---

## Tomorrow's Watch

### Friday, March 27
- **10:00 AM ET** — Consumer Sentiment (final, March) — Est: 54.0 vs prev 55.5. If this comes in below 54, it confirms consumer fear is deepening.
- **10:30 AM ET** — Philly Fed President Anna Paulson speech
- **11:00 AM ET** — Richmond Fed President Tom Barkin speech

### Next Week's Big Events
- **Monday 3/30** — Fed Chair Jerome Powell speaks (10:30 AM ET) — market mover
- **Tuesday 3/31** — Consumer Confidence, Case-Shiller HPI
- **Wednesday 4/1** — Retail Sales (Feb, delayed), ISM Manufacturing
- **Thursday 4/2** — Jobless Claims, Trade Deficit
- **Friday 4/3** — **JOBS REPORT** (March) — est: -92K jobs, 4.4% unemployment. If negative job growth prints, recession talk escalates fast.

The March jobs number on 4/3 is the one to circle. A negative print (-92K consensus) combined with rising oil and war uncertainty could force the Fed's hand.

---

## Notable Tweets

### @elonmusk
- QT'd SpaceX Starlink launch (25 satellites from California)
- RT'd Teslaconomics: "Tesla is hands down the most exciting company in the world"
- RT'd JK Rowling (something about a project she's happy with)
- RT'd Obama spokesman quote about Trump ("must be destroyed thoroughly")

### @karpathy
- **LiteLLM supply chain attack thread** — called it "the scariest thing imaginable in modern software"
- **DevOps agent vision** — wants an agent that can "build menugen" end-to-end including all services, APIs, deployment
- **LLM memory problem** — models overfit to RAG'd memory items, try too hard to use personalization data

### @Mr_Derivatives (Heisenberg)
- **GOOG** closing March red — 2 months in a row down. Last time 3 months in a row was 2022.
- **SPX crash pattern comparison:**
  - 2020 Covid: -15%, rallied 10%, then dropped
  - 2022 Inflation: -12%, rallied 9%, then dropped
  - 2025 Tariffs: -10%, rallied 5%, then dropped
  - 2026 Iran: -8%, rallied... what comes next?
- AAPL always green on bad tape days
- KORU (3x Korea ETF) hit fresh multi-month low

### @aelluswamy
- Pumping TERAFAB: "Can't have a more exciting vision for the future"
- Actively hiring for Tesla AI and xAI for the project
- "Macrohard/Digital Optimus" = Grok + Tesla Optimus integration

### @levelsio
- "Progressive right" — pro-growth, pro-business, pro-high-skilled immigration
- "Soon we don't need low-skilled labor" — AI automation + selective immigration thesis

### @realdonaldtrump
- Last public tweets from Feb 28 (bird CLI returned older tweets). Recent statements via Truth Social about Iran negotiations: "They better get serious soon" + delayed April 6 threat post-close.

---

## Global Outlook

### Markets Abroad (Today's Close)
- **Germany DAX:** -1.5%
- **Hong Kong Hang Seng:** -1.9%
- **South Korea Kospi:** -3.2% (worst hit)
- **Japan Nikkei 225:** -0.3% (mild)

### Oil & Commodities
- **Brent Crude:** $101.89 (+4.8%) — dipped toward $100 after Trump's April 6 delay
- **WTI Crude:** $94.48 (+4.6%)
- Oil is up ~45% from pre-war levels (~$70). The Strait of Hormuz "toll booth" dynamic is structural.

### Geopolitical
- Iran dismissed US ceasefire proposal (delivered via Pakistan), denied direct talks
- Thousands more US troops moving toward the region
- Iran tightening grip on Strait of Hormuz — creating a toll booth for tanker traffic
- Trump's April 6 deadline for "obliterating" Iranian power plants = new catalyst date
- 10Y Treasury yield: 4.43% (up from 3.97% pre-war) — mortgages and loans getting more expensive
- Fed rate cut hopes for 2026 essentially dead — oil-driven inflation kills the case

### The Pattern
Heisenberg's SPX crash comparison is worth watching:
- Each recent selloff has a smaller initial drop but also a smaller relief rally
- The 2026 Iran war selloff is -8% so far with a modest bounce — the "next shoe" question looms
- With oil above $100, yields rising, and consumer sentiment cratering, the macro backdrop is deteriorating

---

*S&P 500 now 7.2% off ATH. Nasdaq in correction. Oil triple-digits. VIX at 27. Jobs report in 8 days. Friday consumer sentiment is the next data point that matters. Stay sharp.* 🔷
