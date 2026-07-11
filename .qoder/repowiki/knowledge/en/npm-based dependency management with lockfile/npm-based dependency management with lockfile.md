---
kind: dependency_management
name: npm-based dependency management with lockfile
category: dependency_management
scope:
    - '**'
source_files:
    - package.json
    - package-lock.json
    - .gitignore
---

This project uses npm as its package manager for a small Next.js static site. Dependencies are declared in `package.json` and pinned to exact versions via the committed `package-lock.json` (lockfileVersion 3), ensuring reproducible installs across environments.

**System used**: npm + `package-lock.json`. No vendoring, private registries, or proxy configuration is present — all packages resolve from the public npm registry.

**Key files**:
- `package.json` — declares runtime dependencies (`next`, `react`, `react-dom`, `lucide-react`) and dev dependencies (`tailwindcss`, `@tailwindcss/postcss`, `typescript`, `eslint`, `wrangler`).
- `package-lock.json` — full transitive dependency tree with integrity hashes; committed to version control.
- `.gitignore` — ignores `node_modules/`, `.pnp`, Yarn/PnP artifacts, build outputs (`.next/`, `/out/`), and environment files.

**Conventions observed**:
- Runtime vs. dev dependencies are cleanly separated into `dependencies` and `devDependencies`.
- Versions use caret ranges (`^1.24.0`, `^5`, `^9`, `^4`) for dev tools while pinning core framework/runtime packages to exact semver (`next: 16.2.10`, `react: 19.2.4`, `react-dom: 19.2.4`, `eslint-config-next: 16.2.10`).
- The project is marked `"private": true`, preventing accidental publication.
- Build tooling is aligned with the Next.js major version (e.g., `eslint-config-next` matches `next`'s version).
- `wrangler` is included as a dev dependency, indicating Cloudflare Workers deployment support alongside Vercel.

**Rules developers should follow**:
- Keep `package-lock.json` in sync with `package.json`; do not commit `node_modules/`.
- Prefer exact versions for production-critical packages (Next, React) and caret ranges for tooling.
- Add new packages under the appropriate `dependencies` / `devDependencies` section only.