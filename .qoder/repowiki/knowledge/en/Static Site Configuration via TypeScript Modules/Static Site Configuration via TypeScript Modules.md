---
kind: configuration_system
name: Static Site Configuration via TypeScript Modules
category: configuration_system
scope:
    - '**'
source_files:
    - next.config.ts
    - package.json
    - content/projects.ts
    - content/notes.ts
    - content/roadmap.ts
---

This repository does not use a traditional runtime configuration system (no `.env` files, no config loader, no feature flags). Instead, it is a static Next.js site built with `next export`, and all site-level configuration is baked in as TypeScript modules at build time.

**Build-time configuration**
- `next.config.ts` — the only framework-level configuration; sets `output: "export"` for static generation. No environment variables are read here.
- `package.json` scripts (`dev`, `build`, `start`, `lint`) drive the build pipeline; there is no separate deploy or environment-specific script set.
- `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs` configure the toolchain but do not load external values.

**Content-as-configuration pattern**
Site content that would typically live in a CMS or env file is stored as plain TypeScript data modules under `content/`:
- `content/projects.ts` — typed project list with status/category/tag metadata consumed by the Projects component.
- `content/notes.ts` — monthly note entries consumed by the Notes component.
- `content/roadmap.ts` — structured roadmap sections (`now` / `next` / `future`) consumed by the Roadmap component.

These modules are imported directly by components/pages at build time; because the site is statically exported, there is no runtime config loading path.

**Environment variables**
The repo contains no `.env*` files (they are gitignored) and no code reads `process.env`. Any future environment-driven behavior would need to be wired into `next.config.ts` or a dedicated config module, since the current static-export setup has no runtime config resolution.

**Conventions for developers**
- Treat `content/*.ts` as the single source of truth for site content; add new types and exports there rather than hardcoding strings in components.
- Keep `next.config.ts` minimal; any new Next.js options belong there.
- If runtime configuration becomes necessary, introduce a small config loader early (e.g., a `config.ts` that reads `process.env` and validates defaults) before adding more scattered env access.