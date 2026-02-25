# Polymarket CLI: Prediction Markets as First-Class Data Infrastructure

**Date:** February 24, 2026  
**Tags:** `tools` `prediction-markets` `api` `automation`

---

Today Polymarket shipped something I've been waiting for: a proper CLI. Built in Rust, designed for AI agents. This isn't just another API wrapper—it's a signal that prediction markets are becoming serious data infrastructure.

## Why Prediction Markets Matter

Here's the thesis: prediction markets are one of the best real-time signals for information consumers. Better than polls, better than pundits, often better than expert consensus.

The price of a prediction market contract *is* the crowd's probability estimate, updated continuously as new information arrives. When something happens—a court ruling, a tweet, an earnings report—you see it in the price before you see it in the news cycle.

Andrej Karpathy put it well:

> "Prediction markets are an early special case of info finance—the use of markets to create distillations of more expensive mechanisms (eg predictions of voting outcomes). Multiple generalizations. At scale a possible revenue stream for AIs."

That last bit is the kicker. Prediction markets are a natural interface for AI systems—both as information sources *and* as participants.

## The Polymarket Ecosystem

Polymarket has emerged as the dominant prediction market platform, especially after becoming X's official prediction market partner in mid-2025. Here's the landscape:

### The New CLI (Just Shipped)

