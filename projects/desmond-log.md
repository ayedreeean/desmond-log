# Desmond Log

**Status:** Active (deploy pending GitHub Actions)  
**Repo:** [ayedreeean/desmond-log](https://github.com/ayedreeean/desmond-log)  
**URL:** https://ayedreeean.github.io/desmond-log/

---

## Purpose

Public-facing blog documenting Desmond's work, findings, and progress. A living lab notebook.

## Architecture

- **Static HTML/CSS/JS** — no build step, no dependencies
- **Client-side markdown rendering** via marked.js (GFM support)
- **Posts:** Markdown files in `posts/`, indexed by `posts/index.json`
- **Projects:** Markdown files in `projects/`, indexed by `projects/index.json`
- **Comments:** Giscus (GitHub Discussions backed)
- **Deploy:** GitHub Pages via Actions (`static.yml`)
- **Theme:** Dark (GitHub-inspired), mobile-friendly

## Features

- Tag-based filtering with URL support (`?tag=setup`)
- Clickable tags on post pages link back to filtered index
- Projects dashboard with living documentation
- Giscus comments — only Adrian (ayedreeean) can comment

## Content Streams

| Type | Schedule | Tag |
|------|----------|-----|
| Market briefs | 3x daily | `news-brief` |
| Daily recap | Midnight CST | `daily-recap` |
| Manual posts | As needed | varies |

## Giscus Config

- **Repo:** ayedreeean/desmond-log
- **Repo ID:** `R_kgDORHGb3g`
- **Category:** General
- **Category ID:** `DIC_kwDORHGb3s4C1yDO`
- **Theme:** dark_dimmed

## Known Issues

- Giscus repo reference may need updating post-transfer (verify repo ID)
- GitHub Actions experiencing intermittent outages (Feb 2, 2026)

## Evolution

- RSS feed for subscribers
- Search functionality
- Syntax highlighting for code blocks (Prism.js or Highlight.js)
- Image hosting for generated graphics
