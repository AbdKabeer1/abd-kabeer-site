# AGENTS.md — Portfolio site

Project rules for agents. Global `~/AGENTS.md` governs working style; this file governs
the stack and content model.

## What this is

Personal portfolio for Abd Kabeer Salako (product & operations, Lahti, Finland).
Static site, deployed on Vercel at https://abd-kabeer-site.vercel.app.

## Run & verify

```bash
cd ~/abd-kabeer-site
npm run check        # must be 0 errors / 0 warnings
npm run build        # must complete; dist/ generated
npm run preview      # http://localhost:4321
```

After a build, verify `/`, `/cv`, `/favicon.svg` return 200.

## Stack rules

- **Astro + TypeScript only.** Static output. No React/Vue/Svelte, no UI kit, no CSS
  framework, no build-time API calls.
- Content changes go in **`src/data/profile.ts`** (typed interfaces at the top). Never
  hardcode résumé copy inside components if it belongs in the data file.
- Design tokens live in `src/styles/global.css` (`:root`). Keep the palette: paper
  `#f6f2e8`, ink `#16211b`, forest accent `#1e5a3c`, rust `#b3542f`.
- Fonts are bundled via Fontsource; never add a Google Fonts/CDN `<link>`.
- No tracking, no analytics, no cookies. No external requests at runtime.
- Keep pages semantic and accessible: one `h1` per page, visible focus states,
  `prefers-reduced-motion` respected, print styles intact for `/cv`.

## Content facts (do not invent)

Everything comes from the user's CV: 4 work entries, HNG product project, 2
certifications, LAB University studies, skills and languages. If you add a project or
role, it must be real and supplied by the user. Phone/email are intentionally public on
this site.

## Deploy

```bash
npx vercel --prod
```

GitHub: `AbdKabeer1/abd-kabeer-site` (`main`). Commit after `npm run check` + build.

## Handoff

Update `handoff/` (README/STATUS/DECISIONS/RUNBOOK) at the end of any substantial session.
