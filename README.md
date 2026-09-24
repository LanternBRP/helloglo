# Glo by Lantern website

Glo’s public marketing website, built with React 19, TypeScript, Vite, Tailwind CSS, Wouter, and an Express static server.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The Vite development server runs on port 3000 by default.

## Validation and production build

```bash
pnpm check
pnpm build
pnpm start
```

The production build creates the browser bundle in `dist/public`, prerenders canonical and compatibility routes into route-specific HTML, and bundles the static Express server as `dist/index.js`.

## Architecture

- `client/src/pages/`: public route components
- `client/src/components/`: shared navigation, footer, narrative, and UI components
- `client/src/index.css`: global design system and responsive rules
- `client/public/sitemap.xml`: preferred canonical route inventory
- `scripts/prerender.mjs`: build-time route prerendering
- `server/index.ts`: static production server that prefers route-specific prerendered HTML

## Engineering handoff

Read [`ENGINEERING_HANDOFF.md`](./ENGINEERING_HANDOFF.md) before production deployment. It documents the remaining secure Contact Us and Book a Demo email endpoint, SEO clean-route serving, required abuse controls, and the full responsive-validation rule.

## Security

Do not commit `.env` files, API keys, email-provider credentials, or private customer data. The repository snapshot contains no live email credential and no exposed internal form recipient.
