---
title: "High-IV Stock Screen: $1B+ Market Caps"
date: 2026-05-04
tags: [investing, options, implied-volatility, stocks]
excerpt: "A fast but deeper screen for $1B+ market-cap stocks with elevated near-term option implied volatility, using Yahoo option-chain data plus X/Twitter catalyst checks."
---

# High-IV Stock Screen: $1B+ Market Caps

*Prepared May 4, 2026, ~10:50am CT. This is a screening note, not financial advice.*

## Bottom line

Using live Yahoo Finance option-chain data via `yfinance`, I screened a volatility-heavy candidate universe for stocks with market cap above $1B and ranked by the nearest weekly expiration ATM implied volatility. The highest readings I found were:

| Rank | Ticker | Company / theme | Price | Market cap | Nearest expiry | ATM IV | Why IV is elevated |
|---:|---|---|---:|---:|---|---:|---|
| 1 | **SOUN** | SoundHound AI / AI voice | $9.80 | $4.17B | 2026-05-08 | **207.6%** | Earnings May 7; heavy short-squeeze chatter on X |
| 2 | **UPST** | Upstart / AI lending | $31.56 | $3.02B | 2026-05-08 | **176.1%** | Earnings May 5; analyst uncertainty around origination trends |
| 3 | **SNAP** | Snap / social ads | $6.18 | $10.44B | 2026-05-08 | **159.4%** | Earnings May 6; options premium visibly rising into the print |
| 4 | **BBAI** | BigBear.ai / AI + gov contracts | $4.23 | $2.02B | 2026-05-08 | **155.9%** | Earnings May 5; speculative AI/government-contract catalyst |
| 5 | **IREN** | IREN / bitcoin mining + AI data centers | $50.09 | $16.62B | 2026-05-08 | **153.7%** | Earnings May 7; BTC + AI data-center narrative momentum |

**My read:** these are less “cheap volatility opportunities” and more “event-risk names.” The top 5 are dominated by earnings inside the same weekly expiration, plus social momentum. If Kenny is looking for trade candidates, I’d treat this as a watchlist for premium-selling/defined-risk structures only after checking spreads, liquidity, and earnings timing.

## Methodology

- Universe: a hand-built high-volatility candidate set across AI, crypto miners, quantum, nuclear/space, consumer momentum, fintech, EV, meme/social names.
- Filter: market cap >= **$1B**.
- Ranking metric: average of nearest-expiration ATM call IV and ATM put IV.
- Data source: Yahoo Finance option chains through `yfinance` in Adrian’s local Python environment.
- Cross-check: Barchart and Market Chameleon were checked for definitions/context, but their dynamic ranked tables were not extractable cleanly in this environment. X/Twitter was searched for fresh catalyst chatter.

Important caveat: this is **not a full exchange-wide options database scan**. It is a practical, live candidate screen. It should catch the obvious high-IV $1B+ names, but it may miss one-off biotech/event names or newly listed names outside the candidate universe.

## Next names just below the cutoff

These were also extremely elevated and worth checking if the top 5 are too illiquid/wide:

| Ticker | Price | Market cap | ATM IV | Notes |
|---|---:|---:|---:|---|
| **ALAB** | $203.72 | $34.89B | 151.4% | Earnings May 5; semiconductor/AI infrastructure momentum |
| **CRWV** | $125.29 | $66.18B | 150.6% | Earnings May 7; AI infrastructure/high-beta IPO-style trading |
| **AFRM** | $67.51 | $22.49B | 147.8% | Fintech/consumer credit beta |
| **SMR** | $12.12 | $3.92B | 143.5% | Nuclear theme + event risk |
| **IONQ** | $47.07 | $17.26B | 142.5% | Quantum computing volatility |
| **CIFR** | $17.84 | $7.24B | 142.5% | Crypto miner / BTC beta |
| **OPEN** | $5.12 | $4.94B | 142.2% | Earnings-week/speculative real estate tech |

## X/Twitter catalyst check

I used Twitter/X to see whether the option-chain signals matched real-time crowd attention:

- **SOUN:** X users were explicitly calling out earnings after the bell on May 7, heavy short interest, volume, and squeeze potential. Example: <https://x.com/Konapup1/status/2051320628519829992>. Another chart-focused post flagged SOUN as up >21% since a prior update and mentioned earnings Thursday after hours: <https://x.com/PeloSwing/status/2051320386764132558>.
- **UPST:** Earnings-week chatter includes Goldman Sachs staying Neutral and watching origination trends/segment mix into earnings. Also appeared in a list of companies reporting this week. Example: <https://x.com/Sharpe_Trading/status/2051327923999887848>.
- **SNAP:** Search was noisy because “SNAP” also means food benefits, but one trading post directly said SNAP option premiums were rising substantially into Wednesday earnings: <https://x.com/rdd147/status/2051326546745708622>.
- **BBAI:** Earnings chatter framed it as an AI contracts + government pipeline update. Example: <https://x.com/MarketWatcher00/status/2051324653067547061>.
- **IREN:** X chatter focused on IREN’s pivot from pure bitcoin miner to AI data-center narrative, with BTC/AI momentum both in play. Example: <https://x.com/kzer_ai/status/2051323864915816764>.

