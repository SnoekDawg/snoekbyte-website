# Project Status — SnoekByte Website

> Snapshot van de huidige stand van het project. Laatst bijgewerkt: **2026-09-04**.
>
> De release-percentages hieronder zijn de menselijk-leesbare weergave van de
> waarden in `src/app/[locale]/apps/AppsPageClient.tsx` (veld `progress` per app).
> Werk beide bij als een status verandert.

## Live status

- **Productie:** https://snoekbyte.nl (Vercel, native Next.js runtime)
- **Repository:** https://github.com/SnoekDawg/snoekbyte-website (branch `master`)
- **Talen:** EN, NL, DE, FR, ES, PL, CS, SV (8)

## Apps

| App | Release-voortgang | Zichtbaarheid | Detailpagina | Docs |
| --- | --- | --- | --- | --- |
| **BackorderPRO** | 100% — live | Publiek | ✅ `/apps/backorderpro` (+ pricing) | ✅ `/docs/backorderpro` |
| **InvoicerPRO** | 99% — intern werkzaam | Intern | Kaart op `/apps` | — |
| **StockPRO** | 97% — intern, laatste puntjes | Intern | Kaart op `/apps` | — |
| **FeedMapper PRO** | 96,5% — bijna live, laatste testen | Intern | ✅ `/apps/feedmapperpro` (+ pricing) | — |
| **ReturnControlPRO** | 20% — basis staat | Intern | ✅ `/apps/returncontrolpro` | — |

> "Intern" = getoond op de apps-pagina met een "Alleen voor intern gebruik"-melding
> en uitgeschakelde/beperkte knoppen. Percentages en kleurcodering (groen ≥100%,
> blauw ≥90%, oranje <90%) staan in `AppsPageClient.tsx`.

## Case studies

| Case | Status | Pagina | Live platform |
| --- | --- | --- | --- |
| **KarpCore** | Live in productie | `/services/karpcore` | https://karpcore.com |
| **Fit in de Buurt** | Live in productie | `/services/fitindebuurt` | https://fitindebuurt.nl |

## Services

Web Development, Marketing, App Development — `/services` en subpagina's.

## Documentatie / Help center

- Hub: `/docs`
- MDX-gebaseerd, meertalig, met zoekfunctie (Fuse.js).
- Content: `content/docs/<app>/<locale>/*.mdx` (nu BackorderPRO, EN + NL).

## Bekende openstaande punten

- InvoicerPRO en StockPRO hebben nog geen eigen detailpagina of docs.
- Docs bestaan alleen voor BackorderPRO (EN/NL); andere apps en talen volgen nog.
- ReturnControlPRO is een verkoop-/detailpagina; de app zelf is nog in ontwikkeling.
