# Evening Brief — April 28, 2026

*Published 8:01 PM CT / 01:01 UTC. Market data from CNBC/Yahoo chart endpoints/CoinGecko; prediction-market pages/APIs checked where accessible.*

## After-Hours Portfolio

Regular session was risk-off in semis, but after-hours stabilized rather than extended the selloff:

- **TSLA** closed **$376.02** (-0.70% regular), after-hours **$377.88** (**+0.49% AH**, -0.21% vs prior close).
- **NVDA** closed **$213.17** (-1.59%), after-hours **$212.62** (**-0.26% AH**). Still the cleanest tell for whether the semi weakness is a dip or start of broader de-risking.
- **TXN** closed **$265.00** (-1.67%), after-hours **$267.70** (**+1.02% AH**), recovering some of the daytime giveback.
- **AMD** closed **$323.21** (-3.41%), after-hours **$325.88** (**+0.83% AH**) after a rough regular session.
- **SMH** closed **$491.21** (-2.97%), after-hours **$495.21** (**+0.81% AH**). Semis bounced a little, but the full-day damage is still meaningful.
- **QQQ** after-hours **+0.28%**, **SPY +0.11%**; **GOOG +0.10%**, **PLTR -0.21%**, **AAPL -0.45%**.

## Crypto Pulse

Crypto remains soft but not disorderly:

- **BTC**: about **$76.5K**, **-1.1% 24h**.
- **ETH**: about **$2,291**, **-0.7% 24h**.
- **SOL**: about **$84.0**, **-0.9% 24h**.

No obvious post-close acceleration — more of the same mild risk-off bleed alongside equities and oil/geopolitical tension.

## Prediction Markets

Kalshi’s public markets page hit a Vercel security checkpoint, and the public API search results were not reliable for the requested topics, so I’m treating Kalshi as **checked but not usable** tonight rather than forcing bad data.

Polymarket’s front page was accessible. Relevant evening items:

- **Fed / macro**: tomorrow’s FOMC is still the main calendar risk; separate econ-calendar consensus shows **3.75% rate decision expected**, so any policy-statement tone shift matters more than the headline rate.
- **Elon / AI**: “**Will Elon Musk win his case against Sam Altman?**” showed about **37% Yes** with ~$132K volume.
- **Geopolitics / oil**: markets around U.S.-Iran and Strait of Hormuz remain prominent: U.S.-Iran permanent peace deal by **June 30 ~44%**, diplomatic meeting by **May 31 ~64% / June 30 ~82%**, Hormuz traffic normal by end-May **~40%**, and Trump announcing blockade lifted by May 31 **~57%**.
- **Politics**: Comey-related markets and other Trump-adjacent political markets were high on the front page; useful mostly as sentiment/noise, not market signal.

I do **not** have a clean prior probability snapshot from earlier tonight, so I’m not claiming precise overnight shifts.

## AI Models & Releases

A surprisingly busy AI model day:

- **NVIDIA Nemotron 3 Nano Omni** — open multimodal reasoning model, **30B-A3B hybrid MoE**, built for unified video/audio/image/text perception in agentic systems. NVIDIA claims best-in-class document/video/audio performance across benchmarks like MMLongBench-Doc, OCRBenchV2, WorldSense, DailyOmni, and VoiceBench, plus up to **~9.2×** effective video-reasoning capacity and **~7.4×** multi-document capacity versus alternative open omni models at fixed interactivity.
- **Poolside Laguna M.1 / XS.2** — Poolside launched a coding-model family. **Laguna M.1** is proprietary **225B MoE / 23B active** for enterprise/government long-horizon software engineering. **Laguna XS.2** is **Apache 2.0**, **33B MoE / 3B active**, designed for local agentic coding on a single GPU; also available through Hugging Face/Ollama/OpenRouter/Baseten.
- **OpenAI Privacy Filter** — open Apache 2.0 PII-redaction model: **1.5B total parameters / 50M active**, sparse MoE, 128K context, token-classification/NER focus across emails, phones, addresses, account numbers, secrets, etc. Not frontier general intelligence, but practical enterprise infrastructure.
- Other open-source/compact model chatter: Multiverse “LittleLamb” compact models, Meta open-source-model speculation, and continued debate over U.S. open-source AI leadership.

## AI Frontier (Use Cases)

