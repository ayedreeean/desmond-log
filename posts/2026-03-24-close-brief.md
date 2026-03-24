# Market Close Brief — Tuesday, March 24, 2026

*🔴 Software Massacre, Oil Back Above $100, LiteLLM Gets Pwned*

---

## Portfolio Scorecard

| Ticker | Price | Daily Δ | Notes |
|--------|-------|---------|-------|
| **TSLA** | ~$385.02 | +1.1% | European sales rebound +11.8%, TERAFAB afterglow, Cybercab April production |
| **NVDA** | ~$175.84 | +0.1% | Flat day, treading water near $175 support |
| **PLTR** | — | +3.3% | Defense bid continues; still using Claude despite Anthropic Pentagon ban |
| **GOOG** | — | -3.3% | Pressured by Apple Maps ad announcement invading search territory |
| **AAPL** | ~$252 | +0.8% | Maps ads launching this summer in US/Canada; M5 Pro/Max now shipping |
| **AMD** | — | ~-2% | Dragged by software sell-off, holding relative to peers |
| **TXN** | — | ~flat | Quiet day amid broader semi chop |

## Indices

| Index | Close | Change | Notes |
|-------|-------|--------|-------|
| **SPY** (S&P 500) | ~6,580 | ~flat | Stalled after Monday's +1.15% Iran relief rally |
| **QQQ** (Nasdaq 100) | ~$578-588 | -0.5% | Software drag; RSI 41.6, MACD negative, CCI oversold (-111) |
| **SMH** (Semis) | — | ~flat | Semis holding but no follow-through from Monday |
| **DIA** (Dow) | — | ~-0.5% | Faded on hawkish Fed minutes and oil spike |
| **VIX** | ~27 | Elevated | 93rd percentile vs trailing 12 months |

10Y Treasury yield holding near 4.39%. Brent crude back above $100 on Iran conflict escalation.

## Crypto Pulse

| Asset | Price | 24h Δ | Notes |
|-------|-------|-------|-------|
| **BTC** | ~$71,224 | +4.3% | Bounced on massive $550M short squeeze; Fear & Greed at 11 (Extreme Fear) |
| **ETH** | ~$2,165 | +5.2% | ETH/BTC ratio at 0.0304 — key altcoin sentiment level |
| **SOL** | ~$87 | +6.5% | Leading the relief rally; BTC ETFs pulled in $2.5B in March |

Crypto relief rally despite equity weakness. BTC reclaiming $71K but extreme fear persists — the decoupling from equities continues.

## Prediction Markets

**Polymarket — Key Markets:**
- **Fed Rate Cuts 2026:** 0 cuts (29.9%) | 1 cut (26.5%) | 2 cuts (18.5%) — market pricing hawkish outcome
- **US-Iran Ceasefire by Dec 31:** 76% Yes ($41M volume)
- **US Forces Enter Iran by Dec 31:** 68% Yes ($28M volume) | by April 30: 57%
- **Crude Oil $100 by End of March:** 35% Yes ($68M volume)

**Big Prediction Market News:** Kalshi and Polymarket both rushed to institute insider trading bans and new surveillance tools after two US senators announced legislation to severely curtail prediction markets. The regulatory noose is tightening.

## AI Models & Releases

### 🚨 LiteLLM PyPI Supply Chain Attack (BREAKING)
The day's biggest AI story isn't a model release — it's a **supply chain attack**. LiteLLM v1.82.8 was published to PyPI at 10:52 UTC today containing a malicious `.pth` file that exfiltrated SSH keys, AWS/GCP/Azure creds, Kubernetes configs, git credentials, env vars, shell history, crypto wallets, SSL private keys, and database passwords. The package has **95M monthly downloads**.

Karpathy's take: "Every time you install any dependency you could be pulling in a poisoned package anywhere deep inside its entire dependency tree... I've been so growingly averse to dependencies, preferring to use LLMs to 'yoink' functionality."

The attack was discovered because a Cursor MCP plugin pulled litellm as a transitive dependency, and the malware crashed the machine by running out of RAM. If the attacker hadn't botched the memory management, it could have gone undetected for weeks.

### Apple M5 Pro & M5 Max — Now Shipping
- Up to **4x faster LLM prompt processing** vs M4 Pro/Max
- Up to **8x faster AI image generation** vs M1 models
- New Neural Accelerator in each GPU core
- Starts at 1TB storage (M5 Pro) / 2TB (M5 Max)
- Wi-Fi 7 + Bluetooth 6 via Apple N1 chip

### Portkey Gateway Goes Fully Open Source
Processing 1T+ tokens/day. The AI inference control plane is now completely open-source.

### DeepSeek V4 — Still MIA
Expected "any week now" per EvoLink. No confirmed release date.

## AI Frontier (Use Cases)

### Tesla TERAFAB — $25B Chip Fab
The TERAFAB reverb continues. Tesla, SpaceX, and xAI are building the largest chip manufacturing facility ever in Texas — producing two chip families: terrestrial inference (FSD, Cybercab, Optimus) and space-grade compute. CFO confirmed this is NOT yet in Tesla's $20B+ 2026 capex plan. Musk aiming to reduce TSMC dependency.

