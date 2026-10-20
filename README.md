# Abd Kabeer Salako — personal site

Editorial portfolio for a product & operations profile. Built with **Astro + TypeScript**,
content typed in one file, design hand-crafted in CSS (no UI kit, no client framework).

**Live:** https://abd-kabeer-site.vercel.app
**Repo:** https://github.com/AbdKabeer1/abd-kabeer-site

## Stack

- **Astro 5** — static output, zero JS framework, tiny runtime
- **TypeScript** — strict mode; content model in `src/data/profile.ts`
- **Bundled fonts** — Syne (display), Inter (body), JetBrains Mono (labels) via Fontsource
- Hand-written CSS design system (`src/styles/global.css`)

## Run

```bash
cd ~/abd-kabeer-site
npm install
npm run dev        # http://localhost:4321
npm run build      # static build -> dist/
npm run preview    # preview the build
npm run check      # astro check + TypeScript diagnostics
```

## Edit content

Everything lives in **`src/data/profile.ts`**:

- name, role, location, email, phone, summary, intro
- metrics strip
- experience entries (company, role, period, bullets)
- projects (with optional links)
- certifications, education, skills, languages

No component edits needed for content changes.

## Structure

```
src/
  data/profile.ts        # single source of truth (typed)
  layouts/Base.astro     # head, SEO, JSON-LD, header/footer, reveal script
  pages/index.astro      # home
  pages/cv.astro         # print-friendly CV (Print / save as PDF)
  pages/404.astro
  styles/global.css      # design tokens + components + print styles
public/                  # favicon, robots.txt
```

## Deploy

Vercel (zero config; Astro detected automatically):

```bash
cd ~/abd-kabeer-site
npx vercel --prod
```

## Design notes

- **2025-2045 interface**: void background, lime signal accent, HUD framing, scanlines
- Display type **Syne**, body **Inter**, labels **JetBrains Mono** (all bundled)
- Motion: wordmark line reveal, drifting grid, pointer spotlight, scroll reveals,
  animated metric counters, marquee, project-card tilt — all disabled under
  `prefers-reduced-motion`
- Projects include the two shipped Three.js games (Naija Penalty, Suomi Sniper) plus
  MyMemo and the HNG inventory product
- CV page is A4-printable; "Print / save as PDF" in the toolbar
