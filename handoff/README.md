# Project Handoff

## Goal

Personal portfolio website for **Abd Kabeer Salako** built from his latest CV
(`~/Downloads/Abd-Kabeer_Salako_Resume_PM.md`): product & operations profile,
International Business student in Lahti, Finland.

## Deliverables

- [x] Live site: https://abd-kabeer-site.vercel.app
- [x] Source: https://github.com/AbdKabeer1/abd-kabeer-site
- [x] Home: hero, metrics strip, about, experience timeline, projects, skills,
      education/certifications, contact band
- [x] Print-friendly CV page at `/cv` (Print / save as PDF)
- [x] Typed content model in `src/data/profile.ts` (Astro + strict TypeScript)
- [x] SEO: title/description, canonical, Open Graph/Twitter tags, JSON-LD Person, favicon, robots.txt
- [x] Responsive layout, reduced-motion support, accessible focus/skip link

## Acceptance criteria

- `npm run check` → 0 errors / 0 warnings; `npm run build` succeeds.
- `/`, `/cv`, `/favicon.svg` return 200 locally and on Vercel.
- Every fact on the site traces to the CV; no invented roles or metrics.
- Site works without external runtime requests (fonts bundled locally).

## Deadline

- None stated — personal site, soft deadline.

## Constraints

- Stack: Astro + TypeScript, hand-written CSS, no UI kit, static hosting on Vercel.
- Content: CV only; phone/email intentionally public.
- Out of scope (v1): blog, CMS, contact form/email backend, analytics, custom domain.
