# Runbook

## Setup

```bash
cd ~/abd-kabeer-site
npm install
```

## Run

```bash
npm run dev        # http://localhost:4321
```

## Test

```bash
npm run check      # Astro + TypeScript diagnostics (expect 0/0)
npm run build      # static build to dist/
npm run preview    # serve dist/ on :4321

# smoke
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:4321/cv
```

Manual QA: check hero on a 375 px viewport, tab through nav links (focus visible),
open `/cv` and use Print → preview looks like an A4 CV.

## Build

```bash
npm run build
# output: dist/  (fully static)
```

## Deploy

- Platform: Vercel (project `abd-kabeer-site`, account `aboki2`).
- Command: `npx vercel --prod`
- URL: https://abd-kabeer-site.vercel.app
- Git: https://github.com/AbdKabeer1/abd-kabeer-site (`main`)

## Environment

- Required env vars: none.
- No secrets in this project. Do not add analytics keys without asking.

## Troubleshooting

- Port 4321 busy: `pkill -f "astro dev"` or `npm run dev -- --port 4322`.
- Fonts look wrong: confirm `@fontsource-variable/syne`, `inter` and
  `jetbrains-mono` imports remain in `Base.astro` and that `dist/_astro/*.woff2` files
  were generated.
- Print layout broken: check `@media print` block at the end of `styles/global.css`.
- Vercel stale build: redeploy with `npx vercel --prod`; build is static so no cache
  issues beyond CDN (hard refresh).
