import type { Locale } from '@/types';

interface NamedItem {
  title: string;
  text: string;
}

interface TechRow {
  layer: string;
  tech: string;
}

interface MetricRow {
  label: string;
  value: string;
}

export interface FitInDeBuurtContent {
  title: string;
  hero: {
    eyebrow: string;
    badge: string;
    headline: string;
    sub: string;
    trustLine: string;
    badges: string[];
    viewSite: string;
    meta: MetricRow[];
  };
  stats: { value: string; label: string }[];
  problem: { title: string; paragraphs: string[] };
  solution: { title: string; intro: string; audiences: NamedItem[]; note: string };
  choices: { title: string; intro: string; items: NamedItem[] };
  highlights: { title: string; intro: string; items: NamedItem[] };
  underTheHood: { title: string; intro: string; techStack: TechRow[]; principles: string[]; layerLabel: string; techLabel: string };
  quality: { title: string; intro: string; metrics: MetricRow[]; metricLabel: string; sizeLabel: string; points: NamedItem[] };
  roadmap: { title: string; status: string; nextLabel: string; items: string[] };
  midCta: { title: string; button: string };
  cta: { title: string; subtitle: string; body: string; button: string };
  liveUrl: { label: string; href: string };
}

const LIVE = { label: 'fitindebuurt.nl', href: 'https://fitindebuurt.nl' };

