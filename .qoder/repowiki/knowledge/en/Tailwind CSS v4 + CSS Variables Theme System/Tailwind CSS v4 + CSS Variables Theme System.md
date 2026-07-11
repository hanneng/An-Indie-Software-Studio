---
kind: frontend_style
name: Tailwind CSS v4 + CSS Variables Theme System
category: frontend_style
scope:
    - '**'
source_files:
    - app/globals.css
    - components/ThemeProvider.tsx
    - app/layout.tsx
    - postcss.config.mjs
    - package.json
---

The site uses Tailwind CSS v4 (via @tailwindcss/postcss) as the primary styling engine, combined with a CSS custom properties design-token system for theming. The approach is centered around three layers:

1. Design tokens via CSS variables — app/globals.css defines semantic color and font tokens in :root and .dark selectors (--background, --foreground, --card, --accent, --border, etc.), providing light/dark palettes without duplicating component styles.

2. Tailwind theme mapping — An @theme inline block maps those CSS variables to Tailwind's color/font namespace (--color-background, --color-accent, --font-sans, --font-mono), so components use utility classes like bg-background text-foreground rather than raw hex values.

3. Runtime dark-mode toggle — components/ThemeProvider.tsx is a client component that persists the chosen theme in localStorage, toggles the dark class on <html>, and exposes useTheme() for consumers. The root layout sets className="... dark" by default and injects Geist Sans/Mono fonts as CSS variables (--font-geist-sans, --font-geist-mono).

Key conventions:
- All colors are referenced through Tailwind utilities bound to CSS variables; no hardcoded hex literals in components.
- Dark mode is activated by adding/removing the dark class on the document root, not via Tailwind's dark: variant alone.
- Global transitions (transition: background-color 0.3s ease, color 0.3s ease) are applied to body and * so theme switches animate smoothly.
- Custom animations (count-up, fade-in) live in globals.css as named keyframes with corresponding utility classes (animate-count-up, animate-fade-in).
- Fonts are loaded via next/font/google and exposed as CSS variables consumed by the Tailwind --font-sans / --font-mono tokens.

No separate tailwind.config.* file exists — configuration is done entirely through PostCSS (postcss.config.mjs registers @tailwindcss/postcss) and the @theme inline directive in the stylesheet.