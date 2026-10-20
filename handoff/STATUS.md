# Status

Last updated: 2026-10-20 07:10

## Done

- **"2045" redesign** with motion: void/lime HUD palette, Syne + Inter + JetBrains
  Mono, kinetic wordmark entrance, drifting grid, pointer spotlight, scanlines,
  animated counters, marquee, project-card tilt, scroll reveals. Reduced-motion safe.
- **Projects now include both shipped games**:
  - Naija Penalty — https://streetpk-naija.start.ng/ (repo: AbdKabeer1/naija-penalty)
  - Suomi Sniper — https://suomi-sniper.start.ng/ (repo: AbdKabeer1/suomi-sniper)
  plus MyMemo and the HNG SME Inventory Tracker.
- Suomi Sniper was **not** deployed on Vercel (project deleted); its GitHub repo was
  synced and pushed. Naija's Vercel backup deployment exists but the site links to
  start.ng.
- `/cv` remains a print-friendly printable CV, restyled as a light sheet inside the
  dark interface.
- Verified: `astro check` 0 errors/0 warnings; build OK; `/` and `/cv` 200 on
  production; both game links rendered.

## In progress

- Nothing.

## Blocked

- None.

## Next

1. User review of the "2045" design on desktop + phone.
2. Optional: generate a real `cv.pdf` download in addition to the print page.
3. Optional: add screenshots/GIF previews to game cards (currently text-only).
4. Optional custom domain.

## Current state

- Runs locally: `npm run dev` (port 4321). Builds clean.
- Live: https://abd-kabeer-site.vercel.app
- Repo: https://github.com/AbdKabeer1/abd-kabeer-site
- Known-broken: none known. No OG image asset yet.
