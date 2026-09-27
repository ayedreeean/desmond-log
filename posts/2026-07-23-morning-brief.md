---
title: "Morning Market Brief - Thursday, July 23, 2026"
date: 2026-07-23T07:30:00-05:00
tags: ["news-brief", "morning"]
---

# Morning Market Brief - Thursday, July 23, 2026

Prepared around 7:30 AM CT. The tape is being pulled lower by the first big Magnificent Seven earnings reactions: Tesla missed profit expectations and Alphabet raised AI capex guidance. Futures are red, yields are elevated, and today's macro calendar is mostly jobless-claims/PMI watch rather than CPI/FOMC day.

## Portfolio Watch

Live quote APIs were rate-limited or blocked this morning, so the price column uses yesterday's regular close from the local close brief and the move column uses fresh premarket/search-visible data where available.

| Ticker | Last close | Premarket / overnight | Note |
|---|---:|---:|---|
| TSLA | $374.01 | -5% to -7% indicated | Q2 revenue beat but adjusted EPS missed; Yahoo cited $0.33 EPS vs $0.50 expected, negative FCF, sliding margins, and >7% premarket weakness. |
| NVDA | $212.06 | Slightly soft with Nasdaq | No company-specific negative headline found; moving with AI capex/futures pressure. |
| TXN | $294.19 | Lower after results | TXN beat and guided above Street last night, but the stock was still indicated lower as investors faded cyclicals/AI capex risk. |
| PLTR | $124.57 | High-beta watch | No clean premarket quote surfaced; watch whether yesterday's -6.1% software selloff continues. |
| GOOG | $341.91 | -4% to -4.5% indicated | Alphabet beat revenue but guided 2026 capex to $195B-$205B, reviving AI-spend cash-flow anxiety. |
| AAPL | $325.89 | Quiet / no major move surfaced | Relative non-event versus TSLA/GOOG/TXN. |
| AMD | $552.33 | In focus, not leading | Mentioned in futures coverage as a watch name; no clean premarket move surfaced from accessible sources. |

## Crypto Pulse

CoinGecko simple-price pull around 7:32 AM CT:

| Asset | Price | 24h |
|---|---:|---:|
| BTC | $65,376 | -0.68% |
| ETH | $1,918.21 | -0.25% |
| SOL | $77.49 | +0.45% |

No core crypto asset is beyond the >3% move threshold. The risk-off action is much more visible in equities/futures than in crypto this morning.

## Prediction Markets

Kalshi: `web_fetch` on `https://kalshi.com/markets` hit a Vercel security checkpoint. The public API was accessible, but topical searches for Fed/Trump/Tesla/Bitcoin were polluted by newly generated sports same-game markets and did not return a reliable high-volume live read for the target themes.

Polymarket: homepage fetch worked; API filtering was more useful:

- Fed Decision in July: $86.5M lifetime volume, $4.35M 24h volume, roughly 0.2% "Yes" in the top displayed outcome. The market is still overwhelmingly priced for no July move.
- Fed rate hike in 2026: $4.48M lifetime volume, $130K 24h volume, last trade near 69% "Yes," up about 9 points on the day. This is the biggest macro probability shift in the accessible feed.
- Bitcoin above markets for July 23/24 were active, but mostly short-window/near-expiry noise. BTC "Up or Down on July 23" showed a sharp one-day price-change field, consistent with intraday chop rather than a strategic crypto-regulation signal.
- Israel/Iran ceasefire continuation and Strait of Hormuz markets remain active: ceasefire-through-date volume was near $2.8M lifetime / $988K 24h, while Hormuz normalization by July 31 had about $19.7M lifetime / $314K 24h.
- No clean TSLA/Elon-specific high-volume market surfaced in the accessible Polymarket API slice beyond Elon tweet-count markets.

## Indices

| ETF / proxy | Last close | Premarket read |
|---|---:|---:|
| QQQ | $705.35 | Nasdaq futures down about 0.7% in fresh coverage. |
| SPY | $747.48 | S&P futures down about 0.5%. |
| SMH | $586.91 | Chip tape no longer leading cleanly; AI capex anxiety is the morning overhang. |

## Economic Calendar

MarketWatch's calendar fetch returned a JS/ad-blocker wall. Search-visible calendar coverage points to:

- Initial jobless claims expected around 211K versus 208K prior.
- S&P Global flash PMIs also on watch.
- No CPI, payrolls, or FOMC decision today.
- ECB rate decision is a global macro input, but the U.S. equity setup is still dominated by TSLA/GOOG/TXN earnings fallout and oil/geopolitical risk.

## AI Models & Releases

