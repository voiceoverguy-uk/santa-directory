# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the SantaDirectory.co.uk project — a curated directory for professional Santa performers across the UK — along with shared libraries and an API server scaffold.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── santa-directory/       # Next.js App Router site (main project)
│   ├── api-server/            # Express API server (scaffold)
│   └── mockup-sandbox/        # Component preview server
├── lib/                       # Shared libraries
│   ├── api-spec/              # OpenAPI spec + Orval codegen config
│   ├── api-client-react/      # Generated React Query hooks
│   ├── api-zod/               # Generated Zod schemas from OpenAPI
│   └── db/                    # Drizzle ORM schema + DB connection
├── scripts/                   # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## SantaDirectory.co.uk (`artifacts/santa-directory`)

### Tech Stack
- **Framework**: Next.js 15 App Router (no Express, no Vite)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Database**: PostgreSQL via Drizzle ORM (local schema, not shared lib/db)
- **Primary color**: #9C060B (VoiceoverGuy brand red)
- **Design**: Premium Christmas aesthetic — cream, dark green, gold accents, charcoal text

### Custom Colors (defined in `src/app/globals.css` via `@theme` block)
- `--color-brand`: #9C060B (main red)
- `--color-brand-dark`: #7A0509
- `--color-brand-light`: #C4282D
- `--color-cream`: #FDF8F0
- `--color-charcoal`: #2D2D2D
- `--color-charcoal-light`: #5A5A5A
- `--color-forest`: #1B4332
- `--color-gold`: #C5961A

### Key Directories
```
src/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage (hero, trust strip, featured, CTA)
│   ├── globals.css             # Tailwind v4 theme with brand palette
│   ├── santas/
│   │   ├── page.tsx            # Listings page with search/filters
│   │   ├── SantasListClient.tsx # Client component for filtering
│   │   └── [slug]/page.tsx     # Individual Santa profile
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── locations/page.tsx      # Regional SEO hub
│   ├── list-your-profile/page.tsx
│   └── api/
│       ├── santas/route.ts         # GET all santas
│       ├── santas/[slug]/route.ts  # GET santa by slug
│       └── enquiries/route.ts      # POST enquiry
├── components/
│   ├── Header.tsx, Footer.tsx
│   ├── Hero.tsx, SearchBar.tsx
│   ├── ListingCard.tsx, BadgePill.tsx
│   ├── CTABlock.tsx, EnquiryForm.tsx
│   ├── Gallery.tsx, TrustStrip.tsx
│   ├── HowItWorks.tsx, SearchFilterBar.tsx
│   └── ProfileSection.tsx
└── db/
    ├── index.ts                # Drizzle client + pool
    ├── schema.ts               # santa_listings + enquiries tables
    └── seed.ts                 # 8 sample Santa profiles (AI-generated images)
```

### Database Tables
- **santa_listings**: slug, name, headline, type (voice/lookalike), bio, experience, services (jsonb), location, region, badges (booleans), pricing, images, youtube/audio URLs, social links, approved flag
- **enquiries**: name, email, phone, message, type, santa_slug, timestamps

### Images
- Profile images and gallery photos are AI-generated and stored in `public/images/santas/`
- Hero background: `public/images/christmas-bg.jpg` (winter scene at 50% opacity behind brand red overlay)
- All image references in seed data use local `/images/santas/` paths (no external URLs)

### Running
- Dev: `pnpm --filter @workspace/santa-directory run dev` (reads PORT env var)
- Seed: `pnpm --filter @workspace/santa-directory run seed`
- Build: `pnpm --filter @workspace/santa-directory run build`

### Pages
1. `/` — Homepage with hero, trust indicators, featured Santas, CTA
2. `/santas` — Full listings with client-side search and filter
3. `/santas/[slug]` — Individual profile with gallery, video, audio, enquiry form
4. `/about` — About page
5. `/contact` — Contact form with enquiry types
6. `/locations` — Regional hub (London, Manchester, Birmingham, etc.)
7. `/list-your-profile` — Santa registration info page

## Other Packages

### `artifacts/api-server` (`@workspace/api-server`)
Express 5 API server scaffold. Not used by SantaDirectory (which uses Next.js API routes).

### `lib/db` (`@workspace/db`)
Shared database layer using Drizzle ORM. Note: SantaDirectory has its own local db setup in `src/db/`.

### `lib/api-spec` (`@workspace/api-spec`)
OpenAPI 3.1 spec and Orval codegen config.
