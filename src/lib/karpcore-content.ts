import type { Locale } from '@/types';

interface NamedItem {
  title: string;
  text: string;
}

interface PsPair {
  problem: { title: string; text: string };
  solution: { title: string; text: string };
}

interface ShowcaseItem {
  img: string;
  alt: string;
  title: string;
  text: string;
}

interface FeatureGroup {
  title: string;
  subtitle: string;
  items: string[];
}

interface TechRow {
  layer: string;
  tech: string;
  why: string;
}

interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export interface KarpCoreContent {
  title: string;
  hero: {
    eyebrow: string;
    badge: string;
    headline: string;
    sub: string;
    trustLine: string;
    badges: string[];
    viewPlatform: string;
    screenshotCaption: string;
  };
  stats: { value: string; label: string }[];
  problemSolutions: { title: string; intro: string; problemLabel: string; solutionLabel: string; pairs: PsPair[] };
  showcase: { title: string; intro: string; items: ShowcaseItem[] };
  beforeAfter: { title: string; intro: string; before: { title: string; items: string[] }; after: { title: string; items: string[] } };
  outcomes: { title: string; intro: string; items: NamedItem[] };
  features: { title: string; intro: string; dealer: FeatureGroup; operator: FeatureGroup; integrations: FeatureGroup };
  security: {
    title: string;
    lead: string;
    points: NamedItem[];
    conclusion: string;
    image: string;
    imageAlt: string;
    note: string;
    noteAlt: string;
    noteText: string;
  };
  results: { title: string; items: string[] };
  underTheHood: { title: string; intro: string; techStack: TechRow[]; principles: string[] };
  testimonial: { placeholder: boolean; quote: string; name: string; role: string };
  midCta: { title: string; button: string };
  process: { title: string; intro: string; steps: ProcessStep[] };
  faq: { title: string; items: FaqItem[] };
  cta: { title: string; subtitle: string; body: string; button: string };
  liveUrls: { label: string; href: string }[];
}

const IMG = {
  variant: '/images/karpcore/variant-picker.png',
  quickAdd: '/images/karpcore/quick-add-sku.png',
  search: '/images/karpcore/quick-search.png',
  cart: '/images/karpcore/cart-quote.png',
  dealerOnly: '/images/karpcore/dealer-only.png',
  note: '/images/karpcore/dealer-price-note.png',
};

const LIVE_URLS = [
  { label: 'karpcore.com', href: 'https://karpcore.com' },
  { label: 'admin.karpcore.com', href: 'https://admin.karpcore.com' },
];