const content: Record<Locale, FitInDeBuurtContent> = {
  nl: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Leadplatform voor lokale sportstudio\u2019s',
      badge: 'Case study · Live in productie',
      headline: 'Van leeg scherm naar de eerste klant live \u2014 in acht dagen.',
      sub: 'Fit in de Buurt is een leadplatform voor lokale sportstudio\u2019s: landingspagina\u2019s die converteren, een portaal om gebelde leads op te volgen, een gids op postcode en de facturatie eromheen. Ontwerp, bouw, database, hosting en beheer \u2014 solo gebouwd.',
      trustLine: 'Live op fitindebuurt.nl · Row-level security op alles wat privé is · Next.js 16, React 19, Supabase',
      badges: ['Live op fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Bekijk het live platform',
      meta: [
        { label: 'Rol', value: 'Ontwerp, bouw, database, hosting & beheer (solo)' },
        { label: 'Periode', value: 'Augustus 2026 · 8 dagen tot eerste klant live' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Live', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'dagen tot de eerste klant live' },
      { value: '±33k', label: 'regels TypeScript (265 bestanden)' },
      { value: '464', label: 'geautomatiseerde testen' },
      { value: 'Live', label: 'eerste echte klant in productie' },
    ],
    problem: {
      title: 'Het probleem',
      paragraphs: [
        'Een kleine sportstudio adverteert lokaal, stuurt mensen naar haar Instagram of naar een algemene website, en verliest ze daar. Wie wél reageert komt binnen via een DM, een mailtje of een appje; de eigenaar houdt in haar hoofd bij wie ze nog moet terugbellen. Twee dagen later is de helft vergeten en is de interesse weg.',
        'De drie dingen die daarvoor bestaan lossen elk maar een stukje op. Een website-bouwer levert een pagina zonder opvolging. Een CRM is te zwaar voor iemand met een handvol leads per maand. Een linktree geeft geen enkel inzicht. En alles wat wél werkt, zet de persoonsgegevens van haar klanten op een plek waar zij geen zeggenschap over heeft.',
      ],
    },
    solution: {
      title: 'Wat het geworden is',
      intro: 'Eén platform dat drie soorten bezoekers tegelijk bedient \u2014 de sporter, de studio en de beheerder.',
      audiences: [
        {
          title: 'Voor de sporter',
          text: 'De homepage is een gids: vul je postcode in en zie welke studio\u2019s, sportscholen, salons en praktijken het dichtst bij je zitten, met afstand, ervaringen en een knop naar het boekingssysteem of de leadpagina van die studio. Zonder cookies, zonder account, zonder dat we opslaan waar iemand naar zoekt.',
        },
        {
          title: 'Voor de studio',
          text: 'Een eigen leadpagina op naam.fitindebuurt.nl én fitindebuurt.nl/naam, gebouwd uit blokken en afgestemd op haar huisstijl. Wie zijn nummer achterlaat staat meteen in haar portaal, met een mail erbij. In dat portaal staat één lijst: wie moet ik bellen. Per lead houdt het systeem belpogingen bij, kun je met een notitie snoozen, en markeer je hem als gewonnen of weggedrukt.',
        },
        {
          title: 'Voor de beheerder',
          text: 'Een editor waarin ik een klantpagina opbouw en publiceer, statistiek per versie van die pagina, en facturatie met abonnementen, nummering, PDF\u2019s en een nachtelijke cronjob.',
        },
      ],
      note: 'Er staat nergens een belknop of een tel:-link. Dat is de hele opzet: een bezoeker laat zijn gegevens achter en de studio belt terug. Zo weet de eigenaar wie er geïnteresseerd was, ook als het gesprek niet meteen lukt.',
    },
    choices: {
      title: 'Vier keuzes die het project bepalen',
      intro: 'Beslissingen die door de hele codebase heen doorwerken \u2014 en het verschil maken tussen af en afgeraffeld.',
      items: [
        {
          title: 'Scheiding tussen klanten zit in de database, niet in de interface',
          text: 'Elke pagina heeft één eigenaar. Row-level security in Postgres bepaalt wie welke rij ziet; de app kan het niet omzeilen, ik ook niet. Er draait een testsuite die met echte inloggegevens van twee eigenaren probeert om elkaars leads te lezen, te wijzigen en te verwijderen. Zonder die groene test gaat er niets live.',
        },
        {
          title: 'De inhoud van een pagina staat op twee plekken, met opzet',
          text: 'Het sjabloon is een getypt bestand dat afsluit met satisfies LandingPagina \u2014 mist er een tekst, dan faalt de build. Wat ik in de editor aanpas komt als overlay in de database en valt bij het renderen over het sjabloon heen. Zo houd ik de garanties van de compiler én kan ik teksten wijzigen zonder te deployen.',
        },
        {
          title: 'Publiceren gaat onder een naam, cijfers horen bij een versie',
          text: 'Elke publicatie is een onveranderlijke rij in pagina_versies. De dagtellers onthouden per versie wat er geteld is, dus ik kan zien wat "Kortere hero" opleverde tegenover "Zomeractie", en een oude versie met één klik terugzetten als concept.',
        },
        {
          title: 'Alles in het Nederlands, tot in de database',
          text: 'Kolommen heten belpogingen, snooze_tot, weggedrukt_op. Dat leest voor de klant en voor mij hetzelfde, en het houdt de afstand klein tussen wat we in een gesprek zeggen en wat er in de code staat.',
        },
      ],
    },
    highlights: {
      title: 'Drie onderdelen om uit te lichten',
      intro: 'De plekken waar de meeste denk- en bouwtijd in ging.',
      items: [
        {
          title: 'De pagina-editor',
          text: 'Links een voorvertoning die meetypt, rechts de pagina van boven naar beneden: per blok één paneel met álles wat erbij hoort. Teksten pas je ook in de voorvertoning zelf aan: aanwijzen, klikken, typen \u2014 een bezoeker krijgt exact dezelfde HTML. De accentkleur staat in één CSS-variabele; met color-mix volgen daar vijf tinten uit, zodat elk blok bij elke huisstijl klopt.',
        },
        {
          title: 'De gids op postcode',
          text: 'Postcodes gaan naar de Locatieserver van het Kadaster (PDOK): open, gratis, geen sleutel. Wat terugkomt bewaren we in een eigen tabel, dus een tweede bezoeker met dezelfde postcode kost geen verzoek meer. Postgres rekent de afstand uit en geeft alleen studio\u2019s terug die aan alle voorwaarden voldoen. Van de bezoeker bewaren we niets: geen cookie, geen IP.',
        },
        {
          title: 'Facturatie',
          text: 'Abonnementen per klant, automatische concepten uit een nachtelijke run, een factuurnummerreeks die niet mag springen, bedragen in centen, btw per regel en een PDF in de opslag. Een verstuurde factuur is bevroren: databasetriggers weigeren elke wijziging, omdat een verzonden factuur zeven jaar hetzelfde hoort te blijven.',
        },
      ],
    },
    underTheHood: {
      title: 'Hoe het in elkaar zit',
      intro: 'Eén Next.js-project bedient vier soorten bezoekers, gescheiden met route-groepen: de gids, de marketingpagina\u2019s, de klantlandingspagina\u2019s en de ingelogde kant. Subdomeinen lopen via proxy.ts, ververst de Supabase-sessie en sluit alles achter de inlog af.',
      layerLabel: 'Laag',
      techLabel: 'Keuze',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Styling', tech: 'Tailwind CSS 4, eigen componenten, volledig Nederlandse interface' },
        { layer: 'Data + auth', tech: 'Supabase (Postgres, auth, storage), regio Frankfurt' },
        { layer: 'Validatie', tech: 'Zod, aan beide kanten en op de omgevingsvariabelen' },
        { layer: 'Mail', tech: 'Resend, vijf transactionele mails met één opmaak' },
        { layer: 'PDF', tech: '@react-pdf/renderer, facturen in Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, cronjobs, previews per push' },
        { layer: 'Secrets', tech: 'Doppler; geen sleutel in de repo' },
        { layer: 'Monitoring', tech: 'Sentry, alleen in productie' },
      ],
      principles: [
        'Twee nachtelijke taken op Vercel achter een gedeeld geheim: 06:00 facturatie, 04:00 opruimen van verlopen aanvragen.',
        'Geen namen, telefoonnummers of e-mailadressen in logs of foutmeldingen, geen IP-adressen in de statistiek.',
        'Leads uitsluitend server-side wegschrijven \u2014 de browser heeft geen schrijfrecht op de database.',
        'Een gesnoozede lead komt vanzelf terug: snooze is geen status maar een datum, geen achtergrondtaak die stil kan staan.',
      ],
    },
    quality: {
      title: 'Kwaliteit en werkwijze',
      intro: 'Eén opdracht is de poort: npm run check draait typecheck, ESLint zonder waarschuwingen, Prettier, alle unittesten en een volledige build. Wat daar niet doorheen komt, wordt niet als af gemeld. Husky en lint-staged doen hetzelfde bij elke commit, GitHub Actions herhaalt het op elke push.',
      metricLabel: 'Wat',
      sizeLabel: 'Omvang',
      metrics: [
        { label: 'Code', value: '265 bestanden, ± 33.000 regels TypeScript' },
        { label: 'Database', value: '27 migraties, 20 tabellen, RLS op alles wat privé is' },
        { label: 'Unittesten', value: '412, in 37 bestanden' },
        { label: 'Browsertesten (Playwright)', value: '52, in 9 bestanden' },
        { label: 'Sjablonen en blokken', value: '8 sjablonen, 12 herbruikbare blokken' },
        { label: 'Commits', value: '94, in acht dagen' },
      ],
      points: [
        {
          title: 'Browsertesten doen wat een mens doet',
          text: 'Inloggen, een lead binnenhalen, hem snoozen, een blok uitzetten in de editor, publiceren en controleren dat de openbare pagina meeverandert. Precies daar zitten de fouten die typecheck en unittesten niet zien.',
        },
        {
          title: 'Vindbaarheid ligt op vier plekken vast',
          text: 'robots.ts (met drieëntwintig AI-crawlers bij naam), een sitemap die de klantpagina\u2019s uit de database haalt, een gegenereerde /llms.txt met de hele site in markdown, en gestructureerde gegevens per paginasoort \u2014 nooit meer dan op de pagina zelf staat.',
        },
        {
          title: 'Gebouwd met AI-assistentie, maar niet op de gok',
          text: 'Elk onderdeel is eerst uitgeschreven als plan in de repo \u2014 waarom, welke fasen, welke afwegingen \u2014 en daarna gebouwd. Vaste afspraken staan in een regelbestand dat elke sessie meeleest. De tests, de types en de row-level security zijn de rem.',
        },
      ],
    },
    roadmap: {
      title: 'Waar het nu staat',
      status: 'De site draait, de eerste echte klant staat live en in de gids, en de facturatie staat klaar voor haar eerste abonnement.',
      nextLabel: 'Op de rol',
      items: [
        'Kaartweergave en eigen overzichtspagina\u2019s per soort en plaats',
        'Geverifieerde Google-reviews',
        'Exporteren van leads',
        'Tweestapsverificatie',
        'A/B-testen over twee gepubliceerde versies tegelijk',
      ],
    },
    midCta: {
      title: 'Zoiets nodig voor jouw bedrijf?',
      button: 'Start een gesprek',
    },
    cta: {
      title: 'Van idee naar live platform',
      subtitle: 'Maatwerk dat blijft staan.',
      body: 'Een leadplatform, een portaal, een webshop of een interne tool \u2014 gebouwd met tests, types en privacy als fundament. Laten we bespreken wat je nodig hebt.',
      button: 'Neem contact op',
    },
    liveUrl: LIVE,
  },

  en: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Lead platform for local fitness studios',
      badge: 'Case study · Live in production',
      headline: 'From empty screen to first customer live \u2014 in eight days.',
      sub: 'Fit in de Buurt is a lead platform for local fitness studios: landing pages that convert, a portal to follow up on called leads, a postcode-based guide and the invoicing around it. Design, build, database, hosting and operations \u2014 built solo.',
      trustLine: 'Live on fitindebuurt.nl · Row-level security on everything private · Next.js 16, React 19, Supabase',
      badges: ['Live on fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'View the live platform',
      meta: [
        { label: 'Role', value: 'Design, build, database, hosting & operations (solo)' },
        { label: 'Timeline', value: 'August 2026 · 8 days to first customer live' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Live', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'days to first customer live' },
      { value: '±33k', label: 'lines of TypeScript (265 files)' },
      { value: '464', label: 'automated tests' },
      { value: 'Live', label: 'first real customer in production' },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'A small fitness studio advertises locally, sends people to its Instagram or a generic website, and loses them there. Those who do respond come in via a DM, an email or a text; the owner keeps track of who to call back in her head. Two days later half of them are forgotten and the interest is gone.',
        'The three things that exist for this each solve only a slice. A website builder delivers a page without follow-up. A CRM is too heavy for someone with a handful of leads a month. A linktree offers no insight whatsoever. And everything that does work puts her customers\u2019 personal data somewhere she has no control over.',
      ],
    },
    solution: {
      title: 'What it became',
      intro: 'One platform serving three kinds of visitors at once \u2014 the athlete, the studio and the operator.',
      audiences: [
        {
          title: 'For the athlete',
          text: 'The homepage is a guide: enter your postcode and see which studios, gyms, salons and practices are closest to you, with distance, reviews and a button to that studio\u2019s booking system or lead page. No cookies, no account, and we never store what someone searched for.',
        },
        {
          title: 'For the studio',
          text: 'Its own lead page on name.fitindebuurt.nl and fitindebuurt.nl/name, built from blocks and matched to its branding. Anyone who leaves their number lands straight in her portal, with an email alongside. That portal has one list: who do I call. Per lead the system tracks call attempts, lets you snooze with a note, and mark it won or dismissed.',
        },
        {
          title: 'For the operator',
          text: 'An editor where I build and publish a customer page, statistics per version of that page, and invoicing with subscriptions, numbering, PDFs and a nightly cron job.',
        },
      ],
      note: 'There is no call button or tel: link anywhere. That is the entire idea: a visitor leaves their details and the studio calls back. That way the owner knows who was interested, even when the call doesn\u2019t connect right away.',
    },
    choices: {
      title: 'Four choices that define the project',
      intro: 'Decisions that ripple through the whole codebase \u2014 and mark the difference between done and rushed.',
      items: [
        {
          title: 'Separation between customers lives in the database, not the interface',
          text: 'Every page has one owner. Row-level security in Postgres decides who sees which row; the app can\u2019t bypass it, nor can I. A test suite uses the real credentials of two owners to try to read, edit and delete each other\u2019s leads. Without that green test, nothing ships.',
        },
        {
          title: 'A page\u2019s content lives in two places, on purpose',
          text: 'The template is a typed file ending in satisfies LandingPagina \u2014 miss a text and the build fails. What I change in the editor becomes an overlay in the database and renders on top of the template. So I keep the compiler\u2019s guarantees and can change copy without deploying.',
        },
        {
          title: 'Publishing happens under a name, numbers belong to a version',
          text: 'Every publication is an immutable row in pagina_versies. The daily counters remember what was counted per version, so I can see what "Shorter hero" delivered versus "Summer promo", and restore an old version as a draft with one click.',
        },
        {
          title: 'Everything in Dutch, down to the database',
          text: 'Columns are named belpogingen, snooze_tot, weggedrukt_op. It reads the same for the customer and for me, and it keeps the distance small between what we say in a conversation and what the code says.',
        },
      ],
    },
    highlights: {
      title: 'Three parts worth highlighting',
      intro: 'The places where most of the thinking and building time went.',
      items: [
        {
          title: 'The page editor',
          text: 'A live preview on the left, the page top to bottom on the right: one panel per block with everything it needs. You edit text in the preview itself \u2014 point, click, type \u2014 and a visitor gets the exact same HTML. The accent colour lives in one CSS variable; color-mix derives five shades from it so every block fits any branding.',
        },
        {
          title: 'The postcode guide',
          text: 'Postcodes go to the Kadaster location server (PDOK): open, free, no key. What comes back is stored in our own table, so a second visitor with the same postcode costs no request. Postgres computes the distance and returns only studios that meet every condition. We keep nothing about the visitor: no cookie, no IP.',
        },
        {
          title: 'Invoicing',
          text: 'Subscriptions per customer, automatic drafts from a nightly run, an invoice number sequence that must not skip, amounts in cents, VAT per line and a PDF in storage. A sent invoice is frozen: database triggers refuse every change, because a sent invoice must stay the same for seven years.',
        },
      ],
    },
    underTheHood: {
      title: 'How it fits together',
      intro: 'One Next.js project serves four kinds of visitors, separated with route groups: the guide, the marketing pages, the customer landing pages and the logged-in side. Subdomains run through proxy.ts, which refreshes the Supabase session and locks everything behind the login.',
      layerLabel: 'Layer',
      techLabel: 'Choice',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Styling', tech: 'Tailwind CSS 4, custom components, fully Dutch interface' },
        { layer: 'Data + auth', tech: 'Supabase (Postgres, auth, storage), Frankfurt region' },
        { layer: 'Validation', tech: 'Zod, on both sides and on the environment variables' },
        { layer: 'Mail', tech: 'Resend, five transactional emails with one layout' },
        { layer: 'PDF', tech: '@react-pdf/renderer, invoices in Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, cron jobs, preview per push' },
        { layer: 'Secrets', tech: 'Doppler; no key in the repo' },
        { layer: 'Monitoring', tech: 'Sentry, production only' },
      ],
      principles: [
        'Two nightly jobs on Vercel behind a shared secret: 06:00 invoicing, 04:00 cleaning up expired requests.',
        'No names, phone numbers or email addresses in logs or error messages, no IP addresses in the statistics.',
        'Leads are written server-side only \u2014 the browser has no write access to the database.',
        'A snoozed lead returns on its own: snooze is not a status but a date, no background job that can stall.',
      ],
    },
    quality: {
      title: 'Quality and workflow',
      intro: 'One command is the gate: npm run check runs typecheck, ESLint with zero warnings, Prettier, all unit tests and a full build. What doesn\u2019t pass isn\u2019t called done. Husky and lint-staged do the same on every commit, GitHub Actions repeats it on every push.',
      metricLabel: 'What',
      sizeLabel: 'Size',
      metrics: [
        { label: 'Code', value: '265 files, ± 33,000 lines of TypeScript' },
        { label: 'Database', value: '27 migrations, 20 tables, RLS on everything private' },
        { label: 'Unit tests', value: '412, across 37 files' },
        { label: 'Browser tests (Playwright)', value: '52, across 9 files' },
        { label: 'Templates and blocks', value: '8 templates, 12 reusable blocks' },
        { label: 'Commits', value: '94, in eight days' },
      ],
      points: [
        {
          title: 'Browser tests do what a human does',
          text: 'Log in, capture a lead, snooze it, turn off a block in the editor, publish and verify the public page changes too. That\u2019s exactly where the bugs live that typecheck and unit tests never see.',
        },
        {
          title: 'Discoverability is fixed in four places',
          text: 'robots.ts (naming twenty-three AI crawlers), a sitemap that pulls customer pages from the database, a generated /llms.txt with the whole site in markdown, and structured data per page type \u2014 never more than what\u2019s on the page itself.',
        },
        {
          title: 'Built with AI assistance, but not on a hunch',
          text: 'Every part was first written out as a plan in the repo \u2014 why, which phases, which trade-offs \u2014 and then built. Fixed agreements live in a rules file that every session reads. The tests, the types and row-level security are the brakes.',
        },
      ],
    },
    roadmap: {
      title: 'Where it stands now',
      status: 'The site is running, the first real customer is live and in the guide, and invoicing is ready for her first subscription.',
      nextLabel: 'On the roadmap',
      items: [
        'Map view and dedicated overview pages per type and location',
        'Verified Google reviews',
        'Lead export',
        'Two-factor authentication',
        'A/B testing across two published versions at once',
      ],
    },
    midCta: {
      title: 'Need something like this for your business?',
      button: 'Start a conversation',
    },
    cta: {
      title: 'From idea to live platform',
      subtitle: 'Custom software that lasts.',
      body: 'A lead platform, a portal, a webshop or an internal tool \u2014 built with tests, types and privacy as the foundation. Let\u2019s discuss what you need.',
      button: 'Get in touch',
    },
    liveUrl: LIVE,
  },

  de: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Lead-Plattform für lokale Fitnessstudios',
      badge: 'Case Study · Live in Produktion',
      headline: 'Vom leeren Bildschirm zum ersten Kunden live \u2014 in acht Tagen.',
      sub: 'Fit in de Buurt ist eine Lead-Plattform für lokale Fitnessstudios: Landingpages die konvertieren, ein Portal zur Nachverfolgung angerufener Leads, ein Postleitzahl-Verzeichnis und die Fakturierung drumherum. Design, Bau, Datenbank, Hosting und Betrieb \u2014 solo gebaut.',
      trustLine: 'Live auf fitindebuurt.nl · Row-Level-Security auf allem Privaten · Next.js 16, React 19, Supabase',
      badges: ['Live auf fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Live-Plattform ansehen',
      meta: [
        { label: 'Rolle', value: 'Design, Bau, Datenbank, Hosting & Betrieb (solo)' },
        { label: 'Zeitraum', value: 'August 2026 · 8 Tage bis zum ersten Kunden live' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Live', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'Tage bis zum ersten Kunden live' },
      { value: '±33k', label: 'Zeilen TypeScript (265 Dateien)' },
      { value: '464', label: 'automatisierte Tests' },
      { value: 'Live', label: 'erster echter Kunde in Produktion' },
    ],
    problem: {
      title: 'Das Problem',
      paragraphs: [
        'Ein kleines Fitnessstudio wirbt lokal, schickt Menschen auf sein Instagram oder eine allgemeine Website und verliert sie dort. Wer doch reagiert, kommt über eine DM, eine Mail oder eine Nachricht; die Inhaberin merkt sich im Kopf, wen sie zurückrufen muss. Zwei Tage später ist die Hälfte vergessen und das Interesse weg.',
        'Die drei Dinge, die es dafür gibt, lösen jeweils nur einen Teil. Ein Website-Baukasten liefert eine Seite ohne Nachfassen. Ein CRM ist zu schwer für jemanden mit einer Handvoll Leads pro Monat. Ein Linktree bietet keinerlei Einblick. Und alles, was funktioniert, legt die personenbezogenen Daten ihrer Kunden an einen Ort, über den sie keine Kontrolle hat.',
      ],
    },
    solution: {
      title: 'Was daraus wurde',
      intro: 'Eine Plattform, die drei Arten von Besuchern zugleich bedient \u2014 den Sportler, das Studio und den Betreiber.',
      audiences: [
        {
          title: 'Für den Sportler',
          text: 'Die Startseite ist ein Verzeichnis: Postleitzahl eingeben und sehen, welche Studios, Fitnesscenter, Salons und Praxen am nächsten liegen \u2014 mit Entfernung, Bewertungen und einem Button zum Buchungssystem oder zur Lead-Seite. Ohne Cookies, ohne Konto, ohne dass wir speichern, wonach jemand sucht.',
        },
        {
          title: 'Für das Studio',
          text: 'Eine eigene Lead-Seite auf name.fitindebuurt.nl und fitindebuurt.nl/name, aus Blöcken gebaut und auf die Corporate Identity abgestimmt. Wer seine Nummer hinterlässt, landet sofort im Portal, mit einer Mail dazu. Im Portal steht eine Liste: wen rufe ich an. Pro Lead werden Anrufversuche erfasst, mit Notiz snoozen, als gewonnen oder verworfen markieren.',
        },
        {
          title: 'Für den Betreiber',
          text: 'Ein Editor, in dem ich eine Kundenseite aufbaue und veröffentliche, Statistik pro Version dieser Seite und Fakturierung mit Abonnements, Nummerierung, PDFs und einem nächtlichen Cronjob.',
        },
      ],
      note: 'Es gibt nirgends einen Anruf-Button oder einen tel:-Link. Das ist die ganze Idee: Ein Besucher hinterlässt seine Daten und das Studio ruft zurück. So weiß die Inhaberin, wer interessiert war \u2014 auch wenn das Gespräch nicht sofort klappt.',
    },
    choices: {
      title: 'Vier Entscheidungen, die das Projekt prägen',
      intro: 'Entscheidungen, die sich durch die gesamte Codebasis ziehen \u2014 und den Unterschied zwischen fertig und hingeschludert machen.',
      items: [
        {
          title: 'Die Trennung zwischen Kunden steckt in der Datenbank, nicht in der Oberfläche',
          text: 'Jede Seite hat einen Eigentümer. Row-Level-Security in Postgres entscheidet, wer welche Zeile sieht; die App kann es nicht umgehen, ich auch nicht. Eine Testsuite versucht mit echten Zugangsdaten zweier Eigentümer, gegenseitig Leads zu lesen, zu ändern und zu löschen. Ohne diesen grünen Test geht nichts live.',
        },
        {
          title: 'Der Inhalt einer Seite steht an zwei Stellen, mit Absicht',
          text: 'Die Vorlage ist eine typisierte Datei, die mit satisfies LandingPagina endet \u2014 fehlt ein Text, schlägt der Build fehl. Was ich im Editor ändere, wird als Overlay in der Datenbank gespeichert und über die Vorlage gerendert. So behalte ich die Garantien des Compilers und kann Texte ändern, ohne zu deployen.',
        },
        {
          title: 'Veröffentlicht wird unter einem Namen, Zahlen gehören zu einer Version',
          text: 'Jede Veröffentlichung ist eine unveränderliche Zeile in pagina_versies. Die Tageszähler merken sich pro Version das Gezählte, also sehe ich, was "Kürzere Hero" gegenüber "Sommeraktion" brachte, und stelle eine alte Version mit einem Klick als Entwurf wieder her.',
        },
        {
          title: 'Alles auf Niederländisch, bis in die Datenbank',
          text: 'Spalten heißen belpogingen, snooze_tot, weggedrukt_op. Das liest sich für den Kunden und für mich gleich und hält den Abstand klein zwischen dem, was wir im Gespräch sagen, und dem, was im Code steht.',
        },
      ],
    },
    highlights: {
      title: 'Drei Teile zum Hervorheben',
      intro: 'Die Stellen, in die die meiste Denk- und Bauzeit floss.',
      items: [
        {
          title: 'Der Seiten-Editor',
          text: 'Links eine Live-Vorschau, rechts die Seite von oben nach unten: pro Block ein Panel mit allem, was dazugehört. Texte bearbeitest du in der Vorschau selbst \u2014 zeigen, klicken, tippen \u2014 und ein Besucher bekommt exakt dasselbe HTML. Die Akzentfarbe steht in einer CSS-Variablen; color-mix leitet fünf Töne ab, sodass jeder Block zu jeder CI passt.',
        },
        {
          title: 'Das Postleitzahl-Verzeichnis',
          text: 'Postleitzahlen gehen an den Locatieserver des Kadasters (PDOK): offen, gratis, ohne Schlüssel. Das Ergebnis speichern wir in einer eigenen Tabelle, ein zweiter Besucher mit derselben PLZ kostet keine Anfrage. Postgres berechnet die Entfernung und liefert nur Studios, die jede Bedingung erfüllen. Vom Besucher bewahren wir nichts: kein Cookie, keine IP.',
        },
        {
          title: 'Fakturierung',
          text: 'Abonnements pro Kunde, automatische Entwürfe aus einem nächtlichen Lauf, eine Rechnungsnummernreihe, die nicht springen darf, Beträge in Cent, MwSt. pro Zeile und ein PDF im Speicher. Eine gesendete Rechnung ist eingefroren: Datenbank-Trigger verweigern jede Änderung, weil eine gesendete Rechnung sieben Jahre gleich bleiben muss.',
        },
      ],
    },
    underTheHood: {
      title: 'Wie es zusammengesetzt ist',
      intro: 'Ein Next.js-Projekt bedient vier Arten von Besuchern, getrennt mit Route-Gruppen: das Verzeichnis, die Marketingseiten, die Kunden-Landingpages und die eingeloggte Seite. Subdomains laufen über proxy.ts, das die Supabase-Session auffrischt und alles hinter dem Login abschließt.',
      layerLabel: 'Schicht',
      techLabel: 'Wahl',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Styling', tech: 'Tailwind CSS 4, eigene Komponenten, vollständig niederländische Oberfläche' },
        { layer: 'Daten + Auth', tech: 'Supabase (Postgres, Auth, Storage), Region Frankfurt' },
        { layer: 'Validierung', tech: 'Zod, auf beiden Seiten und auf den Umgebungsvariablen' },
        { layer: 'Mail', tech: 'Resend, fünf transaktionale Mails mit einer Gestaltung' },
        { layer: 'PDF', tech: '@react-pdf/renderer, Rechnungen in Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, Wildcard *.fitindebuurt.nl, Cronjobs, Preview pro Push' },
        { layer: 'Secrets', tech: 'Doppler; kein Schlüssel im Repo' },
        { layer: 'Monitoring', tech: 'Sentry, nur in Produktion' },
      ],
      principles: [
        'Zwei nächtliche Jobs auf Vercel hinter einem gemeinsamen Geheimnis: 06:00 Fakturierung, 04:00 Aufräumen abgelaufener Anfragen.',
        'Keine Namen, Telefonnummern oder E-Mail-Adressen in Logs oder Fehlermeldungen, keine IP-Adressen in der Statistik.',
        'Leads werden ausschließlich serverseitig geschrieben \u2014 der Browser hat kein Schreibrecht auf die Datenbank.',
        'Ein gesnoozter Lead kommt von selbst zurück: Snooze ist kein Status, sondern ein Datum, kein Hintergrundjob, der stillstehen kann.',
      ],
    },
    quality: {
      title: 'Qualität und Arbeitsweise',
      intro: 'Ein Befehl ist das Tor: npm run check führt Typecheck, ESLint ohne Warnungen, Prettier, alle Unit-Tests und einen vollständigen Build aus. Was da nicht durchkommt, gilt nicht als fertig. Husky und lint-staged tun dasselbe bei jedem Commit, GitHub Actions wiederholt es bei jedem Push.',
      metricLabel: 'Was',
      sizeLabel: 'Umfang',
      metrics: [
        { label: 'Code', value: '265 Dateien, ± 33.000 Zeilen TypeScript' },
        { label: 'Datenbank', value: '27 Migrationen, 20 Tabellen, RLS auf allem Privaten' },
        { label: 'Unit-Tests', value: '412, in 37 Dateien' },
        { label: 'Browser-Tests (Playwright)', value: '52, in 9 Dateien' },
        { label: 'Vorlagen und Blöcke', value: '8 Vorlagen, 12 wiederverwendbare Blöcke' },
        { label: 'Commits', value: '94, in acht Tagen' },
      ],
      points: [
        {
          title: 'Browser-Tests tun, was ein Mensch tut',
          text: 'Einloggen, einen Lead hereinholen, ihn snoozen, einen Block im Editor abschalten, veröffentlichen und prüfen, dass sich die öffentliche Seite mitändert. Genau dort sitzen die Fehler, die Typecheck und Unit-Tests nicht sehen.',
        },
        {
          title: 'Auffindbarkeit ist an vier Stellen festgelegt',
          text: 'robots.ts (mit dreiundzwanzig namentlich genannten AI-Crawlern), eine Sitemap, die Kundenseiten aus der Datenbank zieht, ein generiertes /llms.txt mit der ganzen Site in Markdown und strukturierte Daten pro Seitentyp \u2014 nie mehr als auf der Seite selbst steht.',
        },
        {
          title: 'Mit AI-Unterstützung gebaut, aber nicht auf gut Glück',
          text: 'Jeder Teil wurde zuerst als Plan im Repo ausgeschrieben \u2014 warum, welche Phasen, welche Abwägungen \u2014 und dann gebaut. Feste Vereinbarungen stehen in einer Regeldatei, die jede Session mitliest. Die Tests, die Typen und Row-Level-Security sind die Bremse.',
        },
      ],
    },
    roadmap: {
      title: 'Wo es jetzt steht',
      status: 'Die Site läuft, der erste echte Kunde ist live und im Verzeichnis, und die Fakturierung steht bereit für ihr erstes Abonnement.',
      nextLabel: 'Auf der Roadmap',
      items: [
        'Kartenansicht und eigene Übersichtsseiten pro Art und Ort',
        'Verifizierte Google-Bewertungen',
        'Export von Leads',
        'Zwei-Faktor-Authentifizierung',
        'A/B-Tests über zwei veröffentlichte Versionen zugleich',
      ],
    },
    midCta: {
      title: 'So etwas für Ihr Unternehmen nötig?',
      button: 'Gespräch starten',
    },
    cta: {
      title: 'Von der Idee zur Live-Plattform',
      subtitle: 'Maßgeschneiderte Software, die bleibt.',
      body: 'Eine Lead-Plattform, ein Portal, ein Webshop oder ein internes Tool \u2014 gebaut mit Tests, Typen und Datenschutz als Fundament. Lassen Sie uns besprechen, was Sie brauchen.',
      button: 'Kontakt aufnehmen',
    },
    liveUrl: LIVE,
  },

  fr: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Plateforme de leads pour studios de sport locaux',
      badge: 'Étude de cas · En production',
      headline: 'De l\u2019écran vide au premier client en ligne \u2014 en huit jours.',
      sub: 'Fit in de Buurt est une plateforme de leads pour studios de sport locaux : des landing pages qui convertissent, un portail pour suivre les leads rappelés, un guide par code postal et la facturation autour. Conception, développement, base de données, hébergement et exploitation \u2014 réalisé en solo.',
      trustLine: 'En ligne sur fitindebuurt.nl · Row-level security sur tout ce qui est privé · Next.js 16, React 19, Supabase',
      badges: ['En ligne sur fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Voir la plateforme en ligne',
      meta: [
        { label: 'Rôle', value: 'Conception, développement, base de données, hébergement & exploitation (solo)' },
        { label: 'Période', value: 'Août 2026 · 8 jours jusqu\u2019au premier client' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'En ligne', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'jours jusqu\u2019au premier client' },
      { value: '±33k', label: 'lignes de TypeScript (265 fichiers)' },
      { value: '464', label: 'tests automatisés' },
      { value: 'Live', label: 'premier vrai client en production' },
    ],
    problem: {
      title: 'Le problème',
      paragraphs: [
        'Un petit studio de sport fait de la publicité locale, envoie les gens sur son Instagram ou un site générique, et les perd là. Ceux qui répondent arrivent par un DM, un e-mail ou un message ; la propriétaire retient dans sa tête qui rappeler. Deux jours plus tard, la moitié est oubliée et l\u2019intérêt a disparu.',
        'Les trois choses qui existent pour cela ne résolvent chacune qu\u2019une partie. Un constructeur de site livre une page sans suivi. Un CRM est trop lourd pour quelqu\u2019un avec une poignée de leads par mois. Un linktree n\u2019offre aucun aperçu. Et tout ce qui fonctionne place les données personnelles de ses clients à un endroit qu\u2019elle ne contrôle pas.',
      ],
    },
    solution: {
      title: 'Ce que c\u2019est devenu',
      intro: 'Une plateforme qui sert trois types de visiteurs à la fois \u2014 le sportif, le studio et l\u2019exploitant.',
      audiences: [
        {
          title: 'Pour le sportif',
          text: 'La page d\u2019accueil est un guide : saisissez votre code postal et voyez quels studios, salles, salons et cabinets sont les plus proches, avec distance, avis et un bouton vers le système de réservation ou la page de leads. Sans cookies, sans compte, sans que nous enregistrions ce que quelqu\u2019un recherche.',
        },
        {
          title: 'Pour le studio',
          text: 'Sa propre page de leads sur nom.fitindebuurt.nl et fitindebuurt.nl/nom, construite en blocs et alignée sur son identité. Qui laisse son numéro atterrit aussitôt dans son portail, avec un e-mail. Ce portail a une liste : qui dois-je appeler. Par lead, le système suit les tentatives d\u2019appel, permet de reporter avec une note, et de marquer gagné ou écarté.',
        },
        {
          title: 'Pour l\u2019exploitant',
          text: 'Un éditeur où je construis et publie une page client, des statistiques par version de cette page, et la facturation avec abonnements, numérotation, PDF et une tâche cron nocturne.',
        },
      ],
      note: 'Il n\u2019y a nulle part de bouton d\u2019appel ni de lien tel:. C\u2019est tout le principe : un visiteur laisse ses coordonnées et le studio rappelle. Ainsi la propriétaire sait qui était intéressé, même si l\u2019appel n\u2019aboutit pas tout de suite.',
    },
    choices: {
      title: 'Quatre choix qui définissent le projet',
      intro: 'Des décisions qui se répercutent dans tout le code \u2014 et font la différence entre terminé et bâclé.',
      items: [
        {
          title: 'La séparation entre clients est dans la base de données, pas dans l\u2019interface',
          text: 'Chaque page a un propriétaire. Le row-level security dans Postgres décide qui voit quelle ligne ; l\u2019app ne peut pas le contourner, moi non plus. Une suite de tests utilise les vrais identifiants de deux propriétaires pour tenter de lire, modifier et supprimer les leads de l\u2019autre. Sans ce test vert, rien ne part en production.',
        },
        {
          title: 'Le contenu d\u2019une page vit à deux endroits, volontairement',
          text: 'Le modèle est un fichier typé qui se termine par satisfies LandingPagina \u2014 un texte manquant fait échouer le build. Ce que je modifie dans l\u2019éditeur devient un overlay en base et se superpose au modèle au rendu. Je garde les garanties du compilateur et peux changer un texte sans déployer.',
        },
        {
          title: 'On publie sous un nom, les chiffres appartiennent à une version',
          text: 'Chaque publication est une ligne immuable dans pagina_versies. Les compteurs journaliers retiennent ce qui a été compté par version, je vois donc ce qu\u2019a rapporté "Hero plus court" face à "Promo d\u2019été", et je restaure une ancienne version en brouillon d\u2019un clic.',
        },
        {
          title: 'Tout en néerlandais, jusque dans la base de données',
          text: 'Les colonnes s\u2019appellent belpogingen, snooze_tot, weggedrukt_op. Cela se lit pareil pour le client et pour moi, et garde faible la distance entre ce qu\u2019on dit en conversation et ce qu\u2019il y a dans le code.',
        },
      ],
    },
    highlights: {
      title: 'Trois éléments à mettre en avant',
      intro: 'Les endroits où est passé le plus de temps de réflexion et de construction.',
      items: [
        {
          title: 'L\u2019éditeur de page',
          text: 'À gauche un aperçu en direct, à droite la page de haut en bas : un panneau par bloc avec tout ce qui lui appartient. Les textes se modifient dans l\u2019aperçu même \u2014 pointer, cliquer, taper \u2014 et un visiteur reçoit exactement le même HTML. La couleur d\u2019accent tient dans une variable CSS ; color-mix en dérive cinq teintes, chaque bloc s\u2019accorde donc à toute identité.',
        },
        {
          title: 'Le guide par code postal',
          text: 'Les codes postaux vont au serveur de localisation du Kadaster (PDOK) : ouvert, gratuit, sans clé. Le résultat est stocké dans notre propre table, un deuxième visiteur avec le même code postal ne coûte aucune requête. Postgres calcule la distance et ne renvoie que les studios qui remplissent toutes les conditions. Du visiteur, on ne garde rien : pas de cookie, pas d\u2019IP.',
        },
        {
          title: 'Facturation',
          text: 'Abonnements par client, brouillons automatiques d\u2019une exécution nocturne, une séquence de numéros de facture qui ne doit pas sauter, montants en centimes, TVA par ligne et un PDF en stockage. Une facture envoyée est gelée : des triggers de base refusent toute modification, car une facture envoyée doit rester identique sept ans.',
        },
      ],
    },
    underTheHood: {
      title: 'Comment c\u2019est assemblé',
      intro: 'Un projet Next.js sert quatre types de visiteurs, séparés par des groupes de routes : le guide, les pages marketing, les landing pages clients et la partie connectée. Les sous-domaines passent par proxy.ts, qui rafraîchit la session Supabase et verrouille tout derrière la connexion.',
      layerLabel: 'Couche',
      techLabel: 'Choix',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Style', tech: 'Tailwind CSS 4, composants maison, interface entièrement néerlandaise' },
        { layer: 'Données + auth', tech: 'Supabase (Postgres, auth, storage), région Francfort' },
        { layer: 'Validation', tech: 'Zod, des deux côtés et sur les variables d\u2019environnement' },
        { layer: 'Mail', tech: 'Resend, cinq e-mails transactionnels avec une mise en page' },
        { layer: 'PDF', tech: '@react-pdf/renderer, factures dans Supabase Storage' },
        { layer: 'Hébergement', tech: 'Vercel, wildcard *.fitindebuurt.nl, tâches cron, preview par push' },
        { layer: 'Secrets', tech: 'Doppler ; aucune clé dans le repo' },
        { layer: 'Monitoring', tech: 'Sentry, en production uniquement' },
      ],
      principles: [
        'Deux tâches nocturnes sur Vercel derrière un secret partagé : 06:00 facturation, 04:00 nettoyage des demandes expirées.',
        'Pas de noms, de numéros de téléphone ni d\u2019adresses e-mail dans les logs ou messages d\u2019erreur, pas d\u2019adresses IP dans les statistiques.',
        'Les leads sont écrits uniquement côté serveur \u2014 le navigateur n\u2019a aucun droit d\u2019écriture sur la base.',
        'Un lead reporté revient de lui-même : snooze n\u2019est pas un statut mais une date, aucune tâche de fond qui peut caler.',
      ],
    },
    quality: {
      title: 'Qualité et méthode',
      intro: 'Une commande est la porte : npm run check lance typecheck, ESLint sans avertissement, Prettier, tous les tests unitaires et un build complet. Ce qui ne passe pas n\u2019est pas déclaré fini. Husky et lint-staged font pareil à chaque commit, GitHub Actions répète à chaque push.',
      metricLabel: 'Quoi',
      sizeLabel: 'Ampleur',
      metrics: [
        { label: 'Code', value: '265 fichiers, ± 33 000 lignes de TypeScript' },
        { label: 'Base de données', value: '27 migrations, 20 tables, RLS sur tout ce qui est privé' },
        { label: 'Tests unitaires', value: '412, dans 37 fichiers' },
        { label: 'Tests navigateur (Playwright)', value: '52, dans 9 fichiers' },
        { label: 'Modèles et blocs', value: '8 modèles, 12 blocs réutilisables' },
        { label: 'Commits', value: '94, en huit jours' },
      ],
      points: [
        {
          title: 'Les tests navigateur font ce qu\u2019un humain fait',
          text: 'Se connecter, capter un lead, le reporter, désactiver un bloc dans l\u2019éditeur, publier et vérifier que la page publique change aussi. C\u2019est exactement là que se trouvent les bugs que typecheck et tests unitaires ne voient pas.',
        },
        {
          title: 'La trouvabilité est fixée à quatre endroits',
          text: 'robots.ts (nommant vingt-trois crawlers IA), un sitemap qui tire les pages clients de la base, un /llms.txt généré avec tout le site en markdown, et des données structurées par type de page \u2014 jamais plus que ce qui figure sur la page.',
        },
        {
          title: 'Construit avec l\u2019assistance de l\u2019IA, mais pas au hasard',
          text: 'Chaque partie a d\u2019abord été écrite comme un plan dans le repo \u2014 pourquoi, quelles phases, quels arbitrages \u2014 puis construite. Les règles fixes vivent dans un fichier lu à chaque session. Les tests, les types et le row-level security sont le frein.',
        },
      ],
    },
    roadmap: {
      title: 'Où ça en est',
      status: 'Le site tourne, le premier vrai client est en ligne et dans le guide, et la facturation est prête pour son premier abonnement.',
      nextLabel: 'À la feuille de route',
      items: [
        'Vue carte et pages de synthèse par type et lieu',
        'Avis Google vérifiés',
        'Export des leads',
        'Authentification à deux facteurs',
        'Tests A/B sur deux versions publiées à la fois',
      ],
    },
    midCta: {
      title: 'Besoin de ce genre de chose pour votre entreprise ?',
      button: 'Démarrer une conversation',
    },
    cta: {
      title: 'De l\u2019idée à la plateforme en ligne',
      subtitle: 'Du sur-mesure qui dure.',
      body: 'Une plateforme de leads, un portail, une boutique ou un outil interne \u2014 construit avec les tests, les types et la confidentialité pour fondation. Discutons de ce dont vous avez besoin.',
      button: 'Nous contacter',
    },
    liveUrl: LIVE,
  },

  es: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Plataforma de leads para estudios deportivos locales',
      badge: 'Caso de estudio · En producción',
      headline: 'De la pantalla en blanco al primer cliente en vivo \u2014 en ocho días.',
      sub: 'Fit in de Buurt es una plataforma de leads para estudios deportivos locales: landing pages que convierten, un portal para dar seguimiento a los leads llamados, una guía por código postal y la facturación alrededor. Diseño, desarrollo, base de datos, hosting y operación \u2014 hecho en solitario.',
      trustLine: 'En vivo en fitindebuurt.nl · Row-level security en todo lo privado · Next.js 16, React 19, Supabase',
      badges: ['En vivo en fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Ver la plataforma en vivo',
      meta: [
        { label: 'Rol', value: 'Diseño, desarrollo, base de datos, hosting y operación (solo)' },
        { label: 'Periodo', value: 'Agosto 2026 · 8 días hasta el primer cliente' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'En vivo', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'días hasta el primer cliente' },
      { value: '±33k', label: 'líneas de TypeScript (265 archivos)' },
      { value: '464', label: 'pruebas automatizadas' },
      { value: 'Live', label: 'primer cliente real en producción' },
    ],
    problem: {
      title: 'El problema',
      paragraphs: [
        'Un pequeño estudio deportivo se anuncia localmente, envía a la gente a su Instagram o a una web genérica, y la pierde ahí. Quien sí responde llega por un DM, un correo o un mensaje; la dueña recuerda en su cabeza a quién debe volver a llamar. Dos días después la mitad está olvidada y el interés se ha esfumado.',
        'Las tres cosas que existen para esto resuelven cada una solo una parte. Un creador de webs entrega una página sin seguimiento. Un CRM es demasiado pesado para alguien con un puñado de leads al mes. Un linktree no da ningún dato. Y todo lo que sí funciona pone los datos personales de sus clientes en un lugar sobre el que ella no tiene control.',
      ],
    },
    solution: {
      title: 'En qué se convirtió',
      intro: 'Una plataforma que sirve a tres tipos de visitantes a la vez \u2014 el deportista, el estudio y el operador.',
      audiences: [
        {
          title: 'Para el deportista',
          text: 'La página de inicio es una guía: introduce tu código postal y ve qué estudios, gimnasios, salones y consultas están más cerca, con distancia, reseñas y un botón al sistema de reservas o a la página de leads. Sin cookies, sin cuenta, y sin que guardemos lo que alguien busca.',
        },
        {
          title: 'Para el estudio',
          text: 'Su propia página de leads en nombre.fitindebuurt.nl y fitindebuurt.nl/nombre, construida por bloques y ajustada a su identidad. Quien deja su número aterriza al instante en su portal, con un correo. Ese portal tiene una lista: a quién llamo. Por lead el sistema registra intentos de llamada, permite posponer con una nota, y marcar ganado o descartado.',
        },
        {
          title: 'Para el operador',
          text: 'Un editor donde construyo y publico una página de cliente, estadísticas por versión de esa página, y facturación con suscripciones, numeración, PDF y una tarea cron nocturna.',
        },
      ],
      note: 'No hay en ningún sitio un botón de llamada ni un enlace tel:. Esa es toda la idea: un visitante deja sus datos y el estudio llama de vuelta. Así la dueña sabe quién estaba interesado, aunque la llamada no cuaje enseguida.',
    },
    choices: {
      title: 'Cuatro decisiones que definen el proyecto',
      intro: 'Decisiones que repercuten en todo el código \u2014 y marcan la diferencia entre terminado y hecho a medias.',
      items: [
        {
          title: 'La separación entre clientes está en la base de datos, no en la interfaz',
          text: 'Cada página tiene un dueño. El row-level security en Postgres decide quién ve qué fila; la app no puede saltárselo, yo tampoco. Una suite de pruebas usa las credenciales reales de dos dueños para intentar leer, modificar y borrar los leads del otro. Sin esa prueba en verde, nada sale a producción.',
        },
        {
          title: 'El contenido de una página vive en dos sitios, a propósito',
          text: 'La plantilla es un archivo tipado que termina en satisfies LandingPagina \u2014 si falta un texto, el build falla. Lo que cambio en el editor se guarda como overlay en la base y se superpone a la plantilla al renderizar. Así conservo las garantías del compilador y puedo cambiar textos sin desplegar.',
        },
        {
          title: 'Se publica bajo un nombre, las cifras pertenecen a una versión',
          text: 'Cada publicación es una fila inmutable en pagina_versies. Los contadores diarios recuerdan lo contado por versión, así veo qué dio "Hero más corto" frente a "Promo de verano", y restauro una versión antigua como borrador con un clic.',
        },
        {
          title: 'Todo en neerlandés, hasta la base de datos',
          text: 'Las columnas se llaman belpogingen, snooze_tot, weggedrukt_op. Se lee igual para el cliente y para mí, y mantiene corta la distancia entre lo que decimos en una conversación y lo que hay en el código.',
        },
      ],
    },
    highlights: {
      title: 'Tres partes para destacar',
      intro: 'Los lugares donde fue la mayor parte del tiempo de pensar y construir.',
      items: [
        {
          title: 'El editor de páginas',
          text: 'A la izquierda una vista previa en vivo, a la derecha la página de arriba abajo: un panel por bloque con todo lo suyo. Los textos se editan en la propia vista previa \u2014 señalar, clicar, escribir \u2014 y un visitante recibe exactamente el mismo HTML. El color de acento vive en una variable CSS; color-mix deriva cinco tonos, así cada bloque encaja con cualquier identidad.',
        },
        {
          title: 'La guía por código postal',
          text: 'Los códigos postales van al servidor de localización del Kadaster (PDOK): abierto, gratis, sin clave. Lo que vuelve se guarda en nuestra propia tabla, un segundo visitante con el mismo código postal no cuesta ninguna petición. Postgres calcula la distancia y solo devuelve estudios que cumplen todas las condiciones. Del visitante no guardamos nada: ni cookie, ni IP.',
        },
        {
          title: 'Facturación',
          text: 'Suscripciones por cliente, borradores automáticos de una ejecución nocturna, una serie de números de factura que no puede saltar, importes en céntimos, IVA por línea y un PDF en almacenamiento. Una factura enviada queda congelada: los triggers de base rechazan cualquier cambio, porque una factura enviada debe mantenerse igual siete años.',
        },
      ],
    },
    underTheHood: {
      title: 'Cómo está montado',
      intro: 'Un proyecto Next.js sirve a cuatro tipos de visitantes, separados con grupos de rutas: la guía, las páginas de marketing, las landing pages de clientes y la parte con sesión. Los subdominios pasan por proxy.ts, que refresca la sesión de Supabase y bloquea todo tras el login.',
      layerLabel: 'Capa',
      techLabel: 'Elección',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Estilos', tech: 'Tailwind CSS 4, componentes propios, interfaz totalmente en neerlandés' },
        { layer: 'Datos + auth', tech: 'Supabase (Postgres, auth, storage), región Fráncfort' },
        { layer: 'Validación', tech: 'Zod, en ambos lados y en las variables de entorno' },
        { layer: 'Mail', tech: 'Resend, cinco correos transaccionales con un diseño' },
        { layer: 'PDF', tech: '@react-pdf/renderer, facturas en Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, tareas cron, preview por push' },
        { layer: 'Secretos', tech: 'Doppler; ninguna clave en el repo' },
        { layer: 'Monitoring', tech: 'Sentry, solo en producción' },
      ],
      principles: [
        'Dos tareas nocturnas en Vercel tras un secreto compartido: 06:00 facturación, 04:00 limpieza de solicitudes caducadas.',
        'Sin nombres, teléfonos ni correos en logs o mensajes de error, sin direcciones IP en las estadísticas.',
        'Los leads se escriben solo en el servidor \u2014 el navegador no tiene permiso de escritura en la base.',
        'Un lead pospuesto vuelve solo: snooze no es un estado sino una fecha, ninguna tarea en segundo plano que pueda pararse.',
      ],
    },
    quality: {
      title: 'Calidad y método',
      intro: 'Un comando es la puerta: npm run check ejecuta typecheck, ESLint sin advertencias, Prettier, todas las pruebas unitarias y un build completo. Lo que no pasa no se da por terminado. Husky y lint-staged hacen lo mismo en cada commit, GitHub Actions lo repite en cada push.',
      metricLabel: 'Qué',
      sizeLabel: 'Alcance',
      metrics: [
        { label: 'Código', value: '265 archivos, ± 33.000 líneas de TypeScript' },
        { label: 'Base de datos', value: '27 migraciones, 20 tablas, RLS en todo lo privado' },
        { label: 'Pruebas unitarias', value: '412, en 37 archivos' },
        { label: 'Pruebas de navegador (Playwright)', value: '52, en 9 archivos' },
        { label: 'Plantillas y bloques', value: '8 plantillas, 12 bloques reutilizables' },
        { label: 'Commits', value: '94, en ocho días' },
      ],
      points: [
        {
          title: 'Las pruebas de navegador hacen lo que hace una persona',
          text: 'Iniciar sesión, captar un lead, posponerlo, apagar un bloque en el editor, publicar y comprobar que la página pública también cambia. Ahí están justo los fallos que typecheck y las pruebas unitarias no ven.',
        },
        {
          title: 'La visibilidad está fijada en cuatro sitios',
          text: 'robots.ts (nombrando veintitrés crawlers de IA), un sitemap que saca las páginas de cliente de la base, un /llms.txt generado con toda la web en markdown, y datos estructurados por tipo de página \u2014 nunca más de lo que está en la propia página.',
        },
        {
          title: 'Construido con asistencia de IA, pero no a ciegas',
          text: 'Cada parte se escribió primero como un plan en el repo \u2014 por qué, qué fases, qué compromisos \u2014 y luego se construyó. Los acuerdos fijos viven en un archivo de reglas que cada sesión lee. Las pruebas, los tipos y el row-level security son el freno.',
        },
      ],
    },
    roadmap: {
      title: 'Dónde está ahora',
      status: 'El sitio funciona, el primer cliente real está en vivo y en la guía, y la facturación está lista para su primera suscripción.',
      nextLabel: 'En la hoja de ruta',
      items: [
        'Vista de mapa y páginas de resumen por tipo y lugar',
        'Reseñas de Google verificadas',
        'Exportación de leads',
        'Autenticación de dos factores',
        'Pruebas A/B sobre dos versiones publicadas a la vez',
      ],
    },
    midCta: {
      title: '¿Necesitas algo así para tu empresa?',
      button: 'Iniciar una conversación',
    },
    cta: {
      title: 'De la idea a la plataforma en vivo',
      subtitle: 'Software a medida que perdura.',
      body: 'Una plataforma de leads, un portal, una tienda o una herramienta interna \u2014 construido con pruebas, tipos y privacidad como base. Hablemos de lo que necesitas.',
      button: 'Contáctanos',
    },
    liveUrl: LIVE,
  },

  pl: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Platforma leadów dla lokalnych studiów sportowych',
      badge: 'Studium przypadku · Na produkcji',
      headline: 'Od pustego ekranu do pierwszego klienta na żywo \u2014 w osiem dni.',
      sub: 'Fit in de Buurt to platforma leadów dla lokalnych studiów sportowych: landing page\u2019e, które konwertują, portal do obsługi oddzwonionych leadów, przewodnik po kodzie pocztowym i fakturowanie wokół tego. Projekt, budowa, baza danych, hosting i utrzymanie \u2014 zbudowane solo.',
      trustLine: 'Na żywo na fitindebuurt.nl · Row-level security na wszystkim prywatnym · Next.js 16, React 19, Supabase',
      badges: ['Na żywo na fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Zobacz platformę na żywo',
      meta: [
        { label: 'Rola', value: 'Projekt, budowa, baza danych, hosting i utrzymanie (solo)' },
        { label: 'Okres', value: 'Sierpień 2026 · 8 dni do pierwszego klienta' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Na żywo', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'dni do pierwszego klienta' },
      { value: '±33k', label: 'linii TypeScript (265 plików)' },
      { value: '464', label: 'testy automatyczne' },
      { value: 'Live', label: 'pierwszy prawdziwy klient na produkcji' },
    ],
    problem: {
      title: 'Problem',
      paragraphs: [
        'Małe studio sportowe reklamuje się lokalnie, kieruje ludzi na Instagram lub ogólną stronę i tam ich traci. Kto odpowie, trafia przez DM, mail albo wiadomość; właścicielka pamięta w głowie, do kogo ma oddzwonić. Dwa dni później połowa jest zapomniana, a zainteresowanie znikło.',
        'Trzy rzeczy, które do tego istnieją, rozwiązują każda tylko kawałek. Kreator stron dostarcza stronę bez follow-upu. CRM jest zbyt ciężki dla kogoś z garstką leadów miesięcznie. Linktree nie daje żadnego wglądu. A wszystko, co działa, umieszcza dane osobowe jej klientów tam, gdzie nie ma nad tym kontroli.',
      ],
    },
    solution: {
      title: 'Czym się stało',
      intro: 'Jedna platforma obsługująca trzy rodzaje odwiedzających naraz \u2014 sportowca, studio i operatora.',
      audiences: [
        {
          title: 'Dla sportowca',
          text: 'Strona główna to przewodnik: wpisz kod pocztowy i zobacz, które studia, siłownie, salony i gabinety są najbliżej, z odległością, opiniami i przyciskiem do systemu rezerwacji lub strony leadów. Bez cookies, bez konta, bez zapisywania tego, czego ktoś szuka.',
        },
        {
          title: 'Dla studia',
          text: 'Własna strona leadów na nazwa.fitindebuurt.nl i fitindebuurt.nl/nazwa, zbudowana z bloków i dopasowana do identyfikacji. Kto zostawi numer, ląduje od razu w portalu, z mailem obok. Ten portal ma jedną listę: do kogo dzwonię. Na lead system śledzi próby połączeń, pozwala odłożyć z notatką i oznaczyć jako wygrany lub odrzucony.',
        },
        {
          title: 'Dla operatora',
          text: 'Edytor, w którym buduję i publikuję stronę klienta, statystyki na wersję tej strony oraz fakturowanie z subskrypcjami, numeracją, PDF-ami i nocnym zadaniem cron.',
        },
      ],
      note: 'Nigdzie nie ma przycisku dzwonienia ani linku tel:. To cała idea: odwiedzający zostawia dane, a studio oddzwania. Dzięki temu właścicielka wie, kto był zainteresowany, nawet gdy rozmowa nie dojdzie od razu.',
    },
    choices: {
      title: 'Cztery decyzje, które definiują projekt',
      intro: 'Decyzje, które przenikają cały kod \u2014 i stanowią różnicę między gotowym a zbytym.',
      items: [
        {
          title: 'Rozdział między klientami jest w bazie danych, nie w interfejsie',
          text: 'Każda strona ma jednego właściciela. Row-level security w Postgres decyduje, kto widzi który wiersz; aplikacja nie może tego obejść, ja też nie. Zestaw testów używa prawdziwych danych dwóch właścicieli, by próbować czytać, zmieniać i usuwać leady drugiego. Bez tego zielonego testu nic nie idzie na produkcję.',
        },
        {
          title: 'Treść strony żyje w dwóch miejscach, celowo',
          text: 'Szablon to typowany plik kończący się satisfies LandingPagina \u2014 brak tekstu i build się wywala. To, co zmieniam w edytorze, staje się overlayem w bazie i nakłada się na szablon przy renderowaniu. Zachowuję gwarancje kompilatora i mogę zmieniać teksty bez deployu.',
        },
        {
          title: 'Publikuje się pod nazwą, liczby należą do wersji',
          text: 'Każda publikacja to niezmienny wiersz w pagina_versies. Dzienne liczniki pamiętają, co policzono na wersję, więc widzę, co dała "Krótszy hero" wobec "Promocji letniej", i przywracam starą wersję jako szkic jednym kliknięciem.',
        },
        {
          title: 'Wszystko po niderlandzku, aż do bazy danych',
          text: 'Kolumny nazywają się belpogingen, snooze_tot, weggedrukt_op. Czyta się tak samo dla klienta i dla mnie i utrzymuje mały dystans między tym, co mówimy w rozmowie, a tym, co jest w kodzie.',
        },
      ],
    },
    highlights: {
      title: 'Trzy elementy warte podkreślenia',
      intro: 'Miejsca, w które poszło najwięcej myślenia i budowania.',
      items: [
        {
          title: 'Edytor stron',
          text: 'Po lewej podgląd na żywo, po prawej strona z góry na dół: jeden panel na blok ze wszystkim, co do niego należy. Teksty edytujesz w samym podglądzie \u2014 wskaż, kliknij, pisz \u2014 a odwiedzający dostaje dokładnie ten sam HTML. Kolor akcentu żyje w jednej zmiennej CSS; color-mix wyprowadza pięć odcieni, więc każdy blok pasuje do każdej identyfikacji.',
        },
        {
          title: 'Przewodnik po kodzie pocztowym',
          text: 'Kody pocztowe idą do serwera lokalizacji Kadastru (PDOK): otwarty, darmowy, bez klucza. Wynik przechowujemy we własnej tabeli, drugi odwiedzający z tym samym kodem nie kosztuje zapytania. Postgres liczy odległość i zwraca tylko studia spełniające wszystkie warunki. Z odwiedzającego nie zachowujemy nic: żadnego cookie, żadnego IP.',
        },
        {
          title: 'Fakturowanie',
          text: 'Subskrypcje na klienta, automatyczne wersje robocze z nocnego przebiegu, numeracja faktur, która nie może przeskakiwać, kwoty w groszach, VAT na wiersz i PDF w magazynie. Wysłana faktura jest zamrożona: triggery bazy odrzucają każdą zmianę, bo wysłana faktura ma pozostać taka sama przez siedem lat.',
        },
      ],
    },
    underTheHood: {
      title: 'Jak to jest złożone',
      intro: 'Jeden projekt Next.js obsługuje cztery rodzaje odwiedzających, rozdzielone grupami tras: przewodnik, strony marketingowe, landing page\u2019e klientów i część zalogowaną. Subdomeny idą przez proxy.ts, który odświeża sesję Supabase i zamyka wszystko za logowaniem.',
      layerLabel: 'Warstwa',
      techLabel: 'Wybór',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Style', tech: 'Tailwind CSS 4, własne komponenty, w pełni niderlandzki interfejs' },
        { layer: 'Dane + auth', tech: 'Supabase (Postgres, auth, storage), region Frankfurt' },
        { layer: 'Walidacja', tech: 'Zod, po obu stronach i na zmiennych środowiskowych' },
        { layer: 'Mail', tech: 'Resend, pięć maili transakcyjnych z jednym układem' },
        { layer: 'PDF', tech: '@react-pdf/renderer, faktury w Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, zadania cron, preview na push' },
        { layer: 'Sekrety', tech: 'Doppler; żadnego klucza w repo' },
        { layer: 'Monitoring', tech: 'Sentry, tylko na produkcji' },
      ],
      principles: [
        'Dwa nocne zadania na Vercel za wspólnym sekretem: 06:00 fakturowanie, 04:00 sprzątanie wygasłych zgłoszeń.',
        'Bez nazwisk, numerów telefonu i adresów e-mail w logach czy komunikatach błędów, bez adresów IP w statystykach.',
        'Leady zapisywane wyłącznie po stronie serwera \u2014 przeglądarka nie ma prawa zapisu do bazy.',
        'Odłożony lead wraca sam: snooze to nie status, lecz data, żadnego zadania w tle, które może stanąć.',
      ],
    },
    quality: {
      title: 'Jakość i sposób pracy',
      intro: 'Jedna komenda to brama: npm run check uruchamia typecheck, ESLint bez ostrzeżeń, Prettier, wszystkie testy jednostkowe i pełny build. Co przez to nie przejdzie, nie jest zgłaszane jako gotowe. Husky i lint-staged robią to samo przy każdym commicie, GitHub Actions powtarza przy każdym pushu.',
      metricLabel: 'Co',
      sizeLabel: 'Skala',
      metrics: [
        { label: 'Kod', value: '265 plików, ± 33 000 linii TypeScript' },
        { label: 'Baza danych', value: '27 migracji, 20 tabel, RLS na wszystkim prywatnym' },
        { label: 'Testy jednostkowe', value: '412, w 37 plikach' },
        { label: 'Testy przeglądarkowe (Playwright)', value: '52, w 9 plikach' },
        { label: 'Szablony i bloki', value: '8 szablonów, 12 wielokrotnych bloków' },
        { label: 'Commity', value: '94, w osiem dni' },
      ],
      points: [
        {
          title: 'Testy przeglądarkowe robią to, co człowiek',
          text: 'Zaloguj się, przechwyć lead, odłóż go, wyłącz blok w edytorze, opublikuj i sprawdź, że strona publiczna też się zmienia. Właśnie tam są błędy, których typecheck i testy jednostkowe nie widzą.',
        },
        {
          title: 'Znajdowalność jest ustalona w czterech miejscach',
          text: 'robots.ts (z dwudziestoma trzema crawlerami AI po nazwie), sitemap pobierająca strony klientów z bazy, wygenerowany /llms.txt z całą witryną w markdown i dane strukturalne na typ strony \u2014 nigdy więcej niż to, co na samej stronie.',
        },
        {
          title: 'Zbudowane z pomocą AI, ale nie na chybił trafił',
          text: 'Każda część została najpierw spisana jako plan w repo \u2014 dlaczego, jakie fazy, jakie kompromisy \u2014 a potem zbudowana. Stałe ustalenia żyją w pliku reguł czytanym w każdej sesji. Testy, typy i row-level security to hamulec.',
        },
      ],
    },
    roadmap: {
      title: 'Gdzie to teraz jest',
      status: 'Strona działa, pierwszy prawdziwy klient jest na żywo i w przewodniku, a fakturowanie jest gotowe na jego pierwszą subskrypcję.',
      nextLabel: 'Na mapie drogowej',
      items: [
        'Widok mapy i osobne strony przeglądowe na typ i miejscowość',
        'Zweryfikowane opinie Google',
        'Eksport leadów',
        'Uwierzytelnianie dwuskładnikowe',
        'Testy A/B na dwóch opublikowanych wersjach naraz',
      ],
    },
    midCta: {
      title: 'Potrzebujesz czegoś takiego dla swojej firmy?',
      button: 'Rozpocznij rozmowę',
    },
    cta: {
      title: 'Od pomysłu do platformy na żywo',
      subtitle: 'Oprogramowanie na miarę, które trwa.',
      body: 'Platforma leadów, portal, sklep czy narzędzie wewnętrzne \u2014 zbudowane z testami, typami i prywatnością jako fundamentem. Porozmawiajmy o tym, czego potrzebujesz.',
      button: 'Skontaktuj się',
    },
    liveUrl: LIVE,
  },

  cs: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Leadová platforma pro lokální sportovní studia',
      badge: 'Případová studie · V produkci',
      headline: 'Z prázdné obrazovky k prvnímu klientovi naživo \u2014 za osm dní.',
      sub: 'Fit in de Buurt je leadová platforma pro lokální sportovní studia: landing pages, které konvertují, portál pro sledování obvolaných leadů, průvodce podle PSČ a fakturace kolem toho. Návrh, stavba, databáze, hosting a provoz \u2014 postaveno sólo.',
      trustLine: 'Naživo na fitindebuurt.nl · Row-level security na všem soukromém · Next.js 16, React 19, Supabase',
      badges: ['Naživo na fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Zobrazit platformu naživo',
      meta: [
        { label: 'Role', value: 'Návrh, stavba, databáze, hosting a provoz (sólo)' },
        { label: 'Období', value: 'Srpen 2026 · 8 dní k prvnímu klientovi' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Naživo', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'dní k prvnímu klientovi' },
      { value: '±33k', label: 'řádků TypeScriptu (265 souborů)' },
      { value: '464', label: 'automatizovaných testů' },
      { value: 'Live', label: 'první skutečný klient v produkci' },
    ],
    problem: {
      title: 'Problém',
      paragraphs: [
        'Malé sportovní studio inzeruje lokálně, posílá lidi na svůj Instagram nebo obecný web a tam je ztrácí. Kdo zareaguje, přichází přes DM, mail nebo zprávu; majitelka si v hlavě drží, komu má zavolat zpět. Za dva dny je polovina zapomenutá a zájem je pryč.',
        'Tři věci, které pro to existují, řeší každá jen kousek. Tvůrce webů dodá stránku bez následné péče. CRM je příliš těžký pro někoho s hrstkou leadů měsíčně. Linktree nedává žádný vhled. A všechno, co funguje, ukládá osobní údaje jejích klientů na místo, nad kterým nemá kontrolu.',
      ],
    },
    solution: {
      title: 'Co z toho vzniklo',
      intro: 'Jedna platforma obsluhující tři druhy návštěvníků najednou \u2014 sportovce, studio a provozovatele.',
      audiences: [
        {
          title: 'Pro sportovce',
          text: 'Domovská stránka je průvodce: zadej PSČ a uvidíš, která studia, posilovny, salony a praxe jsou nejblíž, se vzdáleností, recenzemi a tlačítkem do rezervačního systému nebo na leadovou stránku. Bez cookies, bez účtu a bez toho, abychom ukládali, co někdo hledá.',
        },
        {
          title: 'Pro studio',
          text: 'Vlastní leadová stránka na jméno.fitindebuurt.nl a fitindebuurt.nl/jméno, postavená z bloků a sladěná s identitou. Kdo nechá číslo, přistane hned v portálu, s mailem u toho. Ten portál má jeden seznam: komu volám. U každého leadu systém sleduje pokusy o volání, umožňuje odložit s poznámkou a označit jako získaný nebo odmítnutý.',
        },
        {
          title: 'Pro provozovatele',
          text: 'Editor, kde stavím a publikuji klientskou stránku, statistika na verzi té stránky a fakturace s předplatnými, číslováním, PDF a noční úlohou cron.',
        },
      ],
      note: 'Nikde není tlačítko pro volání ani odkaz tel:. To je celý princip: návštěvník nechá své údaje a studio zavolá zpět. Tak majitelka ví, kdo měl zájem, i když se hovor hned nespojí.',
    },
    choices: {
      title: 'Čtyři rozhodnutí, která projekt určují',
      intro: 'Rozhodnutí, která prostupují celou codebase \u2014 a dělají rozdíl mezi hotovým a odbytým.',
      items: [
        {
          title: 'Oddělení mezi klienty je v databázi, ne v rozhraní',
          text: 'Každá stránka má jednoho vlastníka. Row-level security v Postgresu rozhoduje, kdo vidí který řádek; aplikace to nemůže obejít, já také ne. Testovací sada používá skutečné přihlašovací údaje dvou vlastníků, aby se pokusila číst, měnit a mazat leady toho druhého. Bez toho zeleného testu nejde nic do produkce.',
        },
        {
          title: 'Obsah stránky žije na dvou místech, záměrně',
          text: 'Šablona je typovaný soubor končící satisfies LandingPagina \u2014 chybí-li text, build spadne. Co změním v editoru, uloží se jako overlay v databázi a při renderu se položí přes šablonu. Zachovám záruky kompilátoru a můžu měnit texty bez deploye.',
        },
        {
          title: 'Publikuje se pod jménem, čísla patří k verzi',
          text: 'Každá publikace je neměnný řádek v pagina_versies. Denní čítače si pamatují, co se počítalo na verzi, takže vidím, co přinesl "Kratší hero" oproti "Letní akci", a starou verzi obnovím jako koncept jedním klikem.',
        },
        {
          title: 'Vše v nizozemštině, až do databáze',
          text: 'Sloupce se jmenují belpogingen, snooze_tot, weggedrukt_op. Čte se to stejně pro klienta i pro mě a drží malou vzdálenost mezi tím, co říkáme v rozhovoru, a tím, co je v kódu.',
        },
      ],
    },
    highlights: {
      title: 'Tři části hodné zdůraznění',
      intro: 'Místa, kam šlo nejvíc přemýšlení a stavění.',
      items: [
        {
          title: 'Editor stránek',
          text: 'Vlevo živý náhled, vpravo stránka shora dolů: jeden panel na blok se vším, co k němu patří. Texty upravuješ přímo v náhledu \u2014 ukaž, klikni, piš \u2014 a návštěvník dostane přesně stejné HTML. Akcentní barva žije v jedné CSS proměnné; color-mix z ní odvodí pět odstínů, takže každý blok sedí ke každé identitě.',
        },
        {
          title: 'Průvodce podle PSČ',
          text: 'PSČ jdou na lokalizační server Kadastru (PDOK): otevřený, zdarma, bez klíče. Výsledek ukládáme do vlastní tabulky, druhý návštěvník se stejným PSČ nestojí žádný požadavek. Postgres počítá vzdálenost a vrací jen studia splňující všechny podmínky. Z návštěvníka neuchováváme nic: žádné cookie, žádnou IP.',
        },
        {
          title: 'Fakturace',
          text: 'Předplatná na klienta, automatické koncepty z nočního běhu, řada čísel faktur, která nesmí přeskočit, částky v haléřích, DPH na řádek a PDF v úložišti. Odeslaná faktura je zmrazená: databázové triggery odmítají jakoukoli změnu, protože odeslaná faktura má zůstat sedm let stejná.',
        },
      ],
    },
    underTheHood: {
      title: 'Jak je to poskládané',
      intro: 'Jeden projekt Next.js obsluhuje čtyři druhy návštěvníků, oddělené skupinami tras: průvodce, marketingové stránky, klientské landing pages a přihlášenou část. Subdomény jdou přes proxy.ts, který obnovuje session Supabase a zamyká vše za přihlášením.',
      layerLabel: 'Vrstva',
      techLabel: 'Volba',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Styling', tech: 'Tailwind CSS 4, vlastní komponenty, plně nizozemské rozhraní' },
        { layer: 'Data + auth', tech: 'Supabase (Postgres, auth, storage), region Frankfurt' },
        { layer: 'Validace', tech: 'Zod, na obou stranách i na proměnných prostředí' },
        { layer: 'Mail', tech: 'Resend, pět transakčních mailů s jednou úpravou' },
        { layer: 'PDF', tech: '@react-pdf/renderer, faktury v Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, cron úlohy, preview na push' },
        { layer: 'Tajemství', tech: 'Doppler; žádný klíč v repu' },
        { layer: 'Monitoring', tech: 'Sentry, jen v produkci' },
      ],
      principles: [
        'Dvě noční úlohy na Vercelu za sdíleným tajemstvím: 06:00 fakturace, 04:00 úklid prošlých žádostí.',
        'Žádná jména, telefonní čísla ani e-maily v logách či chybových hláškách, žádné IP adresy ve statistice.',
        'Leady se zapisují výhradně na straně serveru \u2014 prohlížeč nemá právo zápisu do databáze.',
        'Odložený lead se vrátí sám: snooze není status, ale datum, žádná úloha na pozadí, která by mohla stát.',
      ],
    },
    quality: {
      title: 'Kvalita a způsob práce',
      intro: 'Jeden příkaz je brána: npm run check spustí typecheck, ESLint bez varování, Prettier, všechny unit testy a plný build. Co tím neprojde, není hlášeno jako hotové. Husky a lint-staged dělají totéž u každého commitu, GitHub Actions to opakuje u každého pushe.',
      metricLabel: 'Co',
      sizeLabel: 'Rozsah',
      metrics: [
        { label: 'Kód', value: '265 souborů, ± 33 000 řádků TypeScriptu' },
        { label: 'Databáze', value: '27 migrací, 20 tabulek, RLS na všem soukromém' },
        { label: 'Unit testy', value: '412, ve 37 souborech' },
        { label: 'Prohlížečové testy (Playwright)', value: '52, v 9 souborech' },
        { label: 'Šablony a bloky', value: '8 šablon, 12 znovupoužitelných bloků' },
        { label: 'Commity', value: '94, za osm dní' },
      ],
      points: [
        {
          title: 'Prohlížečové testy dělají to, co člověk',
          text: 'Přihlásit se, získat lead, odložit ho, vypnout blok v editoru, publikovat a ověřit, že se veřejná stránka také mění. Přesně tam jsou chyby, které typecheck a unit testy nevidí.',
        },
        {
          title: 'Dohledatelnost je zafixovaná na čtyřech místech',
          text: 'robots.ts (s dvaceti třemi AI crawlery jmenovitě), sitemap tahající klientské stránky z databáze, generovaný /llms.txt s celým webem v markdownu a strukturovaná data na typ stránky \u2014 nikdy víc, než co je na stránce samotné.',
        },
        {
          title: 'Postaveno s pomocí AI, ale ne naslepo',
          text: 'Každá část byla nejdřív sepsaná jako plán v repu \u2014 proč, jaké fáze, jaké kompromisy \u2014 a pak postavená. Pevné dohody žijí v souboru pravidel, který každá session načítá. Testy, typy a row-level security jsou brzda.',
        },
      ],
    },
    roadmap: {
      title: 'Kde to teď je',
      status: 'Web běží, první skutečný klient je naživo a v průvodci, a fakturace je připravená na jeho první předplatné.',
      nextLabel: 'Na plánu',
      items: [
        'Zobrazení na mapě a vlastní přehledové stránky na typ a místo',
        'Ověřené Google recenze',
        'Export leadů',
        'Dvoufaktorové ověření',
        'A/B testy na dvou publikovaných verzích najednou',
      ],
    },
    midCta: {
      title: 'Potřebujete něco takového pro svou firmu?',
      button: 'Začít konverzaci',
    },
    cta: {
      title: 'Od nápadu k platformě naživo',
      subtitle: 'Software na míru, který vydrží.',
      body: 'Leadová platforma, portál, e-shop nebo interní nástroj \u2014 postaveno s testy, typy a soukromím jako základem. Pojďme probrat, co potřebujete.',
      button: 'Kontaktujte nás',
    },
    liveUrl: LIVE,
  },

  sv: {
    title: 'Fit in de Buurt',
    hero: {
      eyebrow: 'Leadplattform för lokala träningsstudior',
      badge: 'Fallstudie · Live i produktion',
      headline: 'Från tom skärm till första kunden live \u2014 på åtta dagar.',
      sub: 'Fit in de Buurt är en leadplattform för lokala träningsstudior: landningssidor som konverterar, en portal för att följa upp uppringda leads, en guide efter postnummer och faktureringen runt omkring. Design, bygge, databas, hosting och drift \u2014 byggt solo.',
      trustLine: 'Live på fitindebuurt.nl · Row-level security på allt privat · Next.js 16, React 19, Supabase',
      badges: ['Live på fitindebuurt.nl', 'Next.js 16', 'React 19', 'Supabase'],
      viewSite: 'Se plattformen live',
      meta: [
        { label: 'Roll', value: 'Design, bygge, databas, hosting & drift (solo)' },
        { label: 'Period', value: 'Augusti 2026 · 8 dagar till första kunden live' },
        { label: 'Stack', value: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Supabase · Resend · Vercel' },
        { label: 'Live', value: 'fitindebuurt.nl' },
      ],
    },
    stats: [
      { value: '8', label: 'dagar till första kunden live' },
      { value: '±33k', label: 'rader TypeScript (265 filer)' },
      { value: '464', label: 'automatiserade tester' },
      { value: 'Live', label: 'första riktiga kunden i produktion' },
    ],
    problem: {
      title: 'Problemet',
      paragraphs: [
        'En liten träningsstudio annonserar lokalt, skickar folk till sitt Instagram eller en generell webbplats, och tappar dem där. Den som svarar kommer in via ett DM, ett mejl eller ett sms; ägaren håller i huvudet reda på vem hon ska ringa tillbaka. Två dagar senare är hälften glömd och intresset borta.',
        'De tre saker som finns för detta löser var och en bara en bit. En webbplatsbyggare levererar en sida utan uppföljning. Ett CRM är för tungt för någon med en handfull leads i månaden. En linktree ger ingen insikt alls. Och allt som faktiskt fungerar lägger hennes kunders personuppgifter någonstans hon inte har kontroll över.',
      ],
    },
    solution: {
      title: 'Vad det blev',
      intro: 'En plattform som betjänar tre sorters besökare samtidigt \u2014 idrottaren, studion och operatören.',
      audiences: [
        {
          title: 'För idrottaren',
          text: 'Startsidan är en guide: ange ditt postnummer och se vilka studior, gym, salonger och mottagningar som ligger närmast, med avstånd, omdömen och en knapp till studions bokningssystem eller leadsida. Utan cookies, utan konto och utan att vi sparar vad någon söker efter.',
        },
        {
          title: 'För studion',
          text: 'En egen leadsida på namn.fitindebuurt.nl och fitindebuurt.nl/namn, byggd av block och anpassad till profilen. Den som lämnar sitt nummer hamnar direkt i portalen, med ett mejl bredvid. Portalen har en lista: vem ska jag ringa. Per lead spårar systemet ringförsök, låter dig snooza med en notering och markera som vunnen eller bortvald.',
        },
        {
          title: 'För operatören',
          text: 'En editor där jag bygger och publicerar en kundsida, statistik per version av den sidan, och fakturering med prenumerationer, numrering, PDF:er och ett nattligt cronjobb.',
        },
      ],
      note: 'Det finns ingenstans en ringknapp eller en tel:-länk. Det är hela idén: en besökare lämnar sina uppgifter och studion ringer tillbaka. Så vet ägaren vem som var intresserad, även när samtalet inte går fram direkt.',
    },
    choices: {
      title: 'Fyra val som formar projektet',
      intro: 'Beslut som går genom hela kodbasen \u2014 och gör skillnad mellan klart och slarvigt.',
      items: [
        {
          title: 'Åtskillnaden mellan kunder sitter i databasen, inte i gränssnittet',
          text: 'Varje sida har en ägare. Row-level security i Postgres avgör vem som ser vilken rad; appen kan inte kringgå det, inte jag heller. En testsvit använder två ägares riktiga inloggningar för att försöka läsa, ändra och radera varandras leads. Utan det gröna testet går inget live.',
        },
        {
          title: 'En sidas innehåll bor på två ställen, med avsikt',
          text: 'Mallen är en typad fil som slutar med satisfies LandingPagina \u2014 saknas en text faller bygget. Det jag ändrar i editorn blir ett overlay i databasen och läggs över mallen vid rendering. Så behåller jag kompilatorns garantier och kan ändra text utan att deploya.',
        },
        {
          title: 'Man publicerar under ett namn, siffror hör till en version',
          text: 'Varje publicering är en oföränderlig rad i pagina_versies. Dagsräknarna minns vad som räknats per version, så jag ser vad "Kortare hero" gav mot "Sommarkampanj", och återställer en gammal version som utkast med ett klick.',
        },
        {
          title: 'Allt på nederländska, ända in i databasen',
          text: 'Kolumnerna heter belpogingen, snooze_tot, weggedrukt_op. Det läses lika för kunden och för mig, och håller avståndet litet mellan vad vi säger i ett samtal och vad som står i koden.',
        },
      ],
    },
    highlights: {
      title: 'Tre delar värda att lyfta fram',
      intro: 'Ställena där mest tanke- och byggtid gick åt.',
      items: [
        {
          title: 'Sideditorn',
          text: 'Till vänster en live-förhandsvisning, till höger sidan uppifrån och ned: en panel per block med allt som hör dit. Text redigerar du i själva förhandsvisningen \u2014 peka, klicka, skriv \u2014 och en besökare får exakt samma HTML. Accentfärgen bor i en CSS-variabel; color-mix härleder fem nyanser, så varje block passar varje profil.',
        },
        {
          title: 'Guiden efter postnummer',
          text: 'Postnummer går till Kadasters lokaliseringsserver (PDOK): öppen, gratis, ingen nyckel. Det som kommer tillbaka sparas i en egen tabell, en andra besökare med samma postnummer kostar ingen förfrågan. Postgres räknar ut avståndet och returnerar bara studior som uppfyller alla villkor. Av besökaren behåller vi inget: ingen cookie, ingen IP.',
        },
        {
          title: 'Fakturering',
          text: 'Prenumerationer per kund, automatiska utkast från en nattlig körning, en fakturanummerserie som inte får hoppa, belopp i ören, moms per rad och en PDF i lagringen. En skickad faktura är fryst: databastriggers vägrar varje ändring, eftersom en skickad faktura ska vara likadan i sju år.',
        },
      ],
    },
    underTheHood: {
      title: 'Hur det hänger ihop',
      intro: 'Ett Next.js-projekt betjänar fyra sorters besökare, åtskilda med route-grupper: guiden, marknadssidorna, kundlandningssidorna och den inloggade sidan. Subdomäner går via proxy.ts, som förnyar Supabase-sessionen och låser allt bakom inloggningen.',
      layerLabel: 'Lager',
      techLabel: 'Val',
      techStack: [
        { layer: 'App', tech: 'Next.js 16 (App Router), React 19, TypeScript strict' },
        { layer: 'Styling', tech: 'Tailwind CSS 4, egna komponenter, helt nederländskt gränssnitt' },
        { layer: 'Data + auth', tech: 'Supabase (Postgres, auth, storage), region Frankfurt' },
        { layer: 'Validering', tech: 'Zod, på båda sidor och på miljövariablerna' },
        { layer: 'Mail', tech: 'Resend, fem transaktionsmejl med en layout' },
        { layer: 'PDF', tech: '@react-pdf/renderer, fakturor i Supabase Storage' },
        { layer: 'Hosting', tech: 'Vercel, wildcard *.fitindebuurt.nl, cronjobb, preview per push' },
        { layer: 'Hemligheter', tech: 'Doppler; ingen nyckel i repot' },
        { layer: 'Övervakning', tech: 'Sentry, endast i produktion' },
      ],
      principles: [
        'Två nattliga jobb på Vercel bakom en delad hemlighet: 06:00 fakturering, 04:00 rensning av utgångna förfrågningar.',
        'Inga namn, telefonnummer eller e-postadresser i loggar eller felmeddelanden, inga IP-adresser i statistiken.',
        'Leads skrivs endast på serversidan \u2014 webbläsaren har ingen skrivrätt till databasen.',
        'En snoozad lead kommer tillbaka av sig själv: snooze är inte en status utan ett datum, inget bakgrundsjobb som kan stanna.',
      ],
    },
    quality: {
      title: 'Kvalitet och arbetssätt',
      intro: 'Ett kommando är porten: npm run check kör typecheck, ESLint utan varningar, Prettier, alla enhetstester och ett fullt bygge. Det som inte tar sig igenom räknas inte som klart. Husky och lint-staged gör detsamma vid varje commit, GitHub Actions upprepar det vid varje push.',
      metricLabel: 'Vad',
      sizeLabel: 'Omfattning',
      metrics: [
        { label: 'Kod', value: '265 filer, ± 33 000 rader TypeScript' },
        { label: 'Databas', value: '27 migrationer, 20 tabeller, RLS på allt privat' },
        { label: 'Enhetstester', value: '412, i 37 filer' },
        { label: 'Webbläsartester (Playwright)', value: '52, i 9 filer' },
        { label: 'Mallar och block', value: '8 mallar, 12 återanvändbara block' },
        { label: 'Commits', value: '94, på åtta dagar' },
      ],
      points: [
        {
          title: 'Webbläsartester gör vad en människa gör',
          text: 'Logga in, fånga en lead, snooza den, stäng av ett block i editorn, publicera och kontrollera att den publika sidan också ändras. Precis där sitter buggarna som typecheck och enhetstester inte ser.',
        },
        {
          title: 'Hittbarhet är fastlagd på fyra ställen',
          text: 'robots.ts (med tjugotre AI-crawlers vid namn), en sitemap som hämtar kundsidor från databasen, en genererad /llms.txt med hela sajten i markdown, och strukturerad data per sidtyp \u2014 aldrig mer än vad som står på sidan själv.',
        },
        {
          title: 'Byggt med AI-assistans, men inte på måfå',
          text: 'Varje del skrevs först ut som en plan i repot \u2014 varför, vilka faser, vilka avvägningar \u2014 och byggdes sedan. Fasta överenskommelser bor i en regelfil som varje session läser. Testerna, typerna och row-level security är bromsen.',
        },
      ],
    },
    roadmap: {
      title: 'Var det står nu',
      status: 'Sajten är igång, den första riktiga kunden är live och i guiden, och faktureringen står redo för hennes första prenumeration.',
      nextLabel: 'På färdplanen',
      items: [
        'Kartvy och egna översiktssidor per typ och plats',
        'Verifierade Google-omdömen',
        'Export av leads',
        'Tvåfaktorsautentisering',
        'A/B-tester över två publicerade versioner samtidigt',
      ],
    },
    midCta: {
      title: 'Behöver du något liknande för ditt företag?',
      button: 'Starta ett samtal',
    },
    cta: {
      title: 'Från idé till live-plattform',
      subtitle: 'Skräddarsydd mjukvara som håller.',
      body: 'En leadplattform, en portal, en webbshop eller ett internt verktyg \u2014 byggt med tester, typer och integritet som grund. Låt oss prata om vad du behöver.',
      button: 'Kontakta oss',
    },
    liveUrl: LIVE,
  },
};

export function getFitInDeBuurtContent(locale: Locale): FitInDeBuurtContent {
  return content[locale] ?? content.en;
}
