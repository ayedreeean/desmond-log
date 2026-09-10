# Evening Brief — September 9, 2026

*8:00 PM CT edition. Quotes collected around 8:00–8:03 PM CT; equities show the last available extended-session trade, not a new 8 PM CT print.*

**Bottom line:** AAPL led the tracked after-hours basket, while earnings reactions were much rougher elsewhere: COO, NAVN and AEO fell double digits. AeroVironment gained after beating expectations. Tomorrow brings PPI, jobless claims, and Oracle/Adobe earnings; Brent remains above $100.

## After-Hours Portfolio

Changes below are versus Wednesday’s regular-session close—not versus Tuesday. Prices are USD; last-trade times are CT.

| Ticker | Regular close | After-hours | Change | Last trade CT |
|---|---:|---:|---:|---:|
| [TSLA](https://finance.yahoo.com/quote/TSLA/) | $367.81 | $367.22 | -0.16% | 18:59:57 |
| [NVDA](https://finance.yahoo.com/quote/NVDA/) | $223.67 | $223.67 | 0.00% | 18:59:51 |
| [TXN](https://finance.yahoo.com/quote/TXN/) | $261.59 | $260.88 | -0.27% | 18:43:09 |
| [PLTR](https://finance.yahoo.com/quote/PLTR/) | $169.53 | $169.60 | +0.04% | 18:59:58 |
| [GOOG](https://finance.yahoo.com/quote/GOOG/) | $328.38 | $328.80 | +0.13% | 18:59:53 |
| [AAPL](https://finance.yahoo.com/quote/AAPL/) | $315.34 | $318.10 | +0.87% | 18:59:59 |
| [AMD](https://finance.yahoo.com/quote/AMD/) | $521.10 | $520.55 | -0.10% | 18:59:57 |
| [QQQ](https://finance.yahoo.com/quote/QQQ/) | $716.31 | $716.49 | +0.03% | 18:59:56 |
| [SPY](https://finance.yahoo.com/quote/SPY/) | $762.40 | $763.14 | +0.10% | 18:59:59 |
| [SMH](https://finance.yahoo.com/quote/SMH/) | $574.29 | $573.99 | -0.05% | 18:59:23 |

AAPL was the clear relative standout; the ETF moves were small. TXN’s last available trade was earlier than the others. Search-result snapshots disagreed, so the table uses one consistent timestamped Yahoo chart feed, calculating `(extended price / regular close − 1)`. [Example source](https://query1.finance.yahoo.com/v8/finance/chart/TSLA?range=1d&interval=1m&includePrePost=true).

## Crypto Pulse

| Asset | Latest USD | Since U.S. equity close |
|---|---:|---:|
| BTC | $78,250.00 | +0.09% |
| ETH | $2,469.33 | +0.18% |
| SOL | $101.33 | -0.82% |

**SOL weakened while BTC and ETH were roughly steady.** Latest vendor timestamps were approximately 8:01 PM CT. Returns use each asset’s 3:00 PM CT five-minute candle close as an approximate equity-close baseline; these are not rolling 24-hour changes. Baselines: BTC $78,183.31, ETH $2,464.90, SOL $102.17. [BTC data](https://query1.finance.yahoo.com/v8/finance/chart/BTC-USD?range=5d&interval=5m), [ETH](https://query1.finance.yahoo.com/v8/finance/chart/ETH-USD?range=5d&interval=5m), [SOL](https://query1.finance.yahoo.com/v8/finance/chart/SOL-USD?range=5d&interval=5m).

## Prediction Markets

Political and policy contracts are covered through factual contract scope and trading activity, without political outcome scores or forecasts. Dollar turnover and rolling contract volume are different measures.

- **Fed:** Polymarket’s September decision event reached **$109.19M cumulative turnover**, versus about $108.71M in the close brief. Kalshi’s unchanged-rate contract had **894,965 contracts** of rolling 24-hour activity, and its 25bp-hike contract **625,913**. These are activity measures, not predictions of the decision. [Polymarket](https://polymarket.com/event/fed-decision-in-september-762), [Kalshi public API](https://api.elections.kalshi.com/trade-api/v2/markets?event_ticker=KXFEDDECISION-26SEP).
- **AI competition:** End-September best-model chart showed **Anthropic 89%, OpenAI 8.9%, Google 1.5%**. Versus the saved close snapshot, approximately **−1.0, +0.3 and −0.4 percentage points**, respectively: small moves, not a major regime change. Cumulative turnover increased **$21,112** to $2,795,358. These are contract quotes under the market’s ranking rules, not benchmark results. [Market](https://polymarket.com/event/which-company-has-the-best-ai-model-end-of-september-20260717143435868).
- **TSLA weekly close:** The above-$375 bracket displayed **24%**, but only **$20** turnover and a wide **29¢ Yes / 82¢ No** purchase spread. Other brackets showed $0–$15 turnover. No reliable directional shift is inferred from this thin market. It was already present at the close; the site’s NEW badge does not establish an evening launch. [Market](https://polymarket.com/event/tsla-week-september-11-2026).
- **Elon:** Kalshi’s visit-Mars-before-August-2099 contract last traded at **10¢**, unchanged from the close brief, with approximately **66 contracts** over 24 hours. A thin, extremely long-dated novelty contract. [Market data](https://api.elections.kalshi.com/trade-api/v2/markets?event_ticker=KXELONMARS-99).
- **Crypto regulation:** The CLARITY Act signing-in-2026 contract reached **$14,542,688 cumulative turnover**, up **$11,654** from the close snapshot. Resolution requires the specified bill to pass both chambers and be signed; trading activity does not establish legislative progress. [Contract](https://polymarket.com/event/clarity-act-signed-into-law-in-2026).
- **Shutdown / AI policy / politics:** The October 1 shutdown contract remained at **$15,321** turnover; the public-access open-source-model-ban contract remained at **$4,749**, both unchanged from the close snapshot. Their rules concern an actual appropriations lapse suspending operations and formal restrictions on public access, respectively—not rhetoric. No verified new evening political market or overnight probability history was established. [Shutdown](https://polymarket.com/event/government-shutdown-by-october-1-20260610162414910), [AI-policy contract](https://polymarket.com/event/us-government-bans-an-open-source-ai-model-in-2026-20260703221501747).

Kalshi’s requested website returned HTTP 429; its public API worked. Polymarket’s homepage and selected event pages worked. Experimental AI-written market commentary and user comments were not used as news evidence.

## AI Models & Releases

**No additional September 9 general-purpose LLM launch was verified.** Past-day searches and date-specific checks repeatedly surfaced older releases. This is a coverage limit, not proof nothing shipped.

| Model / product | Verified date or status | Parameters / benchmarks / significance |
|---|---|---|
| GPT-Image-2.5 Flare / Sunburst | September 8 model snapshots; image models, not new text LLMs | Parameter counts and comparable numerical benchmark results not disclosed in checked docs. Flare prioritizes speed; Sunburst precision in generation/editing. |
| Gemini 3.8 Flash / Flash Cyber | September 2 announcement, not today | Parameters undisclosed. Google reports Flash at **54.9% HLE-Verified** and Cyber at **47.2% CWE-Bench pass@1**; vendor-reported, not independently replicated here. |
| Meta Muse / Muse Spark | September 8 personal-agent announcement | Product powered by Muse Spark; not evidence of a fresh open-weight release. No parameter count or comparable numerical benchmark established from the announcement. |

Sources: [OpenAI Flare docs](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare), [Sunburst docs](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst), [Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/), [Meta announcement](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/).

**Open-source watch:** No same-day Llama, Mistral, Qwen or DeepSeek release with verified weights, parameter counts and new benchmarks was established. No September 9 Anthropic model launch was established either. Fresh indexing timestamps were not treated as release dates.

## AI Frontier (Use Cases)

- **Today — Apple health AI:** A redesigned Health app coming later this year and a new Watch Health Sensing System combine intelligent insights, readiness scoring and more frequent HRV measurements. A consumer application announcement, not a new foundation model or independently validated clinical outcome. [Apple](https://www.apple.com/newsroom/2026/09/apple-advances-health-and-fitness-capabilities-using-apple-intelligence/).
- **Humanoid research — TANGO, September 8:** A whole-body vision-language-action approach predicts 29-DoF actions and reports zero-shot language-guided navigation on a **Unitree G1**, trained entirely in simulation. The notable claim is transfer into cluttered real environments without real navigation training data; it remains an author-reported research demonstration. [Paper](https://arxiv.org/abs/2609.09158).
- **Scientific AI — AlphaGenome Atlas, recent:** Google’s resource supplies molecular-effect predictions for **9 billion single-letter human DNA variants**. Useful for prioritizing research; computational predictions are not experimental confirmation. [DeepMind](https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/).
- **Commercial agents — Muse, September 8:** Meta describes a personal agent running in its own VM/browser, available through its app or WhatsApp, with approval before sensitive actions. An announced consumer workflow, not a measured productivity result. [Meta](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/).
- **World models / deployment watch:** Karpathy’s latest sampled repost references World Labs’ Atlas but is dated **September 3**. No new September 9 Figure, 1X or Tesla Optimus release was verified. Recent Unitree combat-demo coverage surfaced, but its original technical evidence was not recovered, so it is not presented as a validated new model release. [Dated Atlas repost](https://x.com/karpathy/status/2095535021146992835).

## Earnings Recap

Extended-session reactions below use the same close-to-last-trade method as the portfolio table; most final prints were near 6:59 PM CT.

- **AeroVironment (AVAV): $146.25, +3.87%.** Fiscal Q1 revenue **$480.5M**, adjusted EPS **$0.59**; FactSet estimates cited by MT Newswires were $451.9M and $0.22. Funded backlog reached **$1.5B**, up 37% year over year. FY27 guidance reaffirmed: revenue **$2.125B–$2.225B**, adjusted EPS **$3.02–$3.34**. Consensus providers differed, but the reported beat is consistent. [Company release](https://investor.avinc.com/node/21391), [results report](https://finance.yahoo.com/markets/stocks/articles/aerovironment-fiscal-q1-adjusted-earnings-201700860.html).
- **CooperCompanies (COO): $53.35, −15.96%.** Adjusted EPS **$1.15** beat $1.12, while revenue near **$1.07B** missed $1.10B. Reporting flagged weak guidance. Separately, the board decided to retain CooperSurgical and expanded its repurchase authorization from $2B to $3B. [Results and guidance](https://finance.yahoo.com/markets/stocks/articles/cooper-companies-tumbles-weak-guidance-210053742.html), [SEC strategic-review release](https://www.sec.gov/Archives/edgar/data/711404/000162828026061155/cooperq32026pressreleaseex.htm).
- **Navan (NAVN): $21.94, −15.26%.** Revenue **$232.8M** versus $220.5M expected; non-GAAP EPS **$0.05** versus $0.04. FY27 revenue guidance raised to **$927M–$933M** from $907M–$913M. The stock still sold off sharply; the figures alone do not establish the reason. [Results](https://finance.yahoo.com/markets/stocks/articles/navan-swings-fiscal-q2-profit-202027187.html).
- **American Eagle (AEO): $15.10, −10.60%.** Revenue about **$1.38B**, comparable sales +6%, reported diluted EPS **$0.79**. The quarter benefited from a **$161M tariff refund**; the headline profit beat should not be read as purely recurring improvement. FY operating-income outlook **$540M–$550M** includes the refund benefit. [Company announcement](https://investors.ae.com/press-releases/news-details/2026/AEO-Inc--Reports-Second-Quarter-Fiscal-2026-Results/default.aspx), [refund context](https://finance.yahoo.com/media-advertising/articles/american-eagle-drops-big-ad-000541472.html).
- **Wealthfront (WLTH): $9.42, −0.42%**, last available trade 6:47 PM CT. Revenue **$91.9M**, up 1%; platform assets **$99B**, up 12%. The call reported adjusted EBITDA **$38.1M**, down 15%, with margin pressure. Full numerical forward guidance was not verified. [Results summary](https://www.tipranks.com/news/company-announcements/wealthfront-q2-2027-results-highlight-asset-growth), [call transcript](https://www.benzinga.com/news/26/09/61703282/full-transcript-wealthfront-q2-2026-earnings-call).

Quote sources: Yahoo Finance chart feeds for [AVAV](https://finance.yahoo.com/quote/AVAV/), [COO](https://finance.yahoo.com/quote/COO/), [NAVN](https://finance.yahoo.com/quote/NAVN/), [AEO](https://finance.yahoo.com/quote/AEO/) and [WLTH](https://finance.yahoo.com/quote/WLTH/).

## Tomorrow’s Watch

**Thursday, September 10 — all times CT.**

- **7:30 AM:** August PPI and weekly initial jobless claims. [BLS schedule](https://www.bls.gov/schedule/news_release/ppi.htm), [weekly calendar](https://www.newyorkfed.org/research/calendars/i-sep26.html).
- **9:00 AM:** July wholesale trade, sales and inventories. [Census schedule](https://www.census.gov/wholesale/release_schedule.html).
- **Before open:** Macy’s, Caleres, Lovesac, MasterCraft and Shoe Station Group on the checked calendar. **After close:** Oracle and Adobe are the major tech watch; Copart, Descartes and Zumiez are also listed. Calendar dates can change. [Kiplinger](https://www.kiplinger.com/investing/stocks/17494/next-week-earnings-calendar-stocks), [Oracle date context](https://x.com/Mr_Derivatives/status/2097805562188845464), [Earnings Whispers weekly post](https://x.com/eWhispers/status/2097391722573533683).
- **Options context:** @MR_Derivatives cites implied moves around **±8% ADBE / ±11.7% ORCL**. These are the commentator’s figures, not independently reconstructed options calculations or directional forecasts. [Post](https://x.com/Mr_Derivatives/status/2097805562188845464).

The requested MarketWatch calendar fetch returned HTTP 401; BLS, Census and other calendars were used instead. Friday CPI remains the next major inflation checkpoint. [BLS calendar](https://www.bls.gov/schedule/2026/home.htm).

## Notable Tweets

Five recent posts were fetched from each requested account. Reposts and older entries are explicitly distinguished from fresh news.

- **@realdonaldtrump:** Four September 9 video/link-only posts in the sample, latest **4:51 PM CT**. No substantive policy interpretation without a verified transcript. [Latest](https://x.com/realDonaldTrump/status/2097805168708362377).
- **@elonmusk:** Promoted X advertising and amplified a Tesla/FSD customer anecdote earlier today; no verified new evening Tesla product release in the sample. [Advertising](https://x.com/elonmusk/status/2097753657714573749), [FSD anecdote](https://x.com/elonmusk/status/2097749072333644248).
- **@MR_Derivatives:** Flagged tomorrow’s Oracle/Adobe implied moves and a threatened GOOGL trendline. Technical commentary, not a verified breakdown forecast. [Earnings](https://x.com/Mr_Derivatives/status/2097805562188845464), [GOOGL](https://x.com/Mr_Derivatives/status/2097798177529405867).
- **@levelsio:** Demonstrated making a CSS UI kit from a reference video using Claude Code; separately argued that community, data and distribution matter as software gets easier to reproduce. Individual experience/opinion, not a controlled study. [Demo](https://x.com/levelsio/status/2097729222361932000), [business commentary](https://x.com/levelsio/status/2097729888547447129).
- **@karpathy:** No September 9 post in the returned five; latest was the September 3 Atlas repost. [Post](https://x.com/karpathy/status/2095535021146992835).
- **@aelluswamy:** No September 9 post in the sample; latest September 7 entries described Robotaxi rain performance and reposted Tesla Europe’s Slovenia FSD announcement. Those are attributed company claims, not independent testing. [Rain post](https://x.com/aelluswamy/status/2097020565416755370).
- **@eWhispers:** At **3:15 PM CT**, reposted that AVAV beat expectations and reaffirmed revenue guidance; also retained its weekly calendar and Oracle preview. [AVAV](https://x.com/eWhispers/status/2097781023769575628), [Oracle preview](https://x.com/eWhispers/status/2097266301878079523).

## Global Outlook

- **U.S. overnight futures:** S&P **7,649.25 (+0.07%)** and Nasdaq **29,426.75 (−0.07%)**, around 7:50 PM CT, versus vendor prior-close references. A mixed, essentially flat start—not a prediction of Thursday’s open. [ES](https://finance.yahoo.com/quote/ES=F/), [NQ](https://finance.yahoo.com/quote/NQ=F/).
- **Asia:** USD Nikkei futures **64,475 (+0.44%)**, approximately 7:45 PM CT versus the vendor’s 64,190 reference. This is a futures contract, not the Nikkei cash index. [Quote](https://finance.yahoo.com/quote/NKD=F/).
- **Europe:** Euro Stoxx 50 September futures displayed **6,382, −0.50%**, marked closed for September 9. This is a completed-session reference, not live European overnight trading. [Historical futures page](https://www.investing.com/indices/eu-stocks-50-futures-historical-data).
- **Oil / geopolitics:** Brent futures **$101.46** around 7:50 PM CT, versus a $101.21 reference. Reuters reported that attacks involving the U.S. and Iran against tankers intensified shipping disruption on Wednesday. These are reported daytime developments carrying into the night; no separate post-close escalation was independently confirmed. [Brent quote](https://finance.yahoo.com/quote/BZ=F/), [Reuters report](https://www.marketscreener.com/news/brent-crude-rises-above-100-a-barrel-as-middle-east-conflict-escalates-ce785bd9da8cfe22).

**Watch the combination:** elevated oil, tomorrow’s producer inflation, and the market’s reaction to tech guidance. Tonight’s earnings show that beating headline estimates does not guarantee a positive stock response.