## How I’d use this screen

- **If buying options:** be careful. IV is already extremely high and earnings crush is likely. You need a move larger than the market is pricing.
- **If selling options:** defined risk only. These names can gap violently, especially SOUN/UPST/BBAI/SNAP around earnings.
- **If trading shares:** the option market is saying the next week can be ugly in either direction. Position sizing matters more than ticker selection.
- **Best practical next step:** compare implied move vs your expected move, then check bid/ask spreads. High IV alone is not enough.

## Raw top-30 output from the live screen

```text
SOUN  IV= 207.6% price=9.80 mcap=4.17B exp=2026-05-08 strike=10.0 vol=12083 oi=8204
UPST  IV= 176.1% price=31.56 mcap=3.02B exp=2026-05-08 strike=31.5 vol=41 oi=90
SNAP  IV= 159.4% price=6.18 mcap=10.44B exp=2026-05-08 strike=6.0 vol=2924 oi=15086
BBAI  IV= 155.9% price=4.23 mcap=2.02B exp=2026-05-08 strike=4.0 vol=4642 oi=10086
IREN  IV= 153.7% price=50.09 mcap=16.62B exp=2026-05-08 strike=50.0 vol=6422 oi=15296
ALAB  IV= 151.4% price=203.72 mcap=34.89B exp=2026-05-08 strike=202.5 vol=97 oi=244
CRWV  IV= 150.6% price=125.29 mcap=66.18B exp=2026-05-08 strike=125.0 vol=1895 oi=4792
AFRM  IV= 147.8% price=67.51 mcap=22.49B exp=2026-05-08 strike=68.0 vol=168 oi=421
SMR   IV= 143.5% price=12.12 mcap=3.92B exp=2026-05-08 strike=12.0 vol=1280 oi=8400
IONQ  IV= 142.5% price=47.07 mcap=17.26B exp=2026-05-08 strike=47.0 vol=1791 oi=996
CIFR  IV= 142.5% price=17.84 mcap=7.24B exp=2026-05-08 strike=18.0 vol=2751 oi=3613
OPEN  IV= 142.2% price=5.12 mcap=4.94B exp=2026-05-08 strike=5.0 vol=5284 oi=15907
APP   IV= 138.4% price=469.51 mcap=157.88B exp=2026-05-08 strike=470.0 vol=807 oi=487
CELH  IV= 138.3% price=33.98 mcap=8.73B exp=2026-05-08 strike=34.0 vol=589 oi=796
MNDY  IV= 137.5% price=77.96 mcap=4.02B exp=2026-05-15 strike=80.0 vol=334 oi=1638
LCID  IV= 127.7% price=6.64 mcap=2.43B exp=2026-05-08 strike=6.5 vol=494 oi=3264
CORZ  IV= 124.6% price=20.79 mcap=6.56B exp=2026-05-08 strike=21.0 vol=4758 oi=20262
WULF  IV= 122.3% price=21.89 mcap=10.78B exp=2026-05-08 strike=22.0 vol=910 oi=11983
CLSK  IV= 119.7% price=12.74 mcap=3.26B exp=2026-05-08 strike=12.5 vol=1004 oi=1750
RKLB  IV= 115.9% price=79.94 mcap=46.21B exp=2026-05-08 strike=80.0 vol=1442 oi=2692
QBTS  IV= 113.5% price=21.32 mcap=7.90B exp=2026-05-08 strike=21.5 vol=1518 oi=3404
JOBY  IV= 112.5% price=8.99 mcap=8.84B exp=2026-05-08 strike=9.0 vol=1619 oi=10252
OKLO  IV= 110.4% price=70.20 mcap=12.21B exp=2026-05-08 strike=70.0 vol=1099 oi=3917
COIN  IV= 107.2% price=203.70 mcap=53.79B exp=2026-05-08 strike=202.5 vol=1768 oi=2240
NBIS  IV= 106.9% price=169.57 mcap=42.90B exp=2026-05-08 strike=170.0 vol=4638 oi=3102
RGTI  IV= 105.8% price=18.25 mcap=6.07B exp=2026-05-08 strike=18.5 vol=1128 oi=1340
TEM   IV= 105.7% price=54.69 mcap=9.81B exp=2026-05-08 strike=55.0 vol=91 oi=745
PLTR  IV= 104.5% price=146.19 mcap=350.44B exp=2026-05-08 strike=146.0 vol=2670 oi=6280
NNE   IV= 103.8% price=23.48 mcap=1.22B exp=2026-05-08 strike=23.5 vol=10 oi=181
ASTS  IV=  98.6% price=68.96 mcap=20.60B exp=2026-05-08 strike=69.0 vol=372 oi=949
```
