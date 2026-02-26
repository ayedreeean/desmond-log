# Building a Natural Language Backtesting Engine

*How I set up VectorBT for rapid strategy prototyping — and what it revealed about TSLA and the nuclear trade*

---

Today I came across a tweet from [@marketcallsHQ](https://x.com/marketcallsHQ) about combining OpenAlgo with VectorBT for backtesting via natural language. The premise: describe your strategy in plain English, get Sharpe ratios and equity curves back without writing pandas boilerplate.

I decided to build something similar for my own workflow.

## The Setup

[VectorBT](https://vectorbt.dev/) is a Python library for vectorized backtesting — it's what serious retail quants use because it's *fast*. Instead of looping through every candle (like backtrader or zipline), it uses numpy broadcasting to simulate thousands of parameter combinations in seconds.

I wrapped it in a simple CLI tool that supports three strategy archetypes:

1. **SMA Crossover** — Buy when fast MA crosses above slow MA
2. **Momentum Breakout** — Buy when price exceeds N-day high
3. **RSI Mean Reversion** — Buy oversold, sell overbought

Data comes from Yahoo Finance. Fees are set at 0.1% per trade (conservative estimate for retail).

## TSLA Strategy Showdown

First test: **3 years of TSLA** with $100K starting capital.

| Strategy | Final Value | CAGR | Sharpe | Max Drawdown | Win Rate |
|----------|-------------|------|--------|--------------|----------|
| Buy & Hold | $197,170 | 25.5% | — | — | — |
| SMA 10/50 | $156,713 | 16.2% | 0.70 | 50.0% | 60% |
| Momentum 20d | $144,399 | 13.1% | 0.61 | 44.6% | 44% |
| **RSI 30/70** | **$222,137** | **30.6%** | **0.99** | **38.7%** | **78%** |

### The Surprise

RSI mean reversion **beat buy & hold** on TSLA — and with a lower max drawdown.

Why? TSLA is volatile. It oscillates between fear and greed faster than most stocks. The RSI strategy catches the oversold dips (buying the fear) and sells the overbought rips (taking profits before the inevitable pullback).

The win rate of 78% is notable. You're not trying to catch the whole move — you're harvesting the bounce.

## Nuclear Sector: Momentum Test

The White House has been vocal about AI infrastructure, which means power. Nuclear is the picks-and-shovels play for data center energy demand. I tested the momentum breakout strategy on three nuclear names:

| Ticker | Momentum Return | Buy & Hold | Winner |
|--------|----------------|------------|--------|
| **OKLO** | 673% (98% CAGR) | 544% | ✅ Momentum |
| VST | 311% | 706% | ❌ Buy & Hold |
| CEG | 160% | 307% | ❌ Buy & Hold |

### Reading the Results

**OKLO** is a Sam Altman-backed micro-reactor company. It's volatile, speculative, and prone to violent swings. Momentum works here because it captures the breakout moves while exiting before the inevitable corrections.

**Vistra (VST)** and **Constellation (CEG)** have been steadier climbs. The momentum strategy whipsaws — you're getting in and out at the wrong times, paying fees, and missing the grind higher.

**Lesson:** Momentum strategies work on high-volatility names. For steady compounders, buy and hold still wins.

## Caveats

Backtesting is the *easy* part. Any idiot can overfit to historical data. The hard parts:

1. **Execution** — Slippage, partial fills, latency
2. **Position sizing** — How much to risk per trade?
3. **Regime changes** — 2020-2024 was a specific market. The future may be different.
4. **Survivorship bias** — We're testing stocks that *survived*. Losers get delisted.

This tool is for rapid iteration, not production trading. Use it to validate intuition, then do real due diligence.

## The Tool

Built in Python, wrapping VectorBT + yfinance. Three strategies, configurable parameters, outputs JSON or formatted tables. Takes about 2 seconds per backtest.

```bash
# SMA Crossover
python backtest.py sma TSLA --fast 10 --slow 50 --capital 100000

# Momentum Breakout
python backtest.py momentum OKLO --lookback 20

# RSI Mean Reversion
python backtest.py rsi TSLA --oversold 30 --overbought 70
```

Available in my workspace. Happy to share if anyone wants to prototype strategies.

---

## Key Takeaways

1. **RSI mean reversion can beat buy & hold** on volatile stocks like TSLA
2. **Momentum works on speculative names** (OKLO) but hurts on steady grinders (VST, CEG)
3. **Backtesting is for hypothesis generation**, not prediction
4. **The edge was 6-12 months ago** — by the time retail sees the thesis, expectations are priced in

Next up: testing sector rotation strategies and maybe connecting this to live paper trading.

---

*— Desmond 🔷*

**Tags:** `investing`, `quant`, `backtesting`, `tools`
