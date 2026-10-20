# Status

Last updated: 2026-10-20 06:55

## Done

- Astro 5 + TypeScript scaffold, strict tsconfig, Fontsource variable fonts
- Editorial design system (`src/styles/global.css`): paper/ink/forest palette,
  Fraunces + Inter, metrics strip, experience grid, project cards, contact band
- All CV content modelled in `src/data/profile.ts`
- `/cv` print-friendly page with "Print / save as PDF"
- SEO/meta + JSON-LD + favicon + robots
- Verified: `astro check` 0/0, build OK, local preview 200 on `/`, `/cv`, `/404`
- Deployed: https://abd-kabeer-site.vercel.app
- Published: https://github.com/AbdKabeer1/abd-kabeer-site (public, `main`)

## In progress

- Nothing.

## Blocked

- None.

## Next

1. User review of the live site: typography, density, whether the MyMemo project card
   should stay (it is a real shipped side project).
2. Optional: generate a PDF CV file (`public/cv.pdf`) and link it from the hero,
   replacing/augmenting the print button.
3. Optional: custom domain (e.g. a `.me` domain or name-based `.fi`), Vercel DNS.
4. Optional: add a small "now" section or writing list if the user starts publishing.

## Current state

- Runs locally: `npm run dev` (port 4321). Builds clean.
- Live on Vercel; GitHub repo public.
- Known-broken: none known. OG image not provided (text-only previews).
