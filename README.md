# WINTERGARDEN

Next-generation music performance intelligence platform — homepage.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS v3 (fully overridden palette)
- Framer Motion (LazyMotion, domAnimation bundle)
- next/font (Bebas Neue, Cormorant Garamond, DM Mono)
- Lucide React (used minimally)

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Vercel

The app must build from the **repository root** where this `package.json` and the `app/` directory live.

In the Vercel project: **Settings → General → Root Directory** should be empty (or `.`). If it was set to `WintergardenApp` or another path from an iOS-only layout, clear it — otherwise `next build` runs in a folder with no `app/` and fails.

Use the **`main`** branch (or whichever branch contains the Next.js tree) for Production Deployments.

## Design laws

- Zero border-radius anywhere.
- Only palette tokens defined in `tailwind.config.js` and `app/globals.css`.
- Tiffany green is functional, never decorative.
- Everything left-aligned except the final CTA.
- Grain overlay is always present at z-index 9999, `pointer-events: none`.
- Custom cursor (square, 6×6px → 20×20px tiffany outline on interactive).
