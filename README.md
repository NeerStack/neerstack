# NeerStack

Static Next.js site for NeerStack (marketing + client-only admin).

## Develop
```bash
npm install
npm run dev
```

## Brand
**Locked:** Mark C (NS Path) + Kit C.
Active assets in `public/brand/kit/`. Archive (Mark/Kit options) in `public/brand/options/` and `public/brand/kits/`.

## Build / deploy (Netlify)
```bash
npm run build   # writes /out
```

Netlify settings (also in `netlify.toml`):
- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Env:** set `NEXT_PUBLIC_API_URL` in the Netlify site env (see `.env.example`)

Legacy Nuxt backup: `../neerstack-legacy`
