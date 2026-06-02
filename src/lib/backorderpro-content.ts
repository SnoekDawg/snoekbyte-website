import type { Locale } from '@/types';

interface NamedItem {
  title: string;
  text: string;
}

interface PsPair {
  problem: { title: string; text: string };
  solution: { title: string; text: string };
}

interface FeatureGroup {
  title: string;
  subtitle: string;
  items: string[];
}

interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

interface ShowcaseItem {
  mock: 'product' | 'tracker';
  title: string;
  text: string;
}

interface MockLabels {
  product: {
    vendor: string;
    name: string;
    price: string;
    stockTag: string;
    leadBadge: string;
    restock: string;
    preorderBtn: string;
    preorderSub: string;
    addToCart: string;
  };
  tracker: {
    title: string;
    colOrder: string;
    colProduct: string;
    colQty: string;
    colStatus: string;
    statusOnTrack: string;
    statusDueSoon: string;
    statusOverdue: string;
  };
}

export interface BackorderProContent {
  title: string;
  hero: { eyebrow: string; badge: string; headline: string; sub: string; trustLine: string };
  stats: { value: string; label: string }[];
  problemSolutions: { title: string; intro: string; problemLabel: string; solutionLabel: string; pairs: PsPair[] };
  showcase: { title: string; intro: string; items: ShowcaseItem[] };
  beforeAfter: { title: string; intro: string; before: { title: string; items: string[] }; after: { title: string; items: string[] } };
  outcomes: { title: string; intro: string; items: NamedItem[] };
  features: { title: string; intro: string; groups: FeatureGroup[] };
  howItWorks: { title: string; intro: string; steps: ProcessStep[] };
  security: { title: string; lead: string; points: NamedItem[]; conclusion: string };
  testimonial: { placeholder: boolean; quote: string; name: string; role: string };
  midCta: { title: string };
  finalCta: { title: string; subtitle: string; body: string };
  mockLabels: MockLabels;
}

