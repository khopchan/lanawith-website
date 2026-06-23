# AGENTS.md

## Cursor Cloud specific instructions

### Product
- Single product: `lanawith` (ラナウィズ) — a static marketing site for a handmade granola brand. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui. Package manager is **pnpm**.
- Frontend only: no backend, no database, no environment variables, no auth. Pages live in `app/` (`/`, `/about`, `/donuts`, `/donuts/oatmeal-donuts`).

### Run / build (single service)
- Dev server: `pnpm dev` → http://localhost:3000 (the only service; this is the end-to-end entry point).
- Build: `pnpm build` (see `package.json` scripts).

### Non-obvious caveats
- `pnpm build` will NOT fail on type or lint errors: `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true`. Type-check separately with `pnpm exec tsc --noEmit` if you need real type validation.
- `pnpm lint` currently does NOT work out of the box: the `lint` script is `eslint .`, but `eslint` is not a dependency and there is no ESLint config in the repo. Treat lint as unconfigured rather than broken-by-your-change.
- No automated test framework is configured (no Jest/Vitest/Playwright). Verify changes by running `pnpm dev` and checking the rendered pages.
- Brand wordmark on the site is standardized to `LANA WITH.` (all caps, trailing period). The katakana reading `ラナウィズ`, image `alt` text, the YouTube iframe `title`, and external URLs/emails (`instagram.com/lanawith_`, `lanagranola.base.shop`, `lana.with.granola@gmail.com`) are intentionally left as-is.
- `README.md` is stale: it describes an older static `index.html` + Tailwind-CDN version, which does not match the current Next.js app.