const content: Record<Locale, KarpCoreContent> = {
  nl: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Voor groothandels & importeurs met meerdere merken',
      badge: 'Case study · Live in productie',
      headline: 'Al je merken. Eén platform. Elke dealer ziet alleen wat van hem is.',
      sub: 'KarpCore is het B2B-bestelplatform voor groothandels en importeurs met meerdere merken. Eén systeem voor je hele catalogus, voorraad en prijzen — terwijl elke dealer inlogt en uitsluitend zijn merken, zijn inkoopprijzen en zijn voorraad ziet.',
      trustLine: 'Live op een eigen domein · Server-side afgeschermd · Gebouwd op Medusa v2 & Next.js 15',
      badges: ['Live op karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Bekijk het live platform',
      screenshotCaption: 'Echt scherm uit het live dealerportaal — dealerprijs naast adviesprijs.',
    },
    stats: [
      { value: '1', label: 'Platform voor al je merken' },
      { value: '∞', label: 'Merken & dealers' },
      { value: '100%', label: 'Server-side afgeschermd' },
      { value: 'Live', label: 'Draait in productie' },
    ],
    problemSolutions: {
      title: 'Herken je dit?',
      intro: 'Groothandels met meerdere merken lopen steeds tegen dezelfde drie muren aan. Zo haalt KarpCore ze weg:',
      problemLabel: 'Probleem',
      solutionLabel: 'Oplossing',
      pairs: [
        {
          problem: {
            title: 'Elk merk z\u2019n eigen webshop',
            text: 'Drie, vijf, soms tien losse WooCommerce- of Shopify-shops. Elke prijswijziging, voorraadupdate en nieuwe dealer voer je overal apart door. Je team verliest uren aan dubbel werk en er sluipen onvermijdelijk fouten in.',
          },
          solution: {
            title: 'Eén systeem voor alles',
            text: 'KarpCore bundelt al je merken in één platform: één catalogus, één voorraad, één prijssysteem. Je werkt iets één keer bij — niet vijf keer. Geen dubbel beheer meer.',
          },
        },
        {
          problem: {
            title: 'Iedereen ziet alles \u2014 of niets',
            text: 'Een gewone webshop kent geen \u201cdeze dealer wél merk A, níet merk B\u201d. Je lost het op met losse accounts en handmatige prijslijsten, of je laat gewoon alles zien. Dealers zien dan inkoopprijzen van merken die niet voor hen bedoeld zijn.',
          },
          solution: {
            title: 'Toegang per dealer, per merk',
            text: 'Zet merken per bedrijf aan of uit met één klik. Elke dealer logt in en ziet exact zijn merken, zijn prijzen en zijn voorraad. De rest bestaat voor hem simpelweg niet — gegarandeerd, op de server afgedwongen.',
          },
        },
        {
          problem: {
            title: 'Geen échte B2B-flow',
            text: 'Offertes gaan via e-mail heen en weer. Grote orders moeten eigenlijk langs de baas, maar dat zit nergens in het systeem. Dealerprijzen en staffels plak je erbij met kortingscodes. Het werkt half — en het schaalt niet mee als je groeit.',
          },
          solution: {
            title: 'B2B zit ingebouwd',
            text: 'Offertes met onderhandeling, goedkeuringsflows voor grote orders, dealerprijzen per klantgroep en bedrijfsaccounts met meerdere medewerkers — allemaal native in het platform. Geen plakwerk, geen workarounds.',
          },
        },
      ],
    },
    showcase: {
      title: 'Zie KarpCore in actie',
      intro: 'Echte schermen uit het live platform — gebouwd om dealers in seconden te laten bestellen.',
      items: [
        { img: IMG.variant, alt: 'Variant kiezen met dealerprijs en adviesprijs', title: 'Snel shoppen — direct de juiste variant', text: 'Via de add-to-cart op de catalogus kiest je dealer meteen de juiste variant en het aantal. Zijn dealerprijs en de adviesprijs (RRP) staan netjes naast elkaar.' },
        { img: IMG.quickAdd, alt: 'Snel toevoegen op SKU of EAN', title: 'Bestellen op SKU of EAN — typen of scannen', text: 'Producten toevoegen in seconden op artikelnummer of barcode. Scannen werkt net zo goed. Aantal = aantal pakken; de verpakkingsgrootte wordt automatisch toegepast.' },
        { img: IMG.search, alt: 'Snelzoeken op naam, SKU of EAN', title: 'Snelzoeken op naam, SKU of EAN', text: 'Begin te typen en zie meteen de juiste producten met thumbnail — geen eindeloos scrollen door de catalogus.' },
        { img: IMG.cart, alt: 'Offerte aanvragen, direct afrekenen of cart exporteren', title: 'Offerte aanvragen of direct afrekenen', text: 'Vanuit het winkelmandje een offerte aanvragen, meteen afrekenen, of de hele mand exporteren als CSV. De dealer kiest zelf de snelste route.' },
      ],
    },
    beforeAfter: {
      title: 'Het verschil dat KarpCore maakt',
      intro: 'Van versnipperd en handmatig naar één strak platform.',
      before: { title: 'Zonder KarpCore', items: ['Een aparte webshop per merk, met dubbel beheer', 'Prijzen en voorraad overal handmatig bijwerken', 'Dealers zien prijzen die niet voor hen bedoeld zijn', 'Offertes en goedkeuringen via e-mail en Excel', 'Nieuw merk = weer een nieuwe shop opzetten'] },
      after: { title: 'Met KarpCore', items: ['Eén platform voor al je merken', 'Eén keer bijwerken, overal meteen correct', 'Elke dealer ziet exact zijn merken en prijzen', 'Offertes en goedkeuringen ingebouwd in de portal', 'Nieuw merk = met één klik aanzetten'] },
    },
    outcomes: {
      title: 'Wat het je oplevert',
      intro: 'Geen technische features, maar wat het concreet betekent voor je business:',
      items: [
        { title: 'Uren minder beheer per week', text: 'Eén keer bijwerken in plaats van overal. Je team houdt tijd over voor klanten in plaats van data overtikken.' },
        { title: 'Geen prijslekken meer', text: 'Dealers zien nooit merken of inkoopprijzen die niet voor hen bedoeld zijn. Punt.' },
        { title: 'Een professionele dealerervaring', text: 'Snel bestellen, eigen prijzen, offertes en herhaalorders in een moderne portal — 24/7, zonder dat jij hoeft te schakelen.' },
        { title: 'Klaar om te groeien', text: 'Nieuw merk erbij? Gewoon aanzetten. Nieuwe dealer? Toegang toewijzen. Het platform groeit met je mee, zonder herbouw.' },
      ],
    },
    features: {
      title: 'Alles wat een B2B-platform nodig heeft',
      intro: 'Voor je dealers én voor jezelf achter de schermen.',
      dealer: { title: 'Voor je dealers', subtitle: 'De portal waar ze bestellen', items: ['Eigen merken & prijzen — ze zien alleen wat voor hun bedrijf is vrijgegeven, met dealerprijs én adviesprijs (RRP) naast elkaar.', 'Bedrijfsaccounts met meerdere medewerkers — collega\u2019s uitnodigen, met rollen en rechten per persoon.', 'Offertes aanvragen & onderhandelen — direct in de portal, met berichten, accepteren of afwijzen.', 'Slim bestellen — bulk toevoegen, quick-add op artikelnummer, merk-totalen en gratis-verzending-drempels.', 'Razendsnel zoeken met productthumbnails.', 'Self-service onboarding — nieuwe merktoegang aanvragen vanuit de portal.'] },
      operator: { title: 'Voor jou (admin)', subtitle: 'De controle achter de schermen', items: ['Merken aan/uit per bedrijf — met een volledige audit-trail van wie wat mag zien.', 'Centraal merkbeheer — activeren, deactiveren en assets beheren op één plek.', 'Dealerprijzen per klantgroep — en RRP-beheer per product.', 'Offertes & goedkeuringen beheren — volledig vanuit de admin.', 'Goedkeuringsdrempels — orders boven een bedrag eerst langs een interne fiatteur.', 'Integraties configureren met connection-test — credentials versleuteld opgeslagen.'] },
      integrations: { title: 'Koppelt met je systemen', subtitle: 'Geen losse eilanden', items: ['Pay.nl — iDEAL en Europese B2B-betaalmethoden, ingebouwd.', 'Picqer — live voorraad- en ordersync via webhooks.', 'Transactionele e-mail — orderbevestigingen en notificaties die altijd aankomen.', 'Uitbreidbaar — modulair opgezet, dus nieuwe koppelingen zijn geen herbouw.'] },
    },
    security: {
      title: 'Waterdicht afgeschermd — niet als bijzaak, maar als fundament',
      lead: 'Bij maatwerk is één vergeten filter genoeg om een dealer andermans prijzen te laten zien. KarpCore is daar vanaf de eerste regel code op gebouwd.',
      points: [
        { title: 'Toegang op de server, nooit in de browser', text: 'Elke pagina die producten, prijzen of voorraad teruggeeft, controleert eerst op de server of die dealer dat merk überhaupt mag zien. Niet te omzeilen via een slimme URL.' },
        { title: 'Niets te vertrouwen van buitenaf', text: 'Een merk-id uit een link wordt nooit zomaar geaccepteerd — altijd eerst gecheckt tegen de merken die voor dat bedrijf aanstaan.' },
        { title: 'Alles wordt vastgelegd', text: 'Wijzigingen in merktoegang lopen via workflows met een audit-log. Je ziet precies wie wanneer wat kreeg.' },
        { title: 'Beschermd tegen misbruik', text: 'Inlog-endpoints zijn rate-limited tegen brute-force. Credentials staan versleuteld in de database.' },
      ],
      conclusion: 'Het resultaat: een dealer kan principieel niet bij data van merken die niet voor hem aanstaan — ook niet via een omweg.',
      image: IMG.dealerOnly,
      imageAlt: 'Bestellen alleen voor dealers — log in om dealer-prijzen te zien',
      note: IMG.note,
      noteAlt: 'Neem contact op met je account manager voor dealer-prijzen op dit merk',
      noteText: 'Geen toegang? Dan zie je geen prijzen — en staan ze ook niet in de broncode.',
    },
    results: {
      title: 'Het resultaat',
      items: ['Live op een eigen domein met geldige certificaten (karpcore.com, admin.karpcore.com).', 'Eén centrale instance bedient álle merken — nul dubbel beheer.', 'Complete B2B-flow: van merkgebonden catalogus en dealerprijzen tot offertes, goedkeuringen en betaling.', 'Productieklaar op Fly.io, met geautomatiseerde releases die weigeren te draaien als er iets niet klopt.'],
    },
    underTheHood: {
      title: 'Onder de motorkap',
      intro: 'Voor wie het technisch wil weten: KarpCore draait op bewezen, moderne technologie — gekozen om schaalbaar, veilig en onderhoudbaar te zijn.',
      techStack: [
        { layer: 'Commerce-backend', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modulair, headless, volledig uitbreidbaar' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Snelle, SEO-vriendelijke B2B-portal' },
        { layer: 'Database', tech: 'PostgreSQL', why: 'Eén bron van waarheid, relationeel' },
        { layer: 'Cache & queues', tech: 'Redis (Upstash)', why: 'Sessies, caching, async workflows' },
        { layer: 'Bestandsopslag', tech: 'Tigris (S3-compatible)', why: 'Productiemedia, geen lokale disk' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker en storefront dicht bij de gebruiker' },
        { layer: 'Betalingen', tech: 'Pay.nl', why: 'iDEAL en Europese B2B-betaalmethoden' },
        { layer: 'Voorraad/fulfilment', tech: 'Picqer', why: 'Live voorraad- en ordersync' },
        { layer: 'Auth', tech: 'JWT + session, rate-limited', why: 'Veilige login voor dealers én operators' },
      ],
      principles: ['Eén instance, merken als data — geen aparte installatie per merk, maar een eerste-klas brand-module.', 'Web, API en worker netjes gescheiden — achtergrondtaken draaien zonder publieke toegang.', 'Gebouwd op de officiële B2B-starter, geen harde fork — toekomstige upgrades blijven mogelijk.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'We zochten een B2B-systeem met meer mogelijkheden dan Shopify of Magento, zonder dat het ons complete budget zou opslokken. Maarten heeft in mijn opdracht een volledig B2B-platform opgezet dat ons nu enorm veel tijd bespaart en het samenwerken met andere bedrijven makkelijker en efficiënter maakt — precies zoals wij zelf zouden willen dat onze eigen groothandel het had ingeregeld.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Oprichter',
    },
    midCta: { title: 'Wil je dit voor jouw merken?', button: 'Start een live chat' },
    process: {
      title: 'Zo leveren we het op',
      intro: 'Van eerste gesprek tot livegang — een duidelijk traject zonder verrassingen.',
      steps: [
        { number: '01', title: 'Concept & scope', text: 'We brengen je merken, dealers, prijsstructuur en koppelingen in kaart en bepalen samen de scope.' },
        { number: '02', title: 'Bouw op bewezen basis', text: 'We bouwen op de Medusa v2 B2B-fundering met jouw merken, prijzen en toegangsregels — geen wegwerp-maatwerk.' },
        { number: '03', title: 'Koppelingen & data', text: 'Voorraad (Picqer), betalingen (Pay.nl) en je catalogus worden gekoppeld en gemigreerd.' },
        { number: '04', title: 'Livegang & overdracht', text: 'Een gecontroleerde, geautomatiseerde release naar productie op je eigen domein — plus uitleg voor je team.' },
      ],
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        { question: 'Kan ik mijn bestaande merken en producten migreren?', answer: 'Ja. We zetten je catalogus, prijzen en dealers over naar één centrale instance. Omdat merken als data worden behandeld, voeg je daarna nieuwe merken simpelweg toe zonder een nieuwe shop op te tuigen.' },
        { question: 'Kunnen dealers echt alleen hun eigen merken zien?', answer: 'Ja, gegarandeerd. De toegangscontrole wordt op de server afgedwongen bij elke aanvraag — niet in de browser. Een dealer kan niet bij merken die niet voor hem zijn vrijgegeven, ook niet door met de URL te knoeien.' },
        { question: 'Werkt het met mijn voorraad- en betaalsysteem?', answer: 'Out of the box koppelt KarpCore met Picqer (voorraad/orders) en Pay.nl (iDEAL en Europese betaalmethoden). Het platform is modulair, dus andere systemen koppelen is uitbreiding, geen herbouw.' },
        { question: 'Hoe lang duurt het om live te gaan?', answer: 'Dat hangt af van je aantal merken, producten en koppelingen. Omdat we bouwen op een bewezen basis met geautomatiseerde deploys, gaat het sneller dan volledig maatwerk. In een kort gesprek schetsen we een realistische planning voor jouw situatie.' },
        { question: 'Kan het meegroeien als ik merken of dealers toevoeg?', answer: 'Ja. Een nieuw merk zet je aan, een nieuwe dealer wijs je toegang toe. Eén instance bedient al je merken en dealers — de architectuur is hier vanaf het begin op ontworpen.' },
        { question: 'Wat als ik iets unieks nodig heb?', answer: 'Dat kan. KarpCore is opgebouwd uit losse modules (merken, bedrijven, offertes, goedkeuringen). Maatwerk bouwen we als nette uitbreiding, zonder de upgradebaarheid van het platform op te offeren.' },
      ],
    },
    cta: {
      title: 'Wil jij ook al je merken onder één dak?',
      subtitle: 'Van concept tot livegang — wij bouwen het mee.',
      body: 'Meerdere merken bundelen, fijnmazige dealer-toegang of een volledige offerte- en goedkeuringsflow: vertel ons je B2B-uitdaging en we laten zien hoe het kan.',
      button: 'Start een live chat',
    },
    liveUrls: LIVE_URLS,
  },

  en: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'For wholesalers & importers with multiple brands',
      badge: 'Case study · Live in production',
      headline: 'All your brands. One platform. Every dealer sees only what is theirs.',
      sub: 'KarpCore is the B2B ordering platform for wholesalers and importers with multiple brands. One system for your entire catalog, stock and pricing — while every dealer logs in and sees only their brands, their purchase prices and their stock.',
      trustLine: 'Live on its own domain · Server-side access control · Built on Medusa v2 & Next.js 15',
      badges: ['Live on karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'View the live platform',
      screenshotCaption: 'A real screen from the live dealer portal — dealer price next to RRP.',
    },
    stats: [
      { value: '1', label: 'Platform for all your brands' },
      { value: '∞', label: 'Brands & dealers' },
      { value: '100%', label: 'Server-side secured' },
      { value: 'Live', label: 'Running in production' },
    ],
    problemSolutions: {
      title: 'Sound familiar?',
      intro: 'Wholesalers with multiple brands keep hitting the same three walls. Here is how KarpCore removes them:',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      pairs: [
        {
          problem: { title: 'A separate webshop per brand', text: 'Three, five, sometimes ten separate WooCommerce or Shopify shops. Every price change, stock update and new dealer has to be entered everywhere separately. Your team loses hours to duplicate work and mistakes inevitably creep in.' },
          solution: { title: 'One system for everything', text: 'KarpCore bundles all your brands into one platform: one catalog, one stock, one pricing system. You update something once — not five times. No more double management.' },
        },
        {
          problem: { title: 'Everyone sees everything — or nothing', text: 'A regular webshop has no concept of \u201cthis dealer yes brand A, no brand B\u201d. You solve it with separate accounts and manual price lists, or you just show everything. Dealers then see purchase prices for brands not meant for them.' },
          solution: { title: 'Access per dealer, per brand', text: 'Turn brands on or off per company with one click. Every dealer logs in and sees exactly their brands, their prices and their stock. The rest simply does not exist for them — guaranteed, enforced on the server.' },
        },
        {
          problem: { title: 'No real B2B flow', text: 'Quotes go back and forth by email. Large orders should really be approved by the boss, but that lives nowhere in the system. Dealer prices and tiers are bolted on with discount codes. It half works — and it does not scale as you grow.' },
          solution: { title: 'B2B is built in', text: 'Quotes with negotiation, approval flows for large orders, dealer prices per customer group and company accounts with multiple employees — all native to the platform. No glue, no workarounds.' },
        },
      ],
    },
    showcase: {
      title: 'See KarpCore in action',
      intro: 'Real screens from the live platform — built to let dealers order in seconds.',
      items: [
        { img: IMG.variant, alt: 'Choosing a variant with dealer price and RRP', title: 'Quick shopping — pick the right variant instantly', text: 'Through add-to-cart on the catalog your dealer picks the right variant and quantity right away. Their dealer price and the recommended retail price (RRP) sit neatly side by side.' },
        { img: IMG.quickAdd, alt: 'Quick add by SKU or EAN', title: 'Order by SKU or EAN — type or scan', text: 'Add products in seconds by item number or barcode. Scanning works just as well. Quantity = number of packs; pack size is applied automatically.' },
        { img: IMG.search, alt: 'Quick search by name, SKU or EAN', title: 'Quick search by name, SKU or EAN', text: 'Start typing and instantly see the right products with a thumbnail — no endless scrolling through the catalog.' },
        { img: IMG.cart, alt: 'Request a quote, check out directly or export the cart', title: 'Request a quote or check out directly', text: 'From the cart, request a quote, check out right away, or export the entire cart as CSV. The dealer chooses the fastest route.' },
      ],
    },
    beforeAfter: {
      title: 'The difference KarpCore makes',
      intro: 'From fragmented and manual to one tight platform.',
      before: { title: 'Without KarpCore', items: ['A separate webshop per brand, with double management', 'Updating prices and stock everywhere by hand', 'Dealers see prices not meant for them', 'Quotes and approvals via email and Excel', 'New brand = setting up yet another shop'] },
      after: { title: 'With KarpCore', items: ['One platform for all your brands', 'Update once, correct everywhere instantly', 'Every dealer sees exactly their brands and prices', 'Quotes and approvals built into the portal', 'New brand = switch it on with one click'] },
    },
    outcomes: {
      title: 'What it gets you',
      intro: 'Not technical features, but what it concretely means for your business:',
      items: [
        { title: 'Hours less admin per week', text: 'Update once instead of everywhere. Your team keeps time for customers instead of retyping data.' },
        { title: 'No more price leaks', text: 'Dealers never see brands or purchase prices not meant for them. Full stop.' },
        { title: 'A professional dealer experience', text: 'Fast ordering, own prices, quotes and repeat orders in a modern portal — 24/7, without you having to step in.' },
        { title: 'Ready to grow', text: 'New brand? Just switch it on. New dealer? Assign access. The platform grows with you, without a rebuild.' },
      ],
    },
    features: {
      title: 'Everything a B2B platform needs',
      intro: 'For your dealers and for you behind the scenes.',
      dealer: { title: 'For your dealers', subtitle: 'The portal where they order', items: ['Own brands & prices — they only see what is released for their company, with dealer price and recommended retail price (RRP) side by side.', 'Company accounts with multiple employees — invite colleagues, with roles and permissions per person.', 'Request & negotiate quotes — directly in the portal, with messages, accept or decline.', 'Smart ordering — bulk add, quick-add by item number, brand totals and free-shipping thresholds.', 'Lightning-fast search with product thumbnails.', 'Self-service onboarding — request access to new brands from the portal.'] },
      operator: { title: 'For you (admin)', subtitle: 'The control behind the scenes', items: ['Brands on/off per company — with a full audit trail of who may see what.', 'Central brand management — activate, deactivate and manage assets in one place.', 'Dealer prices per customer group — and RRP management per product.', 'Manage quotes & approvals — entirely from the admin.', 'Approval thresholds — orders above an amount first pass an internal approver.', 'Configure integrations with a connection test — credentials stored encrypted.'] },
      integrations: { title: 'Connects to your systems', subtitle: 'No isolated islands', items: ['Pay.nl — iDEAL and European B2B payment methods, built in.', 'Picqer — live stock and order sync via webhooks.', 'Transactional email — order confirmations and notifications that always arrive.', 'Extensible — modular setup, so new integrations are no rebuild.'] },
    },
    security: {
      title: 'Watertight access control — not an afterthought, but the foundation',
      lead: 'With custom builds, one forgotten filter is enough to show a dealer someone else\u2019s prices. KarpCore is built for this from the very first line of code.',
      points: [
        { title: 'Access on the server, never in the browser', text: 'Every page that returns products, prices or stock first checks on the server whether that dealer is even allowed to see that brand. Not bypassable via a clever URL.' },
        { title: 'Nothing trusted from outside', text: 'A brand id from a link is never simply accepted — always checked first against the brands that are on for that company.' },
        { title: 'Everything is logged', text: 'Changes to brand access run through workflows with an audit log. You see exactly who got what and when.' },
        { title: 'Protected against abuse', text: 'Login endpoints are rate-limited against brute force. Credentials are stored encrypted in the database.' },
      ],
      conclusion: 'The result: a dealer fundamentally cannot reach data from brands that are not on for them — not even via a detour.',
      image: IMG.dealerOnly,
      imageAlt: 'Ordering for dealers only — log in to see dealer prices',
      note: IMG.note,
      noteAlt: 'Contact your account manager for dealer prices on this brand',
      noteText: 'No access? Then you see no prices — and they are not in the source code either.',
    },
    results: {
      title: 'The result',
      items: ['Live on its own domain with valid certificates (karpcore.com, admin.karpcore.com).', 'One central instance serves all brands — zero double management.', 'Complete B2B flow: from brand-scoped catalog and dealer prices to quotes, approvals and payment.', 'Production-ready on Fly.io, with automated releases that refuse to run if something is off.'],
    },
    underTheHood: {
      title: 'Under the hood',
      intro: 'For those who want the technical details: KarpCore runs on proven, modern technology — chosen to be scalable, secure and maintainable.',
      techStack: [
        { layer: 'Commerce backend', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modular, headless, fully extensible' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Fast, SEO-friendly B2B portal' },
        { layer: 'Database', tech: 'PostgreSQL', why: 'One source of truth, relational' },
        { layer: 'Cache & queues', tech: 'Redis (Upstash)', why: 'Sessions, caching, async workflows' },
        { layer: 'File storage', tech: 'Tigris (S3-compatible)', why: 'Production media, no local disk' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker and storefront close to the user' },
        { layer: 'Payments', tech: 'Pay.nl', why: 'iDEAL and European B2B payment methods' },
        { layer: 'Stock/fulfilment', tech: 'Picqer', why: 'Live stock and order sync' },
        { layer: 'Auth', tech: 'JWT + session, rate-limited', why: 'Secure login for dealers and operators' },
      ],
      principles: ['One instance, brands as data — no separate install per brand, but a first-class brand module.', 'Web, API and worker cleanly separated — background tasks run without public access.', 'Built on the official B2B starter, no hard fork — future upgrades stay possible.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'We were looking for a B2B system with more possibilities than Shopify or Magento, without it eating up our entire budget. Maarten built us a complete B2B platform that now saves us a huge amount of time and makes working with other companies easier and more efficient — exactly the way we\u2019d want our own wholesale to be set up.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Founder',
    },
    midCta: { title: 'Want this for your brands?', button: 'Start a live chat' },
    process: {
      title: 'How we deliver it',
      intro: 'From first conversation to go-live — a clear path without surprises.',
      steps: [
        { number: '01', title: 'Concept & scope', text: 'We map out your brands, dealers, pricing structure and integrations and define the scope together.' },
        { number: '02', title: 'Build on a proven base', text: 'We build on the Medusa v2 B2B foundation with your brands, prices and access rules — no throwaway custom work.' },
        { number: '03', title: 'Integrations & data', text: 'Stock (Picqer), payments (Pay.nl) and your catalog get connected and migrated.' },
        { number: '04', title: 'Go-live & handover', text: 'A controlled, automated release to production on your own domain — plus a walkthrough for your team.' },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { question: 'Can I migrate my existing brands and products?', answer: 'Yes. We move your catalog, prices and dealers to one central instance. Because brands are treated as data, you then simply add new brands without setting up a new shop.' },
        { question: 'Can dealers really only see their own brands?', answer: 'Yes, guaranteed. Access control is enforced on the server on every request — not in the browser. A dealer cannot reach brands that are not released for them, not even by tampering with the URL.' },
        { question: 'Does it work with my stock and payment systems?', answer: 'Out of the box KarpCore connects with Picqer (stock/orders) and Pay.nl (iDEAL and European payment methods). The platform is modular, so connecting other systems is an extension, not a rebuild.' },
        { question: 'How long does it take to go live?', answer: 'That depends on your number of brands, products and integrations. Because we build on a proven base with automated deploys, it is faster than full custom work. In a short call we sketch a realistic timeline for your situation.' },
        { question: 'Can it grow as I add brands or dealers?', answer: 'Yes. You switch on a new brand and assign access to a new dealer. One instance serves all your brands and dealers — the architecture was designed for this from the start.' },
        { question: 'What if I need something unique?', answer: 'That is possible. KarpCore is built from separate modules (brands, companies, quotes, approvals). We build custom work as a clean extension, without sacrificing the platform\u2019s upgradability.' },
      ],
    },
    cta: {
      title: 'Want all your brands under one roof too?',
      subtitle: 'From concept to go-live — we build it with you.',
      body: 'Bundling multiple brands, fine-grained dealer access or a full quote and approval flow: tell us your B2B challenge and we will show you how it can be done.',
      button: 'Start a live chat',
    },
    liveUrls: LIVE_URLS,
  },

  de: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Für Großhändler & Importeure mit mehreren Marken',
      badge: 'Case Study · Live im Einsatz',
      headline: 'All deine Marken. Eine Plattform. Jeder Händler sieht nur, was ihm gehört.',
      sub: 'KarpCore ist die B2B-Bestellplattform für Großhändler und Importeure mit mehreren Marken. Ein System für deinen gesamten Katalog, Bestand und Preise — während sich jeder Händler einloggt und ausschließlich seine Marken, seine Einkaufspreise und seinen Bestand sieht.',
      trustLine: 'Live auf eigener Domain · Serverseitig abgesichert · Gebaut auf Medusa v2 & Next.js 15',
      badges: ['Live auf karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Live-Plattform ansehen',
      screenshotCaption: 'Ein echter Screen aus dem Live-Händlerportal — Händlerpreis neben UVP.',
    },
    stats: [
      { value: '1', label: 'Plattform für all deine Marken' },
      { value: '∞', label: 'Marken & Händler' },
      { value: '100%', label: 'Serverseitig abgesichert' },
      { value: 'Live', label: 'Im Einsatz' },
    ],
    problemSolutions: {
      title: 'Kommt dir das bekannt vor?',
      intro: 'Großhändler mit mehreren Marken stoßen immer wieder gegen dieselben drei Wände. So räumt KarpCore sie weg:',
      problemLabel: 'Problem',
      solutionLabel: 'Lösung',
      pairs: [
        {
          problem: { title: 'Pro Marke ein eigener Webshop', text: 'Drei, fünf, manchmal zehn separate WooCommerce- oder Shopify-Shops. Jede Preisänderung, Bestandsaktualisierung und jeder neue Händler muss überall einzeln eingepflegt werden. Dein Team verliert Stunden mit Doppelarbeit und Fehler schleichen sich unweigerlich ein.' },
          solution: { title: 'Ein System für alles', text: 'KarpCore bündelt all deine Marken in einer Plattform: ein Katalog, ein Bestand, ein Preissystem. Du aktualisierst etwas einmal — nicht fünfmal. Keine Doppelverwaltung mehr.' },
        },
        {
          problem: { title: 'Jeder sieht alles — oder nichts', text: 'Ein normaler Webshop kennt kein \u201edieser Händler Marke A ja, Marke B nein\u201c. Du löst es mit separaten Konten und manuellen Preislisten, oder du zeigst einfach alles. Händler sehen dann Einkaufspreise von Marken, die nicht für sie bestimmt sind.' },
          solution: { title: 'Zugriff pro Händler, pro Marke', text: 'Schalte Marken pro Unternehmen mit einem Klick an oder aus. Jeder Händler loggt sich ein und sieht genau seine Marken, seine Preise und seinen Bestand. Der Rest existiert für ihn schlicht nicht — garantiert, serverseitig durchgesetzt.' },
        },
        {
          problem: { title: 'Kein echter B2B-Ablauf', text: 'Angebote gehen per E-Mail hin und her. Große Bestellungen müssten eigentlich vom Chef freigegeben werden, aber das steckt nirgends im System. Händlerpreise und Staffeln werden mit Rabattcodes drangeklebt. Es funktioniert halb — und skaliert nicht mit dem Wachstum.' },
          solution: { title: 'B2B ist eingebaut', text: 'Angebote mit Verhandlung, Freigabe-Workflows für große Bestellungen, Händlerpreise pro Kundengruppe und Firmenkonten mit mehreren Mitarbeitern — alles nativ in der Plattform. Kein Geklebe, keine Workarounds.' },
        },
      ],
    },
    showcase: {
      title: 'KarpCore in Aktion',
      intro: 'Echte Screens aus der Live-Plattform — gebaut, damit Händler in Sekunden bestellen.',
      items: [
        { img: IMG.variant, alt: 'Variante wählen mit Händlerpreis und UVP', title: 'Schnell shoppen — sofort die richtige Variante', text: 'Über den Warenkorb-Button im Katalog wählt dein Händler direkt die richtige Variante und Menge. Sein Händlerpreis und die UVP stehen sauber nebeneinander.' },
        { img: IMG.quickAdd, alt: 'Schnell hinzufügen per SKU oder EAN', title: 'Bestellen per SKU oder EAN — tippen oder scannen', text: 'Produkte in Sekunden per Artikelnummer oder Barcode hinzufügen. Scannen funktioniert genauso. Menge = Anzahl Gebinde; die Verpackungsgröße wird automatisch angewendet.' },
        { img: IMG.search, alt: 'Schnellsuche nach Name, SKU oder EAN', title: 'Schnellsuche nach Name, SKU oder EAN', text: 'Tippe los und sieh sofort die richtigen Produkte mit Thumbnail — kein endloses Scrollen durch den Katalog.' },
        { img: IMG.cart, alt: 'Angebot anfragen, direkt bezahlen oder Warenkorb exportieren', title: 'Angebot anfragen oder direkt bezahlen', text: 'Aus dem Warenkorb ein Angebot anfragen, sofort bezahlen oder den ganzen Warenkorb als CSV exportieren. Der Händler wählt selbst den schnellsten Weg.' },
      ],
    },
    beforeAfter: {
      title: 'Der Unterschied, den KarpCore macht',
      intro: 'Von fragmentiert und manuell zu einer schlanken Plattform.',
      before: { title: 'Ohne KarpCore', items: ['Pro Marke ein eigener Webshop, mit Doppelverwaltung', 'Preise und Bestand überall von Hand aktualisieren', 'Händler sehen Preise, die nicht für sie bestimmt sind', 'Angebote und Freigaben per E-Mail und Excel', 'Neue Marke = wieder einen neuen Shop aufsetzen'] },
      after: { title: 'Mit KarpCore', items: ['Eine Plattform für all deine Marken', 'Einmal aktualisieren, überall sofort korrekt', 'Jeder Händler sieht genau seine Marken und Preise', 'Angebote und Freigaben in das Portal eingebaut', 'Neue Marke = mit einem Klick aktivieren'] },
    },
    outcomes: {
      title: 'Was es dir bringt',
      intro: 'Keine technischen Features, sondern was es konkret für dein Geschäft bedeutet:',
      items: [
        { title: 'Stunden weniger Verwaltung pro Woche', text: 'Einmal aktualisieren statt überall. Dein Team behält Zeit für Kunden, statt Daten abzutippen.' },
        { title: 'Keine Preislecks mehr', text: 'Händler sehen nie Marken oder Einkaufspreise, die nicht für sie bestimmt sind. Punkt.' },
        { title: 'Ein professionelles Händlererlebnis', text: 'Schnelles Bestellen, eigene Preise, Angebote und Nachbestellungen in einem modernen Portal — rund um die Uhr, ohne dass du eingreifen musst.' },
        { title: 'Bereit zu wachsen', text: 'Neue Marke? Einfach aktivieren. Neuer Händler? Zugriff zuweisen. Die Plattform wächst mit dir, ohne Neubau.' },
      ],
    },
    features: {
      title: 'Alles, was eine B2B-Plattform braucht',
      intro: 'Für deine Händler und für dich hinter den Kulissen.',
      dealer: { title: 'Für deine Händler', subtitle: 'Das Portal, in dem sie bestellen', items: ['Eigene Marken & Preise — sie sehen nur, was für ihr Unternehmen freigegeben ist, mit Händlerpreis und UVP nebeneinander.', 'Firmenkonten mit mehreren Mitarbeitern — Kollegen einladen, mit Rollen und Rechten pro Person.', 'Angebote anfragen & verhandeln — direkt im Portal, mit Nachrichten, annehmen oder ablehnen.', 'Smartes Bestellen — Massen-Hinzufügen, Quick-Add per Artikelnummer, Marken-Summen und Gratisversand-Schwellen.', 'Blitzschnelle Suche mit Produkt-Thumbnails.', 'Self-Service-Onboarding — Zugriff auf neue Marken aus dem Portal anfragen.'] },
      operator: { title: 'Für dich (Admin)', subtitle: 'Die Kontrolle hinter den Kulissen', items: ['Marken an/aus pro Unternehmen — mit vollständigem Audit-Trail, wer was sehen darf.', 'Zentrale Markenverwaltung — aktivieren, deaktivieren und Assets an einem Ort verwalten.', 'Händlerpreise pro Kundengruppe — und UVP-Verwaltung pro Produkt.', 'Angebote & Freigaben verwalten — komplett aus dem Admin.', 'Freigabeschwellen — Bestellungen über einem Betrag durchlaufen erst einen internen Freigeber.', 'Integrationen mit Verbindungstest konfigurieren — Zugangsdaten verschlüsselt gespeichert.'] },
      integrations: { title: 'Verbindet sich mit deinen Systemen', subtitle: 'Keine isolierten Inseln', items: ['Pay.nl — iDEAL und europäische B2B-Zahlungsmethoden, eingebaut.', 'Picqer — Live-Bestands- und Bestellsynchronisierung per Webhooks.', 'Transaktions-E-Mails — Bestellbestätigungen und Benachrichtigungen, die immer ankommen.', 'Erweiterbar — modular aufgebaut, sodass neue Anbindungen kein Neubau sind.'] },
    },
    security: {
      title: 'Wasserdichte Zugriffskontrolle — kein Nebenschauplatz, sondern das Fundament',
      lead: 'Bei Individuallösungen reicht ein vergessener Filter, um einem Händler fremde Preise zu zeigen. KarpCore ist von der ersten Codezeile an darauf gebaut.',
      points: [
        { title: 'Zugriff auf dem Server, nie im Browser', text: 'Jede Seite, die Produkte, Preise oder Bestand zurückgibt, prüft zuerst auf dem Server, ob dieser Händler die Marke überhaupt sehen darf. Nicht über eine clevere URL zu umgehen.' },
        { title: 'Nichts von außen vertrauen', text: 'Eine Marken-ID aus einem Link wird nie einfach akzeptiert — immer zuerst gegen die für das Unternehmen aktiven Marken geprüft.' },
        { title: 'Alles wird protokolliert', text: 'Änderungen an Markenzugriffen laufen über Workflows mit Audit-Log. Du siehst genau, wer wann was bekommen hat.' },
        { title: 'Geschützt vor Missbrauch', text: 'Login-Endpunkte sind gegen Brute-Force ratenbegrenzt. Zugangsdaten werden verschlüsselt in der Datenbank gespeichert.' },
      ],
      conclusion: 'Das Ergebnis: Ein Händler kann grundsätzlich nicht an Daten von Marken gelangen, die nicht für ihn aktiv sind — auch nicht über Umwege.',
      image: IMG.dealerOnly,
      imageAlt: 'Bestellen nur für Händler — einloggen, um Händlerpreise zu sehen',
      note: IMG.note,
      noteAlt: 'Kontaktiere deinen Account Manager für Händlerpreise dieser Marke',
      noteText: 'Kein Zugriff? Dann siehst du keine Preise — und sie stehen auch nicht im Quellcode.',
    },
    results: {
      title: 'Das Ergebnis',
      items: ['Live auf eigener Domain mit gültigen Zertifikaten (karpcore.com, admin.karpcore.com).', 'Eine zentrale Instanz bedient alle Marken — null Doppelverwaltung.', 'Kompletter B2B-Ablauf: vom markenspezifischen Katalog und Händlerpreisen bis zu Angeboten, Freigaben und Zahlung.', 'Produktionsreif auf Fly.io, mit automatisierten Releases, die sich weigern zu laufen, wenn etwas nicht stimmt.'],
    },
    underTheHood: {
      title: 'Unter der Haube',
      intro: 'Für alle, die es technisch wissen wollen: KarpCore läuft auf bewährter, moderner Technologie — gewählt, um skalierbar, sicher und wartbar zu sein.',
      techStack: [
        { layer: 'Commerce-Backend', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modular, headless, voll erweiterbar' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Schnelles, SEO-freundliches B2B-Portal' },
        { layer: 'Datenbank', tech: 'PostgreSQL', why: 'Eine Quelle der Wahrheit, relational' },
        { layer: 'Cache & Queues', tech: 'Redis (Upstash)', why: 'Sitzungen, Caching, asynchrone Workflows' },
        { layer: 'Dateispeicher', tech: 'Tigris (S3-compatible)', why: 'Produktionsmedien, keine lokale Festplatte' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, Worker und Storefront nah am Nutzer' },
        { layer: 'Zahlungen', tech: 'Pay.nl', why: 'iDEAL und europäische B2B-Zahlungsmethoden' },
        { layer: 'Bestand/Fulfillment', tech: 'Picqer', why: 'Live-Bestands- und Bestellsync' },
        { layer: 'Auth', tech: 'JWT + Session, rate-limited', why: 'Sichere Anmeldung für Händler und Betreiber' },
      ],
      principles: ['Eine Instanz, Marken als Daten — keine separate Installation pro Marke, sondern ein erstklassiges Marken-Modul.', 'Web, API und Worker sauber getrennt — Hintergrundaufgaben laufen ohne öffentlichen Zugang.', 'Auf dem offiziellen B2B-Starter gebaut, kein harter Fork — zukünftige Upgrades bleiben möglich.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Wir suchten ein B2B-System mit mehr Möglichkeiten als Shopify oder Magento, ohne dass es unser gesamtes Budget auffrisst. Maarten hat in meinem Auftrag eine komplette B2B-Plattform aufgebaut, die uns jetzt enorm viel Zeit spart und die Zusammenarbeit mit anderen Unternehmen einfacher und effizienter macht — genau so, wie wir es uns für unseren eigenen Großhandel wünschen würden.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Gründer',
    },
    midCta: { title: 'Willst du das für deine Marken?', button: 'Live-Chat starten' },
    process: {
      title: 'So liefern wir es',
      intro: 'Vom ersten Gespräch bis zum Go-live — ein klarer Weg ohne Überraschungen.',
      steps: [
        { number: '01', title: 'Konzept & Scope', text: 'Wir erfassen deine Marken, Händler, Preisstruktur und Anbindungen und legen gemeinsam den Scope fest.' },
        { number: '02', title: 'Bau auf bewährter Basis', text: 'Wir bauen auf dem Medusa-v2-B2B-Fundament mit deinen Marken, Preisen und Zugriffsregeln — keine Wegwerf-Individuallösung.' },
        { number: '03', title: 'Anbindungen & Daten', text: 'Bestand (Picqer), Zahlungen (Pay.nl) und dein Katalog werden angebunden und migriert.' },
        { number: '04', title: 'Go-live & Übergabe', text: 'Ein kontrolliertes, automatisiertes Release in die Produktion auf deiner eigenen Domain — plus eine Einführung für dein Team.' },
      ],
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { question: 'Kann ich meine bestehenden Marken und Produkte migrieren?', answer: 'Ja. Wir übertragen deinen Katalog, Preise und Händler in eine zentrale Instanz. Da Marken als Daten behandelt werden, fügst du danach neue Marken einfach hinzu, ohne einen neuen Shop aufzusetzen.' },
        { question: 'Sehen Händler wirklich nur ihre eigenen Marken?', answer: 'Ja, garantiert. Die Zugriffskontrolle wird bei jeder Anfrage auf dem Server durchgesetzt — nicht im Browser. Ein Händler kommt nicht an Marken, die nicht für ihn freigegeben sind, auch nicht durch Manipulation der URL.' },
        { question: 'Funktioniert es mit meinen Bestands- und Zahlungssystemen?', answer: 'Out of the box verbindet sich KarpCore mit Picqer (Bestand/Bestellungen) und Pay.nl (iDEAL und europäische Zahlungsmethoden). Die Plattform ist modular, daher ist die Anbindung anderer Systeme eine Erweiterung, kein Neubau.' },
        { question: 'Wie lange dauert es bis zum Go-live?', answer: 'Das hängt von der Anzahl deiner Marken, Produkte und Anbindungen ab. Da wir auf einer bewährten Basis mit automatisierten Deploys bauen, geht es schneller als vollständige Individualentwicklung. In einem kurzen Gespräch skizzieren wir einen realistischen Zeitplan für deine Situation.' },
        { question: 'Kann es wachsen, wenn ich Marken oder Händler hinzufüge?', answer: 'Ja. Du aktivierst eine neue Marke und weist einem neuen Händler Zugriff zu. Eine Instanz bedient all deine Marken und Händler — die Architektur ist von Anfang an darauf ausgelegt.' },
        { question: 'Was, wenn ich etwas Einzigartiges brauche?', answer: 'Das ist möglich. KarpCore besteht aus einzelnen Modulen (Marken, Unternehmen, Angebote, Freigaben). Individuelles bauen wir als saubere Erweiterung, ohne die Upgrade-Fähigkeit der Plattform zu opfern.' },
      ],
    },
    cta: {
      title: 'Willst du auch all deine Marken unter einem Dach?',
      subtitle: 'Vom Konzept bis zum Go-live — wir bauen es mit dir.',
      body: 'Mehrere Marken bündeln, fein abgestufter Händlerzugriff oder ein vollständiger Angebots- und Freigabe-Ablauf: Erzähl uns deine B2B-Herausforderung und wir zeigen dir, wie es geht.',
      button: 'Live-Chat starten',
    },
    liveUrls: LIVE_URLS,
  },

  fr: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Pour les grossistes et importateurs avec plusieurs marques',
      badge: 'Étude de cas · En production',
      headline: 'Toutes vos marques. Une seule plateforme. Chaque revendeur ne voit que ce qui lui revient.',
      sub: 'KarpCore est la plateforme de commande B2B pour les grossistes et importateurs gérant plusieurs marques. Un seul système pour tout votre catalogue, votre stock et vos prix — tandis que chaque revendeur se connecte et ne voit que ses marques, ses prix d\u2019achat et son stock.',
      trustLine: 'En ligne sur son propre domaine · Sécurisé côté serveur · Construit sur Medusa v2 et Next.js 15',
      badges: ['En ligne sur karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Voir la plateforme en ligne',
      screenshotCaption: 'Un écran réel du portail revendeur en ligne — prix revendeur à côté du prix conseillé.',
    },
    stats: [
      { value: '1', label: 'Plateforme pour toutes vos marques' },
      { value: '∞', label: 'Marques & revendeurs' },
      { value: '100%', label: 'Sécurisé côté serveur' },
      { value: 'Live', label: 'En production' },
    ],
    problemSolutions: {
      title: 'Ça vous parle ?',
      intro: 'Les grossistes avec plusieurs marques se heurtent toujours aux trois mêmes murs. Voici comment KarpCore les supprime :',
      problemLabel: 'Problème',
      solutionLabel: 'Solution',
      pairs: [
        {
          problem: { title: 'Une boutique en ligne par marque', text: 'Trois, cinq, parfois dix boutiques WooCommerce ou Shopify distinctes. Chaque changement de prix, mise à jour de stock et nouveau revendeur doit être saisi partout séparément. Votre équipe perd des heures en double saisie et des erreurs s\u2019y glissent inévitablement.' },
          solution: { title: 'Un seul système pour tout', text: 'KarpCore regroupe toutes vos marques sur une seule plateforme : un catalogue, un stock, un système de prix. Vous mettez à jour une fois — pas cinq. Fini la double gestion.' },
        },
        {
          problem: { title: 'Tout le monde voit tout — ou rien', text: 'Une boutique classique ne connaît pas le « ce revendeur oui marque A, non marque B ». Vous le réglez avec des comptes séparés et des listes de prix manuelles, ou vous montrez tout. Les revendeurs voient alors les prix d\u2019achat de marques qui ne leur sont pas destinées.' },
          solution: { title: 'Accès par revendeur, par marque', text: 'Activez ou désactivez les marques par entreprise en un clic. Chaque revendeur se connecte et voit exactement ses marques, ses prix et son stock. Le reste n\u2019existe tout simplement pas pour lui — garanti, appliqué côté serveur.' },
        },
        {
          problem: { title: 'Pas de véritable flux B2B', text: 'Les devis vont et viennent par e-mail. Les grosses commandes devraient passer par le patron, mais cela n\u2019est nulle part dans le système. Les prix revendeurs et les paliers sont bricolés avec des codes de réduction. Ça fonctionne à moitié — et ça ne tient pas la croissance.' },
          solution: { title: 'Le B2B est intégré', text: 'Devis avec négociation, flux de validation pour les grosses commandes, prix revendeurs par groupe de clients et comptes entreprise avec plusieurs collaborateurs — tout est natif dans la plateforme. Pas de bricolage, pas de contournements.' },
        },
      ],
    },
    showcase: {
      title: 'KarpCore en action',
      intro: 'De vrais écrans de la plateforme en ligne — conçus pour que les revendeurs commandent en quelques secondes.',
      items: [
        { img: IMG.variant, alt: 'Choisir une variante avec prix revendeur et prix conseillé', title: 'Achat rapide — la bonne variante tout de suite', text: 'Via le bouton d\u2019ajout au panier sur le catalogue, votre revendeur choisit directement la bonne variante et la quantité. Son prix revendeur et le prix conseillé (PVC) sont affichés côte à côte.' },
        { img: IMG.quickAdd, alt: 'Ajout rapide par SKU ou EAN', title: 'Commander par SKU ou EAN — taper ou scanner', text: 'Ajoutez des produits en quelques secondes par référence ou code-barres. Le scan fonctionne tout aussi bien. Quantité = nombre de colis ; la taille du conditionnement est appliquée automatiquement.' },
        { img: IMG.search, alt: 'Recherche rapide par nom, SKU ou EAN', title: 'Recherche rapide par nom, SKU ou EAN', text: 'Commencez à taper et voyez immédiatement les bons produits avec une vignette — sans faire défiler le catalogue à l\u2019infini.' },
        { img: IMG.cart, alt: 'Demander un devis, payer directement ou exporter le panier', title: 'Demander un devis ou payer directement', text: 'Depuis le panier, demandez un devis, payez immédiatement, ou exportez tout le panier en CSV. Le revendeur choisit la voie la plus rapide.' },
      ],
    },
    beforeAfter: {
      title: 'La différence que fait KarpCore',
      intro: 'Du fragmenté et manuel à une plateforme bien rangée.',
      before: { title: 'Sans KarpCore', items: ['Une boutique distincte par marque, avec double gestion', 'Mettre à jour prix et stock partout à la main', 'Les revendeurs voient des prix qui ne leur sont pas destinés', 'Devis et validations par e-mail et Excel', 'Nouvelle marque = encore une nouvelle boutique à monter'] },
      after: { title: 'Avec KarpCore', items: ['Une plateforme pour toutes vos marques', 'Mettre à jour une fois, correct partout immédiatement', 'Chaque revendeur voit exactement ses marques et ses prix', 'Devis et validations intégrés au portail', 'Nouvelle marque = activer en un clic'] },
    },
    outcomes: {
      title: 'Ce que ça vous apporte',
      intro: 'Pas des fonctionnalités techniques, mais ce que ça signifie concrètement pour votre activité :',
      items: [
        { title: 'Des heures de gestion en moins par semaine', text: 'Mettre à jour une fois au lieu de partout. Votre équipe garde du temps pour les clients au lieu de ressaisir des données.' },
        { title: 'Plus de fuites de prix', text: 'Les revendeurs ne voient jamais de marques ou de prix d\u2019achat qui ne leur sont pas destinés. Point.' },
        { title: 'Une expérience revendeur professionnelle', text: 'Commande rapide, prix propres, devis et réassorts dans un portail moderne — 24h/24, sans que vous ayez à intervenir.' },
        { title: 'Prêt à grandir', text: 'Nouvelle marque ? Activez-la. Nouveau revendeur ? Attribuez l\u2019accès. La plateforme grandit avec vous, sans reconstruction.' },
      ],
    },
    features: {
      title: 'Tout ce qu\u2019une plateforme B2B doit avoir',
      intro: 'Pour vos revendeurs et pour vous en coulisses.',
      dealer: { title: 'Pour vos revendeurs', subtitle: 'Le portail où ils commandent', items: ['Marques et prix propres — ils ne voient que ce qui est ouvert à leur entreprise, avec le prix revendeur et le prix conseillé (PVC) côte à côte.', 'Comptes entreprise avec plusieurs collaborateurs — inviter des collègues, avec rôles et droits par personne.', 'Demander et négocier des devis — directement dans le portail, avec messages, accepter ou refuser.', 'Commande intelligente — ajout en masse, ajout rapide par référence, totaux par marque et seuils de livraison gratuite.', 'Recherche ultra-rapide avec vignettes produits.', 'Onboarding en self-service — demander l\u2019accès à de nouvelles marques depuis le portail.'] },
      operator: { title: 'Pour vous (admin)', subtitle: 'Le contrôle en coulisses', items: ['Marques activées/désactivées par entreprise — avec un journal d\u2019audit complet de qui peut voir quoi.', 'Gestion centralisée des marques — activer, désactiver et gérer les ressources au même endroit.', 'Prix revendeurs par groupe de clients — et gestion du PVC par produit.', 'Gérer devis et validations — entièrement depuis l\u2019admin.', 'Seuils de validation — les commandes au-dessus d\u2019un montant passent d\u2019abord par un validateur interne.', 'Configurer les intégrations avec test de connexion — identifiants stockés chiffrés.'] },
      integrations: { title: 'Se connecte à vos systèmes', subtitle: 'Pas d\u2019îlots isolés', items: ['Pay.nl — iDEAL et moyens de paiement B2B européens, intégrés.', 'Picqer — synchro en direct du stock et des commandes via webhooks.', 'E-mails transactionnels — confirmations de commande et notifications qui arrivent toujours.', 'Extensible — architecture modulaire, donc de nouvelles intégrations ne sont pas une reconstruction.'] },
    },
    security: {
      title: 'Un contrôle d\u2019accès étanche — pas un détail, mais le fondement',
      lead: 'Avec du sur-mesure, un seul filtre oublié suffit à montrer à un revendeur les prix d\u2019un autre. KarpCore est conçu pour cela dès la première ligne de code.',
      points: [
        { title: 'L\u2019accès sur le serveur, jamais dans le navigateur', text: 'Chaque page qui renvoie des produits, des prix ou du stock vérifie d\u2019abord sur le serveur si ce revendeur a le droit de voir cette marque. Impossible à contourner via une URL astucieuse.' },
        { title: 'Ne rien croire venant de l\u2019extérieur', text: 'Un identifiant de marque issu d\u2019un lien n\u2019est jamais accepté tel quel — toujours vérifié d\u2019abord par rapport aux marques actives pour l\u2019entreprise.' },
        { title: 'Tout est journalisé', text: 'Les modifications d\u2019accès aux marques passent par des workflows avec journal d\u2019audit. Vous voyez exactement qui a obtenu quoi et quand.' },
        { title: 'Protégé contre les abus', text: 'Les points de connexion sont limités en débit contre la force brute. Les identifiants sont stockés chiffrés dans la base de données.' },
      ],
      conclusion: 'Résultat : un revendeur ne peut fondamentalement pas accéder aux données de marques qui ne sont pas actives pour lui — même pas par un détour.',
      image: IMG.dealerOnly,
      imageAlt: 'Commande réservée aux revendeurs — connectez-vous pour voir les prix revendeurs',
      note: IMG.note,
      noteAlt: 'Contactez votre responsable de compte pour les prix revendeurs de cette marque',
      noteText: 'Pas d\u2019accès ? Alors vous ne voyez aucun prix — et ils ne sont pas non plus dans le code source.',
    },
    results: {
      title: 'Le résultat',
      items: ['En ligne sur son propre domaine avec des certificats valides (karpcore.com, admin.karpcore.com).', 'Une instance centrale dessert toutes les marques — zéro double gestion.', 'Flux B2B complet : du catalogue par marque et des prix revendeurs aux devis, validations et paiement.', 'Prêt pour la production sur Fly.io, avec des déploiements automatisés qui refusent de s\u2019exécuter si quelque chose cloche.'],
    },
    underTheHood: {
      title: 'Sous le capot',
      intro: 'Pour ceux qui veulent les détails techniques : KarpCore tourne sur une technologie moderne et éprouvée — choisie pour être évolutive, sécurisée et maintenable.',
      techStack: [
        { layer: 'Backend commerce', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modulaire, headless, entièrement extensible' },
        { layer: 'Vitrine (storefront)', tech: 'Next.js 15 (App Router, RSC)', why: 'Portail B2B rapide et optimisé pour le SEO' },
        { layer: 'Base de données', tech: 'PostgreSQL', why: 'Une source unique de vérité, relationnelle' },
        { layer: 'Cache & files', tech: 'Redis (Upstash)', why: 'Sessions, mise en cache, workflows asynchrones' },
        { layer: 'Stockage de fichiers', tech: 'Tigris (S3-compatible)', why: 'Médias de production, pas de disque local' },
        { layer: 'Hébergement', tech: 'Fly.io', why: 'API, worker et vitrine au plus près de l\u2019utilisateur' },
        { layer: 'Paiements', tech: 'Pay.nl', why: 'iDEAL et moyens de paiement B2B européens' },
        { layer: 'Stock/logistique', tech: 'Picqer', why: 'Synchro en direct du stock et des commandes' },
        { layer: 'Authentification', tech: 'JWT + session, rate-limited', why: 'Connexion sécurisée pour revendeurs et opérateurs' },
      ],
      principles: ['Une instance, les marques comme données — pas d\u2019installation séparée par marque, mais un module de marque de première classe.', 'Web, API et worker proprement séparés — les tâches de fond tournent sans accès public.', 'Construit sur le starter B2B officiel, sans fork dur — les futures mises à jour restent possibles.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Nous cherchions un système B2B offrant plus de possibilités que Shopify ou Magento, sans engloutir tout notre budget. Maarten a mis en place pour moi une plateforme B2B complète qui nous fait désormais gagner énormément de temps et rend la collaboration avec d\u2019autres entreprises plus simple et plus efficace — exactement comme nous voudrions que notre propre grossiste soit organisé.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Fondateur',
    },
    midCta: { title: 'Vous voulez ça pour vos marques ?', button: 'Démarrer un chat en direct' },
    process: {
      title: 'Comment nous le livrons',
      intro: 'Du premier échange à la mise en ligne — un parcours clair, sans surprises.',
      steps: [
        { number: '01', title: 'Concept & périmètre', text: 'Nous cartographions vos marques, revendeurs, structure de prix et intégrations et définissons le périmètre ensemble.' },
        { number: '02', title: 'Construction sur une base éprouvée', text: 'Nous construisons sur la fondation B2B de Medusa v2 avec vos marques, prix et règles d\u2019accès — pas de sur-mesure jetable.' },
        { number: '03', title: 'Intégrations & données', text: 'Le stock (Picqer), les paiements (Pay.nl) et votre catalogue sont connectés et migrés.' },
        { number: '04', title: 'Mise en ligne & transfert', text: 'Une mise en production contrôlée et automatisée sur votre propre domaine — plus une présentation pour votre équipe.' },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { question: 'Puis-je migrer mes marques et produits existants ?', answer: 'Oui. Nous transférons votre catalogue, vos prix et vos revendeurs vers une instance centrale. Comme les marques sont traitées comme des données, vous ajoutez ensuite simplement de nouvelles marques sans monter une nouvelle boutique.' },
        { question: 'Les revendeurs ne voient-ils vraiment que leurs propres marques ?', answer: 'Oui, garanti. Le contrôle d\u2019accès est appliqué sur le serveur à chaque requête — pas dans le navigateur. Un revendeur ne peut pas accéder à des marques qui ne lui sont pas ouvertes, même en manipulant l\u2019URL.' },
        { question: 'Est-ce compatible avec mes systèmes de stock et de paiement ?', answer: 'Par défaut, KarpCore se connecte à Picqer (stock/commandes) et Pay.nl (iDEAL et moyens de paiement européens). La plateforme est modulaire, donc connecter d\u2019autres systèmes est une extension, pas une reconstruction.' },
        { question: 'Combien de temps pour la mise en ligne ?', answer: 'Cela dépend du nombre de marques, de produits et d\u2019intégrations. Comme nous construisons sur une base éprouvée avec des déploiements automatisés, c\u2019est plus rapide qu\u2019un sur-mesure complet. Lors d\u2019un court échange, nous esquissons un calendrier réaliste pour votre situation.' },
        { question: 'Peut-il grandir si j\u2019ajoute des marques ou des revendeurs ?', answer: 'Oui. Vous activez une nouvelle marque et attribuez l\u2019accès à un nouveau revendeur. Une seule instance dessert toutes vos marques et revendeurs — l\u2019architecture a été conçue pour cela dès le départ.' },
        { question: 'Et si j\u2019ai besoin de quelque chose d\u2019unique ?', answer: 'C\u2019est possible. KarpCore est composé de modules séparés (marques, entreprises, devis, validations). Nous développons le sur-mesure comme une extension propre, sans sacrifier la capacité de mise à jour de la plateforme.' },
      ],
    },
    cta: {
      title: 'Vous aussi, toutes vos marques sous un même toit ?',
      subtitle: 'Du concept à la mise en ligne — nous le construisons avec vous.',
      body: 'Regrouper plusieurs marques, un accès revendeur fin ou un flux complet de devis et de validation : parlez-nous de votre défi B2B et nous vous montrerons comment faire.',
      button: 'Démarrer un chat en direct',
    },
    liveUrls: LIVE_URLS,
  },

  es: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Para mayoristas e importadores con varias marcas',
      badge: 'Caso de éxito · En producción',
      headline: 'Todas tus marcas. Una plataforma. Cada distribuidor ve solo lo que es suyo.',
      sub: 'KarpCore es la plataforma de pedidos B2B para mayoristas e importadores con varias marcas. Un solo sistema para todo tu catálogo, stock y precios — mientras cada distribuidor inicia sesión y ve únicamente sus marcas, sus precios de compra y su stock.',
      trustLine: 'En vivo en su propio dominio · Protegido en el servidor · Construido sobre Medusa v2 y Next.js 15',
      badges: ['En vivo en karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Ver la plataforma en vivo',
      screenshotCaption: 'Una pantalla real del portal de distribuidores — precio de distribuidor junto al PVP recomendado.',
    },
    stats: [
      { value: '1', label: 'Plataforma para todas tus marcas' },
      { value: '∞', label: 'Marcas y distribuidores' },
      { value: '100%', label: 'Protegido en el servidor' },
      { value: 'Live', label: 'En producción' },
    ],
    problemSolutions: {
      title: '¿Te suena?',
      intro: 'Los mayoristas con varias marcas chocan una y otra vez con los mismos tres muros. Así los elimina KarpCore:',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      pairs: [
        {
          problem: { title: 'Una tienda online por marca', text: 'Tres, cinco, a veces diez tiendas WooCommerce o Shopify separadas. Cada cambio de precio, actualización de stock y nuevo distribuidor hay que introducirlo por separado en todas partes. Tu equipo pierde horas en trabajo duplicado y los errores se cuelan inevitablemente.' },
          solution: { title: 'Un solo sistema para todo', text: 'KarpCore agrupa todas tus marcas en una plataforma: un catálogo, un stock, un sistema de precios. Actualizas algo una vez — no cinco. Se acabó la doble gestión.' },
        },
        {
          problem: { title: 'Todos ven todo — o nada', text: 'Una tienda normal no entiende de «este distribuidor sí marca A, no marca B». Lo resuelves con cuentas separadas y listas de precios manuales, o simplemente lo muestras todo. Entonces los distribuidores ven precios de compra de marcas que no son para ellos.' },
          solution: { title: 'Acceso por distribuidor, por marca', text: 'Activa o desactiva marcas por empresa con un clic. Cada distribuidor inicia sesión y ve exactamente sus marcas, sus precios y su stock. El resto simplemente no existe para él — garantizado, aplicado en el servidor.' },
        },
        {
          problem: { title: 'Sin un verdadero flujo B2B', text: 'Los presupuestos van y vienen por correo. Los pedidos grandes deberían pasar por el jefe, pero eso no está en ningún sitio del sistema. Los precios de distribuidor y los tramos se pegan con códigos de descuento. Funciona a medias — y no escala cuando creces.' },
          solution: { title: 'El B2B viene integrado', text: 'Presupuestos con negociación, flujos de aprobación para pedidos grandes, precios de distribuidor por grupo de clientes y cuentas de empresa con varios empleados — todo nativo en la plataforma. Sin parches, sin atajos.' },
        },
      ],
    },
    showcase: {
      title: 'Ve KarpCore en acción',
      intro: 'Pantallas reales de la plataforma en vivo — diseñadas para que los distribuidores pidan en segundos.',
      items: [
        { img: IMG.variant, alt: 'Elegir variante con precio de distribuidor y PVP', title: 'Compra rápida — la variante correcta al instante', text: 'Con el botón de añadir al carrito en el catálogo, tu distribuidor elige directamente la variante y la cantidad. Su precio de distribuidor y el PVP recomendado aparecen uno al lado del otro.' },
        { img: IMG.quickAdd, alt: 'Añadir rápido por SKU o EAN', title: 'Pedir por SKU o EAN — escribir o escanear', text: 'Añade productos en segundos por número de artículo o código de barras. Escanear funciona igual de bien. Cantidad = número de paquetes; el tamaño del embalaje se aplica automáticamente.' },
        { img: IMG.search, alt: 'Búsqueda rápida por nombre, SKU o EAN', title: 'Búsqueda rápida por nombre, SKU o EAN', text: 'Empieza a escribir y verás al instante los productos correctos con miniatura — sin desplazarte sin fin por el catálogo.' },
        { img: IMG.cart, alt: 'Solicitar presupuesto, pagar directamente o exportar el carrito', title: 'Solicita un presupuesto o paga directamente', text: 'Desde el carrito, solicita un presupuesto, paga al momento o exporta todo el carrito como CSV. El distribuidor elige la vía más rápida.' },
      ],
    },
    beforeAfter: {
      title: 'La diferencia que marca KarpCore',
      intro: 'De lo fragmentado y manual a una plataforma ordenada.',
      before: { title: 'Sin KarpCore', items: ['Una tienda separada por marca, con doble gestión', 'Actualizar precios y stock en todas partes a mano', 'Los distribuidores ven precios que no son para ellos', 'Presupuestos y aprobaciones por correo y Excel', 'Marca nueva = montar otra tienda más'] },
      after: { title: 'Con KarpCore', items: ['Una plataforma para todas tus marcas', 'Actualizar una vez, correcto en todas partes al instante', 'Cada distribuidor ve exactamente sus marcas y precios', 'Presupuestos y aprobaciones integrados en el portal', 'Marca nueva = activarla con un clic'] },
    },
    outcomes: {
      title: 'Lo que consigues',
      intro: 'No funciones técnicas, sino lo que significa en concreto para tu negocio:',
      items: [
        { title: 'Horas menos de gestión por semana', text: 'Actualizar una vez en lugar de en todas partes. Tu equipo gana tiempo para los clientes en lugar de reescribir datos.' },
        { title: 'Se acabaron las fugas de precios', text: 'Los distribuidores nunca ven marcas ni precios de compra que no son para ellos. Punto.' },
        { title: 'Una experiencia profesional para el distribuidor', text: 'Pedidos rápidos, precios propios, presupuestos y repeticiones en un portal moderno — 24/7, sin que tengas que intervenir.' },
        { title: 'Listo para crecer', text: '¿Marca nueva? Solo actívala. ¿Distribuidor nuevo? Asigna acceso. La plataforma crece contigo, sin reconstruirla.' },
      ],
    },
    features: {
      title: 'Todo lo que necesita una plataforma B2B',
      intro: 'Para tus distribuidores y para ti entre bastidores.',
      dealer: { title: 'Para tus distribuidores', subtitle: 'El portal donde piden', items: ['Marcas y precios propios — solo ven lo que está habilitado para su empresa, con el precio de distribuidor y el PVP recomendado uno al lado del otro.', 'Cuentas de empresa con varios empleados — invitar a colegas, con roles y permisos por persona.', 'Solicitar y negociar presupuestos — directamente en el portal, con mensajes, aceptar o rechazar.', 'Pedidos inteligentes — añadir en bloque, añadir rápido por número de artículo, totales por marca y umbrales de envío gratis.', 'Búsqueda ultrarrápida con miniaturas de producto.', 'Onboarding self-service — solicitar acceso a nuevas marcas desde el portal.'] },
      operator: { title: 'Para ti (admin)', subtitle: 'El control entre bastidores', items: ['Marcas on/off por empresa — con un registro de auditoría completo de quién puede ver qué.', 'Gestión central de marcas — activar, desactivar y gestionar recursos en un solo lugar.', 'Precios de distribuidor por grupo de clientes — y gestión del PVP por producto.', 'Gestionar presupuestos y aprobaciones — íntegramente desde el admin.', 'Umbrales de aprobación — los pedidos por encima de un importe pasan primero por un aprobador interno.', 'Configurar integraciones con prueba de conexión — credenciales almacenadas cifradas.'] },
      integrations: { title: 'Se conecta con tus sistemas', subtitle: 'Sin islas aisladas', items: ['Pay.nl — iDEAL y métodos de pago B2B europeos, integrados.', 'Picqer — sincronización en vivo de stock y pedidos vía webhooks.', 'Correo transaccional — confirmaciones de pedido y notificaciones que siempre llegan.', 'Ampliable — diseño modular, así que nuevas integraciones no son una reconstrucción.'] },
    },
    security: {
      title: 'Control de acceso hermético — no un añadido, sino el cimiento',
      lead: 'En los desarrollos a medida, un filtro olvidado basta para mostrar a un distribuidor los precios de otro. KarpCore está construido para esto desde la primera línea de código.',
      points: [
        { title: 'Acceso en el servidor, nunca en el navegador', text: 'Cada página que devuelve productos, precios o stock comprueba primero en el servidor si ese distribuidor puede siquiera ver esa marca. No se puede eludir con una URL ingeniosa.' },
        { title: 'No confiar en nada que venga de fuera', text: 'Un id de marca de un enlace nunca se acepta sin más — siempre se comprueba primero contra las marcas activas para esa empresa.' },
        { title: 'Todo queda registrado', text: 'Los cambios en el acceso a marcas pasan por flujos con registro de auditoría. Ves exactamente quién obtuvo qué y cuándo.' },
        { title: 'Protegido contra abusos', text: 'Los endpoints de inicio de sesión tienen límite de tasa contra la fuerza bruta. Las credenciales se guardan cifradas en la base de datos.' },
      ],
      conclusion: 'El resultado: un distribuidor no puede acceder en principio a datos de marcas que no están activas para él — ni siquiera por un atajo.',
      image: IMG.dealerOnly,
      imageAlt: 'Pedidos solo para distribuidores — inicia sesión para ver precios de distribuidor',
      note: IMG.note,
      noteAlt: 'Contacta con tu gestor de cuenta para los precios de distribuidor de esta marca',
      noteText: '¿Sin acceso? Entonces no ves precios — y tampoco están en el código fuente.',
    },
    results: {
      title: 'El resultado',
      items: ['En vivo en su propio dominio con certificados válidos (karpcore.com, admin.karpcore.com).', 'Una instancia central sirve a todas las marcas — cero doble gestión.', 'Flujo B2B completo: del catálogo por marca y precios de distribuidor a presupuestos, aprobaciones y pago.', 'Listo para producción en Fly.io, con despliegues automatizados que se niegan a ejecutarse si algo falla.'],
    },
    underTheHood: {
      title: 'Bajo el capó',
      intro: 'Para quien quiera los detalles técnicos: KarpCore funciona sobre tecnología moderna y probada — elegida para ser escalable, segura y mantenible.',
      techStack: [
        { layer: 'Backend de comercio', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modular, headless, totalmente ampliable' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Portal B2B rápido y amigable con el SEO' },
        { layer: 'Base de datos', tech: 'PostgreSQL', why: 'Una única fuente de verdad, relacional' },
        { layer: 'Caché y colas', tech: 'Redis (Upstash)', why: 'Sesiones, caché, flujos asíncronos' },
        { layer: 'Almacenamiento de archivos', tech: 'Tigris (S3-compatible)', why: 'Medios de producción, sin disco local' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker y storefront cerca del usuario' },
        { layer: 'Pagos', tech: 'Pay.nl', why: 'iDEAL y métodos de pago B2B europeos' },
        { layer: 'Stock/logística', tech: 'Picqer', why: 'Sincronización en vivo de stock y pedidos' },
        { layer: 'Autenticación', tech: 'JWT + session, rate-limited', why: 'Inicio de sesión seguro para distribuidores y operadores' },
      ],
      principles: ['Una instancia, las marcas como datos — sin instalación separada por marca, sino un módulo de marca de primera clase.', 'Web, API y worker bien separados — las tareas en segundo plano se ejecutan sin acceso público.', 'Construido sobre el starter B2B oficial, sin un fork rígido — las futuras actualizaciones siguen siendo posibles.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Buscábamos un sistema B2B con más posibilidades que Shopify o Magento, sin que se llevara todo nuestro presupuesto. Maarten montó por encargo mío una plataforma B2B completa que ahora nos ahorra muchísimo tiempo y hace que trabajar con otras empresas sea más fácil y eficiente — exactamente como nos gustaría que estuviera organizado nuestro propio mayorista.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Fundador',
    },
    midCta: { title: '¿Quieres esto para tus marcas?', button: 'Iniciar un chat en vivo' },
    process: {
      title: 'Cómo lo entregamos',
      intro: 'De la primera conversación a la puesta en marcha — un camino claro y sin sorpresas.',
      steps: [
        { number: '01', title: 'Concepto y alcance', text: 'Mapeamos tus marcas, distribuidores, estructura de precios e integraciones y definimos el alcance juntos.' },
        { number: '02', title: 'Construcción sobre una base probada', text: 'Construimos sobre la base B2B de Medusa v2 con tus marcas, precios y reglas de acceso — sin desarrollo a medida desechable.' },
        { number: '03', title: 'Integraciones y datos', text: 'El stock (Picqer), los pagos (Pay.nl) y tu catálogo se conectan y se migran.' },
        { number: '04', title: 'Puesta en marcha y traspaso', text: 'Una publicación controlada y automatizada a producción en tu propio dominio — más una explicación para tu equipo.' },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { question: '¿Puedo migrar mis marcas y productos existentes?', answer: 'Sí. Movemos tu catálogo, precios y distribuidores a una instancia central. Como las marcas se tratan como datos, después simplemente añades nuevas marcas sin montar una tienda nueva.' },
        { question: '¿De verdad los distribuidores solo ven sus propias marcas?', answer: 'Sí, garantizado. El control de acceso se aplica en el servidor en cada petición — no en el navegador. Un distribuidor no puede acceder a marcas que no están habilitadas para él, ni siquiera manipulando la URL.' },
        { question: '¿Funciona con mis sistemas de stock y de pago?', answer: 'De serie, KarpCore se conecta con Picqer (stock/pedidos) y Pay.nl (iDEAL y métodos de pago europeos). La plataforma es modular, así que conectar otros sistemas es una ampliación, no una reconstrucción.' },
        { question: '¿Cuánto tarda en estar en marcha?', answer: 'Depende del número de marcas, productos e integraciones. Como construimos sobre una base probada con despliegues automatizados, es más rápido que un desarrollo a medida completo. En una breve llamada esbozamos un calendario realista para tu situación.' },
        { question: '¿Puede crecer si añado marcas o distribuidores?', answer: 'Sí. Activas una nueva marca y asignas acceso a un nuevo distribuidor. Una instancia sirve a todas tus marcas y distribuidores — la arquitectura se diseñó para esto desde el principio.' },
        { question: '¿Y si necesito algo único?', answer: 'Es posible. KarpCore está formado por módulos separados (marcas, empresas, presupuestos, aprobaciones). El desarrollo a medida lo construimos como una ampliación limpia, sin sacrificar la capacidad de actualización de la plataforma.' },
      ],
    },
    cta: {
      title: '¿Quieres también todas tus marcas bajo un mismo techo?',
      subtitle: 'Del concepto a la puesta en marcha — lo construimos contigo.',
      body: 'Agrupar varias marcas, acceso de distribuidor preciso o un flujo completo de presupuestos y aprobaciones: cuéntanos tu reto B2B y te mostramos cómo se puede hacer.',
      button: 'Iniciar un chat en vivo',
    },
    liveUrls: LIVE_URLS,
  },

  pl: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Dla hurtowni i importerów z wieloma markami',
      badge: 'Studium przypadku · Na żywo w produkcji',
      headline: 'Wszystkie Twoje marki. Jedna platforma. Każdy dealer widzi tylko to, co jego.',
      sub: 'KarpCore to platforma zamówień B2B dla hurtowni i importerów z wieloma markami. Jeden system dla całego katalogu, stanów magazynowych i cen — a każdy dealer loguje się i widzi wyłącznie swoje marki, swoje ceny zakupu i swój stan magazynowy.',
      trustLine: 'Działa na własnej domenie · Zabezpieczone po stronie serwera · Zbudowane na Medusa v2 i Next.js 15',
      badges: ['Na żywo na karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Zobacz działającą platformę',
      screenshotCaption: 'Prawdziwy ekran z działającego portalu dealerskiego — cena dealerska obok ceny sugerowanej.',
    },
    stats: [
      { value: '1', label: 'Platforma dla wszystkich Twoich marek' },
      { value: '∞', label: 'Marki i dealerzy' },
      { value: '100%', label: 'Zabezpieczone po stronie serwera' },
      { value: 'Live', label: 'Działa w produkcji' },
    ],
    problemSolutions: {
      title: 'Brzmi znajomo?',
      intro: 'Hurtownie z wieloma markami ciągle uderzają w te same trzy ściany. Oto jak KarpCore je usuwa:',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      pairs: [
        {
          problem: { title: 'Osobny sklep dla każdej marki', text: 'Trzy, pięć, czasem dziesięć osobnych sklepów WooCommerce lub Shopify. Każdą zmianę ceny, aktualizację stanu i nowego dealera trzeba wprowadzać wszędzie osobno. Twój zespół traci godziny na podwójną pracę, a błędy nieuchronnie się wkradają.' },
          solution: { title: 'Jeden system do wszystkiego', text: 'KarpCore łączy wszystkie Twoje marki w jednej platformie: jeden katalog, jeden magazyn, jeden system cen. Aktualizujesz coś raz — nie pięć razy. Koniec z podwójnym zarządzaniem.' },
        },
        {
          problem: { title: 'Wszyscy widzą wszystko — albo nic', text: 'Zwykły sklep nie zna zasady „ten dealer marka A tak, marka B nie”. Rozwiązujesz to osobnymi kontami i ręcznymi cennikami albo po prostu pokazujesz wszystko. Wtedy dealerzy widzą ceny zakupu marek, które nie są dla nich przeznaczone.' },
          solution: { title: 'Dostęp na dealera, na markę', text: 'Włączaj lub wyłączaj marki dla każdej firmy jednym kliknięciem. Każdy dealer loguje się i widzi dokładnie swoje marki, swoje ceny i swój stan. Reszta po prostu dla niego nie istnieje — gwarantowane, wymuszane po stronie serwera.' },
        },
        {
          problem: { title: 'Brak prawdziwego procesu B2B', text: 'Oferty krążą tam i z powrotem mailem. Duże zamówienia powinny iść przez szefa, ale nie ma tego nigdzie w systemie. Ceny dealerskie i progi doklejasz kodami rabatowymi. Działa połowicznie — i nie skaluje się wraz ze wzrostem.' },
          solution: { title: 'B2B jest wbudowane', text: 'Oferty z negocjacją, procesy akceptacji dużych zamówień, ceny dealerskie na grupę klientów i konta firmowe z wieloma pracownikami — wszystko natywnie w platformie. Bez klejenia, bez obejść.' },
        },
      ],
    },
    showcase: {
      title: 'Zobacz KarpCore w akcji',
      intro: 'Prawdziwe ekrany z działającej platformy — zbudowane tak, by dealerzy zamawiali w kilka sekund.',
      items: [
        { img: IMG.variant, alt: 'Wybór wariantu z ceną dealerską i ceną sugerowaną', title: 'Szybkie zakupy — od razu właściwy wariant', text: 'Przez przycisk dodawania do koszyka w katalogu dealer od razu wybiera właściwy wariant i ilość. Jego cena dealerska i cena sugerowana (RRP) stoją obok siebie.' },
        { img: IMG.quickAdd, alt: 'Szybkie dodawanie po SKU lub EAN', title: 'Zamawianie po SKU lub EAN — wpisz lub zeskanuj', text: 'Dodawaj produkty w kilka sekund po numerze artykułu lub kodzie kreskowym. Skanowanie działa tak samo dobrze. Ilość = liczba opakowań; wielkość opakowania jest stosowana automatycznie.' },
        { img: IMG.search, alt: 'Szybkie wyszukiwanie po nazwie, SKU lub EAN', title: 'Szybkie wyszukiwanie po nazwie, SKU lub EAN', text: 'Zacznij pisać i od razu zobacz właściwe produkty z miniaturą — bez niekończącego się przewijania katalogu.' },
        { img: IMG.cart, alt: 'Poproś o ofertę, zapłać od razu lub wyeksportuj koszyk', title: 'Poproś o ofertę lub zapłać od razu', text: 'Z koszyka poproś o ofertę, zapłać od razu lub wyeksportuj cały koszyk jako CSV. Dealer sam wybiera najszybszą drogę.' },
      ],
    },
    beforeAfter: {
      title: 'Różnica, jaką robi KarpCore',
      intro: 'Od rozproszenia i ręcznej pracy do jednej uporządkowanej platformy.',
      before: { title: 'Bez KarpCore', items: ['Osobny sklep dla każdej marki, z podwójnym zarządzaniem', 'Ręczna aktualizacja cen i stanów wszędzie', 'Dealerzy widzą ceny, które nie są dla nich', 'Oferty i akceptacje przez maila i Excela', 'Nowa marka = znów stawianie nowego sklepu'] },
      after: { title: 'Z KarpCore', items: ['Jedna platforma dla wszystkich Twoich marek', 'Aktualizujesz raz, wszędzie od razu poprawnie', 'Każdy dealer widzi dokładnie swoje marki i ceny', 'Oferty i akceptacje wbudowane w portal', 'Nowa marka = włączasz jednym kliknięciem'] },
    },
    outcomes: {
      title: 'Co Ci to daje',
      intro: 'Nie funkcje techniczne, lecz co to konkretnie oznacza dla Twojego biznesu:',
      items: [
        { title: 'Godziny mniej administracji tygodniowo', text: 'Aktualizujesz raz zamiast wszędzie. Twój zespół ma czas dla klientów zamiast przepisywać dane.' },
        { title: 'Koniec z wyciekami cen', text: 'Dealerzy nigdy nie widzą marek ani cen zakupu, które nie są dla nich. Kropka.' },
        { title: 'Profesjonalne doświadczenie dealera', text: 'Szybkie zamawianie, własne ceny, oferty i ponowne zamówienia w nowoczesnym portalu — 24/7, bez Twojej interwencji.' },
        { title: 'Gotowe na rozwój', text: 'Nowa marka? Po prostu włącz. Nowy dealer? Przydziel dostęp. Platforma rośnie razem z Tobą, bez przebudowy.' },
      ],
    },
    features: {
      title: 'Wszystko, czego potrzebuje platforma B2B',
      intro: 'Dla Twoich dealerów i dla Ciebie za kulisami.',
      dealer: { title: 'Dla Twoich dealerów', subtitle: 'Portal, w którym zamawiają', items: ['Własne marki i ceny — widzą tylko to, co udostępnione ich firmie, z ceną dealerską i ceną sugerowaną (RRP) obok siebie.', 'Konta firmowe z wieloma pracownikami — zapraszaj współpracowników, z rolami i uprawnieniami na osobę.', 'Proś o oferty i negocjuj — bezpośrednio w portalu, z wiadomościami, akceptacją lub odrzuceniem.', 'Inteligentne zamawianie — dodawanie hurtowe, szybkie dodawanie po numerze artykułu, sumy na markę i progi darmowej wysyłki.', 'Błyskawiczne wyszukiwanie z miniaturami produktów.', 'Samoobsługowy onboarding — proś o dostęp do nowych marek z poziomu portalu.'] },
      operator: { title: 'Dla Ciebie (admin)', subtitle: 'Kontrola za kulisami', items: ['Marki wł./wył. na firmę — z pełnym dziennikiem audytu, kto co może widzieć.', 'Centralne zarządzanie markami — aktywuj, dezaktywuj i zarządzaj zasobami w jednym miejscu.', 'Ceny dealerskie na grupę klientów — i zarządzanie RRP na produkt.', 'Zarządzanie ofertami i akceptacjami — w całości z panelu admina.', 'Progi akceptacji — zamówienia powyżej kwoty trafiają najpierw do wewnętrznego akceptującego.', 'Konfiguracja integracji z testem połączenia — dane logowania przechowywane w postaci zaszyfrowanej.'] },
      integrations: { title: 'Łączy się z Twoimi systemami', subtitle: 'Żadnych odizolowanych wysp', items: ['Pay.nl — iDEAL i europejskie metody płatności B2B, wbudowane.', 'Picqer — synchronizacja stanów i zamówień na żywo przez webhooki.', 'E-maile transakcyjne — potwierdzenia zamówień i powiadomienia, które zawsze docierają.', 'Rozszerzalne — modułowa budowa, więc nowe integracje to nie przebudowa.'] },
    },
    security: {
      title: 'Szczelna kontrola dostępu — nie dodatek, lecz fundament',
      lead: 'Przy rozwiązaniach na zamówienie jeden zapomniany filtr wystarczy, by pokazać dealerowi cudze ceny. KarpCore jest na to zbudowany od pierwszej linijki kodu.',
      points: [
        { title: 'Dostęp na serwerze, nigdy w przeglądarce', text: 'Każda strona zwracająca produkty, ceny lub stany najpierw sprawdza na serwerze, czy ten dealer w ogóle może zobaczyć daną markę. Nie da się tego obejść sprytnym URL-em.' },
        { title: 'Nie ufamy niczemu z zewnątrz', text: 'Identyfikator marki z linku nigdy nie jest przyjmowany bez sprawdzenia — zawsze najpierw weryfikowany względem marek aktywnych dla danej firmy.' },
        { title: 'Wszystko jest rejestrowane', text: 'Zmiany dostępu do marek przechodzą przez procesy z dziennikiem audytu. Widzisz dokładnie, kto, co i kiedy otrzymał.' },
        { title: 'Chronione przed nadużyciami', text: 'Punkty logowania mają ograniczenie liczby żądań przeciw atakom brute-force. Dane logowania są przechowywane zaszyfrowane w bazie.' },
      ],
      conclusion: 'Efekt: dealer co do zasady nie dostanie się do danych marek, które nie są dla niego aktywne — nawet okrężną drogą.',
      image: IMG.dealerOnly,
      imageAlt: 'Zamawianie tylko dla dealerów — zaloguj się, by zobaczyć ceny dealerskie',
      note: IMG.note,
      noteAlt: 'Skontaktuj się z opiekunem konta w sprawie cen dealerskich tej marki',
      noteText: 'Brak dostępu? Wtedy nie widzisz cen — i nie ma ich też w kodzie źródłowym.',
    },
    results: {
      title: 'Efekt',
      items: ['Działa na własnej domenie z ważnymi certyfikatami (karpcore.com, admin.karpcore.com).', 'Jedna centralna instancja obsługuje wszystkie marki — zero podwójnego zarządzania.', 'Pełny proces B2B: od katalogu przypisanego do marek i cen dealerskich po oferty, akceptacje i płatność.', 'Gotowe do produkcji na Fly.io, z automatycznymi wdrożeniami, które odmawiają uruchomienia, gdy coś się nie zgadza.'],
    },
    underTheHood: {
      title: 'Pod maską',
      intro: 'Dla tych, którzy chcą szczegółów technicznych: KarpCore działa na sprawdzonej, nowoczesnej technologii — wybranej tak, by była skalowalna, bezpieczna i łatwa w utrzymaniu.',
      techStack: [
        { layer: 'Backend commerce', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modułowy, headless, w pełni rozszerzalny' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Szybki, przyjazny SEO portal B2B' },
        { layer: 'Baza danych', tech: 'PostgreSQL', why: 'Jedno źródło prawdy, relacyjne' },
        { layer: 'Cache i kolejki', tech: 'Redis (Upstash)', why: 'Sesje, cache, asynchroniczne procesy' },
        { layer: 'Przechowywanie plików', tech: 'Tigris (S3-compatible)', why: 'Media produkcyjne, bez lokalnego dysku' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker i storefront blisko użytkownika' },
        { layer: 'Płatności', tech: 'Pay.nl', why: 'iDEAL i europejskie metody płatności B2B' },
        { layer: 'Magazyn/realizacja', tech: 'Picqer', why: 'Synchronizacja stanów i zamówień na żywo' },
        { layer: 'Uwierzytelnianie', tech: 'JWT + session, rate-limited', why: 'Bezpieczne logowanie dla dealerów i operatorów' },
      ],
      principles: ['Jedna instancja, marki jako dane — bez osobnej instalacji na markę, lecz pełnoprawny moduł marek.', 'Web, API i worker czysto rozdzielone — zadania w tle działają bez publicznego dostępu.', 'Zbudowane na oficjalnym starterze B2B, bez twardego forka — przyszłe aktualizacje pozostają możliwe.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Szukaliśmy systemu B2B z większymi możliwościami niż Shopify czy Magento, bez pochłaniania całego naszego budżetu. Maarten na moje zlecenie zbudował kompletną platformę B2B, która teraz oszczędza nam mnóstwo czasu i sprawia, że współpraca z innymi firmami jest łatwiejsza i bardziej efektywna — dokładnie tak, jak sami chcielibyśmy, żeby działała nasza własna hurtownia.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Założyciel',
    },
    midCta: { title: 'Chcesz tego dla swoich marek?', button: 'Rozpocznij czat na żywo' },
    process: {
      title: 'Jak to dostarczamy',
      intro: 'Od pierwszej rozmowy do uruchomienia — jasna ścieżka bez niespodzianek.',
      steps: [
        { number: '01', title: 'Koncepcja i zakres', text: 'Mapujemy Twoje marki, dealerów, strukturę cen i integracje oraz wspólnie ustalamy zakres.' },
        { number: '02', title: 'Budowa na sprawdzonej bazie', text: 'Budujemy na fundamencie B2B Medusa v2 z Twoimi markami, cenami i regułami dostępu — bez jednorazowej roboty na zamówienie.' },
        { number: '03', title: 'Integracje i dane', text: 'Magazyn (Picqer), płatności (Pay.nl) i Twój katalog zostają podłączone i zmigrowane.' },
        { number: '04', title: 'Uruchomienie i przekazanie', text: 'Kontrolowane, automatyczne wdrożenie na produkcję na Twojej własnej domenie — plus wprowadzenie dla Twojego zespołu.' },
      ],
    },
    faq: {
      title: 'Najczęstsze pytania',
      items: [
        { question: 'Czy mogę zmigrować istniejące marki i produkty?', answer: 'Tak. Przenosimy Twój katalog, ceny i dealerów do jednej centralnej instancji. Ponieważ marki traktujemy jak dane, potem po prostu dodajesz nowe marki bez stawiania nowego sklepu.' },
        { question: 'Czy dealerzy naprawdę widzą tylko własne marki?', answer: 'Tak, gwarantowane. Kontrola dostępu jest wymuszana na serwerze przy każdym żądaniu — nie w przeglądarce. Dealer nie dostanie się do marek, które nie są dla niego udostępnione, nawet manipulując URL-em.' },
        { question: 'Czy działa z moimi systemami magazynowymi i płatności?', answer: 'Od ręki KarpCore łączy się z Picqer (magazyn/zamówienia) i Pay.nl (iDEAL i europejskie metody płatności). Platforma jest modułowa, więc podłączenie innych systemów to rozszerzenie, nie przebudowa.' },
        { question: 'Ile trwa uruchomienie?', answer: 'To zależy od liczby marek, produktów i integracji. Ponieważ budujemy na sprawdzonej bazie z automatycznymi wdrożeniami, idzie to szybciej niż pełna robota na zamówienie. W krótkiej rozmowie szkicujemy realistyczny harmonogram dla Twojej sytuacji.' },
        { question: 'Czy może rosnąć, gdy dodaję marki lub dealerów?', answer: 'Tak. Włączasz nową markę i przydzielasz dostęp nowemu dealerowi. Jedna instancja obsługuje wszystkie Twoje marki i dealerów — architektura była tak zaprojektowana od początku.' },
        { question: 'A jeśli potrzebuję czegoś unikalnego?', answer: 'To możliwe. KarpCore składa się z osobnych modułów (marki, firmy, oferty, akceptacje). Rozwiązania na zamówienie budujemy jako czyste rozszerzenie, bez poświęcania możliwości aktualizacji platformy.' },
      ],
    },
    cta: {
      title: 'Też chcesz wszystkie swoje marki pod jednym dachem?',
      subtitle: 'Od koncepcji do uruchomienia — budujemy to z Tobą.',
      body: 'Połączenie wielu marek, precyzyjny dostęp dealerski albo pełny proces ofert i akceptacji: opowiedz nam o swoim wyzwaniu B2B, a pokażemy, jak można to zrobić.',
      button: 'Rozpocznij czat na żywo',
    },
    liveUrls: LIVE_URLS,
  },

  cs: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'Pro velkoobchody a dovozce s více značkami',
      badge: 'Případová studie · V provozu',
      headline: 'Všechny vaše značky. Jedna platforma. Každý dealer vidí jen to, co je jeho.',
      sub: 'KarpCore je B2B objednávková platforma pro velkoobchody a dovozce s více značkami. Jeden systém pro celý váš katalog, sklad a ceny — zatímco každý dealer se přihlásí a vidí výhradně své značky, své nákupní ceny a svůj sklad.',
      trustLine: 'V provozu na vlastní doméně · Zabezpečeno na straně serveru · Postaveno na Medusa v2 a Next.js 15',
      badges: ['V provozu na karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Zobrazit živou platformu',
      screenshotCaption: 'Skutečná obrazovka z živého dealerského portálu — dealerská cena vedle doporučené ceny.',
    },
    stats: [
      { value: '1', label: 'Platforma pro všechny vaše značky' },
      { value: '∞', label: 'Značky a dealeři' },
      { value: '100%', label: 'Zabezpečeno na serveru' },
      { value: 'Live', label: 'V provozu' },
    ],
    problemSolutions: {
      title: 'Zní vám to povědomě?',
      intro: 'Velkoobchody s více značkami naráží stále na stejné tři zdi. Takto je KarpCore odstraní:',
      problemLabel: 'Problém',
      solutionLabel: 'Řešení',
      pairs: [
        {
          problem: { title: 'Samostatný e-shop pro každou značku', text: 'Tři, pět, někdy deset samostatných e-shopů WooCommerce nebo Shopify. Každou změnu ceny, aktualizaci skladu i nového dealera musíte zadávat všude zvlášť. Tým ztrácí hodiny dvojí prací a chyby se nevyhnutelně vloudí.' },
          solution: { title: 'Jeden systém pro vše', text: 'KarpCore sloučí všechny vaše značky do jedné platformy: jeden katalog, jeden sklad, jeden cenový systém. Něco upravíte jednou — ne pětkrát. Konec dvojí správy.' },
        },
        {
          problem: { title: 'Každý vidí vše — nebo nic', text: 'Běžný e-shop nezná „tento dealer značku A ano, značku B ne“. Řešíte to samostatnými účty a ručními ceníky, nebo prostě ukážete vše. Dealeři pak vidí nákupní ceny značek, které pro ně nejsou určeny.' },
          solution: { title: 'Přístup na dealera, na značku', text: 'Zapínejte a vypínejte značky pro každou firmu jedním kliknutím. Každý dealer se přihlásí a vidí přesně své značky, své ceny a svůj sklad. Zbytek pro něj prostě neexistuje — zaručeně, vynuceno na serveru.' },
        },
        {
          problem: { title: 'Žádný skutečný B2B proces', text: 'Nabídky létají sem a tam e-mailem. Velké objednávky by měly projít přes šéfa, ale to v systému nikde není. Dealerské ceny a hladiny lepíte slevovými kódy. Funguje to napůl — a neškáluje to s růstem.' },
          solution: { title: 'B2B je vestavěné', text: 'Nabídky s vyjednáváním, schvalovací procesy pro velké objednávky, dealerské ceny podle skupin zákazníků a firemní účty s více zaměstnanci — vše nativně v platformě. Žádné lepení, žádné obcházení.' },
        },
      ],
    },
    showcase: {
      title: 'Podívejte se na KarpCore v akci',
      intro: 'Skutečné obrazovky z živé platformy — navržené tak, aby dealeři objednávali během pár sekund.',
      items: [
        { img: IMG.variant, alt: 'Výběr varianty s dealerskou a doporučenou cenou', title: 'Rychlý nákup — hned správná varianta', text: 'Přes tlačítko přidání do košíku v katalogu vybere váš dealer rovnou správnou variantu a množství. Jeho dealerská cena a doporučená cena (RRP) jsou hezky vedle sebe.' },
        { img: IMG.quickAdd, alt: 'Rychlé přidání podle SKU nebo EAN', title: 'Objednávání podle SKU nebo EAN — napsat nebo naskenovat', text: 'Přidávejte produkty během pár sekund podle čísla zboží nebo čárového kódu. Skenování funguje stejně dobře. Množství = počet balení; velikost balení se použije automaticky.' },
        { img: IMG.search, alt: 'Rychlé hledání podle názvu, SKU nebo EAN', title: 'Rychlé hledání podle názvu, SKU nebo EAN', text: 'Začněte psát a hned uvidíte správné produkty s náhledem — žádné nekonečné rolování katalogem.' },
        { img: IMG.cart, alt: 'Vyžádat nabídku, zaplatit rovnou nebo exportovat košík', title: 'Vyžádejte nabídku nebo zaplaťte rovnou', text: 'Z košíku si vyžádejte nabídku, zaplaťte ihned, nebo exportujte celý košík jako CSV. Dealer si sám zvolí nejrychlejší cestu.' },
      ],
    },
    beforeAfter: {
      title: 'Rozdíl, který KarpCore přináší',
      intro: 'Od roztříštěnosti a ruční práce k jedné uspořádané platformě.',
      before: { title: 'Bez KarpCore', items: ['Samostatný e-shop pro každou značku, s dvojí správou', 'Ceny a sklad aktualizovat všude ručně', 'Dealeři vidí ceny, které pro ně nejsou určeny', 'Nabídky a schvalování přes e-mail a Excel', 'Nová značka = zase stavět nový e-shop'] },
      after: { title: 'S KarpCore', items: ['Jedna platforma pro všechny vaše značky', 'Upravíte jednou, všude hned správně', 'Každý dealer vidí přesně své značky a ceny', 'Nabídky a schvalování vestavěné v portálu', 'Nová značka = zapnout jedním kliknutím'] },
    },
    outcomes: {
      title: 'Co vám to přinese',
      intro: 'Ne technické funkce, ale co to konkrétně znamená pro váš byznys:',
      items: [
        { title: 'O hodiny méně administrativy týdně', text: 'Upravíte jednou místo všude. Tým má čas na zákazníky místo přepisování dat.' },
        { title: 'Žádné úniky cen', text: 'Dealeři nikdy nevidí značky ani nákupní ceny, které pro ně nejsou určeny. Tečka.' },
        { title: 'Profesionální zážitek pro dealera', text: 'Rychlé objednávání, vlastní ceny, nabídky a opakované objednávky v moderním portálu — 24/7, bez vašeho zásahu.' },
        { title: 'Připraveno na růst', text: 'Nová značka? Stačí zapnout. Nový dealer? Přidělte přístup. Platforma roste s vámi, bez přestavby.' },
      ],
    },
    features: {
      title: 'Vše, co B2B platforma potřebuje',
      intro: 'Pro vaše dealery i pro vás v zákulisí.',
      dealer: { title: 'Pro vaše dealery', subtitle: 'Portál, kde objednávají', items: ['Vlastní značky a ceny — vidí jen to, co je uvolněno pro jejich firmu, s dealerskou a doporučenou cenou (RRP) vedle sebe.', 'Firemní účty s více zaměstnanci — zvěte kolegy, s rolemi a právy na osobu.', 'Žádost o nabídku a vyjednávání — přímo v portálu, se zprávami, přijetím nebo odmítnutím.', 'Chytré objednávání — hromadné přidání, rychlé přidání podle čísla zboží, součty podle značek a hranice dopravy zdarma.', 'Bleskové vyhledávání s náhledy produktů.', 'Samoobslužný onboarding — žádejte o přístup k novým značkám přímo z portálu.'] },
      operator: { title: 'Pro vás (admin)', subtitle: 'Kontrola v zákulisí', items: ['Značky zap./vyp. podle firmy — s úplným auditním záznamem, kdo co může vidět.', 'Centrální správa značek — aktivace, deaktivace a správa podkladů na jednom místě.', 'Dealerské ceny podle skupin zákazníků — a správa RRP podle produktu.', 'Správa nabídek a schvalování — kompletně z administrace.', 'Schvalovací hranice — objednávky nad částku projdou nejdřív interním schvalovatelem.', 'Konfigurace integrací s testem připojení — přihlašovací údaje uložené šifrovaně.'] },
      integrations: { title: 'Propojí se s vašimi systémy', subtitle: 'Žádné izolované ostrovy', items: ['Pay.nl — iDEAL a evropské B2B platební metody, vestavěné.', 'Picqer — živá synchronizace skladu a objednávek přes webhooky.', 'Transakční e-maily — potvrzení objednávek a oznámení, která vždy dorazí.', 'Rozšiřitelné — modulární návrh, takže nové integrace nejsou přestavba.'] },
    },
    security: {
      title: 'Vodotěsné řízení přístupu — ne vedlejší věc, ale základ',
      lead: 'U zakázkových řešení stačí jeden zapomenutý filtr, aby dealer viděl cizí ceny. KarpCore je na to postaven od první řádky kódu.',
      points: [
        { title: 'Přístup na serveru, nikdy v prohlížeči', text: 'Každá stránka, která vrací produkty, ceny nebo sklad, nejdřív na serveru ověří, zda ten dealer vůbec smí danou značku vidět. Nelze obejít chytrou URL.' },
        { title: 'Ničemu zvenčí nevěříme', text: 'ID značky z odkazu se nikdy bez ověření nepřijme — vždy se nejdřív porovná se značkami aktivními pro danou firmu.' },
        { title: 'Vše se zaznamenává', text: 'Změny přístupu ke značkám probíhají přes procesy s auditním logem. Vidíte přesně, kdo co a kdy dostal.' },
        { title: 'Chráněno proti zneužití', text: 'Přihlašovací endpointy mají omezení počtu požadavků proti útokům hrubou silou. Přihlašovací údaje jsou v databázi uloženy šifrovaně.' },
      ],
      conclusion: 'Výsledek: dealer se zásadně nedostane k datům značek, které pro něj nejsou aktivní — ani oklikou.',
      image: IMG.dealerOnly,
      imageAlt: 'Objednávání jen pro dealery — přihlaste se pro zobrazení dealerských cen',
      note: IMG.note,
      noteAlt: 'Kontaktujte svého account manažera kvůli dealerským cenám této značky',
      noteText: 'Bez přístupu? Pak nevidíte žádné ceny — a nejsou ani ve zdrojovém kódu.',
    },
    results: {
      title: 'Výsledek',
      items: ['V provozu na vlastní doméně s platnými certifikáty (karpcore.com, admin.karpcore.com).', 'Jedna centrální instance obsluhuje všechny značky — nulová dvojí správa.', 'Kompletní B2B proces: od katalogu podle značek a dealerských cen po nabídky, schvalování a platbu.', 'Připraveno pro produkci na Fly.io, s automatizovanými nasazeními, která odmítnou běžet, když něco nesedí.'],
    },
    underTheHood: {
      title: 'Pod kapotou',
      intro: 'Pro ty, kdo chtějí technické detaily: KarpCore běží na osvědčené, moderní technologii — zvolené tak, aby byla škálovatelná, bezpečná a udržovatelná.',
      techStack: [
        { layer: 'Commerce backend', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modulární, headless, plně rozšiřitelné' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Rychlý, SEO přívětivý B2B portál' },
        { layer: 'Databáze', tech: 'PostgreSQL', why: 'Jeden zdroj pravdy, relační' },
        { layer: 'Cache a fronty', tech: 'Redis (Upstash)', why: 'Relace, cache, asynchronní procesy' },
        { layer: 'Úložiště souborů', tech: 'Tigris (S3-compatible)', why: 'Produkční média, žádný lokální disk' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker a storefront blízko uživateli' },
        { layer: 'Platby', tech: 'Pay.nl', why: 'iDEAL a evropské B2B platební metody' },
        { layer: 'Sklad/fulfillment', tech: 'Picqer', why: 'Živá synchronizace skladu a objednávek' },
        { layer: 'Autentizace', tech: 'JWT + session, rate-limited', why: 'Bezpečné přihlášení pro dealery i operátory' },
      ],
      principles: ['Jedna instance, značky jako data — žádná samostatná instalace na značku, ale plnohodnotný modul značek.', 'Web, API a worker čistě oddělené — úlohy na pozadí běží bez veřejného přístupu.', 'Postaveno na oficiálním B2B starteru, bez tvrdého forku — budoucí aktualizace zůstávají možné.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Hledali jsme B2B systém s více možnostmi než Shopify nebo Magento, aniž by spolkl celý náš rozpočet. Maarten na moji objednávku postavil kompletní B2B platformu, která nám teď šetří obrovské množství času a zjednodušuje a zefektivňuje spolupráci s dalšími firmami — přesně tak, jak bychom si přáli, aby fungoval náš vlastní velkoobchod.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Zakladatel',
    },
    midCta: { title: 'Chcete to pro své značky?', button: 'Spustit živý chat' },
    process: {
      title: 'Jak to dodáváme',
      intro: 'Od prvního rozhovoru po spuštění — jasná cesta bez překvapení.',
      steps: [
        { number: '01', title: 'Koncept a rozsah', text: 'Zmapujeme vaše značky, dealery, cenovou strukturu a integrace a společně určíme rozsah.' },
        { number: '02', title: 'Stavba na osvědčeném základu', text: 'Stavíme na B2B základu Medusa v2 s vašimi značkami, cenami a pravidly přístupu — žádná jednorázová zakázka na vyhození.' },
        { number: '03', title: 'Integrace a data', text: 'Sklad (Picqer), platby (Pay.nl) a váš katalog se propojí a zmigrují.' },
        { number: '04', title: 'Spuštění a předání', text: 'Řízené, automatizované nasazení do produkce na vaší vlastní doméně — plus zaškolení pro váš tým.' },
      ],
    },
    faq: {
      title: 'Časté dotazy',
      items: [
        { question: 'Mohu migrovat své stávající značky a produkty?', answer: 'Ano. Přeneseme váš katalog, ceny a dealery do jedné centrální instance. Protože značky bereme jako data, poté jednoduše přidáváte nové značky bez stavění nového e-shopu.' },
        { question: 'Vidí dealeři opravdu jen své vlastní značky?', answer: 'Ano, zaručeně. Řízení přístupu je vynuceno na serveru u každého požadavku — ne v prohlížeči. Dealer se nedostane ke značkám, které pro něj nejsou uvolněny, ani manipulací s URL.' },
        { question: 'Funguje to s mými skladovými a platebními systémy?', answer: 'KarpCore se rovnou propojí s Picqer (sklad/objednávky) a Pay.nl (iDEAL a evropské platební metody). Platforma je modulární, takže propojení dalších systémů je rozšíření, ne přestavba.' },
        { question: 'Jak dlouho trvá spuštění?', answer: 'Záleží na počtu značek, produktů a integrací. Protože stavíme na osvědčeném základu s automatizovanými nasazeními, jde to rychleji než plná zakázka. V krátkém hovoru načrtneme realistický harmonogram pro vaši situaci.' },
        { question: 'Může to růst, když přidám značky nebo dealery?', answer: 'Ano. Zapnete novou značku a novému dealerovi přidělíte přístup. Jedna instance obsluhuje všechny vaše značky a dealery — architektura je na to navržena od začátku.' },
        { question: 'Co když potřebuji něco unikátního?', answer: 'To jde. KarpCore se skládá ze samostatných modulů (značky, firmy, nabídky, schvalování). Zakázkové věci stavíme jako čisté rozšíření, bez obětování aktualizovatelnosti platformy.' },
      ],
    },
    cta: {
      title: 'Chcete také všechny své značky pod jednou střechou?',
      subtitle: 'Od konceptu po spuštění — postavíme to s vámi.',
      body: 'Sloučení více značek, jemné řízení dealerského přístupu nebo kompletní proces nabídek a schvalování: řekněte nám o své B2B výzvě a my vám ukážeme, jak na to.',
      button: 'Spustit živý chat',
    },
    liveUrls: LIVE_URLS,
  },

  sv: {
    title: 'KarpCore',
    hero: {
      eyebrow: 'För grossister och importörer med flera varumärken',
      badge: 'Fallstudie · Live i produktion',
      headline: 'Alla dina varumärken. En plattform. Varje återförsäljare ser bara det som är deras.',
      sub: 'KarpCore är beställningsplattformen för B2B för grossister och importörer med flera varumärken. Ett system för hela din katalog, ditt lager och dina priser — medan varje återförsäljare loggar in och bara ser sina varumärken, sina inköpspriser och sitt lager.',
      trustLine: 'Live på egen domän · Säkrat på serversidan · Byggt på Medusa v2 och Next.js 15',
      badges: ['Live på karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
      viewPlatform: 'Visa den live plattformen',
      screenshotCaption: 'En riktig skärm från den live återförsäljarportalen — återförsäljarpris bredvid rekommenderat pris.',
    },
    stats: [
      { value: '1', label: 'Plattform för alla dina varumärken' },
      { value: '∞', label: 'Varumärken och återförsäljare' },
      { value: '100%', label: 'Säkrat på serversidan' },
      { value: 'Live', label: 'I produktion' },
    ],
    problemSolutions: {
      title: 'Känner du igen dig?',
      intro: 'Grossister med flera varumärken stöter ständigt på samma tre väggar. Så här tar KarpCore bort dem:',
      problemLabel: 'Problem',
      solutionLabel: 'Lösning',
      pairs: [
        {
          problem: { title: 'En egen webbshop per varumärke', text: 'Tre, fem, ibland tio separata WooCommerce- eller Shopify-shoppar. Varje prisändring, lageruppdatering och ny återförsäljare måste matas in separat överallt. Ditt team förlorar timmar på dubbelarbete och fel smyger sig ofrånkomligen in.' },
          solution: { title: 'Ett system för allt', text: 'KarpCore samlar alla dina varumärken i en plattform: en katalog, ett lager, ett prissystem. Du uppdaterar något en gång — inte fem gånger. Slut på dubbel administration.' },
        },
        {
          problem: { title: 'Alla ser allt — eller inget', text: 'En vanlig webbshop känner inte till “den här återförsäljaren ja varumärke A, nej varumärke B”. Du löser det med separata konton och manuella prislistor, eller så visar du bara allt. Då ser återförsäljare inköpspriser för varumärken som inte är avsedda för dem.' },
          solution: { title: 'Åtkomst per återförsäljare, per varumärke', text: 'Slå på eller av varumärken per företag med ett klick. Varje återförsäljare loggar in och ser exakt sina varumärken, sina priser och sitt lager. Resten existerar helt enkelt inte för dem — garanterat, framtvingat på servern.' },
        },
        {
          problem: { title: 'Inget riktigt B2B-flöde', text: 'Offerter går fram och tillbaka via mejl. Stora ordrar borde gå via chefen, men det finns ingenstans i systemet. Återförsäljarpriser och nivåer klistras på med rabattkoder. Det fungerar halvt — och skalar inte när du växer.' },
          solution: { title: 'B2B är inbyggt', text: 'Offerter med förhandling, godkännandeflöden för stora ordrar, återförsäljarpriser per kundgrupp och företagskonton med flera anställda — allt nativt i plattformen. Inget klister, inga genvägar.' },
        },
      ],
    },
    showcase: {
      title: 'Se KarpCore i aktion',
      intro: 'Riktiga skärmar från den live plattformen — byggda för att låta återförsäljare beställa på sekunder.',
      items: [
        { img: IMG.variant, alt: 'Välja variant med återförsäljarpris och rekommenderat pris', title: 'Snabb shopping — rätt variant direkt', text: 'Via lägg-i-varukorg-knappen i katalogen väljer din återförsäljare direkt rätt variant och antal. Återförsäljarpriset och det rekommenderade priset (RRP) står snyggt bredvid varandra.' },
        { img: IMG.quickAdd, alt: 'Snabbtillägg via SKU eller EAN', title: 'Beställ via SKU eller EAN — skriv eller skanna', text: 'Lägg till produkter på sekunder via artikelnummer eller streckkod. Skanning fungerar lika bra. Antal = antal förpackningar; förpackningsstorleken tillämpas automatiskt.' },
        { img: IMG.search, alt: 'Snabbsök på namn, SKU eller EAN', title: 'Snabbsök på namn, SKU eller EAN', text: 'Börja skriva och se direkt rätt produkter med miniatyr — inget oändligt scrollande i katalogen.' },
        { img: IMG.cart, alt: 'Begär offert, betala direkt eller exportera varukorgen', title: 'Begär offert eller betala direkt', text: 'Från varukorgen kan du begära offert, betala direkt eller exportera hela varukorgen som CSV. Återförsäljaren väljer själv den snabbaste vägen.' },
      ],
    },
    beforeAfter: {
      title: 'Skillnaden KarpCore gör',
      intro: 'Från splittrat och manuellt till en stram plattform.',
      before: { title: 'Utan KarpCore', items: ['En separat webbshop per varumärke, med dubbel administration', 'Uppdatera priser och lager överallt för hand', 'Återförsäljare ser priser som inte är avsedda för dem', 'Offerter och godkännanden via mejl och Excel', 'Nytt varumärke = sätta upp ännu en shop'] },
      after: { title: 'Med KarpCore', items: ['En plattform för alla dina varumärken', 'Uppdatera en gång, rätt överallt direkt', 'Varje återförsäljare ser exakt sina varumärken och priser', 'Offerter och godkännanden inbyggda i portalen', 'Nytt varumärke = slå på med ett klick'] },
    },
    outcomes: {
      title: 'Vad du får ut av det',
      intro: 'Inte tekniska funktioner, utan vad det konkret betyder för din verksamhet:',
      items: [
        { title: 'Timmar mindre administration per vecka', text: 'Uppdatera en gång i stället för överallt. Ditt team får tid för kunder i stället för att skriva av data.' },
        { title: 'Inga prisläckor längre', text: 'Återförsäljare ser aldrig varumärken eller inköpspriser som inte är avsedda för dem. Punkt.' },
        { title: 'En professionell återförsäljarupplevelse', text: 'Snabb beställning, egna priser, offerter och återkommande ordrar i en modern portal — dygnet runt, utan att du behöver gå in.' },
        { title: 'Redo att växa', text: 'Nytt varumärke? Slå bara på det. Ny återförsäljare? Tilldela åtkomst. Plattformen växer med dig, utan ombyggnad.' },
      ],
    },
    features: {
      title: 'Allt en B2B-plattform behöver',
      intro: 'För dina återförsäljare och för dig bakom kulisserna.',
      dealer: { title: 'För dina återförsäljare', subtitle: 'Portalen där de beställer', items: ['Egna varumärken och priser — de ser bara det som är frisläppt för deras företag, med återförsäljarpris och rekommenderat pris (RRP) bredvid varandra.', 'Företagskonton med flera anställda — bjud in kollegor, med roller och rättigheter per person.', 'Begär och förhandla offerter — direkt i portalen, med meddelanden, acceptera eller avböj.', 'Smart beställning — massinläggning, snabbtillägg via artikelnummer, varumärkessummor och gränser för fri frakt.', 'Blixtsnabb sökning med produktminiatyrer.', 'Självbetjäning vid onboarding — begär åtkomst till nya varumärken från portalen.'] },
      operator: { title: 'För dig (admin)', subtitle: 'Kontrollen bakom kulisserna', items: ['Varumärken på/av per företag — med ett fullständigt revisionsspår över vem som får se vad.', 'Central varumärkeshantering — aktivera, avaktivera och hantera resurser på ett ställe.', 'Återförsäljarpriser per kundgrupp — och RRP-hantering per produkt.', 'Hantera offerter och godkännanden — helt från adminvyn.', 'Godkännandegränser — ordrar över ett belopp går först via en intern godkännare.', 'Konfigurera integrationer med anslutningstest — uppgifter lagras krypterade.'] },
      integrations: { title: 'Kopplas till dina system', subtitle: 'Inga isolerade öar', items: ['Pay.nl — iDEAL och europeiska B2B-betalsätt, inbyggt.', 'Picqer — synkning av lager och ordrar i realtid via webhooks.', 'Transaktionsmejl — orderbekräftelser och aviseringar som alltid kommer fram.', 'Utbyggbart — modulär uppbyggnad, så nya integrationer är ingen ombyggnad.'] },
    },
    security: {
      title: 'Vattentät åtkomstkontroll — inte en eftertanke, utan grunden',
      lead: 'Vid skräddarsydda lösningar räcker ett glömt filter för att visa en återförsäljare någon annans priser. KarpCore är byggt för detta från första kodraden.',
      points: [
        { title: 'Åtkomst på servern, aldrig i webbläsaren', text: 'Varje sida som returnerar produkter, priser eller lager kontrollerar först på servern om återförsäljaren ens får se varumärket. Går inte att kringgå med en smart URL.' },
        { title: 'Lita inte på något utifrån', text: 'Ett varumärkes-id från en länk accepteras aldrig rakt av — kontrolleras alltid först mot de varumärken som är på för företaget.' },
        { title: 'Allt loggas', text: 'Ändringar av varumärkesåtkomst går via flöden med revisionslogg. Du ser exakt vem som fick vad och när.' },
        { title: 'Skyddat mot missbruk', text: 'Inloggningsslutpunkter är hastighetsbegränsade mot brute force. Uppgifter lagras krypterade i databasen.' },
      ],
      conclusion: 'Resultatet: en återförsäljare kan i princip inte nå data från varumärken som inte är på för dem — inte ens via en omväg.',
      image: IMG.dealerOnly,
      imageAlt: 'Beställning endast för återförsäljare — logga in för att se återförsäljarpriser',
      note: IMG.note,
      noteAlt: 'Kontakta din account manager för återförsäljarpriser på detta varumärke',
      noteText: 'Ingen åtkomst? Då ser du inga priser — och de finns inte heller i källkoden.',
    },
    results: {
      title: 'Resultatet',
      items: ['Live på egen domän med giltiga certifikat (karpcore.com, admin.karpcore.com).', 'En central instans betjänar alla varumärken — noll dubbel administration.', 'Komplett B2B-flöde: från varumärkesavgränsad katalog och återförsäljarpriser till offerter, godkännanden och betalning.', 'Produktionsklart på Fly.io, med automatiserade releaser som vägrar köra om något är fel.'],
    },
    underTheHood: {
      title: 'Under huven',
      intro: 'För den som vill ha de tekniska detaljerna: KarpCore körs på beprövad, modern teknik — vald för att vara skalbar, säker och underhållbar.',
      techStack: [
        { layer: 'Commerce-backend', tech: 'Medusa v2 (Node.js, TypeScript)', why: 'Modulärt, headless, fullt utbyggbart' },
        { layer: 'Storefront', tech: 'Next.js 15 (App Router, RSC)', why: 'Snabb, SEO-vänlig B2B-portal' },
        { layer: 'Databas', tech: 'PostgreSQL', why: 'En källa till sanning, relationell' },
        { layer: 'Cache och köer', tech: 'Redis (Upstash)', why: 'Sessioner, cachning, asynkrona flöden' },
        { layer: 'Fillagring', tech: 'Tigris (S3-compatible)', why: 'Produktionsmedia, ingen lokal disk' },
        { layer: 'Hosting', tech: 'Fly.io', why: 'API, worker och storefront nära användaren' },
        { layer: 'Betalningar', tech: 'Pay.nl', why: 'iDEAL och europeiska B2B-betalsätt' },
        { layer: 'Lager/fulfillment', tech: 'Picqer', why: 'Synkning av lager och ordrar i realtid' },
        { layer: 'Autentisering', tech: 'JWT + session, rate-limited', why: 'Säker inloggning för återförsäljare och operatörer' },
      ],
      principles: ['En instans, varumärken som data — ingen separat installation per varumärke, utan en förstklassig varumärkesmodul.', 'Webb, API och worker rent åtskilda — bakgrundsjobb körs utan offentlig åtkomst.', 'Byggt på den officiella B2B-startern, ingen hård fork — framtida uppgraderingar förblir möjliga.'],
    },
    testimonial: {
      placeholder: false,
      quote: 'Vi sökte ett B2B-system med fler möjligheter än Shopify eller Magento, utan att det skulle sluka hela vår budget. Maarten byggde på mitt uppdrag en komplett B2B-plattform som nu sparar oss enormt mycket tid och gör samarbetet med andra företag enklare och effektivare — precis som vi själva skulle vilja att vår egen grossist var upplagd.',
      name: 'Tom Snoek',
      role: 'KarperCentrale · Grundare',
    },
    midCta: { title: 'Vill du ha detta för dina varumärken?', button: 'Starta en livechatt' },
    process: {
      title: 'Så levererar vi det',
      intro: 'Från första samtal till lansering — en tydlig väg utan överraskningar.',
      steps: [
        { number: '01', title: 'Koncept och omfattning', text: 'Vi kartlägger dina varumärken, återförsäljare, prisstruktur och integrationer och bestämmer omfattningen tillsammans.' },
        { number: '02', title: 'Bygg på en beprövad grund', text: 'Vi bygger på Medusa v2:s B2B-grund med dina varumärken, priser och åtkomstregler — inget engångsjobb att slänga.' },
        { number: '03', title: 'Integrationer och data', text: 'Lager (Picqer), betalningar (Pay.nl) och din katalog kopplas och migreras.' },
        { number: '04', title: 'Lansering och överlämning', text: 'En kontrollerad, automatiserad release till produktion på din egen domän — plus en genomgång för ditt team.' },
      ],
    },
    faq: {
      title: 'Vanliga frågor',
      items: [
        { question: 'Kan jag migrera mina befintliga varumärken och produkter?', answer: 'Ja. Vi flyttar din katalog, dina priser och dina återförsäljare till en central instans. Eftersom varumärken behandlas som data lägger du sedan helt enkelt till nya varumärken utan att sätta upp en ny shop.' },
        { question: 'Ser återförsäljare verkligen bara sina egna varumärken?', answer: 'Ja, garanterat. Åtkomstkontrollen framtvingas på servern vid varje begäran — inte i webbläsaren. En återförsäljare kan inte nå varumärken som inte är frisläppta för dem, inte ens genom att manipulera URL:en.' },
        { question: 'Fungerar det med mina lager- och betalsystem?', answer: 'Direkt ur lådan kopplas KarpCore till Picqer (lager/ordrar) och Pay.nl (iDEAL och europeiska betalsätt). Plattformen är modulär, så att koppla andra system är en utbyggnad, inte en ombyggnad.' },
        { question: 'Hur lång tid tar det att gå live?', answer: 'Det beror på antalet varumärken, produkter och integrationer. Eftersom vi bygger på en beprövad grund med automatiserade deployer går det snabbare än helt skräddarsytt. I ett kort samtal skissar vi en realistisk tidsplan för din situation.' },
        { question: 'Kan det växa när jag lägger till varumärken eller återförsäljare?', answer: 'Ja. Du slår på ett nytt varumärke och tilldelar åtkomst till en ny återförsäljare. En instans betjänar alla dina varumärken och återförsäljare — arkitekturen är utformad för detta från början.' },
        { question: 'Tänk om jag behöver något unikt?', answer: 'Det går. KarpCore är uppbyggt av separata moduler (varumärken, företag, offerter, godkännanden). Skräddarsytt bygger vi som en ren utbyggnad, utan att offra plattformens uppgraderbarhet.' },
      ],
    },
    cta: {
      title: 'Vill du också ha alla dina varumärken under ett tak?',
      subtitle: 'Från koncept till lansering — vi bygger det med dig.',
      body: 'Samla flera varumärken, finkornig återförsäljaråtkomst eller ett komplett offert- och godkännandeflöde: berätta om din B2B-utmaning så visar vi hur det kan göras.',
      button: 'Starta en livechatt',
    },
    liveUrls: LIVE_URLS,
  },
};

export function getKarpCoreContent(locale: Locale): KarpCoreContent {
  return content[locale] ?? content.en;
}

export const karpCoreContent = content.nl;
