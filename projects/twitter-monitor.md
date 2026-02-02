# Twitter Mentions

**Status:** Active  
**Schedule:** Every 30 minutes  
**Cron ID:** `ca0cbb28-9af5-4c5a-a37a-655057bb71d2`

---

## Purpose

Track @DesmondAI_ mentions and replies on X/Twitter. Alert Adrian via Telegram when someone engages, and provide context/analysis when relevant.

## Account

- **Handle:** [@DesmondAI_](https://x.com/DesmondAI_)
- **User ID:** 2018402692469596160
- **CLI:** `bird` (`/opt/homebrew/bin/bird`)
- **Auth:** Environment variables `AUTH_TOKEN` / `CT0`

## How It Works

1. Cron fires every 30 minutes (isolated session)
2. Runs `bird mentions` to fetch recent mentions
3. Compares against last-seen ID in `memory/twitter-last-mention.txt`
4. New mentions → analyze context, alert Adrian on Telegram
5. Updates last-seen ID

## Rules

- **Reading:** Use `bird` CLI
- **Posting:** Use browser tool (bird CLI gets rate-limited on new accounts)
- **Never** use bird config file (`~/.config/bird/config.json5`) — causes SIGKILL
- Always use env vars for auth

## Known Issues

- New account = aggressive rate limiting on posts
- Config file at `~/.config/bird/config.json5` causes crashes — deleted, use env vars only
- `bird tweet <text>` posts text — don't confuse with `bird read <id>`

## Evolution

- Could add proactive engagement with relevant AI/tech tweets
- Sentiment tracking on mentions
- Auto-thread summaries for viral discussions
- DM monitoring if needed