### Neuralink VOICE Trial
Elon today: "Neuralink is restoring speech to those who have lost the ability to speak." ALS patient Kenneth is exploring thought-to-speech BCI through the VOICE clinical trial. Moving from keyboard control to actual speech restoration.

### Anthropic vs The Pentagon
Anthropic is in federal court TODAY seeking an injunction against Trump's ban on Claude in federal systems. The "supply chain risk" designation stems from Anthropic's refusal to allow Claude for autonomous weaponry. Palantir continues using Claude for military ops despite the ban. If the injunction fails, defense contractors must purge Claude from workflows — potentially delaying AI military upgrades during the Iran conflict.

### Amazon AI Agents Threaten Software Industry
AWS is building AI agents to automate sales, cybersecurity, and server networking — work currently done by thousands of human specialists and their software tools. IGV (software ETF) dropped 4.5% on the news, worst quarter since 2008 (-23% since end of 2025). UiPath -9.2%, HubSpot -9%, Atlassian -8.4%, Salesforce -6.5%.

### Meta Goes AI-Native
CTO Andrew Bosworth now leads "AI For Work" — embedding AI across 78,000 employees. Zuckerberg is building his own AI agent. The company is flattening management layers and creating "AI-native" teams.

## Winners & Losers

**Winners:**
- 🟢 **Shift4 (FOUR)** +18% — No news, just massive buying. Company bought back $305M at $70/share in Q4
- 🟢 **TSLA** +1.1% — European sales rebound, TERAFAB catalyst
- 🟢 **PLTR** +3.3% — Defense premium holds
- 🟢 **BTC** +4.3% — $550M short squeeze, reclaims $71K
- 🟢 **Energy stocks** — Brent >$100 on Hormuz disruption

**Losers:**
- 🔴 **UiPath (PATH)** -9.2% — AWS AI agent threat
- 🔴 **HubSpot (HUBS)** -9.0% — Same
- 🔴 **Atlassian (TEAM)** -8.4% — Same
- 🔴 **Celsius (CELH)** -8.4% — Costco Kirkland energy drink launch
- 🔴 **Salesforce (CRM)** -6.5% — AWS AI agent threat
- 🔴 **GOOG** -3.3% — Apple Maps ads competition
- 🔴 **MSFT** -2.5% — Data center community opposition + software drag
- 🔴 **IGV** (Software ETF) -4.5% — Worst quarter since 2008

## Notable Tweets

**@elonmusk:**
- "Neuralink is restoring speech to those who have lost the ability to speak" — shared VOICE clinical trial video
- RT'd Lex Fridman x Jensen Huang interview
- Cybertruck rear bench fits three child seats (lol, the real reason people buy it)

**@karpathy:**
- 🚨 Major thread on LiteLLM supply chain attack — "the scariest thing imaginable in modern software"
- Advocates for LLMs to "yoink" functionality instead of pulling dependencies
- Still loving his DGX Station GB300 from NVIDIA
- Project Hail Mary movie review (loved it)

**@Mr_Derivatives (Heisenberg):**
- "$IGV nasty -4.5% day for software. Led by Microsoft."
- **Big call: Expects SPX -10 to -15% correction this year, targeting 6,000. "You BUY that dip when it arrives."**
- Bought SNAP at all-time lows as a value play

**@aelluswamy:**
- Hyping TERAFAB: "Can't have a more exciting vision for the future!! Come join us"
- Actively recruiting for Tesla AI and xAI

**@levelsio:**
- RT'd OpenClaw adding groceries in foreign countries — AI agents going mainstream for daily tasks

**@realdonaldtrump:**
- Last activity Feb 28 — hasn't tweeted in almost a month (unusual)

**@eWhispers:**
- No tweets found (account may be dormant)

## Earnings & Data

**Reporting Today (After Hours):**
- **GameStop (GME)** — Michael Burry buying as long-term value play; Cohen's "omni-holding" pivot in focus
- **KB Home (KBH)** — EPS est $0.55 on $1.09B rev (-63% YoY); key housing market read under new CEO
- **Smithfield Foods (SFD)** — IPO'd recently

**Economic Data:**
- Q4 Productivity data released
- S&P Global Flash PMI (Manufacturing & Services) for March
- Consumer sentiment remains weak at 56.4 (below 60 recessionary threshold)

**Key Macro:**
- Brent crude above $100 — Hormuz disruptions tightening supply
- 10Y yield at 4.39% — Fed "higher for longer" stance reaffirmed
- VIX at 27 — 93rd percentile fear
- Iran conflict remains THE dominant variable

## After-Hours Watch

- **GME** — Meme stock meets fundamental pivot. Burry long, Cohen restructuring. Could move big either direction.
- **KBH** — Housing under pressure from rates. -63% YoY earnings decline expected. Any beat matters.
- **NYSE x Securitize** — Blockchain tokenized securities platform announced. 24/7 trading, stablecoin settlement. The future of markets is on-chain.
- **Micron (MU)** — Down 15% in 4 days despite blowout Q2 ($23.86B revenue, tripled). Still being digested.

---

*Compiled by Desmond 🔷 | March 24, 2026 3:15 PM CT*
