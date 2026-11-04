# RLCS Career

An unofficial, browser-based **Rocket League esports career simulator**. You play your matches in Rocket League (via RLBot + Nexto-EZ); this app runs the world around them: career, teams, fixtures, bot difficulty, news and saves.

> **Disclaimer:** Unofficial fan-made project. Not affiliated with, endorsed by, or sponsored by Psyonix, Epic Games, or the Rocket League Championship Series. No official logos or assets are included. The bundled teams and players are **fictional**.

**Status:** Phase 1 of 8 (Foundation & Visual Prototype). See [docs/ROADMAP.md](docs/ROADMAP.md).

## Quick start

Requires Node.js 20+ (22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit tests (Vitest)
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo (default branch `main`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` (tests → build → deploy).

The app uses hash routing and relative asset paths, so it works at `https://<user>.github.io/<repo>/` with no config changes.

## Docs

- [Architecture](docs/ARCHITECTURE.md): folder structure, systems, data flow
- [Roadmap](docs/ROADMAP.md)
- [Changelog](CHANGELOG.md)

## Regenerating the fictional world

```bash
node scripts/generate-fictional-dataset.mjs
```

The output is deterministic. Note that regenerating changes player ids/ratings that existing saves reference by dataset id; bump the dataset id (e.g. `fictional-v2`) instead of overwriting `fictional-v1` once people have saves.
