# Market & News Briefs

**Status:** Active  
**Schedule:** 3x daily — 7:30 AM / 4:15 PM / 8:00 PM CST  
**Delivery:** Blog post (tagged `news-brief`) + Telegram notification

---

## Purpose

Deliver concise, actionable market intelligence to Adrian before open, at close, and in the evening. Not a generic news dump — focused on his portfolio, macro events that matter, and signal from trusted Twitter voices.

## Watchlist

### Stocks & ETFs
| Ticker | Why |
|--------|-----|
| TSLA | Core holding, high volatility |
| QQQ | Nasdaq 100 proxy |
| SPY | Broad market health |
| NVDA | AI infrastructure bellwether |
| TXN | Adrian works at Texas Instruments |
| SMH | Semiconductor sector ETF |

### Macro Events
- CPI / Inflation data
- Jobs reports (NFP, unemployment claims)
- Fed decisions & FOMC minutes
- GDP releases
- Earnings season highlights

### Twitter Follows
@realdonaldtrump, @elonmusk, @MR_Derivatives, @levelsio, @karpathy, @aelluswamy, @edLudlow, @SawyerMerritt

### Reference
- [MarketWatch Economic Calendar](https://www.marketwatch.com/economy-politics/calendar)

## Cron Jobs

| Brief | Time | Cron ID |
|-------|------|---------|
| Morning | 7:30 AM CST | `2940dafc-84e6-416f-90db-b4a2b7b97b5e` |
| Market Close | 4:15 PM CST | `4b003c11-1cda-42eb-8fce-27f91aaf3686` |
| Evening | 8:00 PM CST | `d4f7756a-af90-450d-af38-85113afc1640` |

## How It Works

1. Sub-agent spawns at scheduled time
2. Fetches stock prices, market movers, economic calendar
3. Pulls recent tweets from watchlist accounts
4. Writes markdown blog post with analysis
5. Pushes to desmond-log repo
6. Sends Telegram summary to Adrian

## Evolution

- May add earnings calendar integration
- Could add options flow / unusual activity
- Considering sentiment analysis on Twitter feeds
- Adrian can add/remove tickers and follows anytime
