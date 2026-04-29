# Market Close Brief — April 29, 2026

*Generated: 3:15 PM CT | Wednesday, April 29, 2026*

---

## Portfolio Scorecard

| Ticker | Close | Day | Volume | Read-through |
|---|---:|---:|---:|---|
| **TSLA** | **$372.80** | **-0.86%** | 43.2M | Slipped but held the $370 intraday area; the stock is consolidating while Elon/FSD/Cybercab chatter stays constructive. |
| **NVDA** | **$209.25** | **-1.84%** | 114.1M | Red despite a stronger SMH close; high volume and a lower high after yesterday’s strength. |
| **TXN** | **$269.22** | **+1.59%** | 7.8M | Solid bounce after yesterday’s analog/semi selloff; still below the morning high but materially better tape. |
| **PLTR** | **$137.97** | **-2.27%** | 32.1M | Worst core software name today; high-beta AI/software cooled even as QQQ finished green. |
| **GOOG** | **$347.31** | **-0.05%** | 19.4M | Flat into earnings; intraday pushed above $353 but faded back to unchanged. |
| **AAPL** | **$270.17** | **-0.20%** | 24.1M | Quiet defensive mega-cap day; no leadership, no real damage. |
| **AMD** | **$337.11** | **+4.30%** | 43.2M | Best core holding; strong reversal from yesterday’s hit and carried the semi rebound. |

**Tape read:** semis repaired some of Tuesday’s damage, led by AMD and SMH, but NVDA lagged. QQQ beat SPY while several mega-caps were flat-to-red ahead of the post-close Big Tech earnings cluster.

## Crypto Pulse

| Asset | Price | 24h change | Notes |
|---|---:|---:|---|
| **BTC** | **$75,538** | **-1.06%** | Softer risk read; still above $75K but no confirmation of tech-led risk-on. |
| **ETH** | **$2,233.74** | **-2.85%** | Underperformed BTC; broad crypto tone is defensive. |
| **SOL** | **$82.32** | **-1.86%** | Weak but orderly; no panic, just risk appetite fading. |

## Prediction Markets

**Kalshi:** `web_fetch` hit a Vercel security checkpoint on `kalshi.com/markets`, and the unauthenticated public API search returned noisy/unrelated sports-style multi-leg markets. I’m not treating that as reliable market data.

**Polymarket:** homepage/category fetch was accessible. Clean intraday probability deltas were not exposed, but the highest-volume relevant themes were clear:

- **Fed:** April Fed no-change traded essentially resolved: **~99.95% Yes** on “no change,” with >$11M 24h volume in the fetched Gamma API snapshot. Increase/decrease contracts were effectively **0.05% Yes**.
- **Geopolitics / oil risk:** U.S.–Iran ceasefire/extension markets dominated homepage volume; one fetched market showed >$100M cumulative volume and near-zero odds on an already-expired April 22 extension framing.
- **Big Tech earnings:** Polymarket displayed META quarterly EPS beat at **~100%** in the page snapshot; the broader earnings cluster was a top theme into the close.
- **Crypto:** short-window BTC direction markets were live on the homepage; these are trading products rather than investable signal, but they confirm active crypto attention while spot crypto was red.
- **Trump / politics / AI / Elon:** homepage tags were active, but I did not see a clean, high-confidence TSLA/Elon/AI-policy intraday mover from the fetched public view.

**Caveat:** prediction-market data here is a directional snapshot, not an audited probability-change tape.

## Indices

| ETF | Close | Day | Volume | Read-through |
|---|---:|---:|---:|---|
| **QQQ** | **$661.57** | **+0.61%** | 27.4M | Growth finished green ahead of mega-cap earnings; stronger than SPY. |
| **SPY** | **$711.58** | **-0.02%** | 35.3M | Flat close after Fed day; broad market waited for earnings guidance. |
| **SMH** | **$499.58** | **+1.70%** | 5.8M | Semi ETF bounced hard from yesterday’s pain, but NVDA did not participate. |

## AI Models & Releases

- **NVIDIA Nemotron 3 Nano Omni:** open multimodal model for text/images/video/audio. Reported as **30B total / ~3B active MoE**, Mamba-Transformer hybrid, up to **256K context**, C-RADIOv4 vision encoder and Parakeet-TDT audio encoder. Notable because NVIDIA released weights plus parts of training data/pipelines/RL recipes; benchmarks cited strong OCR/document/video/audio/GUI-agent gains, including OSWorld rising from **11.1 → 47.4** vs the prior Nano model and up to **9× throughput** versus Qwen3-Omni at similar interactivity.
- **Qwen FlashQLA:** Qwen team released a MIT-licensed linear-attention kernel library for GDN attention in Qwen3.5/Qwen3.6-style hybrid architectures. Not a model release, but important infrastructure: reported **2–3× forward-pass speedup** on NVIDIA Hopper for long-context linear attention.
- **Mistral Workflows:** public-preview orchestration layer for enterprise AI processes: stateful execution, human approval checkpoints, retries/rate limits/tracing, built on Temporal. More “agent production infrastructure” than base-model frontier.
- **IBM Bob:** IBM launched its AI-powered software development platform broadly, with multi-model routing across Granite, Claude, Mistral, and smaller distilled models plus human checkpoints. IBM says internal teams saved up to **70%** on selected tasks / roughly **10 hours per week**.
- **Closed-source frontier:** no fresh flagship release surfaced today from OpenAI, Anthropic, Google, or Meta. OpenAI’s notable item was cybersecurity/governance messaging, not a new model.

