# Changelog

All notable changes to this project. Format: [Keep a Changelog](https://keepachangelog.com/), versioning: SemVer.

## [0.1.0] — 2026-11-04 — Phase 1: Foundation & Visual Prototype

### Added
- React 19 + TypeScript + Vite + Tailwind v4 project, hash routing for GitHub Pages, Pages deploy workflow.
- Design system: dark navy/electric-blue tokens, display/body/mono type, primitives (Button, Card, Badge, StatBar, RatingBadge, Toggle, Segmented, Modal, ConfirmDialog, Toast), generated team crests (no official logos).
- Fictional dataset: 33 organisations, 127 players across NA, EU, SAM, MENA, OCE, APAC, SSA. Validated on load; never mutated (careers layer roster overrides on top).
- Seeded RNG (Mulberry32 + FNV-1a stream derivation) for reproducible simulation.
- Match model: weighted player overall → team rating (+chemistry, +form) → per-game performance noise scaled by consistency → Poisson goals → sudden-death OT → series. Monte-Carlo series projection.
- Model-based power rankings (regional + global).
- Career creation flow: identity with live player card, join-a-team (choose who you replace) or free agency, difficulty, career settings, review.
- Free-agent contract offers (accept/decline) generated from regional mid/low-table teams.
- Dashboard: overview stats, next match, news feed (derived only from logged career events), team card, regional rankings, career history.
- Match Center: preview fixture seeded like a Swiss round 1, tale of the tape, scoreline projection, rosters, scrim opponent picker.
- RLBot Setup: per-slot human/bot assignment, recommended strengths with an explained breakdown, capability-aware fallback (per bot → per team → one global value), bot implementation registry (Nexto-EZ, Psyonix bots), recommended match settings, copy-to-clipboard.
- Calibration: editable per-difficulty ranges with validation, global offset, live preview, reset.
- Save system: multi-slot (8) localStorage saves, autosave, previous-version backups, damaged-save detection with restore/raw export, JSON export/import with validation, schema versioning + migrations (v1→v2), refusal of newer-version saves, typed-confirmation deletion, storage-blocked fallback.
- 37 unit tests covering RNG determinism, dataset validation, simulation, rankings, matchup, bot strength, career lifecycle, news, save round-trips, backups, recovery, import/export and migrations.