const content: Record<Locale, BackorderProContent> = {
  nl: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Shopify-app voor levertijden, voorraad & pre-orders',
      badge: 'Gratis plan beschikbaar',
      headline: 'Verkoop door, ook als het even niet op voorraad is.',
      sub: 'BackorderPRO leest je leveranciersfeeds, koppelt ze automatisch aan je Shopify-producten en toont levertijden, voorraadstatus en pre-order knoppen op je productpagina, in de cart en in het klantaccount \u2014 volautomatisch.',
      trustLine: 'Gratis te starten \u00b7 EU-gehost & GDPR-proof \u00b7 Gemaakt door e-commerce-ondernemers',
    },
    stats: [
      { value: '\u20ac0', label: 'Gratis te starten' },
      { value: '11', label: 'Talen voor klant-e-mails' },
      { value: '100%', label: 'Automatisch bijgewerkt' },
      { value: 'EU', label: 'Datahosting (GDPR)' },
    ],
    problemSolutions: {
      title: 'Herken je dit?',
      intro: 'Webshops met leverbare \u00e9n tijdelijk niet-leverbare producten lopen tegen dezelfde problemen aan. Zo lost BackorderPRO ze op:',
      problemLabel: 'Probleem',
      solutionLabel: 'Oplossing',
      pairs: [
        {
          problem: { title: 'Uitverkocht = verloren verkoop', text: 'Staat een product op nul, dan ziet de klant \u201cniet leverbaar\u201d en koopt hij elders. Je mist de verkoop terwijl het product over een paar dagen gewoon binnenkomt.' },
          solution: { title: 'Pre-order knop vangt de verkoop', text: 'Bij voorraad nul vervangt een pre-order knop de add-to-cart. De klant rekent meteen af met een duidelijke leverdatum \u2014 jij behoudt de omzet.' },
        },
        {
          problem: { title: '\u201cWanneer komt het weer binnen?\u201d', text: 'Je inbox loopt vol met dezelfde vraag. Elke handmatige mail kost tijd en de klant zit ondertussen te twijfelen.' },
          solution: { title: 'Levertijden & restock-meldingen', text: 'Een lead-time badge en de exacte restock-datum staan op de productpagina, en klanten krijgen automatische e-mailupdates. Minder vragen, meer vertrouwen.' },
        },
        {
          problem: { title: 'Voorraad handmatig bijhouden', text: 'Voor elke leverancier een aparte spreadsheet, en bij elke wijziging weer overtikken. Foutgevoelig en het kost uren per week.' },
          solution: { title: 'Feeds importeren + auto-match', text: 'BackorderPRO leest CSV-, Excel- of XML-feeds via URL of FTP, matcht op SKU of EAN en synchroniseert dagelijks. \u00c9\u00e9n keer instellen, daarna draait het vanzelf.' },
        },
        {
          problem: { title: 'Je vergeet wat je moet bijbestellen', text: 'Zonder overzicht raken openstaande backorders ondergesneeuwd. Klanten wachten te lang en jij bestelt te laat in.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Elke backorder wordt vastgelegd met status, en Buy Advice maakt er een kant-en-klare inkooplijst per leverancier van. Je weet precies wat je moet bestellen.' },
        },
      ],
    },
    showcase: {
      title: 'Zie het op je storefront',
      intro: 'Alle teksten en kleuren stel je in de app in \u2014 geen aanpassingen aan je themacode nodig.',
      items: [
        { mock: 'product', title: 'Levertijd & pre-order op de productpagina', text: 'Een duidelijke lead-time badge, de verwachte voorraad-datum en \u2014 als de voorraad op is \u2014 een pre-order knop in plaats van de gewone add-to-cart. De klant weet precies waar hij aan toe is en bestelt door.' },
        { mock: 'tracker', title: 'Backorder Tracker: nooit meer een order kwijt', text: 'Alle openstaande backorders gegroepeerd per order, met status (op tijd / bijna te laat / te laat), snooze, bulk-acties en CSV-export. Plus Buy Advice voor je inkooplijst.' },
      ],
    },
    beforeAfter: {
      title: 'Het verschil dat BackorderPRO maakt',
      intro: 'Van gemiste verkopen en handwerk naar automatische backorder-afhandeling.',
      before: { title: 'Zonder BackorderPRO', items: ['\u201cNiet leverbaar\u201d \u2014 de klant haakt af en koopt elders', 'Voorraad en levertijden handmatig bijwerken', 'Inbox vol \u201cwanneer komt het binnen?\u201d-mails', 'Geen overzicht welke backorders je moet inkopen', 'Elke leveranciersfeed in een losse spreadsheet'] },
      after: { title: 'Met BackorderPRO', items: ['Pre-order houdt de verkoop binnen, ook bij 0 voorraad', 'Voorraad, levertijden en pre-orders updaten automatisch', 'Klanten zien de leverdatum zelf \u2014 minder vragen', 'Tracker + Buy Advice tonen precies wat je moet bestellen', '\u00c9\u00e9n app leest al je feeds (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Wat het je oplevert',
      intro: 'Geen technische features, maar wat het concreet betekent voor je winkel:',
      items: [
        { title: 'Verkoop door, ook zonder voorraad', text: 'De pre-order knop vangt omzet op die je anders kwijt was geweest aan een uitverkocht product.' },
        { title: 'Minder klantvragen', text: 'Levertijden en automatische e-mails beantwoorden \u201cwanneer komt het?\u201d voordat de klant hoeft te mailen.' },
        { title: 'Uren minder handwerk', text: 'Feed-import en dagelijkse sync vervangen het handmatig bijwerken van voorraad en levertijden.' },
        { title: 'Slimmer inkopen', text: 'Backorder Tracker, Buy Advice en AI-analyse laten zien wat je moet bijbestellen \u2014 en wanneer.' },
      ],
    },
    features: {
      title: 'Alles wat je nodig hebt',
      intro: 'Voor je klant op de storefront \u00e9n voor jou achter de schermen.',
      groups: [
        { title: 'Op je storefront', subtitle: 'Wat je klant ziet', items: ['Lead-time badge op de productpagina (bv. \u201cLevering in 5\u20138 dagen\u201d)', 'Verwachte-voorraad-melding met exacte restock-datum', 'Pre-order knop met eigen tekst, kleuren en actie (in winkelmandje / notify me / eigen URL)', 'Badge ook op collection cards en in de cart drawer', 'Customer Account widget met backorder-/leverstatus (op elk plan)', 'Alle teksten vertaalbaar via Shopify Translate & Adapt'] },
        { title: 'Automatisering', subtitle: 'Achter de schermen', items: ['Feeds in CSV, Excel of XML \u2014 via URL, FTP/SFTP of JS-rendered sites', 'Match op SKU of EAN/barcode, tolerant voor spaties en voorloopnullen', 'Rule engine: feed-regels + global rules als vangnet', 'Levertijden (min/max) globaal \u00e9n per leverancier', 'Pre-order regels: min. prijs, max. levertijd, per-leverancier overrides', 'Dagelijkse geplande sync + handmatige \u201cRun Now\u201d'] },
        { title: 'Inzicht & inkoop', subtitle: 'Grip op je backorders', items: ['Backorder Tracker: open backorders per order, status, snooze/resolve, CSV', 'Buy Advice: automatische inkooplijst per leverancier, afvinken & exporteren', 'E-mailnotificaties in 11 talen, met eigen domein & branding', 'AI Inventory Analysis: omzet- en voorraadinzicht + bijbestel-advies', 'Backorder-analytics: omzet, topproducten, retentie per plan', 'Werkt met Search & Discovery voor voorraad-filters'] },
      ],
    },
    howItWorks: {
      title: 'Hoe het werkt',
      intro: 'In vier stappen van feed naar volautomatische backorder-afhandeling.',
      steps: [
        { number: '1', title: 'Configureer feed', text: 'Upload of link je leveranciersfeed (CSV, Excel, XML; via URL, FTP/SFTP of JS-site).' },
        { number: '2', title: 'Map kolommen', text: 'Koppel SKU/EAN, voorraad en leverdatum aan je Shopify-producten.' },
        { number: '3', title: 'Stel regels in', text: 'Bepaal wanneer backorder en pre-order actief worden.' },
        { number: '4', title: 'Automatiseer', text: 'Plan een dagelijkse sync (of run handmatig) en laat het draaien.' },
      ],
    },
    security: {
      title: 'Veilig, EU-gehost en GDPR-proof',
      lead: 'BackorderPRO raakt alleen de productdata die nodig is om je voorraad bij te werken \u2014 en draait volledig binnen de EU.',
      points: [
        { title: 'Data in de EU', text: 'Gehost in de Fly.io-regio Amsterdam. Je data verlaat Europa niet.' },
        { title: 'Alleen wat nodig is', text: 'Variant-metafields in de snoek_bpo-namespace. Geen klantnamen, telefoonnummers of adressen voor storefront-features.' },
        { title: 'Versleuteld opgeslagen', text: 'Leveranciers-credentials (FTP, login) en klant-e-mails worden versleuteld met AES-256-GCM.' },
        { title: 'GDPR-webhooks & retentie', text: 'Verwerkt customers/redact, data_request en shop/redact. Instelbare bewaartermijn (3\u201324 maanden), alles verwijderbaar.' },
      ],
      conclusion: 'Geen onnodige data, geen externe omwegen \u2014 privacy by design.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Sinds we BackorderPRO gebruiken missen we geen verkoop meer als iets tijdelijk uitverkocht is. Klanten zien meteen de leverdatum en bestellen gewoon door \u2014 en wij houden moeiteloos overzicht over alle backorders.',
      name: 'Naam klant',
      role: 'Shopify-merchant',
    },
    midCta: { title: 'Klaar om geen verkoop meer te missen?' },
    finalCta: {
      title: 'Start vandaag met BackorderPRO',
      subtitle: 'Gratis plan beschikbaar, geen creditcard nodig.',
      body: 'Installeer in minuten, koppel je eerste feed en laat BackorderPRO levertijden, pre-orders en backorders automatisch beheren.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '\u20ac129,95', stockTag: '0 op voorraad', leadBadge: 'Levering in 5\u20138 werkdagen', restock: 'Verwacht op voorraad: 18 jun', preorderBtn: 'Pre-order nu', preorderSub: 'Verzonden zodra binnen', addToCart: 'In winkelmandje' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Order', colProduct: 'Product', colQty: 'Aantal', colStatus: 'Status', statusOnTrack: 'Op tijd', statusDueSoon: 'Bijna te laat', statusOverdue: 'Te laat' },
    },
  },

  en: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Shopify app for delivery times, inventory & pre-orders',
      badge: 'Free plan available',
      headline: 'Keep selling, even when it is temporarily out of stock.',
      sub: 'BackorderPRO reads your supplier feeds, matches them to your Shopify products automatically, and shows delivery times, stock status and pre-order buttons on your product page, in the cart and in the customer account \u2014 fully automated.',
      trustLine: 'Free to start \u00b7 EU-hosted & GDPR-proof \u00b7 Built by e-commerce entrepreneurs',
    },
    stats: [
      { value: '$0', label: 'Free to start' },
      { value: '11', label: 'Languages for customer emails' },
      { value: '100%', label: 'Kept up to date automatically' },
      { value: 'EU', label: 'Data hosting (GDPR)' },
    ],
    problemSolutions: {
      title: 'Sound familiar?',
      intro: 'Stores with both in-stock and temporarily out-of-stock products hit the same problems. Here is how BackorderPRO solves them:',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      pairs: [
        {
          problem: { title: 'Out of stock = lost sale', text: 'When a product hits zero, the customer sees \u201cunavailable\u201d and buys elsewhere. You lose the sale even though it is arriving in a few days.' },
          solution: { title: 'Pre-order button captures the sale', text: 'At zero stock, a pre-order button replaces add-to-cart. The customer checks out right away with a clear delivery date \u2014 you keep the revenue.' },
        },
        {
          problem: { title: '\u201cWhen will it be back?\u201d', text: 'Your inbox fills up with the same question. Every manual reply costs time while the customer keeps hesitating.' },
          solution: { title: 'Delivery times & restock alerts', text: 'A lead-time badge and the exact restock date sit on the product page, and customers get automatic email updates. Fewer questions, more trust.' },
        },
        {
          problem: { title: 'Tracking stock by hand', text: 'A separate spreadsheet per supplier and re-typing on every change. Error-prone and it costs hours every week.' },
          solution: { title: 'Feed import + auto-match', text: 'BackorderPRO reads CSV, Excel or XML feeds via URL or FTP, matches on SKU or EAN and syncs daily. Set it up once, then it runs on its own.' },
        },
        {
          problem: { title: 'You forget what to reorder', text: 'Without an overview, open backorders slip through the cracks. Customers wait too long and you reorder too late.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Every backorder is logged with a status, and Buy Advice turns it into a ready-made shopping list per supplier. You know exactly what to order.' },
        },
      ],
    },
    showcase: {
      title: 'See it on your storefront',
      intro: 'You control all copy and colours from inside the app \u2014 no theme code edits required.',
      items: [
        { mock: 'product', title: 'Delivery time & pre-order on the product page', text: 'A clear lead-time badge, the expected restock date and \u2014 when stock runs out \u2014 a pre-order button instead of the regular add-to-cart. The customer knows exactly where they stand and keeps buying.' },
        { mock: 'tracker', title: 'Backorder Tracker: never lose an order again', text: 'All open backorders grouped per order, with status (on track / due soon / overdue), snooze, bulk actions and CSV export. Plus Buy Advice for your shopping list.' },
      ],
    },
    beforeAfter: {
      title: 'The difference BackorderPRO makes',
      intro: 'From lost sales and manual work to automated backorder handling.',
      before: { title: 'Without BackorderPRO', items: ['\u201cUnavailable\u201d \u2014 the customer leaves and buys elsewhere', 'Updating stock and delivery times by hand', 'Inbox full of \u201cwhen will it arrive?\u201d emails', 'No overview of which backorders to reorder', 'Every supplier feed in a separate spreadsheet'] },
      after: { title: 'With BackorderPRO', items: ['Pre-order keeps the sale, even at 0 stock', 'Stock, delivery times and pre-orders update automatically', 'Customers see the delivery date themselves \u2014 fewer questions', 'Tracker + Buy Advice show exactly what to order', 'One app reads all your feeds (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'What it gets you',
      intro: 'Not technical features, but what it concretely means for your store:',
      items: [
        { title: 'Keep selling without stock', text: 'The pre-order button captures revenue you would otherwise lose on an out-of-stock product.' },
        { title: 'Fewer customer questions', text: 'Delivery times and automatic emails answer \u201cwhen will it arrive?\u201d before the customer has to ask.' },
        { title: 'Hours less manual work', text: 'Feed import and daily sync replace updating stock and delivery times by hand.' },
        { title: 'Smarter purchasing', text: 'Backorder Tracker, Buy Advice and AI analysis show what to reorder \u2014 and when.' },
      ],
    },
    features: {
      title: 'Everything you need',
      intro: 'For your customer on the storefront and for you behind the scenes.',
      groups: [
        { title: 'On your storefront', subtitle: 'What your customer sees', items: ['Lead-time badge on the product page (e.g. \u201cDelivery in 5\u20138 days\u201d)', 'Expected-stock message with the exact restock date', 'Pre-order button with custom text, colours and action (add to cart / notify me / custom URL)', 'Badge on collection cards and in the cart drawer too', 'Customer Account widget with backorder/delivery status (on every plan)', 'All copy translatable via Shopify Translate & Adapt'] },
        { title: 'Automation', subtitle: 'Behind the scenes', items: ['Feeds in CSV, Excel or XML \u2014 via URL, FTP/SFTP or JS-rendered sites', 'Match on SKU or EAN/barcode, tolerant of spaces and leading zeros', 'Rule engine: feed rules + global rules as a safety net', 'Lead times (min/max) global and per supplier', 'Pre-order rules: min price, max lead time, per-supplier overrides', 'Daily scheduled sync + manual \u201cRun Now\u201d'] },
        { title: 'Insight & purchasing', subtitle: 'Control over your backorders', items: ['Backorder Tracker: open backorders per order, status, snooze/resolve, CSV', 'Buy Advice: automatic shopping list per supplier, check off & export', 'Email notifications in 11 languages, with custom domain & branding', 'AI Inventory Analysis: revenue and stock insight + reorder advice', 'Backorder analytics: revenue, top products, retention per plan', 'Works with Search & Discovery for stock filters'] },
      ],
    },
    howItWorks: {
      title: 'How it works',
      intro: 'In four steps from feed to fully automated backorder handling.',
      steps: [
        { number: '1', title: 'Configure feed', text: 'Upload or link your supplier feed (CSV, Excel, XML; via URL, FTP/SFTP or JS site).' },
        { number: '2', title: 'Map columns', text: 'Connect SKU/EAN, stock and delivery date to your Shopify products.' },
        { number: '3', title: 'Set rules', text: 'Define when backorder and pre-order become active.' },
        { number: '4', title: 'Automate', text: 'Schedule a daily sync (or run manually) and let it run.' },
      ],
    },
    security: {
      title: 'Secure, EU-hosted and GDPR-proof',
      lead: 'BackorderPRO only touches the product data needed to update your stock \u2014 and runs entirely within the EU.',
      points: [
        { title: 'Data in the EU', text: 'Hosted in the Fly.io Amsterdam region. Your data never leaves Europe.' },
        { title: 'Only what is needed', text: 'Variant metafields in the snoek_bpo namespace. No customer names, phone numbers or addresses for storefront features.' },
        { title: 'Stored encrypted', text: 'Supplier credentials (FTP, login) and customer emails are encrypted with AES-256-GCM.' },
        { title: 'GDPR webhooks & retention', text: 'Handles customers/redact, data_request and shop/redact. Configurable retention (3\u201324 months), delete everything any time.' },
      ],
      conclusion: 'No unnecessary data, no external detours \u2014 privacy by design.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Since we started using BackorderPRO we no longer miss sales when something is temporarily out of stock. Customers see the delivery date right away and keep ordering \u2014 and we stay on top of every backorder effortlessly.',
      name: 'Customer name',
      role: 'Shopify merchant',
    },
    midCta: { title: 'Ready to stop missing sales?' },
    finalCta: {
      title: 'Start with BackorderPRO today',
      subtitle: 'Free plan available, no credit card required.',
      body: 'Install in minutes, connect your first feed and let BackorderPRO manage delivery times, pre-orders and backorders automatically.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '$129.95', stockTag: '0 in stock', leadBadge: 'Delivery in 5\u20138 working days', restock: 'Expected back in stock: Jun 18', preorderBtn: 'Pre-order now', preorderSub: 'Ships as soon as it arrives', addToCart: 'Add to cart' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Order', colProduct: 'Product', colQty: 'Qty', colStatus: 'Status', statusOnTrack: 'On track', statusDueSoon: 'Due soon', statusOverdue: 'Overdue' },
    },
  },

  de: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Shopify-App f\u00fcr Lieferzeiten, Bestand & Vorbestellungen',
      badge: 'Kostenloser Plan verf\u00fcgbar',
      headline: 'Verkaufe weiter \u2014 auch wenn etwas vor\u00fcbergehend nicht auf Lager ist.',
      sub: 'BackorderPRO liest deine Lieferanten-Feeds, ordnet sie automatisch deinen Shopify-Produkten zu und zeigt Lieferzeiten, Bestandsstatus und Vorbestell-Buttons auf der Produktseite, im Warenkorb und im Kundenkonto \u2014 vollautomatisch.',
      trustLine: 'Kostenlos starten \u00b7 EU-gehostet & DSGVO-konform \u00b7 Von E-Commerce-Unternehmern gebaut',
    },
    stats: [
      { value: '0\u20ac', label: 'Kostenlos starten' },
      { value: '11', label: 'Sprachen f\u00fcr Kunden-E-Mails' },
      { value: '100%', label: 'Automatisch aktuell gehalten' },
      { value: 'EU', label: 'Datenhosting (DSGVO)' },
    ],
    problemSolutions: {
      title: 'Kommt dir das bekannt vor?',
      intro: 'Shops mit lieferbaren und vor\u00fcbergehend nicht lieferbaren Produkten sto\u00dfen auf dieselben Probleme. So l\u00f6st BackorderPRO sie:',
      problemLabel: 'Problem',
      solutionLabel: 'L\u00f6sung',
      pairs: [
        {
          problem: { title: 'Ausverkauft = verlorener Verkauf', text: 'Steht ein Produkt auf null, sieht der Kunde \u201enicht verf\u00fcgbar\u201c und kauft woanders. Du verlierst den Verkauf, obwohl die Ware in ein paar Tagen kommt.' },
          solution: { title: 'Vorbestell-Button sichert den Verkauf', text: 'Bei Bestand null ersetzt ein Vorbestell-Button den Warenkorb-Button. Der Kunde zahlt sofort mit klarem Liefertermin \u2014 du beh\u00e4ltst den Umsatz.' },
        },
        {
          problem: { title: '\u201eWann ist es wieder da?\u201c', text: 'Dein Postfach f\u00fcllt sich mit derselben Frage. Jede manuelle Antwort kostet Zeit, w\u00e4hrend der Kunde z\u00f6gert.' },
          solution: { title: 'Lieferzeiten & Restock-Hinweise', text: 'Ein Lieferzeit-Badge und das exakte Restock-Datum stehen auf der Produktseite, und Kunden erhalten automatische E-Mail-Updates. Weniger Fragen, mehr Vertrauen.' },
        },
        {
          problem: { title: 'Bestand von Hand pflegen', text: 'Pro Lieferant eine eigene Tabelle und bei jeder \u00c4nderung neu abtippen. Fehleranf\u00e4llig und es kostet Stunden pro Woche.' },
          solution: { title: 'Feed-Import + Auto-Matching', text: 'BackorderPRO liest CSV-, Excel- oder XML-Feeds \u00fcber URL oder FTP, ordnet nach SKU oder EAN zu und synchronisiert t\u00e4glich. Einmal einrichten, dann l\u00e4uft es von selbst.' },
        },
        {
          problem: { title: 'Du vergisst, was nachzubestellen ist', text: 'Ohne \u00dcberblick gehen offene Nachbestellungen unter. Kunden warten zu lange und du bestellst zu sp\u00e4t nach.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Jede Nachbestellung wird mit Status erfasst, und Buy Advice macht daraus eine fertige Einkaufsliste pro Lieferant. Du wei\u00dft genau, was du bestellen musst.' },
        },
      ],
    },
    showcase: {
      title: 'Sieh es in deinem Storefront',
      intro: 'Alle Texte und Farben stellst du in der App ein \u2014 keine \u00c4nderungen am Theme-Code n\u00f6tig.',
      items: [
        { mock: 'product', title: 'Lieferzeit & Vorbestellung auf der Produktseite', text: 'Ein klares Lieferzeit-Badge, das erwartete Restock-Datum und \u2014 wenn der Bestand leer ist \u2014 ein Vorbestell-Button statt des normalen Warenkorb-Buttons. Der Kunde wei\u00df genau Bescheid und kauft weiter.' },
        { mock: 'tracker', title: 'Backorder Tracker: nie wieder eine Bestellung verlieren', text: 'Alle offenen Nachbestellungen nach Bestellung gruppiert, mit Status (p\u00fcnktlich / bald f\u00e4llig / \u00fcberf\u00e4llig), Snooze, Massenaktionen und CSV-Export. Plus Buy Advice f\u00fcr deine Einkaufsliste.' },
      ],
    },
    beforeAfter: {
      title: 'Der Unterschied, den BackorderPRO macht',
      intro: 'Von verlorenen Verk\u00e4ufen und Handarbeit zur automatischen Nachbestell-Abwicklung.',
      before: { title: 'Ohne BackorderPRO', items: ['\u201enicht verf\u00fcgbar\u201c \u2014 der Kunde geht und kauft woanders', 'Bestand und Lieferzeiten von Hand aktualisieren', 'Postfach voller \u201ewann kommt es?\u201c-Mails', 'Kein \u00dcberblick, welche Nachbestellungen nachzukaufen sind', 'Jeder Lieferanten-Feed in einer eigenen Tabelle'] },
      after: { title: 'Mit BackorderPRO', items: ['Vorbestellung sichert den Verkauf, auch bei 0 Bestand', 'Bestand, Lieferzeiten und Vorbestellungen aktualisieren automatisch', 'Kunden sehen den Liefertermin selbst \u2014 weniger Fragen', 'Tracker + Buy Advice zeigen genau, was zu bestellen ist', 'Eine App liest alle deine Feeds (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Was es dir bringt',
      intro: 'Keine technischen Features, sondern was es konkret f\u00fcr deinen Shop bedeutet:',
      items: [
        { title: 'Weiter verkaufen ohne Bestand', text: 'Der Vorbestell-Button sichert Umsatz, den du sonst an ein ausverkauftes Produkt verloren h\u00e4ttest.' },
        { title: 'Weniger Kundenfragen', text: 'Lieferzeiten und automatische E-Mails beantworten \u201ewann kommt es?\u201c, bevor der Kunde fragen muss.' },
        { title: 'Stunden weniger Handarbeit', text: 'Feed-Import und t\u00e4gliche Synchronisierung ersetzen das manuelle Pflegen von Bestand und Lieferzeiten.' },
        { title: 'Cleverer einkaufen', text: 'Backorder Tracker, Buy Advice und KI-Analyse zeigen, was nachzubestellen ist \u2014 und wann.' },
      ],
    },
    features: {
      title: 'Alles, was du brauchst',
      intro: 'F\u00fcr deinen Kunden im Storefront und f\u00fcr dich hinter den Kulissen.',
      groups: [
        { title: 'In deinem Storefront', subtitle: 'Was dein Kunde sieht', items: ['Lieferzeit-Badge auf der Produktseite (z. B. \u201eLieferung in 5\u20138 Tagen\u201c)', 'Erwartet-auf-Lager-Hinweis mit exaktem Restock-Datum', 'Vorbestell-Button mit eigenem Text, Farben und Aktion (in den Warenkorb / benachrichtigen / eigene URL)', 'Badge auch auf Collection-Karten und im Warenkorb-Drawer', 'Kundenkonto-Widget mit Nachbestell-/Lieferstatus (in jedem Plan)', 'Alle Texte \u00fcbersetzbar via Shopify Translate & Adapt'] },
        { title: 'Automatisierung', subtitle: 'Hinter den Kulissen', items: ['Feeds in CSV, Excel oder XML \u2014 via URL, FTP/SFTP oder JS-gerenderten Seiten', 'Matching nach SKU oder EAN/Barcode, tolerant gegen\u00fcber Leerzeichen und f\u00fchrenden Nullen', 'Rule Engine: Feed-Regeln + globale Regeln als Sicherheitsnetz', 'Lieferzeiten (min/max) global und pro Lieferant', 'Vorbestell-Regeln: Mindestpreis, max. Lieferzeit, Overrides pro Lieferant', 'T\u00e4gliche geplante Synchronisierung + manuelles \u201eRun Now\u201c'] },
        { title: 'Einblick & Einkauf', subtitle: 'Kontrolle \u00fcber deine Nachbestellungen', items: ['Backorder Tracker: offene Nachbestellungen pro Bestellung, Status, Snooze/Resolve, CSV', 'Buy Advice: automatische Einkaufsliste pro Lieferant, abhaken & exportieren', 'E-Mail-Benachrichtigungen in 11 Sprachen, mit eigener Domain & Branding', 'KI-Bestandsanalyse: Umsatz- und Bestandseinblick + Nachbestell-Empfehlung', 'Nachbestell-Analytik: Umsatz, Top-Produkte, Aufbewahrung pro Plan', 'Funktioniert mit Search & Discovery f\u00fcr Bestandsfilter'] },
      ],
    },
    howItWorks: {
      title: 'So funktioniert es',
      intro: 'In vier Schritten vom Feed zur vollautomatischen Nachbestell-Abwicklung.',
      steps: [
        { number: '1', title: 'Feed konfigurieren', text: 'Lade deinen Lieferanten-Feed hoch oder verlinke ihn (CSV, Excel, XML; via URL, FTP/SFTP oder JS-Seite).' },
        { number: '2', title: 'Spalten zuordnen', text: 'Verbinde SKU/EAN, Bestand und Liefertermin mit deinen Shopify-Produkten.' },
        { number: '3', title: 'Regeln festlegen', text: 'Bestimme, wann Nachbestellung und Vorbestellung aktiv werden.' },
        { number: '4', title: 'Automatisieren', text: 'Plane eine t\u00e4gliche Synchronisierung (oder starte manuell) und lass es laufen.' },
      ],
    },
    security: {
      title: 'Sicher, EU-gehostet und DSGVO-konform',
      lead: 'BackorderPRO ber\u00fchrt nur die Produktdaten, die zum Aktualisieren deines Bestands n\u00f6tig sind \u2014 und l\u00e4uft vollst\u00e4ndig innerhalb der EU.',
      points: [
        { title: 'Daten in der EU', text: 'Gehostet in der Fly.io-Region Amsterdam. Deine Daten verlassen Europa nicht.' },
        { title: 'Nur was n\u00f6tig ist', text: 'Varianten-Metafields im snoek_bpo-Namespace. Keine Kundennamen, Telefonnummern oder Adressen f\u00fcr Storefront-Features.' },
        { title: 'Verschl\u00fcsselt gespeichert', text: 'Lieferanten-Zugangsdaten (FTP, Login) und Kunden-E-Mails werden mit AES-256-GCM verschl\u00fcsselt.' },
        { title: 'DSGVO-Webhooks & Aufbewahrung', text: 'Verarbeitet customers/redact, data_request und shop/redact. Einstellbare Aufbewahrung (3\u201324 Monate), jederzeit alles l\u00f6schbar.' },
      ],
      conclusion: 'Keine unn\u00f6tigen Daten, keine externen Umwege \u2014 Privacy by Design.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Seit wir BackorderPRO nutzen, verlieren wir keine Verk\u00e4ufe mehr, wenn etwas vor\u00fcbergehend ausverkauft ist. Kunden sehen sofort den Liefertermin und bestellen einfach weiter \u2014 und wir behalten m\u00fchelos den \u00dcberblick \u00fcber alle Nachbestellungen.',
      name: 'Kundenname',
      role: 'Shopify-Merchant',
    },
    midCta: { title: 'Bereit, keine Verk\u00e4ufe mehr zu verpassen?' },
    finalCta: {
      title: 'Starte heute mit BackorderPRO',
      subtitle: 'Kostenloser Plan verf\u00fcgbar, keine Kreditkarte n\u00f6tig.',
      body: 'In Minuten installiert, ersten Feed verbinden und BackorderPRO Lieferzeiten, Vorbestellungen und Nachbestellungen automatisch verwalten lassen.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 auf Lager', leadBadge: 'Lieferung in 5\u20138 Werktagen', restock: 'Erwartet ab: 18. Juni', preorderBtn: 'Jetzt vorbestellen', preorderSub: 'Versand sobald verf\u00fcgbar', addToCart: 'In den Warenkorb' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Bestellung', colProduct: 'Produkt', colQty: 'Menge', colStatus: 'Status', statusOnTrack: 'P\u00fcnktlich', statusDueSoon: 'Bald f\u00e4llig', statusOverdue: '\u00dcberf\u00e4llig' },
    },
  },

  fr: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Application Shopify pour d\u00e9lais, stock & pr\u00e9commandes',
      badge: 'Plan gratuit disponible',
      headline: 'Continuez \u00e0 vendre, m\u00eame en rupture de stock temporaire.',
      sub: 'BackorderPRO lit vos flux fournisseurs, les associe automatiquement \u00e0 vos produits Shopify et affiche les d\u00e9lais de livraison, le statut de stock et les boutons de pr\u00e9commande sur la page produit, dans le panier et dans le compte client \u2014 en totale automatisation.',
      trustLine: 'Gratuit pour commencer \u00b7 H\u00e9berg\u00e9 dans l\u2019UE & conforme RGPD \u00b7 Cr\u00e9\u00e9 par des entrepreneurs e-commerce',
    },
    stats: [
      { value: '0\u20ac', label: 'Gratuit pour commencer' },
      { value: '11', label: 'Langues pour les e-mails clients' },
      { value: '100%', label: 'Mis \u00e0 jour automatiquement' },
      { value: 'UE', label: 'H\u00e9bergement des donn\u00e9es (RGPD)' },
    ],
    problemSolutions: {
      title: '\u00c7a vous parle ?',
      intro: 'Les boutiques avec des produits disponibles et temporairement indisponibles rencontrent les m\u00eames probl\u00e8mes. Voici comment BackorderPRO les r\u00e9sout :',
      problemLabel: 'Probl\u00e8me',
      solutionLabel: 'Solution',
      pairs: [
        {
          problem: { title: 'Rupture de stock = vente perdue', text: 'Quand un produit tombe \u00e0 z\u00e9ro, le client voit \u00ab indisponible \u00bb et ach\u00e8te ailleurs. Vous perdez la vente alors qu\u2019il arrive dans quelques jours.' },
          solution: { title: 'Le bouton de pr\u00e9commande capte la vente', text: '\u00c0 stock z\u00e9ro, un bouton de pr\u00e9commande remplace l\u2019ajout au panier. Le client paie tout de suite avec une date de livraison claire \u2014 vous gardez le chiffre d\u2019affaires.' },
        },
        {
          problem: { title: '\u00ab Quand sera-t-il de retour ? \u00bb', text: 'Votre bo\u00eete mail se remplit de la m\u00eame question. Chaque r\u00e9ponse manuelle co\u00fbte du temps pendant que le client h\u00e9site.' },
          solution: { title: 'D\u00e9lais & alertes de r\u00e9assort', text: 'Un badge de d\u00e9lai et la date exacte de r\u00e9assort figurent sur la page produit, et les clients re\u00e7oivent des e-mails automatiques. Moins de questions, plus de confiance.' },
        },
        {
          problem: { title: 'Suivre le stock \u00e0 la main', text: 'Un tableur s\u00e9par\u00e9 par fournisseur et tout \u00e0 ressaisir \u00e0 chaque changement. Source d\u2019erreurs et des heures perdues chaque semaine.' },
          solution: { title: 'Import de flux + association auto', text: 'BackorderPRO lit les flux CSV, Excel ou XML via URL ou FTP, associe par SKU ou EAN et synchronise chaque jour. \u00c0 configurer une fois, puis \u00e7a tourne tout seul.' },
        },
        {
          problem: { title: 'Vous oubliez quoi recommander', text: 'Sans vue d\u2019ensemble, les commandes en attente passent \u00e0 la trappe. Les clients attendent trop et vous recommandez trop tard.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Chaque commande en attente est enregistr\u00e9e avec un statut, et Buy Advice en fait une liste d\u2019achat pr\u00eate par fournisseur. Vous savez exactement quoi commander.' },
        },
      ],
    },
    showcase: {
      title: 'Voyez-le sur votre boutique',
      intro: 'Vous contr\u00f4lez tous les textes et couleurs depuis l\u2019application \u2014 aucune modification du code du th\u00e8me.',
      items: [
        { mock: 'product', title: 'D\u00e9lai & pr\u00e9commande sur la page produit', text: 'Un badge de d\u00e9lai clair, la date de r\u00e9assort attendue et \u2014 en rupture \u2014 un bouton de pr\u00e9commande \u00e0 la place de l\u2019ajout au panier. Le client sait exactement \u00e0 quoi s\u2019attendre et continue d\u2019acheter.' },
        { mock: 'tracker', title: 'Backorder Tracker : ne perdez plus une commande', text: 'Toutes les commandes en attente group\u00e9es par commande, avec statut (\u00e0 temps / bient\u00f4t d\u00fb / en retard), report, actions group\u00e9es et export CSV. Plus Buy Advice pour votre liste d\u2019achat.' },
      ],
    },
    beforeAfter: {
      title: 'La diff\u00e9rence que fait BackorderPRO',
      intro: 'Des ventes perdues et du travail manuel vers une gestion automatique des commandes en attente.',
      before: { title: 'Sans BackorderPRO', items: ['\u00ab indisponible \u00bb \u2014 le client part et ach\u00e8te ailleurs', 'Mettre \u00e0 jour stock et d\u00e9lais \u00e0 la main', 'Bo\u00eete mail pleine de \u00ab quand arrive-t-il ? \u00bb', 'Aucune vue des commandes en attente \u00e0 recommander', 'Chaque flux fournisseur dans un tableur s\u00e9par\u00e9'] },
      after: { title: 'Avec BackorderPRO', items: ['La pr\u00e9commande garde la vente, m\u00eame \u00e0 0 stock', 'Stock, d\u00e9lais et pr\u00e9commandes se mettent \u00e0 jour seuls', 'Les clients voient la date de livraison eux-m\u00eames \u2014 moins de questions', 'Tracker + Buy Advice montrent exactement quoi commander', 'Une appli lit tous vos flux (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Ce que \u00e7a vous apporte',
      intro: 'Pas des fonctionnalit\u00e9s techniques, mais ce que \u00e7a signifie concr\u00e8tement pour votre boutique :',
      items: [
        { title: 'Vendre m\u00eame sans stock', text: 'Le bouton de pr\u00e9commande capte le chiffre d\u2019affaires que vous auriez perdu sur un produit en rupture.' },
        { title: 'Moins de questions clients', text: 'Les d\u00e9lais et les e-mails automatiques r\u00e9pondent \u00e0 \u00ab quand arrive-t-il ? \u00bb avant que le client ne demande.' },
        { title: 'Des heures de travail manuel en moins', text: 'L\u2019import de flux et la synchro quotidienne remplacent la mise \u00e0 jour manuelle du stock et des d\u00e9lais.' },
        { title: 'Acheter plus intelligemment', text: 'Backorder Tracker, Buy Advice et l\u2019analyse IA montrent quoi recommander \u2014 et quand.' },
      ],
    },
    features: {
      title: 'Tout ce qu\u2019il vous faut',
      intro: 'Pour votre client sur la boutique et pour vous en coulisses.',
      groups: [
        { title: 'Sur votre boutique', subtitle: 'Ce que voit votre client', items: ['Badge de d\u00e9lai sur la page produit (ex. \u00ab Livraison en 5\u20138 jours \u00bb)', 'Message de stock attendu avec la date exacte de r\u00e9assort', 'Bouton de pr\u00e9commande avec texte, couleurs et action personnalis\u00e9s (panier / me pr\u00e9venir / URL)', 'Badge aussi sur les cartes de collection et dans le tiroir panier', 'Widget Compte client avec statut de commande/livraison (sur chaque plan)', 'Tous les textes traduisibles via Shopify Translate & Adapt'] },
        { title: 'Automatisation', subtitle: 'En coulisses', items: ['Flux en CSV, Excel ou XML \u2014 via URL, FTP/SFTP ou sites en JavaScript', 'Association par SKU ou EAN/code-barres, tol\u00e9rante aux espaces et z\u00e9ros initiaux', 'Moteur de r\u00e8gles : r\u00e8gles de flux + r\u00e8gles globales comme filet de s\u00e9curit\u00e9', 'D\u00e9lais (min/max) globaux et par fournisseur', 'R\u00e8gles de pr\u00e9commande : prix min, d\u00e9lai max, surcharges par fournisseur', 'Synchro quotidienne planifi\u00e9e + \u00ab Run Now \u00bb manuel'] },
        { title: 'Analyse & achats', subtitle: 'Ma\u00eetrise de vos commandes en attente', items: ['Backorder Tracker : commandes en attente par commande, statut, report/r\u00e9solution, CSV', 'Buy Advice : liste d\u2019achat automatique par fournisseur, cocher & exporter', 'Notifications e-mail en 11 langues, avec domaine & branding personnalis\u00e9s', 'Analyse IA des stocks : aper\u00e7u du CA et du stock + conseils de r\u00e9assort', 'Analytique des commandes en attente : CA, top produits, r\u00e9tention par plan', 'Compatible avec Search & Discovery pour les filtres de stock'] },
      ],
    },
    howItWorks: {
      title: 'Comment \u00e7a marche',
      intro: 'En quatre \u00e9tapes, du flux \u00e0 la gestion enti\u00e8rement automatis\u00e9e des commandes en attente.',
      steps: [
        { number: '1', title: 'Configurer le flux', text: 'Importez ou liez votre flux fournisseur (CSV, Excel, XML ; via URL, FTP/SFTP ou site JS).' },
        { number: '2', title: 'Mapper les colonnes', text: 'Reliez SKU/EAN, stock et date de livraison \u00e0 vos produits Shopify.' },
        { number: '3', title: 'D\u00e9finir les r\u00e8gles', text: 'D\u00e9finissez quand la commande en attente et la pr\u00e9commande s\u2019activent.' },
        { number: '4', title: 'Automatiser', text: 'Planifiez une synchro quotidienne (ou lancez manuellement) et laissez tourner.' },
      ],
    },
    security: {
      title: 'S\u00e9curis\u00e9, h\u00e9berg\u00e9 dans l\u2019UE et conforme RGPD',
      lead: 'BackorderPRO ne touche que les donn\u00e9es produit n\u00e9cessaires \u00e0 la mise \u00e0 jour de votre stock \u2014 et fonctionne enti\u00e8rement dans l\u2019UE.',
      points: [
        { title: 'Donn\u00e9es dans l\u2019UE', text: 'H\u00e9berg\u00e9 dans la r\u00e9gion Fly.io d\u2019Amsterdam. Vos donn\u00e9es ne quittent pas l\u2019Europe.' },
        { title: 'Seulement le n\u00e9cessaire', text: 'M\u00e9tachamps de variantes dans l\u2019espace de noms snoek_bpo. Aucun nom, t\u00e9l\u00e9phone ou adresse client pour les fonctions boutique.' },
        { title: 'Stockage chiffr\u00e9', text: 'Les identifiants fournisseurs (FTP, login) et les e-mails clients sont chiffr\u00e9s avec AES-256-GCM.' },
        { title: 'Webhooks RGPD & r\u00e9tention', text: 'G\u00e8re customers/redact, data_request et shop/redact. R\u00e9tention configurable (3\u201324 mois), tout supprimable \u00e0 tout moment.' },
      ],
      conclusion: 'Aucune donn\u00e9e superflue, aucun d\u00e9tour externe \u2014 la confidentialit\u00e9 par conception.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Depuis que nous utilisons BackorderPRO, nous ne perdons plus de ventes lorsqu\u2019un article est temporairement en rupture. Les clients voient la date de livraison tout de suite et continuent de commander \u2014 et nous gardons sans effort le contr\u00f4le de toutes les commandes en attente.',
      name: 'Nom du client',
      role: 'Marchand Shopify',
    },
    midCta: { title: 'Pr\u00eat \u00e0 ne plus manquer de ventes ?' },
    finalCta: {
      title: 'Commencez avec BackorderPRO d\u00e8s aujourd\u2019hui',
      subtitle: 'Plan gratuit disponible, sans carte bancaire.',
      body: 'Installez en quelques minutes, connectez votre premier flux et laissez BackorderPRO g\u00e9rer automatiquement d\u00e9lais, pr\u00e9commandes et commandes en attente.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 en stock', leadBadge: 'Livraison en 5\u20138 jours ouvr\u00e9s', restock: 'Retour pr\u00e9vu : 18 juin', preorderBtn: 'Pr\u00e9commander', preorderSub: 'Exp\u00e9di\u00e9 d\u00e8s r\u00e9ception', addToCart: 'Ajouter au panier' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Commande', colProduct: 'Produit', colQty: 'Qt\u00e9', colStatus: 'Statut', statusOnTrack: '\u00c0 temps', statusDueSoon: 'Bient\u00f4t d\u00fb', statusOverdue: 'En retard' },
    },
  },

  es: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'App de Shopify para plazos, stock y pre-pedidos',
      badge: 'Plan gratuito disponible',
      headline: 'Sigue vendiendo, aunque algo est\u00e9 temporalmente agotado.',
      sub: 'BackorderPRO lee tus feeds de proveedores, los vincula autom\u00e1ticamente a tus productos de Shopify y muestra plazos de entrega, estado de stock y botones de pre-pedido en la p\u00e1gina de producto, en el carrito y en la cuenta de cliente \u2014 todo autom\u00e1tico.',
      trustLine: 'Gratis para empezar \u00b7 Alojado en la UE y conforme al RGPD \u00b7 Creado por emprendedores de e-commerce',
    },
    stats: [
      { value: '0\u20ac', label: 'Gratis para empezar' },
      { value: '11', label: 'Idiomas para e-mails a clientes' },
      { value: '100%', label: 'Actualizado autom\u00e1ticamente' },
      { value: 'UE', label: 'Alojamiento de datos (RGPD)' },
    ],
    problemSolutions: {
      title: '\u00bfTe suena?',
      intro: 'Las tiendas con productos disponibles y temporalmente agotados chocan con los mismos problemas. As\u00ed los resuelve BackorderPRO:',
      problemLabel: 'Problema',
      solutionLabel: 'Soluci\u00f3n',
      pairs: [
        {
          problem: { title: 'Agotado = venta perdida', text: 'Cuando un producto llega a cero, el cliente ve \u201cno disponible\u201d y compra en otro sitio. Pierdes la venta aunque llegue en unos d\u00edas.' },
          solution: { title: 'El bot\u00f3n de pre-pedido capta la venta', text: 'Con stock a cero, un bot\u00f3n de pre-pedido sustituye al de a\u00f1adir al carrito. El cliente paga al momento con una fecha de entrega clara \u2014 t\u00fa conservas los ingresos.' },
        },
        {
          problem: { title: '\u201c\u00bfCu\u00e1ndo vuelve a haber?\u201d', text: 'Tu bandeja se llena de la misma pregunta. Cada respuesta manual cuesta tiempo mientras el cliente duda.' },
          solution: { title: 'Plazos y avisos de reposici\u00f3n', text: 'Una etiqueta de plazo y la fecha exacta de reposici\u00f3n aparecen en la p\u00e1gina de producto, y los clientes reciben e-mails autom\u00e1ticos. Menos preguntas, m\u00e1s confianza.' },
        },
        {
          problem: { title: 'Llevar el stock a mano', text: 'Una hoja de c\u00e1lculo por proveedor y volver a teclear en cada cambio. Propenso a errores y cuesta horas cada semana.' },
          solution: { title: 'Importar feeds + emparejado autom\u00e1tico', text: 'BackorderPRO lee feeds CSV, Excel o XML v\u00eda URL o FTP, empareja por SKU o EAN y sincroniza a diario. Config\u00faralo una vez y funciona solo.' },
        },
        {
          problem: { title: 'Olvidas qu\u00e9 reponer', text: 'Sin una vista general, los pedidos pendientes se pierden. Los clientes esperan demasiado y t\u00fa repones tarde.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Cada pedido pendiente se registra con un estado, y Buy Advice lo convierte en una lista de compra lista por proveedor. Sabes exactamente qu\u00e9 pedir.' },
        },
      ],
    },
    showcase: {
      title: 'M\u00edralo en tu tienda',
      intro: 'Controlas todos los textos y colores desde la app \u2014 sin tocar el c\u00f3digo del tema.',
      items: [
        { mock: 'product', title: 'Plazo y pre-pedido en la p\u00e1gina de producto', text: 'Una etiqueta de plazo clara, la fecha de reposici\u00f3n esperada y \u2014 cuando se agota \u2014 un bot\u00f3n de pre-pedido en lugar del de a\u00f1adir al carrito. El cliente sabe exactamente qu\u00e9 esperar y sigue comprando.' },
        { mock: 'tracker', title: 'Backorder Tracker: nunca m\u00e1s pierdas un pedido', text: 'Todos los pedidos pendientes agrupados por pedido, con estado (a tiempo / pr\u00f3ximo / vencido), posponer, acciones masivas y exportaci\u00f3n CSV. Adem\u00e1s Buy Advice para tu lista de compra.' },
      ],
    },
    beforeAfter: {
      title: 'La diferencia que marca BackorderPRO',
      intro: 'De ventas perdidas y trabajo manual a una gesti\u00f3n autom\u00e1tica de pedidos pendientes.',
      before: { title: 'Sin BackorderPRO', items: ['\u201cno disponible\u201d \u2014 el cliente se va y compra en otro sitio', 'Actualizar stock y plazos a mano', 'Bandeja llena de \u201c\u00bfcu\u00e1ndo llega?\u201d', 'Sin vista de qu\u00e9 pedidos pendientes reponer', 'Cada feed de proveedor en una hoja aparte'] },
      after: { title: 'Con BackorderPRO', items: ['El pre-pedido conserva la venta, incluso con 0 stock', 'Stock, plazos y pre-pedidos se actualizan solos', 'Los clientes ven la fecha de entrega \u2014 menos preguntas', 'Tracker + Buy Advice muestran exactamente qu\u00e9 pedir', 'Una app lee todos tus feeds (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Lo que consigues',
      intro: 'No funciones t\u00e9cnicas, sino lo que significa en concreto para tu tienda:',
      items: [
        { title: 'Vender sin stock', text: 'El bot\u00f3n de pre-pedido capta ingresos que perder\u00edas con un producto agotado.' },
        { title: 'Menos preguntas de clientes', text: 'Los plazos y los e-mails autom\u00e1ticos responden \u201c\u00bfcu\u00e1ndo llega?\u201d antes de que el cliente pregunte.' },
        { title: 'Horas menos de trabajo manual', text: 'La importaci\u00f3n de feeds y la sincronizaci\u00f3n diaria sustituyen la actualizaci\u00f3n manual de stock y plazos.' },
        { title: 'Comprar con cabeza', text: 'Backorder Tracker, Buy Advice y el an\u00e1lisis con IA muestran qu\u00e9 reponer \u2014 y cu\u00e1ndo.' },
      ],
    },
    features: {
      title: 'Todo lo que necesitas',
      intro: 'Para tu cliente en la tienda y para ti entre bastidores.',
      groups: [
        { title: 'En tu tienda', subtitle: 'Lo que ve tu cliente', items: ['Etiqueta de plazo en la p\u00e1gina de producto (p. ej. \u201cEntrega en 5\u20138 d\u00edas\u201d)', 'Mensaje de stock esperado con la fecha exacta de reposici\u00f3n', 'Bot\u00f3n de pre-pedido con texto, colores y acci\u00f3n propios (al carrito / avisarme / URL)', 'Etiqueta tambi\u00e9n en las tarjetas de colecci\u00f3n y en el caj\u00f3n del carrito', 'Widget de Cuenta de cliente con estado de pedido/entrega (en cada plan)', 'Todos los textos traducibles v\u00eda Shopify Translate & Adapt'] },
        { title: 'Automatizaci\u00f3n', subtitle: 'Entre bastidores', items: ['Feeds en CSV, Excel o XML \u2014 v\u00eda URL, FTP/SFTP o sitios con JavaScript', 'Emparejado por SKU o EAN/c\u00f3digo de barras, tolerante con espacios y ceros iniciales', 'Motor de reglas: reglas de feed + reglas globales como red de seguridad', 'Plazos (m\u00edn/m\u00e1x) globales y por proveedor', 'Reglas de pre-pedido: precio m\u00edn., plazo m\u00e1x., overrides por proveedor', 'Sincronizaci\u00f3n diaria programada + \u201cRun Now\u201d manual'] },
        { title: 'An\u00e1lisis y compras', subtitle: 'Control de tus pedidos pendientes', items: ['Backorder Tracker: pedidos pendientes por pedido, estado, posponer/resolver, CSV', 'Buy Advice: lista de compra autom\u00e1tica por proveedor, marcar y exportar', 'Notificaciones por e-mail en 11 idiomas, con dominio y marca propios', 'An\u00e1lisis de inventario con IA: visi\u00f3n de ingresos y stock + consejo de reposici\u00f3n', 'Anal\u00edtica de pedidos pendientes: ingresos, top productos, retenci\u00f3n por plan', 'Compatible con Search & Discovery para filtros de stock'] },
      ],
    },
    howItWorks: {
      title: 'C\u00f3mo funciona',
      intro: 'En cuatro pasos, del feed a la gesti\u00f3n totalmente automatizada de pedidos pendientes.',
      steps: [
        { number: '1', title: 'Configura el feed', text: 'Sube o enlaza tu feed de proveedor (CSV, Excel, XML; v\u00eda URL, FTP/SFTP o sitio JS).' },
        { number: '2', title: 'Mapea columnas', text: 'Conecta SKU/EAN, stock y fecha de entrega con tus productos de Shopify.' },
        { number: '3', title: 'Define reglas', text: 'Determina cu\u00e1ndo se activan el pedido pendiente y el pre-pedido.' },
        { number: '4', title: 'Automatiza', text: 'Programa una sincronizaci\u00f3n diaria (o ejec\u00fatala manualmente) y d\u00e9jalo funcionar.' },
      ],
    },
    security: {
      title: 'Seguro, alojado en la UE y conforme al RGPD',
      lead: 'BackorderPRO solo toca los datos de producto necesarios para actualizar tu stock \u2014 y funciona por completo dentro de la UE.',
      points: [
        { title: 'Datos en la UE', text: 'Alojado en la regi\u00f3n de Fly.io en \u00c1msterdam. Tus datos no salen de Europa.' },
        { title: 'Solo lo necesario', text: 'Metacampos de variante en el espacio de nombres snoek_bpo. Sin nombres, tel\u00e9fonos ni direcciones de clientes para las funciones de tienda.' },
        { title: 'Almacenado cifrado', text: 'Las credenciales de proveedor (FTP, login) y los e-mails de clientes se cifran con AES-256-GCM.' },
        { title: 'Webhooks RGPD y retenci\u00f3n', text: 'Gestiona customers/redact, data_request y shop/redact. Retenci\u00f3n configurable (3\u201324 meses), todo eliminable en cualquier momento.' },
      ],
      conclusion: 'Sin datos innecesarios, sin rodeos externos \u2014 privacidad por dise\u00f1o.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Desde que usamos BackorderPRO ya no perdemos ventas cuando algo est\u00e1 temporalmente agotado. Los clientes ven la fecha de entrega al momento y siguen comprando \u2014 y nosotros mantenemos el control de todos los pedidos pendientes sin esfuerzo.',
      name: 'Nombre del cliente',
      role: 'Comerciante de Shopify',
    },
    midCta: { title: '\u00bfListo para no perder m\u00e1s ventas?' },
    finalCta: {
      title: 'Empieza hoy con BackorderPRO',
      subtitle: 'Plan gratuito disponible, sin tarjeta de cr\u00e9dito.',
      body: 'Inst\u00e1lalo en minutos, conecta tu primer feed y deja que BackorderPRO gestione plazos, pre-pedidos y pedidos pendientes autom\u00e1ticamente.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 en stock', leadBadge: 'Entrega en 5\u20138 d\u00edas laborables', restock: 'Reposici\u00f3n prevista: 18 jun', preorderBtn: 'Pre-pedir ahora', preorderSub: 'Se env\u00eda al llegar', addToCart: 'A\u00f1adir al carrito' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Pedido', colProduct: 'Producto', colQty: 'Cant.', colStatus: 'Estado', statusOnTrack: 'A tiempo', statusDueSoon: 'Pr\u00f3ximo', statusOverdue: 'Vencido' },
    },
  },

  pl: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Aplikacja Shopify do czas\u00f3w dostawy, stanu i przedsprzeda\u017cy',
      badge: 'Dost\u0119pny darmowy plan',
      headline: 'Sprzedawaj dalej, nawet gdy chwilowo brakuje towaru.',
      sub: 'BackorderPRO czyta feedy dostawc\u00f3w, automatycznie dopasowuje je do Twoich produkt\u00f3w Shopify i pokazuje czasy dostawy, status stanu i przyciski przedsprzeda\u017cy na stronie produktu, w koszyku i na koncie klienta \u2014 w pe\u0142ni automatycznie.',
      trustLine: 'Start za darmo \u00b7 Hosting w UE i zgodno\u015b\u0107 z RODO \u00b7 Stworzone przez przedsi\u0119biorc\u00f3w e-commerce',
    },
    stats: [
      { value: '0\u20ac', label: 'Start za darmo' },
      { value: '11', label: 'J\u0119zyk\u00f3w e-maili do klient\u00f3w' },
      { value: '100%', label: 'Automatycznie aktualne' },
      { value: 'UE', label: 'Hosting danych (RODO)' },
    ],
    problemSolutions: {
      title: 'Brzmi znajomo?',
      intro: 'Sklepy z produktami dost\u0119pnymi i chwilowo niedost\u0119pnymi napotykaj\u0105 te same problemy. Oto jak BackorderPRO je rozwi\u0105zuje:',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwi\u0105zanie',
      pairs: [
        {
          problem: { title: 'Brak towaru = utracona sprzeda\u017c', text: 'Gdy produkt spada do zera, klient widzi \u201eniedost\u0119pny\u201d i kupuje gdzie indziej. Tracisz sprzeda\u017c, cho\u0107 towar przyjdzie za kilka dni.' },
          solution: { title: 'Przycisk przedsprzeda\u017cy \u0142apie sprzeda\u017c', text: 'Przy zerowym stanie przycisk przedsprzeda\u017cy zast\u0119puje dodawanie do koszyka. Klient od razu p\u0142aci z jasn\u0105 dat\u0105 dostawy \u2014 Ty zachowujesz przych\u00f3d.' },
        },
        {
          problem: { title: '\u201eKiedy znowu b\u0119dzie?\u201d', text: 'Skrzynka zape\u0142nia si\u0119 tym samym pytaniem. Ka\u017cda r\u0119czna odpowied\u017a kosztuje czas, a klient si\u0119 waha.' },
          solution: { title: 'Czasy dostawy i alerty o dostawie', text: 'Plakietka z czasem dostawy i dok\u0142adna data uzupe\u0142nienia s\u0105 na stronie produktu, a klienci dostaj\u0105 automatyczne e-maile. Mniej pyta\u0144, wi\u0119cej zaufania.' },
        },
        {
          problem: { title: 'R\u0119czne pilnowanie stanu', text: 'Osobny arkusz na dostawc\u0119 i przepisywanie przy ka\u017cdej zmianie. Podatne na b\u0142\u0119dy i kosztuje godziny tygodniowo.' },
          solution: { title: 'Import feed\u00f3w + auto-dopasowanie', text: 'BackorderPRO czyta feedy CSV, Excel lub XML przez URL lub FTP, dopasowuje po SKU lub EAN i synchronizuje codziennie. Raz ustawiasz, potem dzia\u0142a samo.' },
        },
        {
          problem: { title: 'Zapominasz, co zam\u00f3wi\u0107', text: 'Bez przegl\u0105du otwarte zam\u00f3wienia oczekuj\u0105ce gin\u0105. Klienci czekaj\u0105 za d\u0142ugo, a Ty zamawiasz za p\u00f3\u017ano.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Ka\u017cde zam\u00f3wienie oczekuj\u0105ce jest zapisywane ze statusem, a Buy Advice tworzy gotow\u0105 list\u0119 zakup\u00f3w na dostawc\u0119. Wiesz dok\u0142adnie, co zam\u00f3wi\u0107.' },
        },
      ],
    },
    showcase: {
      title: 'Zobacz to w swoim sklepie',
      intro: 'Wszystkie teksty i kolory ustawiasz w aplikacji \u2014 bez zmian w kodzie motywu.',
      items: [
        { mock: 'product', title: 'Czas dostawy i przedsprzeda\u017c na stronie produktu', text: 'Czytelna plakietka z czasem dostawy, oczekiwana data uzupe\u0142nienia i \u2014 gdy zabraknie stanu \u2014 przycisk przedsprzeda\u017cy zamiast zwyk\u0142ego dodawania do koszyka. Klient wie, na czym stoi, i kupuje dalej.' },
        { mock: 'tracker', title: 'Backorder Tracker: nigdy nie zgub zam\u00f3wienia', text: 'Wszystkie otwarte zam\u00f3wienia oczekuj\u0105ce pogrupowane wed\u0142ug zam\u00f3wienia, ze statusem (na czas / wkr\u00f3tce / po terminie), drzemk\u0105, akcjami masowymi i eksportem CSV. Plus Buy Advice na list\u0119 zakup\u00f3w.' },
      ],
    },
    beforeAfter: {
      title: 'R\u00f3\u017cnica, jak\u0105 robi BackorderPRO',
      intro: 'Od utraconych sprzeda\u017cy i r\u0119cznej pracy do automatycznej obs\u0142ugi zam\u00f3wie\u0144 oczekuj\u0105cych.',
      before: { title: 'Bez BackorderPRO', items: ['\u201eniedost\u0119pny\u201d \u2014 klient odchodzi i kupuje gdzie indziej', 'R\u0119czna aktualizacja stanu i czas\u00f3w dostawy', 'Skrzynka pe\u0142na \u201ekiedy dotrze?\u201d', 'Brak przegl\u0105du, kt\u00f3re zam\u00f3wienia oczekuj\u0105ce uzupe\u0142ni\u0107', 'Ka\u017cdy feed dostawcy w osobnym arkuszu'] },
      after: { title: 'Z BackorderPRO', items: ['Przedsprzeda\u017c zatrzymuje sprzeda\u017c, nawet przy 0 stanu', 'Stan, czasy dostawy i przedsprzeda\u017c aktualizuj\u0105 si\u0119 same', 'Klienci sami widz\u0105 dat\u0119 dostawy \u2014 mniej pyta\u0144', 'Tracker + Buy Advice pokazuj\u0105 dok\u0142adnie, co zam\u00f3wi\u0107', 'Jedna aplikacja czyta wszystkie feedy (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Co Ci to daje',
      intro: 'Nie funkcje techniczne, lecz co to konkretnie oznacza dla Twojego sklepu:',
      items: [
        { title: 'Sprzedawaj bez stanu', text: 'Przycisk przedsprzeda\u017cy \u0142apie przych\u00f3d, kt\u00f3ry inaczej straci\u0142by\u015b na wyprzedanym produkcie.' },
        { title: 'Mniej pyta\u0144 klient\u00f3w', text: 'Czasy dostawy i automatyczne e-maile odpowiadaj\u0105 na \u201ekiedy dotrze?\u201d, zanim klient zapyta.' },
        { title: 'Godziny mniej r\u0119cznej pracy', text: 'Import feed\u00f3w i codzienna synchronizacja zast\u0119puj\u0105 r\u0119czn\u0105 aktualizacj\u0119 stanu i czas\u00f3w dostawy.' },
        { title: 'M\u0105drzejsze zakupy', text: 'Backorder Tracker, Buy Advice i analiza AI pokazuj\u0105, co zam\u00f3wi\u0107 \u2014 i kiedy.' },
      ],
    },
    features: {
      title: 'Wszystko, czego potrzebujesz',
      intro: 'Dla Twojego klienta w sklepie i dla Ciebie za kulisami.',
      groups: [
        { title: 'W Twoim sklepie', subtitle: 'Co widzi klient', items: ['Plakietka z czasem dostawy na stronie produktu (np. \u201eDostawa w 5\u20138 dni\u201d)', 'Komunikat o oczekiwanym stanie z dok\u0142adn\u0105 dat\u0105 uzupe\u0142nienia', 'Przycisk przedsprzeda\u017cy z w\u0142asnym tekstem, kolorami i akcj\u0105 (do koszyka / powiadom mnie / w\u0142asny URL)', 'Plakietka tak\u017ce na kartach kolekcji i w szufladzie koszyka', 'Widget konta klienta ze statusem zam\u00f3wienia/dostawy (w ka\u017cdym planie)', 'Wszystkie teksty t\u0142umaczalne przez Shopify Translate & Adapt'] },
        { title: 'Automatyzacja', subtitle: 'Za kulisami', items: ['Feedy w CSV, Excel lub XML \u2014 przez URL, FTP/SFTP lub strony renderowane w JS', 'Dopasowanie po SKU lub EAN/kodzie kreskowym, tolerancyjne na spacje i zera wiod\u0105ce', 'Silnik regu\u0142: regu\u0142y feed\u00f3w + regu\u0142y globalne jako siatka bezpiecze\u0144stwa', 'Czasy dostawy (min/max) globalnie i na dostawc\u0119', 'Regu\u0142y przedsprzeda\u017cy: min. cena, maks. czas dostawy, nadpisania na dostawc\u0119', 'Codzienna zaplanowana synchronizacja + r\u0119czne \u201eRun Now\u201d'] },
        { title: 'Analiza i zakupy', subtitle: 'Kontrola nad zam\u00f3wieniami oczekuj\u0105cymi', items: ['Backorder Tracker: zam\u00f3wienia oczekuj\u0105ce na zam\u00f3wienie, status, drzemka/rozwi\u0105zanie, CSV', 'Buy Advice: automatyczna lista zakup\u00f3w na dostawc\u0119, odhaczanie i eksport', 'Powiadomienia e-mail w 11 j\u0119zykach, z w\u0142asn\u0105 domen\u0105 i brandingiem', 'Analiza zapas\u00f3w AI: wgl\u0105d w przych\u00f3d i stan + porada o uzupe\u0142nieniu', 'Analityka zam\u00f3wie\u0144 oczekuj\u0105cych: przych\u00f3d, top produkty, retencja na plan', 'Wsp\u00f3\u0142pracuje z Search & Discovery dla filtr\u00f3w stanu'] },
      ],
    },
    howItWorks: {
      title: 'Jak to dzia\u0142a',
      intro: 'W czterech krokach od feedu do w pe\u0142ni automatycznej obs\u0142ugi zam\u00f3wie\u0144 oczekuj\u0105cych.',
      steps: [
        { number: '1', title: 'Skonfiguruj feed', text: 'Wgraj lub pod\u0142\u0105cz feed dostawcy (CSV, Excel, XML; przez URL, FTP/SFTP lub stron\u0119 JS).' },
        { number: '2', title: 'Zmapuj kolumny', text: 'Po\u0142\u0105cz SKU/EAN, stan i dat\u0119 dostawy z produktami Shopify.' },
        { number: '3', title: 'Ustaw regu\u0142y', text: 'Okre\u015bl, kiedy aktywuj\u0105 si\u0119 zam\u00f3wienie oczekuj\u0105ce i przedsprzeda\u017c.' },
        { number: '4', title: 'Zautomatyzuj', text: 'Zaplanuj codzienn\u0105 synchronizacj\u0119 (lub uruchom r\u0119cznie) i pozw\u00f3l jej dzia\u0142a\u0107.' },
      ],
    },
    security: {
      title: 'Bezpieczne, hostowane w UE i zgodne z RODO',
      lead: 'BackorderPRO dotyka tylko danych produkt\u00f3w potrzebnych do aktualizacji stanu \u2014 i dzia\u0142a w ca\u0142o\u015bci w UE.',
      points: [
        { title: 'Dane w UE', text: 'Hostowane w regionie Fly.io Amsterdam. Twoje dane nie opuszczaj\u0105 Europy.' },
        { title: 'Tylko to, co potrzebne', text: 'Metapola wariant\u00f3w w przestrzeni nazw snoek_bpo. Bez nazwisk, telefon\u00f3w czy adres\u00f3w klient\u00f3w dla funkcji sklepu.' },
        { title: 'Przechowywane zaszyfrowane', text: 'Dane logowania dostawc\u00f3w (FTP, login) i e-maile klient\u00f3w s\u0105 szyfrowane AES-256-GCM.' },
        { title: 'Webhooki RODO i retencja', text: 'Obs\u0142uguje customers/redact, data_request i shop/redact. Konfigurowalna retencja (3\u201324 mies.), wszystko usuwalne w ka\u017cdej chwili.' },
      ],
      conclusion: 'Bez zb\u0119dnych danych, bez zewn\u0119trznych obej\u015b\u0107 \u2014 prywatno\u015b\u0107 od projektu.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Odk\u0105d u\u017cywamy BackorderPRO, nie tracimy ju\u017c sprzeda\u017cy, gdy czego\u015b chwilowo brakuje. Klienci od razu widz\u0105 dat\u0119 dostawy i zamawiaj\u0105 dalej \u2014 a my bez wysi\u0142ku panujemy nad wszystkimi zam\u00f3wieniami oczekuj\u0105cymi.',
      name: 'Imi\u0119 klienta',
      role: 'Sprzedawca Shopify',
    },
    midCta: { title: 'Gotowy, by nie traci\u0107 ju\u017c sprzeda\u017cy?' },
    finalCta: {
      title: 'Zacznij dzi\u015b z BackorderPRO',
      subtitle: 'Dost\u0119pny darmowy plan, bez karty kredytowej.',
      body: 'Zainstaluj w kilka minut, pod\u0142\u0105cz pierwszy feed i pozw\u00f3l BackorderPRO automatycznie zarz\u0105dza\u0107 czasami dostawy, przedsprzeda\u017c\u0105 i zam\u00f3wieniami oczekuj\u0105cymi.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 w magazynie', leadBadge: 'Dostawa w 5\u20138 dni roboczych', restock: 'Spodziewany dost\u0119p: 18 cze', preorderBtn: 'Zam\u00f3w w przedsprzeda\u017cy', preorderSub: 'Wysy\u0142ka po dostawie', addToCart: 'Do koszyka' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Zam\u00f3wienie', colProduct: 'Produkt', colQty: 'Ilo\u015b\u0107', colStatus: 'Status', statusOnTrack: 'Na czas', statusDueSoon: 'Wkr\u00f3tce', statusOverdue: 'Po terminie' },
    },
  },

  cs: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Shopify aplikace pro dodac\u00ed lh\u016fty, sklad a p\u0159edobjedn\u00e1vky',
      badge: 'K dispozici bezplatn\u00fd pl\u00e1n',
      headline: 'Prod\u00e1vejte d\u00e1l, i kdy\u017e zbo\u017e\u00ed do\u010dasn\u011b nen\u00ed skladem.',
      sub: 'BackorderPRO \u010dte feedy dodavatel\u016f, automaticky je p\u00e1ruje s va\u0161imi produkty na Shopify a zobrazuje dodac\u00ed lh\u016fty, stav skladu a tla\u010d\u00edtka p\u0159edobjedn\u00e1vky na str\u00e1nce produktu, v ko\u0161\u00edku a v z\u00e1kaznick\u00e9m \u00fa\u010dtu \u2014 zcela automaticky.',
      trustLine: 'Start zdarma \u00b7 Hostov\u00e1no v EU a v souladu s GDPR \u00b7 Vytvo\u0159eno e-commerce podnikateli',
    },
    stats: [
      { value: '0\u20ac', label: 'Start zdarma' },
      { value: '11', label: 'Jazyk\u016f pro z\u00e1kaznick\u00e9 e-maily' },
      { value: '100%', label: 'Automaticky aktu\u00e1ln\u00ed' },
      { value: 'EU', label: 'Hosting dat (GDPR)' },
    ],
    problemSolutions: {
      title: 'Zn\u00e1te to?',
      intro: 'Obchody s dostupn\u00fdmi i do\u010dasn\u011b nedostupn\u00fdmi produkty nar\u00e1\u017e\u00ed na stejn\u00e9 probl\u00e9my. Takto je BackorderPRO \u0159e\u0161\u00ed:',
      problemLabel: 'Probl\u00e9m',
      solutionLabel: '\u0158e\u0161en\u00ed',
      pairs: [
        {
          problem: { title: 'Vyprod\u00e1no = ztracen\u00fd prodej', text: 'Kdy\u017e produkt klesne na nulu, z\u00e1kazn\u00edk vid\u00ed \u201enedostupn\u00e9\u201c a koup\u00ed jinde. Prodej ztr\u00e1c\u00edte, i kdy\u017e zbo\u017e\u00ed dorazí za p\u00e1r dn\u00ed.' },
          solution: { title: 'Tla\u010d\u00edtko p\u0159edobjedn\u00e1vky zachyt\u00ed prodej', text: 'P\u0159i nulov\u00e9m skladu nahrad\u00ed tla\u010d\u00edtko p\u0159edobjedn\u00e1vky p\u0159id\u00e1n\u00ed do ko\u0161\u00edku. Z\u00e1kazn\u00edk ihned zaplat\u00ed s jasn\u00fdm datem doru\u010den\u00ed \u2014 vy si udr\u017e\u00edte tr\u017cbu.' },
        },
        {
          problem: { title: '\u201eKdy bude zase skladem?\u201c', text: 'Schr\u00e1nka se pln\u00ed stejnou ot\u00e1zkou. Ka\u017cd\u00e1 ru\u010dn\u00ed odpov\u011b\u010f stoj\u00ed \u010das, zat\u00edmco z\u00e1kazn\u00edk v\u00e1h\u00e1.' },
          solution: { title: 'Dodac\u00ed lh\u016fty a upozorn\u011bn\u00ed na nask\u00e1dnov\u00e1n\u00ed', text: 'Odznak s dodac\u00ed lh\u016ftou a p\u0159esn\u00e9 datum nask\u00e1dnov\u00e1n\u00ed jsou na str\u00e1nce produktu a z\u00e1kazn\u00edci dost\u00e1vaj\u00ed automatick\u00e9 e-maily. M\u00e9n\u011b dotaz\u016f, v\u00edce d\u016fv\u011bry.' },
        },
        {
          problem: { title: 'Ru\u010dn\u00ed sledov\u00e1n\u00ed skladu', text: 'Zvl\u00e1\u0161tn\u00ed tabulka na ka\u017cd\u00e9ho dodavatele a p\u0159episov\u00e1n\u00ed p\u0159i ka\u017cd\u00e9 zm\u011bn\u011b. N\u00e1chyln\u00e9 k chyb\u00e1m a stoj\u00ed to hodiny t\u00fddn\u011b.' },
          solution: { title: 'Import feed\u016f + automatick\u00e9 p\u00e1rov\u00e1n\u00ed', text: 'BackorderPRO \u010dte feedy CSV, Excel nebo XML p\u0159es URL nebo FTP, p\u00e1ruje podle SKU nebo EAN a synchronizuje denn\u011b. Jednou nastav\u00edte, pak to b\u011b\u017c\u00ed samo.' },
        },
        {
          problem: { title: 'Zapom\u00ednate, co doobjednat', text: 'Bez p\u0159ehledu otev\u0159en\u00e9 nevy\u0159\u00edzen\u00e9 objedn\u00e1vky zapadnou. Z\u00e1kazn\u00edci \u010dekaj\u00ed dlouho a vy objedn\u00e1v\u00e1te pozd\u011b.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Ka\u017cd\u00e1 nevy\u0159\u00edzen\u00e1 objedn\u00e1vka se zaznamen\u00e1 se stavem a Buy Advice z toho ud\u011bl\u00e1 hotov\u00fd n\u00e1kupn\u00ed seznam na dodavatele. P\u0159esn\u011b v\u00edte, co objednat.' },
        },
      ],
    },
    showcase: {
      title: 'Pod\u00edvejte se na to ve sv\u00e9m obchod\u011b',
      intro: 'V\u0161echny texty a barvy nastav\u00edte v aplikaci \u2014 \u017e\u00e1dn\u00e9 z\u00e1sahy do k\u00f3du \u0161ablony.',
      items: [
        { mock: 'product', title: 'Dodac\u00ed lh\u016fta a p\u0159edobjedn\u00e1vka na str\u00e1nce produktu', text: 'P\u0159ehledn\u00fd odznak s dodac\u00ed lh\u016ftou, o\u010dek\u00e1van\u00e9 datum nask\u00e1dnov\u00e1n\u00ed a \u2014 kdy\u017e dojde sklad \u2014 tla\u010d\u00edtko p\u0159edobjedn\u00e1vky m\u00edsto b\u011b\u017en\u00e9ho p\u0159id\u00e1n\u00ed do ko\u0161\u00edku. Z\u00e1kazn\u00edk p\u0159esn\u011b v\u00ed, na \u010dem je, a nakupuje d\u00e1l.' },
        { mock: 'tracker', title: 'Backorder Tracker: u\u017e nikdy neztra\u0165te objedn\u00e1vku', text: 'V\u0161echny otev\u0159en\u00e9 nevy\u0159\u00edzen\u00e9 objedn\u00e1vky seskupen\u00e9 podle objedn\u00e1vky, se stavem (v\u010das / brzy / po term\u00ednu), odlo\u017een\u00edm, hromadn\u00fdmi akcemi a exportem CSV. Plus Buy Advice pro v\u00e1\u0161 n\u00e1kupn\u00ed seznam.' },
      ],
    },
    beforeAfter: {
      title: 'Rozd\u00edl, kter\u00fd BackorderPRO p\u0159in\u00e1\u0161\u00ed',
      intro: 'Od ztracen\u00fdch prodej\u016f a ru\u010dn\u00ed pr\u00e1ce k automatick\u00e9mu \u0159e\u0161en\u00ed nevy\u0159\u00edzen\u00fdch objedn\u00e1vek.',
      before: { title: 'Bez BackorderPRO', items: ['\u201enedostupn\u00e9\u201c \u2014 z\u00e1kazn\u00edk odejde a koup\u00ed jinde', 'Ru\u010dn\u00ed aktualizace skladu a dodac\u00edch lh\u016ft', 'Schr\u00e1nka pln\u00e1 \u201ekdy to dorazí?\u201c', '\u017d\u00e1dn\u00fd p\u0159ehled, kter\u00e9 objedn\u00e1vky doobjednat', 'Ka\u017cd\u00fd feed dodavatele v samostatn\u00e9 tabulce'] },
      after: { title: 'S BackorderPRO', items: ['P\u0159edobjedn\u00e1vka udr\u017e\u00ed prodej i p\u0159i 0 skladu', 'Sklad, dodac\u00ed lh\u016fty a p\u0159edobjedn\u00e1vky se aktualizuj\u00ed samy', 'Z\u00e1kazn\u00edci sami vid\u00ed datum doru\u010den\u00ed \u2014 m\u00e9n\u011b dotaz\u016f', 'Tracker + Buy Advice uka\u017e\u00ed p\u0159esn\u011b, co objednat', 'Jedna aplikace \u010dte v\u0161echny va\u0161e feedy (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Co v\u00e1m to p\u0159inese',
      intro: 'Ne technick\u00e9 funkce, ale co to konkr\u00e9tn\u011b znamen\u00e1 pro v\u00e1\u0161 obchod:',
      items: [
        { title: 'Prod\u00e1vejte i bez skladu', text: 'Tla\u010d\u00edtko p\u0159edobjedn\u00e1vky zachyt\u00ed tr\u017cbu, kterou byste jinak ztratili u vyprodan\u00e9ho produktu.' },
        { title: 'M\u00e9n\u011b dotaz\u016f z\u00e1kazn\u00edk\u016f', text: 'Dodac\u00ed lh\u016fty a automatick\u00e9 e-maily odpov\u00ed na \u201ekdy to dorazí?\u201c d\u0159\u00edve, ne\u017e se z\u00e1kazn\u00edk zept\u00e1.' },
        { title: 'O hodiny m\u00e9n\u011b ru\u010dn\u00ed pr\u00e1ce', text: 'Import feed\u016f a denn\u00ed synchronizace nahrad\u00ed ru\u010dn\u00ed aktualizaci skladu a dodac\u00edch lh\u016ft.' },
        { title: 'Chyt\u0159ej\u0161\u00ed n\u00e1kup', text: 'Backorder Tracker, Buy Advice a AI anal\u00fdza uka\u017e\u00ed, co doobjednat \u2014 a kdy.' },
      ],
    },
    features: {
      title: 'V\u0161e, co pot\u0159ebujete',
      intro: 'Pro va\u0161eho z\u00e1kazn\u00edka v obchod\u011b i pro v\u00e1s v z\u00e1kulis\u00ed.',
      groups: [
        { title: 'Ve va\u0161em obchod\u011b', subtitle: 'Co vid\u00ed z\u00e1kazn\u00edk', items: ['Odznak s dodac\u00ed lh\u016ftou na str\u00e1nce produktu (nap\u0159. \u201eDoru\u010den\u00ed za 5\u20138 dn\u00ed\u201c)', 'Zpr\u00e1va o o\u010dek\u00e1van\u00e9m skladu s p\u0159esn\u00fdm datem nask\u00e1dnov\u00e1n\u00ed', 'Tla\u010d\u00edtko p\u0159edobjedn\u00e1vky s vlastn\u00edm textem, barvami a akc\u00ed (do ko\u0161\u00edku / upozornit / vlastn\u00ed URL)', 'Odznak i na kart\u00e1ch kolekc\u00ed a v ko\u0161\u00edkov\u00e9m panelu', 'Widget z\u00e1kaznick\u00e9ho \u00fa\u010dtu se stavem objedn\u00e1vky/doru\u010den\u00ed (v ka\u017cd\u00e9m plánu)', 'V\u0161echny texty p\u0159elo\u017citeln\u00e9 p\u0159es Shopify Translate & Adapt'] },
        { title: 'Automatizace', subtitle: 'V z\u00e1kulis\u00ed', items: ['Feedy v CSV, Excel nebo XML \u2014 p\u0159es URL, FTP/SFTP nebo str\u00e1nky renderovan\u00e9 v JS', 'P\u00e1rov\u00e1n\u00ed podle SKU nebo EAN/\u010d\u00e1rov\u00e9ho k\u00f3du, tolerantn\u00ed k mezer\u00e1m a \u00favodn\u00edm nul\u00e1m', 'Pravidlov\u00fd engine: pravidla feed\u016f + glob\u00e1ln\u00ed pravidla jako z\u00e1chrann\u00e1 s\u00ed\u0165', 'Dodac\u00ed lh\u016fty (min/max) glob\u00e1ln\u011b i na dodavatele', 'Pravidla p\u0159edobjedn\u00e1vky: min. cena, max. dodac\u00ed lh\u016fta, p\u0159episy na dodavatele', 'Denn\u00ed napl\u00e1novan\u00e1 synchronizace + ru\u010dn\u00ed \u201eRun Now\u201c'] },
        { title: 'P\u0159ehled a n\u00e1kup', subtitle: 'Kontrola nad nevy\u0159\u00edzen\u00fdmi objedn\u00e1vkami', items: ['Backorder Tracker: nevy\u0159\u00edzen\u00e9 objedn\u00e1vky podle objedn\u00e1vky, stav, odlo\u017een\u00ed/vy\u0159e\u0161en\u00ed, CSV', 'Buy Advice: automatick\u00fd n\u00e1kupn\u00ed seznam na dodavatele, od\u0161krt\u00e1v\u00e1n\u00ed a export', 'E-mailov\u00e1 upozorn\u011bn\u00ed v 11 jazyc\u00edch, s vlastn\u00ed dom\u00e9nou a brandingem', 'AI anal\u00fdza skladu: p\u0159ehled tr\u017ceb a skladu + doporu\u010den\u00ed k doobjedn\u00e1n\u00ed', 'Analytika nevy\u0159\u00edzen\u00fdch objedn\u00e1vek: tr\u017cby, top produkty, retence na plán', 'Funguje se Search & Discovery pro skladov\u00e9 filtry'] },
      ],
    },
    howItWorks: {
      title: 'Jak to funguje',
      intro: 'Ve \u010dty\u0159ech kroc\u00edch od feedu k pln\u011b automatick\u00e9mu \u0159e\u0161en\u00ed nevy\u0159\u00edzen\u00fdch objedn\u00e1vek.',
      steps: [
        { number: '1', title: 'Nastavte feed', text: 'Nahrajte nebo propojte feed dodavatele (CSV, Excel, XML; p\u0159es URL, FTP/SFTP nebo JS str\u00e1nku).' },
        { number: '2', title: 'Namapujte sloupce', text: 'Propojte SKU/EAN, sklad a datum doru\u010den\u00ed s va\u0161imi produkty na Shopify.' },
        { number: '3', title: 'Nastavte pravidla', text: 'Ur\u010dete, kdy se aktivuje nevy\u0159\u00edzen\u00e1 objedn\u00e1vka a p\u0159edobjedn\u00e1vka.' },
        { number: '4', title: 'Automatizujte', text: 'Napl\u00e1nujte denn\u00ed synchronizaci (nebo spus\u0165te ru\u010dn\u011b) a nechte to b\u011b\u017eet.' },
      ],
    },
    security: {
      title: 'Bezpe\u010dn\u00e9, hostovan\u00e9 v EU a v souladu s GDPR',
      lead: 'BackorderPRO se dot\u00fdk\u00e1 jen produktov\u00fdch dat pot\u0159ebn\u00fdch k aktualizaci skladu \u2014 a b\u011b\u017e\u00ed zcela v r\u00e1mci EU.',
      points: [
        { title: 'Data v EU', text: 'Hostov\u00e1no v regionu Fly.io Amsterdam. Va\u0161e data neopou\u0161t\u011bj\u00ed Evropu.' },
        { title: 'Jen co je pot\u0159eba', text: 'Metapole variant v namespace snoek_bpo. \u017d\u00e1dn\u00e1 jm\u00e9na, telefony ani adresy z\u00e1kazn\u00edk\u016f pro funkce obchodu.' },
        { title: 'Ulo\u017eeno \u0161ifrovan\u011b', text: 'P\u0159ihla\u0161ovac\u00ed \u00fadaje dodavatel\u016f (FTP, login) a e-maily z\u00e1kazn\u00edk\u016f jsou \u0161ifrov\u00e1ny AES-256-GCM.' },
        { title: 'GDPR webhooky a retence', text: 'Zpracov\u00e1v\u00e1 customers/redact, data_request a shop/redact. Nastaviteln\u00e1 retence (3\u201324 m\u011bs\u00edc\u016f), v\u0161e kdykoli smazateln\u00e9.' },
      ],
      conclusion: '\u017d\u00e1dn\u00e1 zbyte\u010dn\u00e1 data, \u017e\u00e1dn\u00e9 extern\u00ed okliky \u2014 soukrom\u00ed od n\u00e1vrhu.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Od t\u00e9 doby, co pou\u017e\u00edv\u00e1me BackorderPRO, u\u017e neztr\u00e1c\u00edme prodeje, kdy\u017e n\u011bco do\u010dasn\u011b nen\u00ed skladem. Z\u00e1kazn\u00edci hned vid\u00ed datum doru\u010den\u00ed a objedn\u00e1vaj\u00ed d\u00e1l \u2014 a my snadno udr\u017e\u00edme p\u0159ehled o v\u0161ech nevy\u0159\u00edzen\u00fdch objedn\u00e1vk\u00e1ch.',
      name: 'Jm\u00e9no z\u00e1kazn\u00edka',
      role: 'Shopify obchodn\u00edk',
    },
    midCta: { title: 'P\u0159ipraveni u\u017e neztr\u00e1cet prodeje?' },
    finalCta: {
      title: 'Za\u010dn\u011bte dnes s BackorderPRO',
      subtitle: 'K dispozici bezplatn\u00fd plán, bez platebn\u00ed karty.',
      body: 'Nainstalujte za p\u00e1r minut, propojte prvn\u00ed feed a nechte BackorderPRO automaticky spravovat dodac\u00ed lh\u016fty, p\u0159edobjedn\u00e1vky a nevy\u0159\u00edzen\u00e9 objedn\u00e1vky.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 skladem', leadBadge: 'Doru\u010den\u00ed za 5\u20138 pracovn\u00edch dn\u00ed', restock: 'O\u010dek\u00e1van\u00e9 nask\u00e1dnov\u00e1n\u00ed: 18. \u010dervna', preorderBtn: 'P\u0159edobjednat', preorderSub: 'Odesl\u00e1no ihned po na skladn\u011bn\u00ed', addToCart: 'Do ko\u0161\u00edku' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Objedn\u00e1vka', colProduct: 'Produkt', colQty: 'Po\u010det', colStatus: 'Stav', statusOnTrack: 'V\u010das', statusDueSoon: 'Brzy', statusOverdue: 'Po term\u00ednu' },
    },
  },

  sv: {
    title: 'BackorderPRO',
    hero: {
      eyebrow: 'Shopify-app f\u00f6r leveranstider, lager & f\u00f6rbest\u00e4llningar',
      badge: 'Gratisplan tillg\u00e4nglig',
      headline: 'Forts\u00e4tt s\u00e4lja \u2014 \u00e4ven n\u00e4r n\u00e5got tillf\u00e4lligt \u00e4r slut i lager.',
      sub: 'BackorderPRO l\u00e4ser dina leverant\u00f6rsfeeder, matchar dem automatiskt mot dina Shopify-produkter och visar leveranstider, lagerstatus och f\u00f6rbest\u00e4llningsknappar p\u00e5 produktsidan, i varukorgen och i kundkontot \u2014 helt automatiskt.',
      trustLine: 'Gratis att b\u00f6rja \u00b7 EU-h\u00e4rbergerat & GDPR-s\u00e4kert \u00b7 Byggt av e-handelsentrepren\u00f6rer',
    },
    stats: [
      { value: '0\u20ac', label: 'Gratis att b\u00f6rja' },
      { value: '11', label: 'Spr\u00e5k f\u00f6r kund-e-post' },
      { value: '100%', label: 'H\u00e5lls uppdaterat automatiskt' },
      { value: 'EU', label: 'Datalagring (GDPR)' },
    ],
    problemSolutions: {
      title: 'K\u00e4nner du igen dig?',
      intro: 'Butiker med b\u00e5de lagerf\u00f6rda och tillf\u00e4lligt slutsålda produkter st\u00f6ter p\u00e5 samma problem. S\u00e5 h\u00e4r l\u00f6ser BackorderPRO dem:',
      problemLabel: 'Problem',
      solutionLabel: 'L\u00f6sning',
      pairs: [
        {
          problem: { title: 'Slut i lager = f\u00f6rlorad f\u00f6rs\u00e4ljning', text: 'N\u00e4r en produkt n\u00e5r noll ser kunden \u201ej finns\u201c och k\u00f6per n\u00e5gon annanstans. Du f\u00f6rlorar f\u00f6rs\u00e4ljningen \u00e4ven om den kommer om n\u00e5gra dagar.' },
          solution: { title: 'F\u00f6rbest\u00e4llningsknappen f\u00e5ngar f\u00f6rs\u00e4ljningen', text: 'Vid noll lager ers\u00e4tter en f\u00f6rbest\u00e4llningsknapp l\u00e4gg-i-varukorg. Kunden betalar direkt med ett tydligt leveransdatum \u2014 du beh\u00e5ller int\u00e4kten.' },
        },
        {
          problem: { title: '\u201eN\u00e4r finns den igen?\u201c', text: 'Din inkorg fylls av samma fr\u00e5ga. Varje manuellt svar kostar tid medan kunden tvekar.' },
          solution: { title: 'Leveranstider & \u00e5terlageraviseringar', text: 'En leveranstidsbricka och det exakta \u00e5terlagerdatumet finns p\u00e5 produktsidan, och kunder f\u00e5r automatiska e-postuppdateringar. F\u00e4rre fr\u00e5gor, mer f\u00f6rtroende.' },
        },
        {
          problem: { title: 'Sk\u00f6ta lagret f\u00f6r hand', text: 'Ett separat kalkylblad per leverant\u00f6r och omskrivning vid varje \u00e4ndring. Felk\u00e4nsligt och det kostar timmar varje vecka.' },
          solution: { title: 'Feedimport + automatisk matchning', text: 'BackorderPRO l\u00e4ser CSV-, Excel- eller XML-feeder via URL eller FTP, matchar p\u00e5 SKU eller EAN och synkar dagligen. St\u00e4ll in en g\u00e5ng, sedan g\u00e5r det av sig sj\u00e4lvt.' },
        },
        {
          problem: { title: 'Du gl\u00f6mmer vad som ska best\u00e4llas', text: 'Utan \u00f6versikt faller \u00f6ppna restorder mellan stolarna. Kunder v\u00e4ntar f\u00f6r l\u00e4nge och du best\u00e4ller f\u00f6r sent.' },
          solution: { title: 'Backorder Tracker + Buy Advice', text: 'Varje restorder loggas med status, och Buy Advice g\u00f6r den till en f\u00e4rdig ink\u00f6pslista per leverant\u00f6r. Du vet exakt vad du ska best\u00e4lla.' },
        },
      ],
    },
    showcase: {
      title: 'Se det i din butik',
      intro: 'Du styr alla texter och f\u00e4rger inifr\u00e5n appen \u2014 inga \u00e4ndringar i temats kod.',
      items: [
        { mock: 'product', title: 'Leveranstid & f\u00f6rbest\u00e4llning p\u00e5 produktsidan', text: 'En tydlig leveranstidsbricka, det f\u00f6rv\u00e4ntade \u00e5terlagerdatumet och \u2014 n\u00e4r lagret tar slut \u2014 en f\u00f6rbest\u00e4llningsknapp i st\u00e4llet f\u00f6r den vanliga l\u00e4gg-i-varukorg. Kunden vet exakt vad som g\u00e4ller och forts\u00e4tter k\u00f6pa.' },
        { mock: 'tracker', title: 'Backorder Tracker: tappa aldrig en order igen', text: 'Alla \u00f6ppna restorder grupperade per order, med status (i tid / snart / f\u00f6rsenad), snooze, massåtg\u00e4rder och CSV-export. Plus Buy Advice f\u00f6r din ink\u00f6pslista.' },
      ],
    },
    beforeAfter: {
      title: 'Skillnaden BackorderPRO g\u00f6r',
      intro: 'Fr\u00e5n f\u00f6rlorade f\u00f6rs\u00e4ljningar och handarbete till automatisk restorderhantering.',
      before: { title: 'Utan BackorderPRO', items: ['\u201ej finns\u201c \u2014 kunden l\u00e4mnar och k\u00f6per n\u00e5gon annanstans', 'Uppdatera lager och leveranstider f\u00f6r hand', 'Inkorg full av \u201en\u00e4r kommer den?\u201c', 'Ingen \u00f6versikt \u00f6ver vilka restorder att best\u00e4lla', 'Varje leverant\u00f6rsfeed i ett separat kalkylblad'] },
      after: { title: 'Med BackorderPRO', items: ['F\u00f6rbest\u00e4llning beh\u00e5ller f\u00f6rs\u00e4ljningen, \u00e4ven vid 0 lager', 'Lager, leveranstider och f\u00f6rbest\u00e4llningar uppdateras sj\u00e4lva', 'Kunder ser leveransdatumet sj\u00e4lva \u2014 f\u00e4rre fr\u00e5gor', 'Tracker + Buy Advice visar exakt vad som ska best\u00e4llas', 'En app l\u00e4ser alla dina feeder (CSV/Excel/XML, URL/FTP)'] },
    },
    outcomes: {
      title: 'Vad du f\u00e5r ut av det',
      intro: 'Inte tekniska funktioner, utan vad det konkret betyder f\u00f6r din butik:',
      items: [
        { title: 'S\u00e4lj utan lager', text: 'F\u00f6rbest\u00e4llningsknappen f\u00e5ngar int\u00e4kt du annars skulle f\u00f6rlora p\u00e5 en slutsåld produkt.' },
        { title: 'F\u00e4rre kundfr\u00e5gor', text: 'Leveranstider och automatiska e-postmeddelanden svarar p\u00e5 \u201en\u00e4r kommer den?\u201c innan kunden beh\u00f6ver fr\u00e5ga.' },
        { title: 'Timmar mindre handarbete', text: 'Feedimport och daglig synk ers\u00e4tter manuell uppdatering av lager och leveranstider.' },
        { title: 'Smartare ink\u00f6p', text: 'Backorder Tracker, Buy Advice och AI-analys visar vad som ska best\u00e4llas \u2014 och n\u00e4r.' },
      ],
    },
    features: {
      title: 'Allt du beh\u00f6ver',
      intro: 'F\u00f6r din kund i butiken och f\u00f6r dig bakom kulisserna.',
      groups: [
        { title: 'I din butik', subtitle: 'Det kunden ser', items: ['Leveranstidsbricka p\u00e5 produktsidan (t.ex. \u201eLeverans p\u00e5 5\u20138 dagar\u201c)', 'F\u00f6rv\u00e4ntat-lager-meddelande med exakt \u00e5terlagerdatum', 'F\u00f6rbest\u00e4llningsknapp med egen text, f\u00e4rger och \u00e5tg\u00e4rd (till varukorg / meddela mig / egen URL)', 'Bricka \u00e4ven p\u00e5 kollektionskort och i varukorgsl\u00e5dan', 'Kundkonto-widget med restorder-/leveransstatus (i varje plan)', 'Alla texter \u00f6vers\u00e4ttbara via Shopify Translate & Adapt'] },
        { title: 'Automatisering', subtitle: 'Bakom kulisserna', items: ['Feeder i CSV, Excel eller XML \u2014 via URL, FTP/SFTP eller JS-renderade sajter', 'Matchning p\u00e5 SKU eller EAN/streckkod, tolerant mot blanksteg och inledande nollor', 'Regelmotor: feedregler + globala regler som skyddsn\u00e4t', 'Leveranstider (min/max) globalt och per leverant\u00f6r', 'F\u00f6rbest\u00e4llningsregler: minpris, max leveranstid, \u00f6verstyrningar per leverant\u00f6r', 'Daglig schemalagd synk + manuell \u201eRun Now\u201c'] },
        { title: 'Insikt & ink\u00f6p', subtitle: 'Kontroll \u00f6ver dina restorder', items: ['Backorder Tracker: \u00f6ppna restorder per order, status, snooze/l\u00f6s, CSV', 'Buy Advice: automatisk ink\u00f6pslista per leverant\u00f6r, bocka av & exportera', 'E-postaviseringar p\u00e5 11 spr\u00e5k, med egen dom\u00e4n & varum\u00e4rke', 'AI-lageranalys: int\u00e4kts- och lagerinsikt + \u00e5terbest\u00e4llningsr\u00e5d', 'Restorderanalys: int\u00e4kt, toppprodukter, lagring per plan', 'Fungerar med Search & Discovery f\u00f6r lagerfilter'] },
      ],
    },
    howItWorks: {
      title: 'S\u00e5 fungerar det',
      intro: 'I fyra steg fr\u00e5n feed till helt automatisk restorderhantering.',
      steps: [
        { number: '1', title: 'Konfigurera feed', text: 'Ladda upp eller l\u00e4nka din leverant\u00f6rsfeed (CSV, Excel, XML; via URL, FTP/SFTP eller JS-sajt).' },
        { number: '2', title: 'Mappa kolumner', text: 'Koppla SKU/EAN, lager och leveransdatum till dina Shopify-produkter.' },
        { number: '3', title: 'St\u00e4ll in regler', text: 'Best\u00e4m n\u00e4r restorder och f\u00f6rbest\u00e4llning aktiveras.' },
        { number: '4', title: 'Automatisera', text: 'Schemal\u00e4gg en daglig synk (eller k\u00f6r manuellt) och l\u00e5t det rulla.' },
      ],
    },
    security: {
      title: 'S\u00e4kert, EU-h\u00e4rbergerat och GDPR-s\u00e4kert',
      lead: 'BackorderPRO r\u00f6r bara den produktdata som beh\u00f6vs f\u00f6r att uppdatera ditt lager \u2014 och k\u00f6rs helt inom EU.',
      points: [
        { title: 'Data i EU', text: 'H\u00e4rbergerat i Fly.io-regionen Amsterdam. Din data l\u00e4mnar aldrig Europa.' },
        { title: 'Bara det som beh\u00f6vs', text: 'Variant-metaf\u00e4lt i snoek_bpo-namnrymden. Inga kundnamn, telefonnummer eller adresser f\u00f6r butiksfunktioner.' },
        { title: 'Lagrat krypterat', text: 'Leverant\u00f6rsuppgifter (FTP, inloggning) och kund-e-post krypteras med AES-256-GCM.' },
        { title: 'GDPR-webhooks & lagring', text: 'Hanterar customers/redact, data_request och shop/redact. Konfigurerbar lagring (3\u201324 m\u00e5nader), allt raderbart n\u00e4r som helst.' },
      ],
      conclusion: 'Ingen on\u00f6dig data, inga externa omv\u00e4gar \u2014 integritet by design.',
    },
    testimonial: {
      placeholder: true,
      quote: 'Sedan vi b\u00f6rjade anv\u00e4nda BackorderPRO missar vi inte l\u00e4ngre f\u00f6rs\u00e4ljning n\u00e4r n\u00e5got tillf\u00e4lligt \u00e4r slut. Kunder ser leveransdatumet direkt och forts\u00e4tter best\u00e4lla \u2014 och vi h\u00e5ller enkelt koll p\u00e5 alla restorder.',
      name: 'Kundnamn',
      role: 'Shopify-handlare',
    },
    midCta: { title: 'Redo att sluta missa f\u00f6rs\u00e4ljning?' },
    finalCta: {
      title: 'B\u00f6rja med BackorderPRO idag',
      subtitle: 'Gratisplan tillg\u00e4nglig, inget kreditkort beh\u00f6vs.',
      body: 'Installera p\u00e5 n\u00e5gra minuter, koppla din f\u00f6rsta feed och l\u00e5t BackorderPRO sk\u00f6ta leveranstider, f\u00f6rbest\u00e4llningar och restorder automatiskt.',
    },
    mockLabels: {
      product: { vendor: 'Karp Tackle', name: 'Carbon Reel 8000', price: '129,95\u20ac', stockTag: '0 i lager', leadBadge: 'Leverans p\u00e5 5\u20138 arbetsdagar', restock: 'F\u00f6rv\u00e4ntas \u00e5ter: 18 jun', preorderBtn: 'F\u00f6rbest\u00e4ll nu', preorderSub: 'Skickas s\u00e5 snart den kommer', addToCart: 'L\u00e4gg i varukorg' },
      tracker: { title: 'Backorder Tracker', colOrder: 'Order', colProduct: 'Produkt', colQty: 'Antal', colStatus: 'Status', statusOnTrack: 'I tid', statusDueSoon: 'Snart', statusOverdue: 'F\u00f6rsenad' },
    },
  },
};

export function getBackorderProContent(locale: Locale): BackorderProContent {
  return content[locale] ?? content.en;
}
