---
kind: error_handling
name: No application-level error handling (static site)
category: error_handling
scope:
    - '**'
---

This repository is a Next.js App Router project configured for `next export` output, producing a fully static site. There is no server-side runtime code, API routes, middleware, or dynamic data fetching — all content is loaded from local TypeScript files under `content/`. As a result, the codebase contains zero application-level error handling: no `try`/`catch`, no `throw`, no custom error types, no middleware, no panic/recover, and no error boundaries in any component. The only references to "error" in the source tree are dependency entries in `package-lock.json` (e.g., `es-errors`, `zod-validation-error`) and `.gitignore` rules for `yarn-error.log*`, none of which reflect an implemented strategy. Because the site is entirely static, error handling does not apply.