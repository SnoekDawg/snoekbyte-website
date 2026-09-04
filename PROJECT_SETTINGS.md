# Project Settings — SnoekByte Website

Naslag voor configuratie, hosting en werkwijze. Voor de inhoudelijke stand van
zaken zie `PROJECT_STATUS.md`; voor de wijzigingsgeschiedenis zie `CHANGELOG.md`.

## Overzicht

| Onderdeel | Waarde |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS |
| Hosting | Vercel (native Next.js runtime, incl. middleware) |
| Repository | https://github.com/SnoekDawg/snoekbyte-website |
| Productiedomein | https://snoekbyte.nl |
| Productiebranch | `master` |
| Talen | EN, NL, DE, FR, ES, PL, CS, SV (8) |

## Talen & i18n

- UI-teksten: `src/lib/i18n.ts`, types in `src/types/index.ts`.
- Pagina-specifieke content per taal via `Record<Locale, ...>`-bestanden in `src/lib/`
  (bijv. `karpcore-content.ts`, `returncontrolpro-content.ts`, `fitindebuurt-content.ts`).
- Locale-redirect (`/` → `/en/`) loopt via `src/middleware.ts`.
- Bij een nieuwe taal of pagina: voeg de locale toe aan `generateStaticParams` en aan
  alle content-records; anders faalt de build.

## Deployproces

1. Wijzigingen committen op een branch.
2. Push naar GitHub → Vercel maakt automatisch een **preview-deployment** voor niet-`master`-branches.
3. Merge naar `master` → productie-deploy.
4. Handmatige productie-deploy (indien nodig): `vercel --prod --yes`
   (vereist ingelogde Vercel CLI; anders eerst `vercel login`).
5. Valideer na deploy:
   - homepage en locale-redirect (`/` → `/en/`)
   - `https://snoekbyte.nl/sitemap.xml`
   - `https://snoekbyte.nl/robots.txt`

> Let op: automatische GitHub→Vercel-deploy is in het verleden niet altijd getriggerd.
> Bij twijfel: handmatig `vercel --prod --yes` draaien.

## Vercel-projectinstellingen

- Beheerd op het Vercel-dashboard (niet in git; `.vercel/` staat in `.gitignore`).
- Domein `snoekbyte.nl` is als alias gekoppeld aan de productie-deployment.

## Environment variables

- Er zijn momenteel **geen** verplichte runtime-env-vars in de repo gedocumenteerd.
- `.env*`-bestanden worden **niet** gecommit (secrets horen niet in git).
- Nieuwe variabele introduceren?
  1. Toevoegen in Vercel Project Settings (Preview + Production waar nodig).
  2. Documenteren in dit bestand (doel + voorbeeldwaarde, geen echte secret).

## Belangrijke mappen

| Pad | Inhoud |
| --- | --- |
| `src/app/[locale]/` | Routes per taal (apps, services, docs, contact, privacy, …) |
| `src/lib/` | i18n en per-pagina content-records |
| `src/components/` | UI-, layout-, mdx- en docs-componenten |
| `content/docs/<app>/<locale>/` | MDX-documentatie voor het help-center |
| `public/images/` | Statische afbeeldingen (per app/case) |

## Scripts

- `npm run dev` — lokale dev-server
- `npm run build` — productie-build
- `npm run start` — productie-build lokaal draaien
- `npm run lint` — ESLint

## Conventies

- Nieuwe app op de apps-pagina: type in `src/types/index.ts`, teksten in
  `src/lib/i18n.ts` (alle 8 talen), kaart in `AppsPageClient.tsx` met `progress`-waarde.
- Nieuwe case study: content-record in `src/lib/`, route onder
  `src/app/[locale]/services/<slug>/`, kaart in `ServicesPageClient.tsx`, route in `sitemap.ts`.
- Houd canonical-URL's, sitemap en robots in lijn met `https://snoekbyte.nl`.