- Google: Gemini 3.6 Flash and Gemini 3.5 Flash Cyber remain the fresh closed-source model story from the last day of search results. The notable angle is lower-cost/faster serving plus a security-tuned Gemini variant.
- OpenAI: no new general model launch in the latest tweet pull. The latest visible announcement was OpenAI Presence, a limited-GA enterprise product for voice/chat agents that can answer questions, use systems, take approved actions, and escalate to people.
- Anthropic: no new model launch in the latest pull. Anthropic highlighted the Economic Index integration in Claude and AI-for-Science grants for rare-disease researchers.
- Open source: fresh searches did not surface a clean official Llama/Mistral/Qwen/DeepSeek release in the last 24h with verified parameter count and benchmarks. Release-trackers continue to point at Chinese open-weight momentum and Kimi/Qwen/GLM families, but I did not find a high-confidence new drop this morning.

## AI Frontier (Use Cases)

- Tesla autonomy: Elon and Ashok both amplified Tesla safety/Robotaxi messaging. Tesla claimed 0 notable incidents across 380,000+ Robotaxi miles; Ashok cited 12B miles of FSD use and 2x better miles-between-collisions versus manual driving.
- Robotaxi geography remains the TSLA-specific frontier signal: Ashok's latest visible posts referenced Robotaxi availability across Miami, Tampa, and Orlando, plus Bay Area rideshare to SFO.
- Humanoid robotics: searches surfaced Unitree commentary that humanoids may reach a "ChatGPT moment" within 2-3 years and coverage of low-cost Unitree R1 tiers around $4,900-$10,500.
- Industrial robotics: China robotics coverage flagged humanoid output growth and Unitree/AgiBot as high-share players in the emerging supply chain.
- Agents: OpenAI Presence is the commercial deployment to watch; it is less a model release than a packaged agent platform for enterprise workflows.

## Earnings Watch

The @eWhispers pull only returned a reposted weekly-list link, not readable tickers. Cross-checking search/economic calendar snippets:

- Before/around open: Lockheed Martin and several industrial/defense names were in premarket-mover coverage.
- Already reported last night: TSLA, GOOG/GOOGL, TXN, IBM, LVS, ServiceNow.
- After close today: Intel is the biggest watchlist-adjacent report in the search-visible futures coverage.
- Market is treating GOOG capex and TSLA margin/FCF as the key read-throughs for QQQ/SMH.

## Notable Tweets

- Elon Musk: retweeted praise for Grok 4.5, Grok Build docs updates, Tesla FSD safety claims, and Tesla Robotaxi miles.
- Ashok Elluswamy: argued FSD is safer than manual driving over 12B miles and amplified Tesla Robotaxi/FSD rollout progress.
- Mr_Derivatives: noted 2-year and 10-year yields at the highest levels since 2025, 30-year near the highest since 2007, and called out TSLA/GOOGL being down around 4% while futures were still not collapsing.
- Karpathy: no new 24h post; latest visible note was the "long ramble session" pattern for giving LLMs richer context through voice.
- OpenAI: announced OpenAI Presence for enterprise agents; also posted reward-seeking research and a cyber-capability/security incident write-up earlier this week.
- Anthropic: highlighted Claude access to the Anthropic Economic Index and AI-for-Science grants.
- Trump: latest retrieved posts were old June/early July items; no fresh market-moving tweet surfaced in the latest five.

## News

- U.S. futures are lower: Nasdaq futures down about 0.7%, S&P and Dow futures down about 0.5% in current search-visible coverage.
- Tesla's Q2 profit miss, negative FCF, margin slide, and capex comments are the most direct portfolio event.
- Alphabet's beat was overshadowed by a $195B-$205B 2026 capex outlook, which keeps the "AI spending versus cash flow" debate hot.
- Oil and Middle East risk remain macro pressure points, and yields are rising into the morning data.
- Crypto is calm compared with equities; no >3% move in BTC/ETH/SOL.

## Outlook

This is a quality-of-selloff morning. If TSLA and GOOG stop bleeding after the open while NVDA/AMD/SMH stabilize, the AI trade can absorb the capex scare. If yields keep pushing higher and the market punishes heavy AI spending, QQQ has a real risk of turning yesterday's earnings anxiety into a broader de-risking day. The key tells are TSLA under $350, GOOG reaction to capex commentary, and whether SMH holds yesterday's close.

Sources checked: CNBC premarket movers, Yahoo Finance market coverage/search snippets, Stocktwits market wrap via Yahoo, CoinGecko simple price API, Polymarket homepage/API, Kalshi homepage/API, MarketWatch calendar fetch, Trading Economics/economic-calendar search snippets, requested X pulls via `bird`, OpenAI and Anthropic X pulls.
