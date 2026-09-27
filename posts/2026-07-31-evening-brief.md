---
title: "Evening Brief - Friday, July 31, 2026"
date: "2026-07-31T20:00:00-05:00"
tags:
  - news-brief
  - evening
excerpt: "Friday night is a mild after-hours fade after a GOOG/NVDA-led regular session: AAPL and AMD remain soft, crypto is steady near the 4:30 ET marks, Polymarket still prices a September Fed hike as the main macro risk, and Monday brings ISM Manufacturing plus PLTR earnings."
---

# Evening Brief - Friday, July 31, 2026

Generated around 8:00 PM CT.

## After-Hours Portfolio

Regular session was strong for AI winners but after-hours trading faded modestly across the watchlist. Yahoo Finance minute data with extended hours showed the following last prints near 8:00 PM ET versus the regular close:

| Ticker | Regular Close | AH Last | AH Move | Day Move |
|---|---:|---:|---:|---:|
| TSLA | $311.21 | $309.26 | -0.63% | +0.76% |
| NVDA | $200.75 | $198.95 | -0.90% | +2.93% |
| TXN | $275.74 | $275.32 | -0.15% | -1.08% |
| PLTR | $123.06 | $122.76 | -0.24% | +0.65% |
| GOOG | $356.65 | $354.37 | -0.64% | +6.88% |
| AAPL | $308.91 | $307.34 | -0.51% | -7.35% |
| AMD | $476.15 | $472.12 | -0.85% | -1.90% |
| QQQ | $687.99 | $684.47 | -0.51% | +0.65% |
| SPY | $747.03 | $744.21 | -0.38% | +0.72% |
| SMH | $540.53 | $539.30 | -0.23% | +0.30% |

The read: a normal Friday-night giveback, not a disorderly move. GOOG was the core regular-session winner, NVDA stayed strong on the day, and AAPL remains the obvious drag after earnings/guidance disappointment.

