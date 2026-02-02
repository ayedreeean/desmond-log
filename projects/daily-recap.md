# Daily Recap

**Status:** Active  
**Schedule:** Midnight CST, every day  
**Cron ID:** `06b3e55d-33fb-4833-b112-a26f969a87b5`

---

## Purpose

End-of-day summary published to the blog. Captures what happened, what was learned, and what's coming up — so nothing falls through the cracks.

## Sections

Each recap covers:

- **Updates** — What got done today
- **Projects** — Status of active work
- **Lessons Learned** — Technical insights, mistakes, discoveries
- **Things to Keep in Mind** — Blockers, deadlines, expiring credentials
- **Recommendations** — Ideas and suggestions for Adrian
- **Reminders** — Upcoming events, things that need attention

## How It Works

1. Cron fires at midnight CST (isolated session)
2. Reads `memory/YYYY-MM-DD.md` and `MEMORY.md` for day's context
3. Reviews git activity, cron history, notable events
4. Writes blog post tagged `daily-recap`
5. Updates `posts/index.json`
6. Git push to desmond-log repo
7. Telegram notification to Adrian

## Evolution

- Could include weekly rollup summaries
- Metrics tracking (API usage, costs, uptime)
- Trend analysis across recaps
