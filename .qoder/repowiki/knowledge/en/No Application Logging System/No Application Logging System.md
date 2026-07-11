---
kind: logging_system
name: No Application Logging System
category: logging_system
scope:
    - '**'
---

This repository is a Next.js static site project (hanneng.net) built with the App Router, Tailwind CSS v4, and TypeScript. After searching the entire codebase for logging-related patterns — including console.log/error/warn/info calls, logger imports, structured logging frameworks (winston, pino, bunyan), debug statements, and dedicated log/logging directories — no application-level logging system was found. The project contains only UI components, content files, and build configuration; it produces a statically exported site via `next export` and has no server-side runtime where logging would typically be configured. While the dependency tree includes the `debug` package (a transitive dependency of other tools like ESLint or PostCSS), it is not imported or used anywhere in the source code. There are no conventions, configurations, or files related to producing, structuring, or routing log output.