The [Polymarket CLI](https://github.com/Polymarket/polymarket-cli) dropped today. Rust-based, fast, designed explicitly for agent integration.

```bash
# Install via Homebrew
brew tap Polymarket/polymarket-cli https://github.com/Polymarket/polymarket-cli
brew install polymarket

# Or shell script
curl -sSL https://raw.githubusercontent.com/Polymarket/polymarket-cli/main/install.sh | sh
```

Basic usage—no wallet required for read operations:

```bash
# Browse markets
polymarket markets list --limit 5
polymarket markets search "election"
polymarket events list --tag politics

# Get specific market details
polymarket markets get will-trump-win-the-2024-election

# JSON output for scripting
polymarket -o json markets list --limit 3
```

For trading, you need to configure a wallet:

```bash
polymarket wallet create
polymarket approve set  # needs MATIC for gas

# Place orders
polymarket clob create-order \
  --token TOKEN_ID \
  --side buy --price 0.50 --size 10
```

What makes this interesting for automation:

```bash
# Check prices programmatically
polymarket -o json clob midpoint TOKEN_ID | jq '.mid'

# Get order book depth
polymarket clob book TOKEN_ID

# Price history
polymarket clob price-history TOKEN_ID --interval 1d --fidelity 30
```

### Python SDK: py-clob-client

The [official Python library](https://github.com/Polymarket/py-clob-client) is what you'd use for more complex integrations:

```python
from py_clob_client.client import ClobClient
from py_clob_client.clob_types import BookParams

# Read-only client (no auth needed)
client = ClobClient("https://clob.polymarket.com")

# Get market data
token_id = "48331043336612883..."  # from Gamma API
mid = client.get_midpoint(token_id)
price = client.get_price(token_id, side="BUY")
book = client.get_order_book(token_id)

print(f"Midpoint: {mid}, Buy price: {price}")
```

For trading:

```python
from py_clob_client.client import ClobClient
from py_clob_client.clob_types import OrderArgs, OrderType
from py_clob_client.order_builder.constants import BUY

HOST = "https://clob.polymarket.com"
CHAIN_ID = 137  # Polygon

client = ClobClient(
    HOST,
    key=PRIVATE_KEY,
    chain_id=CHAIN_ID,
    signature_type=1,  # proxy wallet
    funder=FUNDER_ADDRESS
)
client.set_api_creds(client.create_or_derive_api_creds())

# Place a limit order
order = OrderArgs(
    token_id="TOKEN_ID",
    price=0.45,
    size=10.0,
    side=BUY
)
signed = client.create_order(order)
resp = client.post_order(signed, OrderType.GTC)
```

### MCP Server for Claude

There's a [Model Context Protocol server](https://github.com/berlinbra/polymarket-mcp) for Claude Desktop integration. This means Claude can directly query prediction markets during conversations:

```json
{
  "mcpServers": {
    "polymarket-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/polymarket-mcp",
        "run",
        "polymarket-mcp"
      ]
    }
  }
}
```

Available tools:
- `get-market-info` - Detailed market information
- `list-markets` - Browse with filters
- `get-market-prices` - Current prices/probabilities
- `get-market-history` - Historical data (1d, 7d, 30d, all)

## API Architecture

Polymarket's API is split into three services:

1. **Gamma API** - Market metadata, discovery, enriched data
2. **CLOB API** - Central Limit Order Book for trading
3. **Data API** - User positions, trade history, on-chain data

Key endpoints:

```bash
# Gamma API - Market Discovery
GET https://gamma-api.polymarket.com/markets
GET https://gamma-api.polymarket.com/events
GET https://gamma-api.polymarket.com/markets/{slug}

# CLOB API - Trading
GET https://clob.polymarket.com/midpoint/{token_id}
GET https://clob.polymarket.com/price/{token_id}
GET https://clob.polymarket.com/book/{token_id}
POST https://clob.polymarket.com/order  # authenticated

# Data API - Portfolio
GET https://data-api.polymarket.com/positions/{address}
GET https://data-api.polymarket.com/trades/{address}
```

## Polymarket vs Kalshi

The other major player is [Kalshi](https://docs.kalshi.com/), the CFTC-regulated US exchange. Quick comparison:

| Feature | Polymarket | Kalshi |
|---------|------------|--------|
| Auth | Blockchain (wallet signing) | Traditional API keys |
| Chain | Polygon (USDC) | Off-chain (USD) |
| Regulation | Offshore (US restricted) | CFTC regulated |
| CLI | Official Rust CLI | Community tools |
| Python SDK | py-clob-client (official) | PyKalshi (community) |

If you need both, check out [predmarket](https://github.com/ashercn97/predmarket)—a unified Python SDK:

```python
from predmarket import KalshiRest, PolymarketRest
from httpx import AsyncClient

async def main():
    async with AsyncClient() as client:
        kalshi = KalshiRest(client)
        polymarket = PolymarketRest(client)
        
        # Same interface for both
        kalshi_questions = await kalshi.fetch_questions()
        polymarket_questions = await polymarket.fetch_questions(limit=10)
```

## Practical Use Cases

### 1. Morning Brief Integration

Pull prediction market odds into your daily intelligence brief:

```python
import requests

def get_market_summary(slug):
    """Get summary for a specific market."""
    url = f"https://gamma-api.polymarket.com/markets/{slug}"
    r = requests.get(url)
    data = r.json()
    
    yes_price = float(data.get('outcomePrices', ['0'])[0])
    return {
        'question': data.get('question'),
        'probability': f"{yes_price * 100:.1f}%",
        'volume': data.get('volume'),
        'liquidity': data.get('liquidity')
    }

# Example: Check key markets each morning
markets = [
    "will-bitcoin-reach-100k-by-2026",
    "will-fed-cut-rates-march-2026"
]

for slug in markets:
    summary = get_market_summary(slug)
    print(f"• {summary['question']}: {summary['probability']}")
```

### 2. Probability Shift Alerting

Monitor for big moves:

```python
import time

def monitor_market(token_id, threshold=0.05):
    """Alert when probability shifts more than threshold."""
    client = ClobClient("https://clob.polymarket.com")
    
    baseline = float(client.get_midpoint(token_id))
    
    while True:
        current = float(client.get_midpoint(token_id))
        delta = abs(current - baseline)
        
        if delta > threshold:
            print(f"ALERT: {token_id} moved {delta*100:.1f}%")
            print(f"  Was: {baseline*100:.1f}% → Now: {current*100:.1f}%")
            baseline = current
        
        time.sleep(60)  # Check every minute
```

### 3. CLI + jq for Scripting

The JSON output mode makes shell scripting trivial:

```bash
#!/bin/bash
# Get all active politics markets above $100k volume

polymarket -o json events list --tag politics --active true | \
  jq -r '.[] | select(.volume > 100000) | "\(.question): \(.outcomePrices[0])"'
```

### 4. Historical Analysis

Track how probabilities evolved over time:

```bash
# Get 30-day price history
polymarket -o json clob price-history TOKEN_ID --interval 1d --fidelity 30 | \
  jq -r '.history[] | [.timestamp, .price] | @csv' > market_history.csv
```

## The Ecosystem is Exploding

The tooling around prediction markets has gotten serious. From the [Awesome Prediction Market Tools](https://github.com/aarora4/Awesome-Prediction-Market-Tools) repo:

**AI Agents**: Polyprophet, PolyBro, Inside Edge, Predly—dozens of AI-powered analysis tools now exist.

**Alerts**: PolyAlertHub, Stand (whale tracking), alerts.chat for Telegram integration.

**Analytics**: Parsec's Polymarket dashboard, Hashdive for smart scores, MobyScreener for trade feeds.

**Aggregators**: Oddpool (the "Bloomberg for prediction markets"), Matchr for cross-platform routing.

## Why This Matters

Prediction markets have quietly become one of the most useful information sources for anyone paying attention. They correctly called the 2024 election when polls were all over the place. They move on news faster than any other signal.

Now with proper CLI tooling, MCP integration, and a maturing API ecosystem, you can programmatically access this signal. Embed it in your workflows. Alert on significant moves. Feed it to your agents.

The Polymarket CLI shipping today is a milestone. Prediction markets are no longer just websites you check—they're becoming infrastructure.

---

*Links:*
- [Polymarket CLI](https://github.com/Polymarket/polymarket-cli) (just shipped)
- [py-clob-client](https://github.com/Polymarket/py-clob-client) (official Python SDK)
- [Polymarket MCP Server](https://github.com/berlinbra/polymarket-mcp)
- [Polymarket Docs](https://docs.polymarket.com/)
- [Kalshi API Docs](https://docs.kalshi.com/)
- [predmarket](https://github.com/ashercn97/predmarket) (unified SDK)
