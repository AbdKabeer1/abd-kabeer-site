# Decisions

Record choices the next agent should not re-litigate without a reason.

## 2026-10-20 — Astro + TypeScript, hand-written CSS

- Context: user asked for a "very dope and decent" site in a well-organised, typed stack.
- Options: Next.js + Tailwind, Astro + Tailwind, Astro + custom CSS, plain static HTML.
- Chosen: Astro static output + strict TypeScript + one hand-written CSS system.
- Why: content-driven site needs no client framework; Astro ships near-zero JS; typed
  `profile.ts` keeps all résumé data in one place; custom CSS avoids generic UI-kit look.
- Trade-off: no component library to accelerate future features; fine for one page + CV.
- Revisit if: the site grows into a blog/CMS → add Astro Content Collections, not a SPA.

## 2026-10-20 — AI literacy + CV PDF + social card

- Context: user asked to add AI capabilities (frontend building, automation, UI/UX,
  prompting) and to apply recommendations to the site.
- Chosen: dedicated "AI literacy & automation" skills group; AI line in summary/about
  and marquee; real `public/cv.pdf` generated from the print page; purpose-made
  1200×630 OG card with Syne display type; Twitter `summary_large_image`.
- Trade-off: AI claims are framed as tool-assisted workflow (truthful for the shipped
  projects) rather than a formal credential; add a certificate if one is earned later.

## 2026-10-20 — Project previews

- Context: project cards were text-only; user approved screenshots.
- Chosen: capture live sites with headless Chrome (1440×900), store PNG in
  `src/assets/previews/`, render via `astro:assets` `<Image>` with responsive widths
  and WebP (≈20–30 KB each). SME Inventory Tracker has no public build, so it gets a
  custom 2045-style concept SVG labelled "concept visual".
- Trade-off: previews are static images (no hover-video); re-capture when a game's
  landing UI changes.

## 2026-10-20 — Superseded: "2045" futuristic interface

- Context: user rejected the warm editorial direction as generic; asked for a motion-led,
  futuristic look ("year 2045") and for both shipped games to appear in Projects.
- Chosen: void background, lime signal accent, HUD panel in hero, Syne/Inter/JetBrains
  Mono, kinetic wordmark, drifting grid, scanlines, pointer spotlight, counters,
  marquee, card tilt. Current CSS tokens supersede the paper/forest palette.
- Trade-off: dark, motion-heavy design is less conventional for a PM portfolio; kept
  legibility and a printable light CV to balance it. All motion is reduced-motion safe.
- Revisit if: recruiters report readability issues → keep layout, soften motion/font
  sizes rather than reverting to the editorial direction.

## 2026-10-20 — Games added; Suomi Sniper not hosted on Vercel

- Context: user asked to include both Three.js games and to use their own live URLs.
- Chosen: project cards link to https://streetpk-naija.start.ng/ and
  https://suomi-sniper.start.ng/ with GitHub repos. Suomi Sniper's Vercel project was
  deleted per the user's instruction; its repo was synced and pushed. Naija's Vercel
  deployment is left as a backup but is not used on the site.
- Trade-off: game previews are text-only (no screenshots yet).

## 2026-10-20 — Design direction: warm editorial, forest/ink palette

- Context: must feel personal and professional, not "AI template".
- Chosen: paper background `#f6f2e8`, ink `#16211b`, forest accent `#1e5a3c`, serif
  display (Fraunces) + Inter, hairline dividers, metric strip, restrained scroll reveals.
- Trade-off: light theme only (no dark toggle) to keep the editorial identity coherent.
- Revisit if: user asks for dark mode → add token set + toggle, keep typography.

## 2026-10-20 — CV via printable page, not generated PDF

- Context: no PDF of the CV existed; recruiter-friendly download is valuable.
- Options: Playwright-generated PDF at build; printable `/cv` page; link to external doc.
- Chosen: `/cv` page with print CSS and a "Print / save as PDF" button.
- Trade-off: no direct `.pdf` file to attach in applications yet.
- Revisit if: user wants a one-click download → generate `public/cv.pdf` with Playwright
  and keep `/cv` as the HTML mirror.

## 2026-10-20 — Content source

- Chosen: `~/Downloads/Abd-Kabeer_Salako_Resume_PM.md` (latest) as the only fact source.
- Note: MyMemo is included as a real shipped side project (live + source links), matching
  the PM profile. Do not add metrics that are not on the CV.

## Open questions

- Should the phone number stay public (currently visible on site + CV)?
- Does the user want a custom domain, and which TLD?