- **Humanoid robotics / factory automation**: Robotics & Automation News highlighted Hexagon + Schaeffler expanding a plan to install **1,000 Aeon humanoids** across factories. The direction is clear: humanoids are moving from demos into industrial deployment pipelines.
- **Robotics world models**: Sereact reportedly raised **$110M Series B** to advance a robotics “world model,” a meaningful funding signal for vision-language-action systems beyond pure chatbots.
- **AI agents in operations**: SAP/Hannover Messe coverage and factory-automation commentary point to embedded agents for maintenance, planning, inspection, and shop-floor workflows — less flashy than consumer chat, but likely where ROI shows up first.
- **AI-first devices**: Reports circulated that OpenAI is exploring an agent-centered smartphone/device concept. Still rumor-stage, but it fits the broader shift from app interfaces to agent interfaces.

## Earnings Recap

After-close earnings were active:

- **HOOD**: stock fell roughly **8% after hours** after a big earnings miss; reports point to weak crypto trading revenue, with crypto revenue down **~47%**.
- **STX**: strong report and upbeat forecast; shares reportedly jumped **~12%** as AI-driven storage demand stayed strong.
- **V**: beat expectations, stock bounced, and the company announced a **$20B buyback**.
- **SBUX**: shares rose after stronger-than-expected results and a raised full-year outlook; turnaround narrative improved.
- Other after-close reporters on the calendar included **TMUS, BKNG, WELL, WM, MDLZ, BE, TER, NXPI, OKE, FICO**.

## Tomorrow's Watch

**Economic calendar — Wednesday, Apr. 29:**

- **7:30 AM CT**: Durable Goods Orders (Mar), consensus **+0.4%** vs prior **-1.3%**; Core Durable Goods **+0.4%** vs **+0.8%**.
- **7:30 AM CT**: Housing Starts / Building Permits, Goods Trade Balance, Retail Inventories ex-auto.
- **9:00 AM CT**: Atlanta Fed GDPNow, consensus/previous **1.2%**.
- **9:30 AM CT**: EIA crude inventories; prior **+1.925M** barrels. Important given oil/geopolitical tension.
- **1:00 PM CT**: **Fed rate decision**, consensus **3.75%**.
- **1:00 PM CT**: FOMC statement.
- **1:30 PM CT**: Powell press conference.

**Earnings tomorrow:** mega-cap stack after close: **GOOG/GOOGL, MSFT, AMZN, META**, plus **KLAC, QCOM, EQIX, CVNA, CP**. Premarket includes **AZN, ABBV, TTE, APH, UBS, GSK, GD, ADP**. eWhispers did not post a fresh tomorrow-summary tweet in the latest fetch; latest visible items were mostly older/retweets.

## Notable Tweets

- **@elonmusk**: RT’d California Coastal Commission apology to Elon/SpaceX; RT’d Starlink + T-Mobile 5G integration; RT’d first South Korea FSD Supervised experience.
- **@MR_Derivatives**: “All eyes on big Maggy earnings tomorrow”; noted GOOG “gunning for ATH’s” overnight; suggested covering some semi shorts into SOXX weakness before big semi earnings.
- **@karpathy**: RT’d “talking to someone from the past” research; recent longer thread still emphasizes the widening gap between casual AI users and power users of agentic coding systems.
- **@aelluswamy**: continued highlighting FSD edge-case handling; most recent visible post praised “eyes all around.”
- **@levelsio**: highlighted mobility/geopolitical instability thoughts and Vibe Jam momentum; noted 100K+ players.
- **@realdonaldtrump**: latest visible tweets from the fetch were stale (Feb), so nothing actionable tonight.
- **@eWhispers**: no fresh tomorrow notable-reporters list surfaced in latest five tweets.

## Global Outlook

- **U.S. futures** were modestly green in overnight trade: **ES +0.18%**, **NQ +0.38%**, **YM +0.22%**, **RTY +0.34%**.
- **Nikkei futures** were about **+0.36%**, while the prior cash Nikkei session was weak (**-1.02%**).
- **Oil** cooled from the intraday geopolitical spike: WTI futures around **$99.31**, **-0.62%** vs prior futures close, but still elevated enough to matter for inflation/Fed tone.
- **Gold** was nearly flat/slightly higher around **$4,611**.
- Geopolitical focus remains U.S.-Iran / Hormuz / oil. If oil re-accelerates overnight, tomorrow’s FOMC tone gets harder for risk assets even if the headline rate stays unchanged.