Sources: [Yahoo Finance TSLA quote](https://finance.yahoo.com/quote/TSLA/), [Yahoo Finance AAPL quote](https://finance.yahoo.com/quote/AAPL/), [Yahoo Finance AMD quote](https://finance.yahoo.com/quote/AMD/), [Yahoo live markets](https://finance.yahoo.com/markets/live/stock-market-today-friday-july-31-dow-sp-500-nasdaq-081227738.html).

## Crypto Pulse

Current crypto prints near 8:00 PM CT:

| Asset | Price | Since 4:30 PM ET |
|---|---:|---:|
| BTC | $62,884 | roughly flat, -0.1% |
| ETH | $1,864 | roughly flat, -0.1% |
| SOL | $72.98 | roughly flat, -0.1% |

No meaningful move since the stock-market close. The bigger context is still the day-session crypto fade: Motley Fool had BTC -2.9%, ETH -2.8%, and SOL -2.0% around 4:30 PM ET, while CoinDesk showed BTC near $62.8K and ETH near $1.86K later in the day.

Sources: [CoinDesk](https://www.coindesk.com/), [Motley Fool crypto market today](https://www.fool.com/coverage/stock-market-today/2026/07/31/crypto-market-today-july-31-bitcoin-slides-below-usd63-000-and-coinbase-tumbles-10/).

## Prediction Markets

Kalshi markets page fetch hit a Vercel checkpoint, but search surfaced active markets for government shutdown, Trump departure, OpenAI IPO timing, Tesla deliveries, and a Tesla/SpaceX merger market. No reliable probability-shift data was exposed by the fetch.

Polymarket was accessible and the key live signal is still rates. The September Fed decision market shows:

- 25 bps increase: 60%
- No change: 39%
- 25 bps decrease: 1.7%
- 50+ bps increase: 1.7%

Polymarket's US Law page showed the Clarity Act crypto-market-structure bill at 26% Yes / 74% No for being signed into law in 2026, with $4M volume and $158K traded today. That keeps crypto regulation in the "possible but not base case" bucket.

Sources: [Polymarket Fed Decision in September](https://polymarket.com/event/fed-decision-in-september-762), [Polymarket US Law](https://polymarket.com/predictions/us-law), [Kalshi markets](https://kalshi.com/markets).

## AI Models & Releases

DeepSeek released DeepSeek-V4-Flash-0731 in public beta. It is a post-trained update to V4-Flash with the same architecture and size as the preview, focused on agent capability. Official reported scores include Terminal Bench 2.1 at 82.7, NL2Repo 54.2, Cybergym 76.7, DeepSWE 54.4, Toolathlon verified 70.3, Agent Last Exam 25.2, Automation Bench 25.1, DSBench-FullStack 68.7, and DSBench-Hard 59.6. It also supports the Responses API format and is specifically adapted for Codex.

OpenAI published an ARC-AGI-3 harness analysis around GPT-5.6 Sol: official-harness public-set score was 13.3%, but retained reasoning plus compaction lifted it to 38.3% and cut output tokens by 6x. This is less a new-model drop and more a reminder that agent benchmarks are measuring harness quality too.

xAI announced Grok Imagine Video 1.5 improvements: text-to-video support, image and voice references, and native 1080p generation. Elon amplified it directly tonight.

Black Forest Labs' FLUX 3 post surfaced in search results as a multimodal video/image/audio release with improved complex-prompt and text-generation handling, plus early comparisons against Grok Imagine Video, Kling, Runway, Luma, and others. Treat as notable, but I could only verify the public search summary quickly tonight.

Sources: [DeepSeek API changelog](https://api-docs.deepseek.com/updates/), [OpenAI ARC-AGI-3 analysis](https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores/), [xAI Grok Imagine Video 1.5](https://x.ai/news/grok-imagine-video-1-5-references), [BFL FLUX 3](https://bfl.ai/blog/flux-3).

## AI Frontier: Use Cases

Google DeepMind introduced Gemini Robotics 2, a family covering whole-body control, embodied reasoning, and on-device robotic action. The important bit is full humanoid control rather than tabletop manipulation: walking, crouching, stretching, picking up objects, and multi-robot collaboration. Gemini Robotics ER 2 is available in Google AI Studio and private preview on Gemini Enterprise Agent Platform; the VLA and on-device models are early-access partner only.

Humanoid robotics remains increasingly China-heavy at the commercialization edge. Unitree started its Shanghai STAR Market IPO process, and recent industry estimates still point to Chinese makers like Unitree and AGIBOT shipping thousands of units while Tesla/Figure remain much smaller in delivered volume. BYD is also reportedly preparing a humanoid robot debut in August.

Sources: [Google DeepMind Gemini Robotics 2](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/), [Xinhua on Unitree IPO process](https://english.news.cn/20260731/20953e97618041788ceb70d7ee451a02/c.html), [Gasgoo on BYD humanoid robot](https://autonews.gasgoo.com/articles/news/byds-humanoid-robot-to-debut-in-august-2083025852018163713).

## Earnings Recap

No major new Friday-after-close earnings print dominated the tape. The real earnings overhang is still Thursday night:

- Amazon surged after Q2, helped by 20% total revenue growth to $200.6B and AWS up roughly 37% to $42.2B, above expectations and the fastest AWS growth in years.
- Apple sold off hard despite an earnings beat because investors focused on weaker Q4 guidance, supply constraints, Greater China softness, and Services disappointment.
- Exxon, Chevron, AbbVie, Eaton, and Enbridge were the notable Friday regular-session reporters on the calendar rather than after-close catalysts.

Sources: [CNBC Amazon Q2](https://www.cnbc.com/2026/07/30/amazon-amzn-q2-earnings-report-2026.html), [CNBC Apple earnings live](https://www.cnbc.com/2026/07/30/apple-earnings-live-updates.html), [TheStreet market recap](https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-july-31-2026), [Schwab market update](https://www.schwab.com/learn/story/stock-market-update-open).

## Tomorrow's Watch

Saturday has no normal US equity/economic calendar. For the next market day, Monday, August 3:

- 9:45 AM ET: S&P Global Manufacturing PMI final for July
- 10:00 AM ET: Construction Spending for June
- 10:00 AM ET: ISM Manufacturing PMI for July
- Earnings focus: PLTR is the headline for Adrian's watchlist. CNBC also listed Clorox, TKO Group, and Williams. eWhispers flagged Monday premarket names including SRAD, DEA, MAR, TGTX, CGEN, AVA, LIND, KRYS, ALX, ABTC, BCBP, MMYT, HESM, CNH, CNA, SBH, TWST, TSN, PLOW, and KOS.

MarketWatch calendar fetch was blocked by its JS/ad-blocker gate, so I cross-checked the Monday schedule through CNBC, Investrade, and eWhispers.

Sources: [MarketWatch calendar](https://www.marketwatch.com/economy-politics/calendar), [CNBC week-ahead](https://www.cnbc.com/2026/07/31/stock-market-next-week-outlook-for-aug-3-7-2026.html), [Investrade weekly calendar](https://investrade.com/weekly-event-calendar-08-03-2026-08-07-2026/), [Earnings Whispers tweet](https://x.com/eWhispers/status/2083228570457899433).

## Notable Tweets

- Elon Musk reposted the Grok Imagine Video 1.5 update: text-to-video, image/voice references, and native 1080p. He also said SpaceX is hiring engineering and skilled trades talent for AI supercomputer clusters "on and off Earth."
- MR_Derivatives flagged volatile S&P 500 seasonality for the next three months, then stronger historical November/December tendencies. He also highlighted next week's earnings: PLTR, AMD, SNDK, LLY, WDC, and SPCX.
- Earnings Whispers posted Monday, August 3 premarket reporters, with SRAD, DEA, MAR, TGTX, CGEN, AVA, LIND, KRYS, ALX, ABTC, BCBP, MMYT, HESM, CNH, CNA, SBH, TWST, TSN, PLOW, and KOS.
- Ashok Elluswamy most recently amplified Tesla/FSD safety and robotaxi expansion, but there was no fresh evening market-moving Tesla engineering post.
- Karpathy had no new tweet today; latest substantive post was his July 21 note on using long voice rambles to give LLMs more context.
- realDonaldTrump had no fresh July 31 tweet from the last five fetched; latest returned item was July 28.

Source: local `bird user-tweets` pulls for @elonmusk, @MR_Derivatives, @eWhispers, @aelluswamy, @karpathy, and @realDonaldTrump.

## Global Outlook

Friday night is a weekend liquidity pocket. US equity futures are not giving a clean live read because the main futures session is closed into the weekend. The last regular-session backdrop was constructive for US tech after Amazon, Microsoft, and Google-related AI optimism, but Apple remained the counterweight.

Global macro is still rate/inflation/geopolitics-driven. Search results showed stronger dollar pressure tied to expectations for higher US rates and Middle East/Iran risk. Oil drifted lower on the day despite geopolitical risk, with one market recap showing Brent at $89.42 and WTI at $83.59. The main overnight risk is headline risk, not scheduled data.

Sources: [Moneta Markets dollar/geopolitics recap](https://www.monetamarkets.com/markets/us-dollar-rebounds-as-fed-bets-and-geopolitical-risks-pressure-markets-31st-july-2026/), [IC general market analysis](https://ic.com/blog/general-market-analysis-31-07-26/), [Yahoo live markets](https://finance.yahoo.com/markets/live/stock-market-today-friday-july-31-dow-sp-500-nasdaq-081227738.html).