## AI Frontier (Use Cases)

- **Enterprise agents are getting guardrails:** IBM Bob and Mistral Workflows both point to the same theme — companies want agents, but with checkpoints, auditability, rollback, and durable orchestration.
- **Robotics / physical AI:** fresh news flow included Accenture + General Robotics on task-flexible robots and China deploying thousands of robot dogs for power-grid patrol/inspection. The use-case frontier is moving from demo humanoids toward inspection, security, manufacturing, and military/autonomy deployments.
- **Defense AI:** Scout AI reportedly raised **$100M** to build an “AI brain” for autonomous warfare. Important frontier signal, but also the most ethically fraught lane.
- **World/action models:** NVIDIA’s Nemotron release is directly relevant to computer-use agents, document/video/audio analysis, and GUI action — less flashy than robot videos, but very practical for agentic workflows.
- **Commercial deployment:** JPMorgan AI budget coverage and OpenObserve’s AI-native SRE agent announcement continue the “AI in operations” trend: observability, coding, compliance, and workflow automation are where budgets are showing up.

## Winners & Losers

**Winners**

- **AMD +4.30%** — cleanest core rebound after yesterday’s semi damage.
- **SMH +1.70%** — sector bounce says Tuesday’s selloff did not turn into broad semi liquidation.
- **TXN +1.59%** — analog recovered part of yesterday’s loss.
- **QQQ +0.61%** — growth outperformed SPY into earnings.

**Losers**

- **PLTR -2.27%** — high-beta AI/software cooled.
- **NVDA -1.84%** — red on heavy volume while the ETF rose; relative weakness worth watching.
- **TSLA -0.86%** — not ugly, but still could not turn FSD/Cybercab narrative into price leadership.
- **Crypto beta** — ETH -2.85%, SOL -1.86%, BTC -1.06%.

## Notable Tweets

- **Elon Musk:** posted “This is how an economy actually works,” amplified Cybertruck/robotaxi commentary, and highlighted SpaceX/Falcon Heavy/Raptor 3 content. No fresh market-moving Tesla operational disclosure in the pull.
- **Mr. Derivatives:** called out post-close Big Tech action: **MSFT green, GOOG green, META red, AMZN red** in the first few minutes after reports; also joked about Powell and flagged “more ATHs in after-hours.”
- **levelsio:** highlighted Stripe Sessions / Stripe Treasury enthusiasm and indie hacker presence at Stripe’s keynote.
- **Karpathy:** latest pull was mostly older but still relevant: he continues emphasizing the gap between casual AI users and professional frontier coding-agent users.
- **Ashok Elluswamy:** recent posts focused on FSD edge cases — shoulder avoidance, trailer negotiation, construction handling, and Cybercab production at Giga Texas.
- **Trump:** fetched account output was stale, with no fresh April 29 market-moving post in the pull.
- **Earnings Whispers:** latest accessible pull was sparse/stale; no clean after-hours earnings card surfaced from the account.

## Earnings & Data

- **Fed:** the Fed left rates unchanged; stocks ended mixed/flat-to-green depending on index, with the market more focused on Powell tone and mega-cap earnings than the rate decision itself.
- **Big Tech earnings:** GOOG/GOOGL, MSFT, META, AMZN, and QCOM were the key after-close reporters/watchlist names. Early social tape: MSFT/GOOG green, META/AMZN red, but treat that as preliminary until full prints/guides settle.
- **Market summary:** Reuters headline sweep: Wall Street ended mixed after the Fed decision with big tech earnings on tap. That matches the ETF read: SPY flat, QQQ green, semis rebounding.
- **AI/security:** OpenAI posted “Cybersecurity in the Intelligence Age,” while CIS extended security controls to AI agents/MCP access — security/governance remained a major AI theme.

## After-Hours Watch

- **GOOG/GOOGL + MSFT:** most important for tomorrow’s QQQ direction; early social read was green.
- **META + AMZN:** early social read was red; guidance and AI capex commentary matter more than headline EPS.
- **NVDA relative weakness:** if semis stay green but NVDA keeps lagging, that is a subtle warning for crowded AI leadership.
- **AMD follow-through:** today’s +4.3% needs confirmation; it is the cleanest bounce setup in Adrian’s core watchlist.
- **Crypto:** BTC holding $75K is the near-term line; ETH underperformance is the risk-off tell.
