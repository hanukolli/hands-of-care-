# Hands of Care — Website

A Next.js (App Router) + Tailwind CSS website for Hands of Care, built
around your real logo and brand colors.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (The first run needs internet access once
to download the Google Fonts used: Fraunces, Inter, and IBM Plex Mono.)

## Editing the site yourself

**For text, numbers, team members, and contact info** — edit one file:
`lib/content.ts`. It has plain-English fields like team member names,
the email address, the Instagram handle, and impact stats. Change a value,
save, and the site updates everywhere it's used. No need to touch any
component file for these.

**For colors** — edit `tailwind.config.ts`. The palette is pulled straight
from your logo:
- `teal` — the deep teal from the wordmark and left hand
- `rose` — the heart's rose/pink
- `gold` — the coral/peach from the right hand and "INITIATIVE" text
- `sage` — the lighter mint-teal accent

**For the logo** — three versions live in `public/`:
- `logo.png` — your original logo, white background
- `logo-transparent.png` — the full logo (icon + wordmark + tagline), background removed
- `logo-icon.png` — just the hands + heart icon, background removed (used in the header, footer, and as the faded hero watermark)

**For headline wording, the hero note card, and section headings** — these
live directly in each file under `components/` (e.g. `components/Hero.tsx`,
`components/Mission.tsx`) since they mix in styling like italics. Look for
plain sentences inside the JSX — they're safe to edit directly.

## Structure

- `app/page.tsx` — assembles all sections
- `lib/content.ts` — editable text, numbers, and contact info
- `components/` — one file per section
- `components/Tag.tsx` — the reusable "tag" shape used throughout (hero,
  package categories, team cards, city labels) — a nod to both hospital
  wristbands and gift tags
- `components/Reveal.tsx` — fades sections in as you scroll
- `components/CountUp.tsx` — animates the impact stats counting up
- `components/Parallax.tsx` — tilts the hero card slightly toward your cursor
- `app/globals.css` — global styles and the tag's punch-hole/shape utilities

## Deploy

The easiest path is [Vercel](https://vercel.com): push this folder to a
GitHub repo, import it in Vercel, and it deploys automatically — see the
walkthrough your Claude conversation gave you, or Vercel's own docs.
