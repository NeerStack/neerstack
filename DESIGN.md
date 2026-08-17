# NeerStack Design System

## Selected brand
**Mark C: NS Path** + exact **NEERSTACK** wordmark (locked).

Metaphor: N + S form a navigation path through the stack: direction and engineered structure.

## Palette
- ink `#14121A`, ink-soft `#3A3644`, muted `#6E6878`
- paper `#F7F4EF`, paper-2 `#EFEAE2`, line `#DDD6CB`
- accent `#E31E24`, accent-deep `#B3141E`
- void / on-void: always-dark bands (do not theme-flip)

## Typography
- Display: Syne
- Body: Plus Jakarta Sans
- Mono: IBM Plex Mono

## Assets
- Kit folder: `public/brand/kit/` (active mark, PNG lockups, favicon, app icon, board)
- Site chrome: `lockup-on-light.png` / `lockup-on-dark.png` via `Logo.tsx` `<img>`
- OG / favicon: `public/brand/og.png` (mark + wordmark lockup on void), `public/brand/favicon.png`
- Archive only: `public/brand/options/`, `public/brand/kits/`

Never redraw the mark. Do not reconstruct the wordmark in CSS: use kit PNGs. Spelling is **NEERSTACK**.

## Layout
- Island header clearance: heroes `pt-[7.5rem] md:pt-[9rem]+`
- Hero + content: prefer one section; `mt-14 md:mt-20` before cards
- Card stacks: generous `gap-8+`; no hero `overflow-hidden`; no blur on `.reveal`

## Principles
Brand-first hero, one job per section, frosted readable header, purposeful motion, prefer-reduced-motion respected.
