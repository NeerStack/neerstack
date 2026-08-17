---
name: neerstack
description: Product, brand, API, and UI rules for NeerStack. Use when changing NeerStack pages, brand, blog admin, or API integrations.
---

# NeerStack Project Skill

Tagline: **Engineering partners for teams who ship.**

## Stack
- Next.js App Router, TypeScript, Tailwind v4, `output: "export"`, `trailingSlash: true`
- Deploy: **Netlify** (`netlify.toml` → build `npm run build`, publish `out`)
- API: `NEXT_PUBLIC_API_URL` (default `https://codinmage-server.onrender.com`)
- Blog cache: TanStack Query (`src/lib/blog-queries.ts`), staleTime 5m
- Admin posts: markdown editor → `content` (md) + `htmlContent` (marked HTML)
- Contact email: `support@neerstack.com` (`src/content/site.ts`)
- Legal entity: **Neerstack LTD**, RC8530959, registered office in Sango Ota, Ogun State. Public pages: `/legal/privacy/`, `/legal/terms/`, `/legal/cookies/`.

Read AGENTS.md / `node_modules/next/dist/docs/` before unusual Next APIs. This Next may differ from training data.

## Brand (locked)
- **Mark C (NS Path)** + Kit C. Stack red `#E31E24`. Paper `#F7F4EF`. Kit black `#14121A`.
- Fonts: Syne (display), Plus Jakarta Sans (body), IBM Plex Mono (meta).
- Logo chrome: PNG lockups only. `public/brand/kit/lockup-on-light.png` / `lockup-on-dark.png` via `Logo.tsx` `<img>`. Cache-bust `?v=3` (or newer).
- OG image: `public/brand/og.png` (mark + NEERSTACK lockup on void). Never use the brand-board as OG.
- Spelling **NEERSTACK** (N + three-bar E + three-bar E + RSTACK). First E: top+middle red; second E: ink/white.
- Do **not** redraw the mark. Do **not** reconstruct the wordmark in CSS/Syne. Prefer PNG if vector is wrong.
- Theme: light / dark / system → `html.dark`. Semantic paper/ink flip; **`void` / `on-void` stay fixed** for always-dark bands. Not purple SaaS dark.
- No public `/brand/` page. Kit files live under `public/brand/` for chrome only.

## Portfolio
Public list: **PactReach + ProduceMart**. Never list Enitars/MageHub.
Images: `public/images/{hero,contact,producemart}.*` plus `public/images/pactreach/` PNG lockups (baked wordmark, never typed Satoshi/Syne).

## Layout / UI (hard-won)
- Floating island header: page heroes need **`pt-[7.5rem] md:pt-[9rem]`** (or more). Never let titles sit under the nav.
- Prefer **one section** for hero + first content block with **`mt-14 md:mt-20`** before cards/forms. Split hero/`pb-only` content sections cause flush/stacked overlays.
- Card lists: **`flex flex-col gap-8 md:gap-10`** (or grid `gap-8+`). Avoid tiny `space-y` that looks stacked.
- Do **not** put `overflow-hidden` on page heroes (clips Syne display). Use `overflow-x-clip` only where needed (marquees).
- `.reveal` must **not** use `filter: blur` (creates containing blocks that clip headlines / hover).
- `.magnetic-card` is wired in `globals.css` (subtle lift). Keep reduced-motion safe.
- Always-dark strips: `bg-void text-on-void`, not theme-flipping `bg-ink text-paper`.
- Mobile services cards: number + title in one header row; don’t stack full-width bands that look like overlapping sheets.

## Admin
- Client-only (`sessionStorage` token), gated by `AdminShell`.
- Dashboard: stats, recent posts, posts/drafts tables, markdown `PostEditor`.
- Mutations invalidate `["blogs"]` query keys.

## Don’t
- Don’t deploy docs/scripts for Vercel as primary (Netlify is source of truth).
- Don’t invent new logo marks or live Syne wordmarks for chrome.
- Don’t shrink hero top padding below header clearance when “tightening” spacing.
