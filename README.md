# SnoekByte Website

Marketing website for SnoekByte, built with Next.js 14 (App Router) and Tailwind CSS.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production Domain

Primary production domain:

```text
https://snoekbyte.nl
```

Keep all canonical URLs, sitemap entries, and robots references aligned with this domain.

## Hosting and Deployments

This project is hosted on Vercel and uses the native Next.js runtime (including middleware for locale redirects).

### Recommended branch flow

- `master`: production
- Feature branches: preview deployments (automatic in Vercel)

### Deployment process

1. Push branch to GitHub.
2. Vercel creates a preview deployment for non-`master` branches.
3. Merge to `master` to deploy to production.
4. Validate:
   - homepage and locale redirects (`/` -> `/en/`)
   - `https://snoekbyte.nl/sitemap.xml`
   - `https://snoekbyte.nl/robots.txt`

## Environment Variables

No required runtime environment variables are currently documented in this repository.

If new variables are introduced:

- add them in Vercel Project Settings (Preview + Production as needed)
- document them in this README with purpose and example values
- avoid committing any `.env*` files containing secrets

## Useful Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run start` - run production build locally
- `npm run lint` - run ESLint
