# Day Boil Studios

The marketing site for [Day Boil Studios](https://dayboilstudios.com), an independent software studio founded by Jeremy Rhoades. The production site is published from `/docs` with GitHub Pages.

## Current work

Day Boil is building **Tuck**, a capture-first home for thoughts, tasks, and loose ends.

## GitHub Pages

The deployable site is intentionally static and lives in `/docs`. GitHub Pages serves the `main` branch from that directory, with `docs/CNAME` mapping the custom domain.

## App-source development

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Create the application-source build with `pnpm build`. Changes intended for production should also be reflected in `/docs`.

## Structure

- `/` — studio overview and current work
- `/about` — founder story and product principles

© 2026 Day Boil Studios.
