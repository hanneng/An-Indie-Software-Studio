---
kind: build_system
name: Next.js Static Export Build (npm scripts + Next export)
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - next.config.ts
    - postcss.config.mjs
    - eslint.config.mjs
---

This project uses a minimal, npm-script-driven build system centered on Next.js App Router with static-site export. There is no Makefile, Dockerfile, or CI pipeline in the repository — all build and deployment logic lives in `package.json` and `next.config.ts`.

**Build toolchain**
- **Next.js 16** (`next build`) compiles TypeScript/React into a static site.
- `next.config.ts` sets `output: "export"`, which produces a fully static `out/` directory suitable for any static host.
- Tailwind CSS v4 is integrated via `@tailwindcss/postcss` and `postcss.config.mjs`; PostCSS runs as part of the Next build.
- ESLint (`eslint.config.mjs`) provides linting; no separate pre-commit hook is present.
- `wrangler` (^4) is installed as a dev dependency (and `.wrangler/tmp/` exists), indicating Cloudflare Pages/Wrangler was used at some point, but no `wrangler.toml` or `pages.config` is committed.

**Scripts**
- `npm run dev` → `next dev`
- `npm run build` → `next build` (produces `out/`)
- `npm run start` → `next start` (serves the exported static files locally)
- `npm run lint` → `eslint`

**Artifacts**
- `out/` — generated static site (gitignored by default via Next conventions).
- `.next/` — Next build cache (gitignored).
- `.wrangler/tmp/` — Wrangler transient state (gitignored).

**Deployment surface**
The static `out/` output can be deployed to any static host (Cloudflare Pages, Vercel, Netlify, GitHub Pages). No platform-specific configuration is committed; deployment is expected to be configured externally (e.g., through the hosting provider's UI or environment variables).

**Conventions for developers**
- Add new pages under `app/` following the Next.js App Router convention.
- Keep content data in `content/*.ts` and import it from components.
- Run `npm run build` before committing if you need to verify the static export succeeds.
- Do not commit `out/`, `.next/`, or `.wrangler/tmp/`.