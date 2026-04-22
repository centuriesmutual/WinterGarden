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

## Design laws

- Zero border-radius anywhere.
- Only palette tokens defined in `tailwind.config.js` and `app/globals.css`.
- Tiffany green is functional, never decorative.
- Everything left-aligned except the final CTA.
- Grain overlay is always present at z-index 9999, `pointer-events: none`.
- Custom cursor (square, 6×6px → 20×20px tiffany outline on interactive).
