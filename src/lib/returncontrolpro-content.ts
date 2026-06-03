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
  title: string;
  text: string;
}

export interface ReturnControlProContent {
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
  roadmap: { title: string; intro: string; phases: { label: string; title: string; items: string[] }[] };
  testimonial: { placeholder: boolean; quote: string; name: string; role: string };
  midCta: { title: string };
  finalCta: { title: string; subtitle: string; body: string };
}

const content: Record<Locale, ReturnControlProContent> = {
  nl: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Returns, Exchanges & EU Herroeping voor Shopify',
      badge: 'EU-deadline 19 juni 2026',
      headline: 'Eén knop voor herroeping. Volledige controle over alles daarna.',
      sub: 'ReturnControlPRO is de EU-ready self-service laag voor alles wat na checkout mis kan gaan: wettelijk correct herroepen, veilig annuleren of wijzigen vóór verzending, en ruilen of retourneren na levering — zonder chaos in fulfilment, support of accounting.',
      trustLine: 'Compliance-first · Geen verplichte login · EU-gehost & auditlog · Gebouwd door e-commerce-ondernemers',
    },
    stats: [
      { value: '19 jun', label: 'EU-herroepingsknop deadline' },
      { value: '1', label: 'Ingang voor klant' },
      { value: '24 mnd', label: 'Auditlog-retentie' },
      { value: 'NL/DE/EN', label: 'Talen vanaf dag één' },
    ],
    problemSolutions: {
      title: 'Herken je dit?',
      intro: 'Per 19 juni 2026 moet elke B2C-webshop een herroepingsknop hebben. Maar een knop alleen lost je retourchaos niet op. ReturnControlPRO pakt beide problemen aan:',
      problemLabel: 'Probleem',
      solutionLabel: 'Oplossing',
      pairs: [
        {
          problem: { title: 'EU-deadline zonder plan', text: 'De herroepingsknop moet live zijn met tweestapsbevestiging, auditlog en geen verplichte accountaanmaak. Veel merchants weten niet waar te beginnen.' },
          solution: { title: 'Compliance MVP klaar voor deadline', text: 'Theme app block voor de herroepingsknop, hosted tweestapsformulier, automatische bevestigingsmail en een volledige auditlog — juridisch verdedigbaar vanaf dag één.' },
        },
        {
          problem: { title: 'Support vol met retouren & annuleringen', text: 'Klanten mailen over verkeerde maten, adresfouten en annuleringen — vaak te laat, nadat fulfilment al gestart is.' },
          solution: { title: 'Self-service vóór én na verzending', text: 'Klanten annuleren, wijzigen adres of wisselen variant zolang fulfilment het veilig toelaat. Jij kiest per flow: automatisch, als aanvraag of nooit.' },
        },
        {
          problem: { title: 'Retouren kosten omzet', text: 'Elke refund naar de originele betaalmethode is verloren omzet. Klanten kiezen refund omdat ruilen te moeilijk is.' },
          solution: { title: 'Exchange-first & store credit', text: 'Stuur klanten naar ruilen, store credit of replacement — zonder de wettelijke herroepingsroute te blokkeren. Alternatieven als keuze, nooit als obstakel.' },
        },
        {
          problem: { title: 'Geen overzicht bij discussie', text: 'Bij een juridische vraag kun je niet precies aantonen wanneer de klant herroepen heeft en wat er is bevestigd.' },
          solution: { title: 'Audit trail per verzoek', text: 'Elk verzoek krijgt datum, tijd, inhoud en audit_hash. Exporteer naar CSV, filter op type en status, en houd 24 maanden retentie bij.' },
        },
      ],
    },
    showcase: {
      title: 'Zie ReturnControlPRO in actie',
      intro: 'Van storefront tot admin — één klantflow, meerdere juridische en operationele routes.',
      items: [
        { title: 'Herroepingsknop in je theme', text: 'Een duidelijk zichtbare knop in footer, header of retourpagina. Merchant-aanpasbare teksten via metafields, vertaalbaar met Translate & Adapt.' },
        { title: 'Tweestaps herroepingsformulier', text: 'Klant vult ordernummer + e-mail in — geen verplichte login. Expliciete tweestapsbevestiging en directe ontvangstbevestiging per e-mail.' },
        { title: 'Merchant inbox & auditlog', text: 'Alle verzoeken op één dashboard: herroeping, annulering, wijziging, retour en exchange. Filters op type, status, deadline en land.' },
        { title: 'Annuleren & wijzigen vóór verzending', text: 'Adres corrigeren, variant wisselen of item toevoegen zolang fulfilment niet gelocked is. Harde caps voorkomen wijzigingen na 3PL-start.' },
        { title: 'Retour & exchange na levering', text: 'RMA-generatie, retourredenen per categorie, exchange-first UX met voorraadcheck en prijsverschil-afhandeling.' },
        { title: 'Bestelling beheren in klantaccount', text: 'Customer Account UI extension: klanten zien alleen haalbare acties op basis van order- en fulfilmentstatus.' },
      ],
    },
    beforeAfter: {
      title: 'Het verschil dat ReturnControlPRO maakt',
      intro: 'Van losse e-mailketens en compliance-stress naar één gecontroleerde post-purchase laag.',
      before: {
        title: 'Zonder ReturnControlPRO',
        items: [
          'Geen herroepingsknop — risico op boete na 19 juni 2026',
          'Support vol met "kan ik annuleren?" en "verkeerde maat"',
          'Annuleringen te laat — order al naar fulfilment',
          'Refunds in plaats van exchanges — omzet weg',
          'Geen auditlog bij juridische discussie',
        ],
      },
      after: {
        title: 'Met ReturnControlPRO',
        items: [
          'EU-compliant herroepingsknop + tweestapsflow + auditlog',
          'Klanten regelen het zelf — minder tickets',
          'Fulfilment-lock detectie — geen late annuleringen',
          'Exchange-first houdt omzet in de winkel',
          'Volledige audit trail per verzoek, CSV-export',
        ],
      },
    },
    outcomes: {
      title: 'Wat merchants winnen',
      intro: 'ReturnControlPRO is geen retourportaal — het is een omzetbeschermer met compliance ingebouwd.',
      items: [
        { title: 'Minder supporttickets', text: 'Klanten annuleren, wijzigen en retourneren zelf — zonder account aan te maken of te mailen.' },
        { title: 'Compliance zonder stress', text: 'Herroeping registreren met bevestiging, auditlog en data-minimalisatie — klaar voor de EU-deadline.' },
        { title: 'Orders redden vóór verzending', text: 'Adres- en variantwijzigingen binnen instelbare tijdvensters, vóór fulfilment lock.' },
        { title: 'Omzet behouden via exchange', text: 'Exchange-first UX en store credit bonus — refund is altijd mogelijk, maar niet de enige route.' },
      ],
    },
    features: {
      title: 'Alles in één app',
      intro: 'Drie werelden samengebracht: EU-compliance, operationele ordercontrole en revenue retention.',
      groups: [
        {
          title: 'EU Compliance',
          subtitle: 'Fase 1 — deadline-ready',
          items: [
            'Herroepingsknop (theme app block)',
            'Hosted tweestapsformulier',
            'Order matching op ordernummer + e-mail',
            'Automatische bevestigingsmail (NL/DE/EN)',
            'Auditlog met datum/tijd/inhoud',
            'Shopify order tags & metafields',
          ],
        },
        {
          title: 'Post-Purchase Control',
          subtitle: 'Fase 2 — vóór verzending',
          items: [
            'Annuleren (direct of als aanvraag)',
            'Adres, variant en item wijzigen',
            'Fulfilment-lock detectie',
            'Per-flow: automatisch / aanvraag / nooit',
            'Order status & thank-you entrypoint',
            'Shopify Flow triggers',
          ],
        },
        {
          title: 'Returns & Retention',
          subtitle: 'Fase 3–4 — na levering',
          items: [
            'RMA & retourredenen per categorie',
            'Exchange-first met voorraadcheck',
            'Store credit flow',
            'Retourlabels via carrier (Sendcloud)',
            'Return save offers & analytics',
            'Automations builder',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'Hoe het werkt',
      intro: 'Eén ingang voor de klant. De app bepaalt welke routes beschikbaar zijn.',
      steps: [
        { number: '1', title: 'Klant opent "Bestelling beheren"', text: 'Via footer-knop, klantaccount of orderstatus. Ordernummer + e-mail — login optioneel.' },
        { number: '2', title: 'Eligibility-engine beslist', text: 'Op basis van orderstatus, fulfilment, leverdatum, land en jouw settings: allowed, request_only of blocked.' },
        { number: '3', title: 'Klant kiest actie', text: 'Herroepen, annuleren, wijzigen, retourneren of ruilen — alleen wat haalbaar is, met duidelijke labels.' },
        { number: '4', title: 'Jij houdt controle', text: 'Automatisch verwerken waar veilig, handmatig beoordelen waar nodig. Alles gelogd in de audit trail.' },
      ],
    },
    security: {
      title: 'Privacy & compliance by design',
      lead: 'Juridische gevoeligheid vraagt om data-minimalisatie, auditlogs en EU-hosting vanaf dag één.',
      points: [
        { title: 'EU-gehost (Fly.io Amsterdam)', text: 'App en database in de EU. Alleen noodzakelijke orderdata — geen onnodige klantgegevens.' },
        { title: 'Auditlog & retentie', text: 'Elk verzoek met audit_hash, configureerbare retentie (default 24 maanden) en CSV-export.' },
        { title: 'Geen dark patterns', text: 'Wettelijke herroeping altijd direct en vrij toegankelijk. Alternatieven als keuze, nooit als obstakel.' },
        { title: 'GDPR webhooks', text: 'customers/redact, customers/data_request en shop/redact vanaf dag één.' },
      ],
      conclusion: 'Copy en flow juridisch te laten toetsen vóór live — de technische basis voor audit en data-minimalisatie staat klaar.',
    },
    roadmap: {
      title: 'Gefaseerde roadmap',
      intro: 'Start compliance-first voor snelle installaties rond de deadline. Bouw door naar volledige post-purchase control.',
      phases: [
        { label: 'Fase 1', title: 'Compliance MVP', items: ['Herroepingsknop + formulier', 'Auditlog + dashboard', 'Bevestigingsmail', 'NL/DE/EN'] },
        { label: 'Fase 2', title: 'Pre-fulfillment control', items: ['Annuleren & wijzigen', 'Fulfilment-lock', 'Automations', 'Order status block'] },
        { label: 'Fase 3', title: 'Returns & exchanges', items: ['RMA + retourlabels', 'Exchange-first', 'Store credit', 'Carrier integratie'] },
        { label: 'Fase 4', title: 'Upsells & retention', items: ['Return save offers', 'Post-purchase add-ons', 'A/B testing', 'Analytics dashboard'] },
      ],
    },
    testimonial: {
      placeholder: true,
      quote: 'We zochten niet nog een retourportaal, maar één plek waar klanten wettelijk kunnen herroepen én zelf hun bestelling kunnen aanpassen vóór verzending.',
      name: 'Shopify merchant',
      role: 'Fashion & lifestyle — NL',
    },
    midCta: { title: 'Klaar voor de EU-deadline van 19 juni 2026?' },
    finalCta: {
      title: 'ReturnControlPRO',
      subtitle: 'De EU-ready self-service laag voor alles wat na checkout mis kan gaan.',
      body: 'Compliance-first, uitbreidbaar naar post-purchase control, retouren en exchanges. Eén app — geen chaos.',
    },
  },

  en: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Returns, Exchanges & EU Withdrawal for Shopify',
      badge: 'EU deadline 19 June 2026',
      headline: 'One button for withdrawal. Full control over everything after.',
      sub: 'ReturnControlPRO is the EU-ready self-service layer for everything that can go wrong after checkout: legally compliant withdrawal, safe cancel or edit before shipping, and exchange or return after delivery — without chaos in fulfilment, support or accounting.',
      trustLine: 'Compliance-first · No mandatory login · EU-hosted & audit log · Built by e-commerce entrepreneurs',
    },
    stats: [
      { value: '19 Jun', label: 'EU withdrawal button deadline' },
      { value: '1', label: 'Customer entry point' },
      { value: '24 mo', label: 'Audit log retention' },
      { value: 'NL/DE/EN', label: 'Languages from day one' },
    ],
    problemSolutions: {
      title: 'Sound familiar?',
      intro: 'From 19 June 2026 every B2C store needs a withdrawal button. But a button alone does not fix return chaos. ReturnControlPRO tackles both:',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      pairs: [
        {
          problem: { title: 'EU deadline without a plan', text: 'The withdrawal button must go live with two-step confirmation, audit log and no mandatory account creation. Many merchants do not know where to start.' },
          solution: { title: 'Compliance MVP ready for the deadline', text: 'Theme app block for the withdrawal button, hosted two-step form, automatic confirmation email and a full audit log — legally defensible from day one.' },
        },
        {
          problem: { title: 'Support flooded with returns & cancellations', text: 'Customers email about wrong sizes, address errors and cancellations — often too late, after fulfilment has already started.' },
          solution: { title: 'Self-service before and after shipping', text: 'Customers cancel, edit address or swap variant while fulfilment safely allows it. You choose per flow: automatic, as request or never.' },
        },
        {
          problem: { title: 'Returns cost revenue', text: 'Every refund to the original payment method is lost revenue. Customers choose refund because exchange is too hard.' },
          solution: { title: 'Exchange-first & store credit', text: 'Steer customers toward exchange, store credit or replacement — without blocking the legal withdrawal route. Alternatives as choice, never as obstacle.' },
        },
        {
          problem: { title: 'No overview in disputes', text: 'In a legal dispute you cannot prove exactly when the customer withdrew and what was confirmed.' },
          solution: { title: 'Audit trail per request', text: 'Every request gets date, time, content and audit_hash. Export to CSV, filter by type and status, with 24-month retention.' },
        },
      ],
    },
    showcase: {
      title: 'See ReturnControlPRO in action',
      intro: 'From storefront to admin — one customer flow, multiple legal and operational routes.',
      items: [
        { title: 'Withdrawal button in your theme', text: 'A clearly visible button in footer, header or returns page. Merchant-customisable copy via metafields, translatable with Translate & Adapt.' },
        { title: 'Two-step withdrawal form', text: 'Customer enters order number + email — no mandatory login. Explicit two-step confirmation and instant email receipt.' },
        { title: 'Merchant inbox & audit log', text: 'All requests in one dashboard: withdrawal, cancellation, edit, return and exchange. Filters by type, status, deadline and country.' },
        { title: 'Cancel & edit before shipping', text: 'Fix address, swap variant or add item while fulfilment is not locked. Hard caps prevent changes after 3PL start.' },
        { title: 'Return & exchange after delivery', text: 'RMA generation, return reasons per category, exchange-first UX with stock check and price difference handling.' },
        { title: 'Manage order in customer account', text: 'Customer Account UI extension: customers only see actionable options based on order and fulfilment status.' },
      ],
    },
    beforeAfter: {
      title: 'The difference ReturnControlPRO makes',
      intro: 'From scattered email threads and compliance stress to one controlled post-purchase layer.',
      before: {
        title: 'Without ReturnControlPRO',
        items: [
          'No withdrawal button — fine risk after 19 June 2026',
          'Support full of "can I cancel?" and "wrong size"',
          'Cancellations too late — order already in fulfilment',
          'Refunds instead of exchanges — revenue gone',
          'No audit log in legal disputes',
        ],
      },
      after: {
        title: 'With ReturnControlPRO',
        items: [
          'EU-compliant withdrawal button + two-step flow + audit log',
          'Customers self-serve — fewer tickets',
          'Fulfilment-lock detection — no late cancellations',
          'Exchange-first keeps revenue in the store',
          'Full audit trail per request, CSV export',
        ],
      },
    },
    outcomes: {
      title: 'What merchants gain',
      intro: 'ReturnControlPRO is not a return portal — it is a revenue protector with compliance built in.',
      items: [
        { title: 'Fewer support tickets', text: 'Customers cancel, edit and return themselves — without creating an account or emailing.' },
        { title: 'Compliance without stress', text: 'Register withdrawal with confirmation, audit log and data minimisation — ready for the EU deadline.' },
        { title: 'Save orders before shipping', text: 'Address and variant changes within configurable time windows, before fulfilment lock.' },
        { title: 'Retain revenue via exchange', text: 'Exchange-first UX and store credit bonus — refund always possible, but not the only route.' },
      ],
    },
    features: {
      title: 'Everything in one app',
      intro: 'Three worlds combined: EU compliance, operational order control and revenue retention.',
      groups: [
        {
          title: 'EU Compliance',
          subtitle: 'Phase 1 — deadline-ready',
          items: [
            'Withdrawal button (theme app block)',
            'Hosted two-step form',
            'Order matching on order number + email',
            'Automatic confirmation email (NL/DE/EN)',
            'Audit log with date/time/content',
            'Shopify order tags & metafields',
          ],
        },
        {
          title: 'Post-Purchase Control',
          subtitle: 'Phase 2 — before shipping',
          items: [
            'Cancel (direct or as request)',
            'Edit address, variant and items',
            'Fulfilment-lock detection',
            'Per flow: automatic / request / never',
            'Order status & thank-you entrypoint',
            'Shopify Flow triggers',
          ],
        },
        {
          title: 'Returns & Retention',
          subtitle: 'Phase 3–4 — after delivery',
          items: [
            'RMA & return reasons per category',
            'Exchange-first with stock check',
            'Store credit flow',
            'Return labels via carrier (Sendcloud)',
            'Return save offers & analytics',
            'Automations builder',
          ],
        },
      ],
    },
    howItWorks: {
      title: 'How it works',
      intro: 'One entry for the customer. The app determines which routes are available.',
      steps: [
        { number: '1', title: 'Customer opens "Manage order"', text: 'Via footer button, customer account or order status. Order number + email — login optional.' },
        { number: '2', title: 'Eligibility engine decides', text: 'Based on order status, fulfilment, delivery date, country and your settings: allowed, request_only or blocked.' },
        { number: '3', title: 'Customer chooses action', text: 'Withdraw, cancel, edit, return or exchange — only what is feasible, with clear labels.' },
        { number: '4', title: 'You stay in control', text: 'Process automatically where safe, review manually where needed. Everything logged in the audit trail.' },
      ],
    },
    security: {
      title: 'Privacy & compliance by design',
      lead: 'Legal sensitivity requires data minimisation, audit logs and EU hosting from day one.',
      points: [
        { title: 'EU-hosted (Fly.io Amsterdam)', text: 'App and database in the EU. Only necessary order data — no unnecessary customer details.' },
        { title: 'Audit log & retention', text: 'Every request with audit_hash, configurable retention (default 24 months) and CSV export.' },
        { title: 'No dark patterns', text: 'Legal withdrawal always directly and freely accessible. Alternatives as choice, never as obstacle.' },
        { title: 'GDPR webhooks', text: 'customers/redact, customers/data_request and shop/redact from day one.' },
      ],
      conclusion: 'Have copy and flow reviewed by legal counsel before going live — the technical foundation for audit and data minimisation is ready.',
    },
    roadmap: {
      title: 'Phased roadmap',
      intro: 'Start compliance-first for fast installs around the deadline. Expand to full post-purchase control.',
      phases: [
        { label: 'Phase 1', title: 'Compliance MVP', items: ['Withdrawal button + form', 'Audit log + dashboard', 'Confirmation email', 'NL/DE/EN'] },
        { label: 'Phase 2', title: 'Pre-fulfillment control', items: ['Cancel & edit', 'Fulfilment-lock', 'Automations', 'Order status block'] },
        { label: 'Phase 3', title: 'Returns & exchanges', items: ['RMA + return labels', 'Exchange-first', 'Store credit', 'Carrier integration'] },
        { label: 'Phase 4', title: 'Upsells & retention', items: ['Return save offers', 'Post-purchase add-ons', 'A/B testing', 'Analytics dashboard'] },
      ],
    },
    testimonial: {
      placeholder: true,
      quote: 'We were not looking for another return portal, but one place where customers can legally withdraw and adjust their order themselves before shipping.',
      name: 'Shopify merchant',
      role: 'Fashion & lifestyle — NL',
    },
    midCta: { title: 'Ready for the EU deadline of 19 June 2026?' },
    finalCta: {
      title: 'ReturnControlPRO',
      subtitle: 'The EU-ready self-service layer for everything that can go wrong after checkout.',
      body: 'Compliance-first, expandable to post-purchase control, returns and exchanges. One app — no chaos.',
    },
  },

  de: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Retouren, Umtausch & EU-Widerruf für Shopify',
      badge: 'EU-Frist 19. Juni 2026',
      headline: 'Ein Knopf für den Widerruf. Volle Kontrolle über alles danach.',
      sub: 'ReturnControlPRO ist die EU-konforme Self-Service-Schicht für alles, was nach dem Checkout schiefgehen kann: rechtskonformer Widerruf, sicheres Stornieren oder Ändern vor Versand, und Umtausch oder Retoure nach Lieferung.',
      trustLine: 'Compliance-first · Kein Pflicht-Login · EU-gehostet & Audit-Log · Von E-Commerce-Unternehmern gebaut',
    },
    stats: [
      { value: '19 Jun', label: 'EU-Widerrufsknopf-Frist' },
      { value: '1', label: 'Kunden-Einstieg' },
      { value: '24 Mo', label: 'Audit-Log-Aufbewahrung' },
      { value: 'NL/DE/EN', label: 'Sprachen ab Tag eins' },
    ],
    problemSolutions: {
      title: 'Kommt Ihnen das bekannt vor?',
      intro: 'Ab 19. Juni 2026 braucht jeder B2C-Shop einen Widerrufsknopf. Aber ein Knopf allein löst das Retouren-Chaos nicht. ReturnControlPRO löst beides:',
      problemLabel: 'Problem',
      solutionLabel: 'Lösung',
      pairs: [
        { problem: { title: 'EU-Frist ohne Plan', text: 'Der Widerrufsknopf muss mit Zweistufenbestätigung, Audit-Log und ohne Pflicht-Konto live gehen.' }, solution: { title: 'Compliance-MVP fristgerecht', text: 'Theme-App-Block, gehostetes Formular, Bestätigungsmail und vollständiges Audit-Log — rechtlich verteidigbar ab Tag eins.' } },
        { problem: { title: 'Support überflutet', text: 'Kunden mailen über falsche Größen, Adressfehler und Stornierungen — oft zu spät.' }, solution: { title: 'Self-Service vor und nach Versand', text: 'Kunden stornieren, ändern Adresse oder tauschen Varianten, solange Fulfilment es erlaubt.' } },
        { problem: { title: 'Retouren kosten Umsatz', text: 'Jede Rückerstattung ist verlorener Umsatz.' }, solution: { title: 'Exchange-first & Store Credit', text: 'Umtausch und Store Credit fördern — ohne den Widerrufsweg zu blockieren.' } },
        { problem: { title: 'Kein Überblick bei Streit', text: 'Bei rechtlichen Fragen fehlt der Nachweis.' }, solution: { title: 'Audit-Trail pro Anfrage', text: 'Datum, Zeit, Inhalt und audit_hash — CSV-Export und 24 Monate Aufbewahrung.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO in Aktion',
      intro: 'Vom Storefront bis Admin — ein Kundenflow, mehrere Routen.',
      items: [
        { title: 'Widerrufsknopf im Theme', text: 'Sichtbar in Footer, Header oder Retourenseite. Anpassbare Texte via Metafields.' },
        { title: 'Zweistufiges Widerrufsformular', text: 'Bestellnummer + E-Mail — kein Pflicht-Login. Explizite Bestätigung und E-Mail-Quittung.' },
        { title: 'Merchant-Inbox & Audit-Log', text: 'Alle Anfragen in einem Dashboard mit Filtern nach Typ, Status und Land.' },
        { title: 'Stornieren & ändern vor Versand', text: 'Adresse, Variante oder Artikel ändern, solange Fulfilment nicht gesperrt ist.' },
        { title: 'Retoure & Umtausch nach Lieferung', text: 'RMA, Retourengründe, Exchange-first mit Bestandsprüfung.' },
        { title: 'Bestellung verwalten im Kundenkonto', text: 'Customer Account Extension zeigt nur machbare Aktionen.' },
      ],
    },
    beforeAfter: {
      title: 'Der Unterschied mit ReturnControlPRO',
      intro: 'Von E-Mail-Chaos zu einer kontrollierten Post-Purchase-Schicht.',
      before: { title: 'Ohne ReturnControlPRO', items: ['Kein Widerrufsknopf — Bußgeld-Risiko', 'Support voller Storno-Anfragen', 'Stornierungen zu spät', 'Rückerstattungen statt Umtausch', 'Kein Audit-Log'] },
      after: { title: 'Mit ReturnControlPRO', items: ['EU-konformer Widerrufsknopf + Audit-Log', 'Kunden helfen sich selbst', 'Fulfilment-Lock-Erkennung', 'Exchange-first', 'Vollständiger Audit-Trail'] },
    },
    outcomes: {
      title: 'Was Händler gewinnen',
      intro: 'Kein Retourenportal — ein Umsatzschützer mit Compliance.',
      items: [
        { title: 'Weniger Support-Tickets', text: 'Kunden erledigen alles selbst — ohne Konto oder E-Mail.' },
        { title: 'Compliance ohne Stress', text: 'Widerruf mit Bestätigung, Audit-Log und Datenminimierung.' },
        { title: 'Bestellungen retten', text: 'Änderungen vor Versand innerhalb konfigurierbarer Zeitfenster.' },
        { title: 'Umsatz via Umtausch', text: 'Exchange-first UX — Rückerstattung immer möglich, nicht die einzige Route.' },
      ],
    },
    features: {
      title: 'Alles in einer App',
      intro: 'EU-Compliance, Order-Kontrolle und Revenue Retention vereint.',
      groups: [
        { title: 'EU Compliance', subtitle: 'Phase 1', items: ['Widerrufsknopf', 'Zweistufiges Formular', 'Order-Matching', 'Bestätigungsmail', 'Audit-Log', 'Order-Tags'] },
        { title: 'Post-Purchase Control', subtitle: 'Phase 2', items: ['Stornieren', 'Adresse/Variante ändern', 'Fulfilment-Lock', 'Pro Flow einstellbar', 'Order-Status-Block', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Phase 3–4', items: ['RMA', 'Exchange-first', 'Store Credit', 'Retourenlabels', 'Save Offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'So funktioniert es',
      intro: 'Ein Einstieg für den Kunden. Die App bestimmt verfügbare Routen.',
      steps: [
        { number: '1', title: 'Kunde öffnet "Bestellung verwalten"', text: 'Via Footer, Kundenkonto oder Bestellstatus.' },
        { number: '2', title: 'Eligibility-Engine entscheidet', text: 'allowed, request_only oder blocked.' },
        { number: '3', title: 'Kunde wählt Aktion', text: 'Widerruf, Storno, Änderung, Retoure oder Umtausch.' },
        { number: '4', title: 'Sie behalten die Kontrolle', text: 'Automatisch wo sicher, manuell wo nötig — alles geloggt.' },
      ],
    },
    security: {
      title: 'Privacy & Compliance',
      lead: 'Datenminimierung, Audit-Logs und EU-Hosting ab Tag eins.',
      points: [
        { title: 'EU-gehostet', text: 'Fly.io Amsterdam — nur notwendige Orderdaten.' },
        { title: 'Audit-Log', text: 'audit_hash, 24 Monate Aufbewahrung, CSV-Export.' },
        { title: 'Keine Dark Patterns', text: 'Widerruf immer frei zugänglich.' },
        { title: 'GDPR Webhooks', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Copy und Flow juristisch prüfen lassen — technische Basis steht.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first starten, dann ausbauen.',
      phases: [
        { label: 'Phase 1', title: 'Compliance MVP', items: ['Widerrufsknopf', 'Audit-Log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Phase 2', title: 'Pre-fulfillment', items: ['Storno & Änderung', 'Fulfilment-Lock', 'Automations'] },
        { label: 'Phase 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store Credit', 'Labels'] },
        { label: 'Phase 4', title: 'Retention', items: ['Save Offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'Wir suchten kein weiteres Retourenportal, sondern eine Lösung für Widerruf und Self-Service vor dem Versand.', name: 'Shopify-Händler', role: 'Fashion — DE' },
    midCta: { title: 'Bereit für die EU-Frist am 19. Juni 2026?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'Die EU-konforme Self-Service-Schicht nach dem Checkout.', body: 'Compliance-first, erweiterbar zu Returns und Exchanges. Eine App — kein Chaos.' },
  },

  fr: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Retours, Échanges & Rétractation UE pour Shopify',
      badge: 'Échéance UE 19 juin 2026',
      headline: 'Un bouton pour la rétractation. Contrôle total sur la suite.',
      sub: 'ReturnControlPRO est la couche self-service conforme UE pour tout ce qui peut mal se passer après le checkout : rétractation légale, annulation ou modification avant expédition, et échange ou retour après livraison.',
      trustLine: 'Compliance-first · Pas de login obligatoire · Hébergé UE · Construit par des entrepreneurs e-commerce',
    },
    stats: [
      { value: '19 juin', label: 'Échéance bouton rétractation' },
      { value: '1', label: 'Point d\'entrée client' },
      { value: '24 mois', label: 'Rétention audit log' },
      { value: 'NL/DE/EN', label: 'Langues dès le jour 1' },
    ],
    problemSolutions: {
      title: 'Ça vous parle ?',
      intro: 'Dès le 19 juin 2026, chaque boutique B2C doit avoir un bouton de rétractation. Mais un bouton seul ne résout pas le chaos des retours.',
      problemLabel: 'Problème',
      solutionLabel: 'Solution',
      pairs: [
        { problem: { title: 'Échéance UE sans plan', text: 'Bouton avec confirmation en deux étapes, audit log et sans compte obligatoire.' }, solution: { title: 'MVP compliance prêt', text: 'Bloc theme, formulaire hébergé, e-mail de confirmation et audit log complet.' } },
        { problem: { title: 'Support saturé', text: 'E-mails sur mauvaises tailles, adresses et annulations — souvent trop tard.' }, solution: { title: 'Self-service avant et après', text: 'Annuler, modifier adresse ou échanger tant que le fulfilment le permet.' } },
        { problem: { title: 'Les retours coûtent', text: 'Chaque remboursement est un revenu perdu.' }, solution: { title: 'Exchange-first & crédit magasin', text: 'Orientez vers l\'échange sans bloquer la rétractation légale.' } },
        { problem: { title: 'Pas de preuve en litige', text: 'Impossible de prouver quand le client s\'est rétracté.' }, solution: { title: 'Piste d\'audit', text: 'Date, heure, contenu et audit_hash — export CSV, 24 mois.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO en action',
      intro: 'Du storefront à l\'admin — un flux, plusieurs routes.',
      items: [
        { title: 'Bouton de rétractation', text: 'Visible en footer, header ou page retours.' },
        { title: 'Formulaire en deux étapes', text: 'Numéro de commande + e-mail — pas de login obligatoire.' },
        { title: 'Inbox marchand & audit', text: 'Toutes les demandes dans un tableau de bord filtrable.' },
        { title: 'Annuler & modifier avant expédition', text: 'Adresse, variante ou article tant que le fulfilment n\'est pas verrouillé.' },
        { title: 'Retour & échange après livraison', text: 'RMA, raisons de retour, exchange-first avec stock.' },
        { title: 'Gérer la commande', text: 'Extension compte client — actions selon l\'éligibilité.' },
      ],
    },
    beforeAfter: {
      title: 'La différence ReturnControlPRO',
      intro: 'Des e-mails éparpillés à une couche post-achat contrôlée.',
      before: { title: 'Sans ReturnControlPRO', items: ['Pas de bouton — risque d\'amende', 'Support saturé', 'Annulations trop tard', 'Remboursements', 'Pas d\'audit log'] },
      after: { title: 'Avec ReturnControlPRO', items: ['Bouton conforme UE + audit', 'Clients autonomes', 'Détection fulfilment-lock', 'Exchange-first', 'Piste d\'audit complète'] },
    },
    outcomes: {
      title: 'Ce que les marchands gagnent',
      intro: 'Pas un portail retours — un protecteur de revenus avec compliance.',
      items: [
        { title: 'Moins de tickets', text: 'Les clients gèrent tout eux-mêmes.' },
        { title: 'Compliance sereine', text: 'Rétractation avec confirmation et audit log.' },
        { title: 'Sauver les commandes', text: 'Modifications avant expédition dans des fenêtres configurables.' },
        { title: 'Revenus via échange', text: 'Exchange-first — remboursement toujours possible.' },
      ],
    },
    features: {
      title: 'Tout en une app',
      intro: 'Compliance UE, contrôle commande et rétention revenus.',
      groups: [
        { title: 'Compliance UE', subtitle: 'Phase 1', items: ['Bouton rétractation', 'Formulaire 2 étapes', 'Matching commande', 'E-mail confirmation', 'Audit log', 'Tags commande'] },
        { title: 'Post-Purchase Control', subtitle: 'Phase 2', items: ['Annulation', 'Modification adresse/variante', 'Fulfilment-lock', 'Par flux configurable', 'Bloc order status', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Phase 3–4', items: ['RMA', 'Exchange-first', 'Store credit', 'Labels retour', 'Save offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'Comment ça marche',
      intro: 'Une entrée client. L\'app détermine les routes disponibles.',
      steps: [
        { number: '1', title: 'Client ouvre "Gérer commande"', text: 'Via footer, compte client ou statut commande.' },
        { number: '2', title: 'Moteur d\'éligibilité', text: 'allowed, request_only ou blocked.' },
        { number: '3', title: 'Client choisit', text: 'Rétractation, annulation, modification, retour ou échange.' },
        { number: '4', title: 'Vous gardez le contrôle', text: 'Automatique ou manuel — tout est loggé.' },
      ],
    },
    security: {
      title: 'Privacy & compliance',
      lead: 'Minimisation des données, audit logs et hébergement UE.',
      points: [
        { title: 'Hébergé UE', text: 'Fly.io Amsterdam — données commande uniquement.' },
        { title: 'Audit log', text: 'audit_hash, 24 mois, export CSV.' },
        { title: 'Pas de dark patterns', text: 'Rétractation toujours accessible.' },
        { title: 'Webhooks GDPR', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Faire valider le copy juridiquement — base technique prête.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first, puis expansion.',
      phases: [
        { label: 'Phase 1', title: 'MVP Compliance', items: ['Bouton + formulaire', 'Audit log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Phase 2', title: 'Pre-fulfillment', items: ['Annuler & modifier', 'Fulfilment-lock', 'Automations'] },
        { label: 'Phase 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store credit', 'Labels'] },
        { label: 'Phase 4', title: 'Retention', items: ['Save offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'Nous ne voulions pas un autre portail retours, mais un endroit pour la rétractation légale et le self-service avant expédition.', name: 'Marchand Shopify', role: 'Mode — FR' },
    midCta: { title: 'Prêt pour l\'échéance UE du 19 juin 2026 ?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'La couche self-service conforme UE après le checkout.', body: 'Compliance-first, extensible vers returns et exchanges. Une app — pas de chaos.' },
  },

  es: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Devoluciones, Cambios & Desistimiento UE para Shopify',
      badge: 'Plazo UE 19 junio 2026',
      headline: 'Un botón para desistir. Control total sobre lo que sigue.',
      sub: 'ReturnControlPRO es la capa self-service preparada para la UE para todo lo que puede fallar tras el checkout: desistimiento legal, cancelar o modificar antes del envío, y cambiar o devolver tras la entrega.',
      trustLine: 'Compliance-first · Sin login obligatorio · Alojado en UE · Creado por emprendedores e-commerce',
    },
    stats: [
      { value: '19 jun', label: 'Plazo botón desistimiento' },
      { value: '1', label: 'Entrada del cliente' },
      { value: '24 meses', label: 'Retención audit log' },
      { value: 'NL/DE/EN', label: 'Idiomas desde el día 1' },
    ],
    problemSolutions: {
      title: '¿Te suena?',
      intro: 'Desde el 19 de junio de 2026, cada tienda B2C necesita un botón de desistimiento. Pero un botón solo no arregla el caos de devoluciones.',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      pairs: [
        { problem: { title: 'Plazo UE sin plan', text: 'Botón con confirmación en dos pasos, audit log y sin cuenta obligatoria.' }, solution: { title: 'MVP compliance listo', text: 'Bloque theme, formulario alojado, email de confirmación y audit log completo.' } },
        { problem: { title: 'Soporte saturado', text: 'Emails sobre tallas, direcciones y cancelaciones — a menudo demasiado tarde.' }, solution: { title: 'Self-service antes y después', text: 'Cancelar, editar dirección o cambiar variante mientras el fulfilment lo permita.' } },
        { problem: { title: 'Las devoluciones cuestan', text: 'Cada reembolso es ingreso perdido.' }, solution: { title: 'Exchange-first & store credit', text: 'Orienta al cambio sin bloquear el desistimiento legal.' } },
        { problem: { title: 'Sin prueba en disputa', text: 'Imposible demostrar cuándo desistió el cliente.' }, solution: { title: 'Pista de auditoría', text: 'Fecha, hora, contenido y audit_hash — export CSV, 24 meses.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO en acción',
      intro: 'Del storefront al admin — un flujo, múltiples rutas.',
      items: [
        { title: 'Botón de desistimiento', text: 'Visible en footer, header o página de devoluciones.' },
        { title: 'Formulario en dos pasos', text: 'Número de pedido + email — sin login obligatorio.' },
        { title: 'Inbox merchant & audit', text: 'Todas las solicitudes en un dashboard filtrable.' },
        { title: 'Cancelar & editar antes del envío', text: 'Dirección, variante o artículo mientras fulfilment no esté bloqueado.' },
        { title: 'Devolución & cambio tras entrega', text: 'RMA, motivos de devolución, exchange-first con stock.' },
        { title: 'Gestionar pedido', text: 'Extensión cuenta cliente — acciones según elegibilidad.' },
      ],
    },
    beforeAfter: {
      title: 'La diferencia ReturnControlPRO',
      intro: 'De emails dispersos a una capa post-compra controlada.',
      before: { title: 'Sin ReturnControlPRO', items: ['Sin botón — riesgo multa', 'Soporte saturado', 'Cancelaciones tarde', 'Reembolsos', 'Sin audit log'] },
      after: { title: 'Con ReturnControlPRO', items: ['Botón conforme UE + audit', 'Clientes autónomos', 'Detección fulfilment-lock', 'Exchange-first', 'Pista de auditoría completa'] },
    },
    outcomes: {
      title: 'Lo que ganan los merchants',
      intro: 'No un portal de devoluciones — un protector de ingresos con compliance.',
      items: [
        { title: 'Menos tickets', text: 'Los clientes lo gestionan solos.' },
        { title: 'Compliance sin estrés', text: 'Desistimiento con confirmación y audit log.' },
        { title: 'Salvar pedidos', text: 'Cambios antes del envío en ventanas configurables.' },
        { title: 'Ingresos vía cambio', text: 'Exchange-first — reembolso siempre posible.' },
      ],
    },
    features: {
      title: 'Todo en una app',
      intro: 'Compliance UE, control de pedidos y retención de ingresos.',
      groups: [
        { title: 'Compliance UE', subtitle: 'Fase 1', items: ['Botón desistimiento', 'Formulario 2 pasos', 'Matching pedido', 'Email confirmación', 'Audit log', 'Tags pedido'] },
        { title: 'Post-Purchase Control', subtitle: 'Fase 2', items: ['Cancelación', 'Editar dirección/variante', 'Fulfilment-lock', 'Por flujo configurable', 'Bloque order status', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Fase 3–4', items: ['RMA', 'Exchange-first', 'Store credit', 'Labels devolución', 'Save offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'Cómo funciona',
      intro: 'Una entrada para el cliente. La app determina las rutas disponibles.',
      steps: [
        { number: '1', title: 'Cliente abre "Gestionar pedido"', text: 'Via footer, cuenta cliente o estado del pedido.' },
        { number: '2', title: 'Motor de elegibilidad', text: 'allowed, request_only o blocked.' },
        { number: '3', title: 'Cliente elige', text: 'Desistir, cancelar, editar, devolver o cambiar.' },
        { number: '4', title: 'Tú mantienes el control', text: 'Automático o manual — todo registrado.' },
      ],
    },
    security: {
      title: 'Privacy & compliance',
      lead: 'Minimización de datos, audit logs y alojamiento UE.',
      points: [
        { title: 'Alojado UE', text: 'Fly.io Amsterdam — solo datos de pedido necesarios.' },
        { title: 'Audit log', text: 'audit_hash, 24 meses, export CSV.' },
        { title: 'Sin dark patterns', text: 'Desistimiento siempre accesible.' },
        { title: 'Webhooks GDPR', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Validar copy legalmente — base técnica lista.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first, luego expansión.',
      phases: [
        { label: 'Fase 1', title: 'MVP Compliance', items: ['Botón + formulario', 'Audit log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Fase 2', title: 'Pre-fulfillment', items: ['Cancelar & editar', 'Fulfilment-lock', 'Automations'] },
        { label: 'Fase 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store credit', 'Labels'] },
        { label: 'Fase 4', title: 'Retention', items: ['Save offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'No buscábamos otro portal de devoluciones, sino un lugar para desistimiento legal y self-service antes del envío.', name: 'Merchant Shopify', role: 'Moda — ES' },
    midCta: { title: '¿Listo para el plazo UE del 19 de junio de 2026?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'La capa self-service preparada para la UE tras el checkout.', body: 'Compliance-first, extensible a returns y exchanges. Una app — sin caos.' },
  },

  pl: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Zwroty, Wymiany & Odstąpienie UE dla Shopify',
      badge: 'Termin UE 19 czerwca 2026',
      headline: 'Jeden przycisk odstąpienia. Pełna kontrola nad resztą.',
      sub: 'ReturnControlPRO to warstwa self-service gotowa na UE dla wszystkiego, co może pójść nie tak po checkout: prawne odstąpienie, anulowanie lub edycja przed wysyłką, wymiana lub zwrot po dostawie.',
      trustLine: 'Compliance-first · Bez obowiązkowego logowania · Hosting UE · Stworzone przez przedsiębiorców e-commerce',
    },
    stats: [
      { value: '19 cze', label: 'Termin przycisku odstąpienia' },
      { value: '1', label: 'Punkt wejścia klienta' },
      { value: '24 mies', label: 'Retencja audit log' },
      { value: 'NL/DE/EN', label: 'Języki od dnia pierwszego' },
    ],
    problemSolutions: {
      title: 'Brzmi znajomo?',
      intro: 'Od 19 czerwca 2026 każdy sklep B2C potrzebuje przycisku odstąpienia. Ale sam przycisk nie rozwiązuje chaosu zwrotów.',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
      pairs: [
        { problem: { title: 'Termin UE bez planu', text: 'Przycisk z dwuetapowym potwierdzeniem, audit log i bez obowiązkowego konta.' }, solution: { title: 'MVP compliance gotowy', text: 'Blok theme, formularz hostowany, email potwierdzający i pełny audit log.' } },
        { problem: { title: 'Support zalany', text: 'E-maile o rozmiarach, adresach i anulowaniach — często za późno.' }, solution: { title: 'Self-service przed i po wysyłce', text: 'Anulowanie, edycja adresu lub wymiana wariantu, gdy fulfilment na to pozwala.' } },
        { problem: { title: 'Zwroty kosztują', text: 'Każdy refund to utracony przychód.' }, solution: { title: 'Exchange-first & store credit', text: 'Kieruj na wymianę bez blokowania prawnego odstąpienia.' } },
        { problem: { title: 'Brak dowodu w sporze', text: 'Niemożliwe udowodnienie kiedy klient odstąpił.' }, solution: { title: 'Ścieżka audytu', text: 'Data, czas, treść i audit_hash — export CSV, 24 miesiące.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO w akcji',
      intro: 'Od storefront do admin — jeden flow, wiele tras.',
      items: [
        { title: 'Przycisk odstąpienia', text: 'Widoczny w footerze, headerze lub stronie zwrotów.' },
        { title: 'Formularz dwuetapowy', text: 'Numer zamówienia + email — bez obowiązkowego logowania.' },
        { title: 'Inbox merchant & audit', text: 'Wszystkie wnioski w jednym dashboardzie z filtrami.' },
        { title: 'Anuluj & edytuj przed wysyłką', text: 'Adres, wariant lub produkt, gdy fulfilment nie jest zablokowany.' },
        { title: 'Zwrot & wymiana po dostawie', text: 'RMA, powody zwrotu, exchange-first ze sprawdzeniem stocku.' },
        { title: 'Zarządzaj zamówieniem', text: 'Rozszerzenie konta klienta — akcje wg eligibility.' },
      ],
    },
    beforeAfter: {
      title: 'Różnica z ReturnControlPRO',
      intro: 'Od rozproszonych e-maili do kontrolowanej warstwy post-purchase.',
      before: { title: 'Bez ReturnControlPRO', items: ['Brak przycisku — ryzyko kary', 'Support zalany', 'Anulowania za późno', 'Refundy', 'Brak audit log'] },
      after: { title: 'Z ReturnControlPRO', items: ['Przycisk zgodny z UE + audit', 'Klienci sami', 'Detekcja fulfilment-lock', 'Exchange-first', 'Pełna ścieżka audytu'] },
    },
    outcomes: {
      title: 'Co zyskują merchanty',
      intro: 'Nie portal zwrotów — ochrona przychodów z compliance.',
      items: [
        { title: 'Mniej ticketów', text: 'Klienci robią to sami — bez konta i e-maili.' },
        { title: 'Compliance bez stresu', text: 'Odstąpienie z potwierdzeniem i audit log.' },
        { title: 'Ratuj zamówienia', text: 'Zmiany przed wysyłką w konfigurowalnych oknach.' },
        { title: 'Przychód przez wymianę', text: 'Exchange-first — refund zawsze możliwy.' },
      ],
    },
    features: {
      title: 'Wszystko w jednej aplikacji',
      intro: 'Compliance UE, kontrola zamówień i retencja przychodów.',
      groups: [
        { title: 'Compliance UE', subtitle: 'Faza 1', items: ['Przycisk odstąpienia', 'Formularz 2 kroki', 'Matching zamówienia', 'Email potwierdzający', 'Audit log', 'Tagi zamówienia'] },
        { title: 'Post-Purchase Control', subtitle: 'Faza 2', items: ['Anulowanie', 'Edycja adresu/wariantu', 'Fulfilment-lock', 'Konfiguracja per flow', 'Blok order status', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Faza 3–4', items: ['RMA', 'Exchange-first', 'Store credit', 'Etykiety zwrotu', 'Save offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'Jak to działa',
      intro: 'Jedno wejście dla klienta. Aplikacja określa dostępne trasy.',
      steps: [
        { number: '1', title: 'Klient otwiera "Zarządzaj zamówieniem"', text: 'Via footer, konto klienta lub status zamówienia.' },
        { number: '2', title: 'Silnik eligibility', text: 'allowed, request_only lub blocked.' },
        { number: '3', title: 'Klient wybiera', text: 'Odstąpienie, anulowanie, edycja, zwrot lub wymiana.' },
        { number: '4', title: 'Ty kontrolujesz', text: 'Automatycznie lub ręcznie — wszystko logowane.' },
      ],
    },
    security: {
      title: 'Privacy & compliance',
      lead: 'Minimalizacja danych, audit logs i hosting UE.',
      points: [
        { title: 'Hosting UE', text: 'Fly.io Amsterdam — tylko niezbędne dane zamówienia.' },
        { title: 'Audit log', text: 'audit_hash, 24 miesiące, export CSV.' },
        { title: 'Bez dark patterns', text: 'Odstąpienie zawsze dostępne.' },
        { title: 'Webhooks GDPR', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Zweryfikuj copy prawnie — baza techniczna gotowa.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first, potem rozszerzenie.',
      phases: [
        { label: 'Faza 1', title: 'MVP Compliance', items: ['Przycisk + formularz', 'Audit log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Faza 2', title: 'Pre-fulfillment', items: ['Anuluj & edytuj', 'Fulfilment-lock', 'Automations'] },
        { label: 'Faza 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store credit', 'Etykiety'] },
        { label: 'Faza 4', title: 'Retention', items: ['Save offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'Nie szukaliśmy kolejnego portalu zwrotów, ale miejsca na prawne odstąpienie i self-service przed wysyłką.', name: 'Merchant Shopify', role: 'Moda — PL' },
    midCta: { title: 'Gotowy na termin UE 19 czerwca 2026?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'Warstwa self-service gotowa na UE po checkout.', body: 'Compliance-first, rozszerzalna o returns i exchanges. Jedna app — bez chaosu.' },
  },

  cs: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Vrácení, Výměny & EU Odstoupení pro Shopify',
      badge: 'EU termín 19. června 2026',
      headline: 'Jedno tlačítko pro odstoupení. Plná kontrola nad zbytkem.',
      sub: 'ReturnControlPRO je EU-ready self-service vrstva pro vše, co může po checkoutu selhat: právní odstoupení, bezpečné zrušení nebo úprava před odesláním, výměna nebo vrácení po doručení.',
      trustLine: 'Compliance-first · Bez povinného přihlášení · EU hosting · Vytvořeno e-commerce podnikateli',
    },
    stats: [
      { value: '19 čvn', label: 'Termín tlačítka odstoupení' },
      { value: '1', label: 'Vstup zákazníka' },
      { value: '24 měs', label: 'Retence audit log' },
      { value: 'NL/DE/EN', label: 'Jazyky od prvního dne' },
    ],
    problemSolutions: {
      title: 'Zní to povědomě?',
      intro: 'Od 19. června 2026 potřebuje každý B2C obchod tlačítko odstoupení. Ale samotné tlačítko neřeší chaos vrácení.',
      problemLabel: 'Problém',
      solutionLabel: 'Řešení',
      pairs: [
        { problem: { title: 'EU termín bez plánu', text: 'Tlačítko s dvoukrokovým potvrzením, audit log a bez povinného účtu.' }, solution: { title: 'Compliance MVP připraveno', text: 'Theme blok, hostovaný formulář, potvrzovací email a plný audit log.' } },
        { problem: { title: 'Support přetížen', text: 'Emaily o velikostech, adresách a zrušeních — často pozdě.' }, solution: { title: 'Self-service před a po odeslání', text: 'Zrušení, úprava adresy nebo výměna varianty, dokud fulfilment dovolí.' } },
        { problem: { title: 'Vrácení stojí peníze', text: 'Každá refundace je ztracený příjem.' }, solution: { title: 'Exchange-first & store credit', text: 'Směřujte k výměně bez blokování právního odstoupení.' } },
        { problem: { title: 'Žádný důkaz ve sporu', text: 'Nelze prokázat, kdy zákazník odstoupil.' }, solution: { title: 'Audit trail', text: 'Datum, čas, obsah a audit_hash — CSV export, 24 měsíců.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO v akci',
      intro: 'Od storefrontu po admin — jeden flow, více tras.',
      items: [
        { title: 'Tlačítko odstoupení', text: 'Viditelné ve footeru, headeru nebo stránce vrácení.' },
        { title: 'Dvoukrokový formulář', text: 'Číslo objednávky + email — bez povinného přihlášení.' },
        { title: 'Merchant inbox & audit', text: 'Všechny žádosti v jednom dashboardu s filtry.' },
        { title: 'Zrušit & upravit před odesláním', text: 'Adresa, varianta nebo položka, dokud fulfilment není uzamčen.' },
        { title: 'Vrácení & výměna po doručení', text: 'RMA, důvody vrácení, exchange-first s kontrolou skladu.' },
        { title: 'Spravovat objednávku', text: 'Rozšíření zákaznického účtu — akce dle eligibility.' },
      ],
    },
    beforeAfter: {
      title: 'Rozdíl s ReturnControlPRO',
      intro: 'Od roztříštěných emailů ke kontrolované post-purchase vrstvě.',
      before: { title: 'Bez ReturnControlPRO', items: ['Žádné tlačítko — riziko pokuty', 'Přetížený support', 'Pozdní zrušení', 'Refundace', 'Žádný audit log'] },
      after: { title: 'S ReturnControlPRO', items: ['EU-kompatibilní tlačítko + audit', 'Zákazníci sami', 'Detekce fulfilment-lock', 'Exchange-first', 'Plný audit trail'] },
    },
    outcomes: {
      title: 'Co merchanti získají',
      intro: 'Ne portál vrácení — ochránce příjmů s compliance.',
      items: [
        { title: 'Méně ticketů', text: 'Zákazníci to řeší sami — bez účtu a emailů.' },
        { title: 'Compliance bez stresu', text: 'Odstoupení s potvrzením a audit log.' },
        { title: 'Zachraň objednávky', text: 'Úpravy před odesláním v konfigurovatelných oknech.' },
        { title: 'Příjem přes výměnu', text: 'Exchange-first — refundace vždy možná.' },
      ],
    },
    features: {
      title: 'Vše v jedné aplikaci',
      intro: 'EU compliance, kontrola objednávek a retence příjmů.',
      groups: [
        { title: 'EU Compliance', subtitle: 'Fáze 1', items: ['Tlačítko odstoupení', 'Formulář 2 kroky', 'Matching objednávky', 'Potvrzovací email', 'Audit log', 'Tagy objednávky'] },
        { title: 'Post-Purchase Control', subtitle: 'Fáze 2', items: ['Zrušení', 'Úprava adresy/varianty', 'Fulfilment-lock', 'Nastavení per flow', 'Order status blok', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Fáze 3–4', items: ['RMA', 'Exchange-first', 'Store credit', 'Return labels', 'Save offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'Jak to funguje',
      intro: 'Jeden vstup pro zákazníka. Aplikace určí dostupné trasy.',
      steps: [
        { number: '1', title: 'Zákazník otevře "Spravovat objednávku"', text: 'Via footer, zákaznický účet nebo stav objednávky.' },
        { number: '2', title: 'Eligibility engine', text: 'allowed, request_only nebo blocked.' },
        { number: '3', title: 'Zákazník vybere', text: 'Odstoupení, zrušení, úprava, vrácení nebo výměna.' },
        { number: '4', title: 'Vy máte kontrolu', text: 'Automaticky nebo ručně — vše logováno.' },
      ],
    },
    security: {
      title: 'Privacy & compliance',
      lead: 'Minimalizace dat, audit logs a EU hosting.',
      points: [
        { title: 'EU hosting', text: 'Fly.io Amsterdam — pouze nezbytná data objednávky.' },
        { title: 'Audit log', text: 'audit_hash, 24 měsíců, CSV export.' },
        { title: 'Bez dark patterns', text: 'Odstoupení vždy volně přístupné.' },
        { title: 'GDPR webhooks', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Nechte copy právně ověřit — technická základna je připravena.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first, pak rozšíření.',
      phases: [
        { label: 'Fáze 1', title: 'Compliance MVP', items: ['Tlačítko + formulář', 'Audit log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Fáze 2', title: 'Pre-fulfillment', items: ['Zrušit & upravit', 'Fulfilment-lock', 'Automations'] },
        { label: 'Fáze 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store credit', 'Labels'] },
        { label: 'Fáze 4', title: 'Retention', items: ['Save offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'Nehledali jsme další portál vrácení, ale místo pro právní odstoupení a self-service před odesláním.', name: 'Shopify merchant', role: 'Móda — CZ' },
    midCta: { title: 'Připraveni na EU termín 19. června 2026?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'EU-ready self-service vrstva po checkoutu.', body: 'Compliance-first, rozšiřitelná o returns a exchanges. Jedna app — bez chaosu.' },
  },

  sv: {
    title: 'ReturnControlPRO',
    hero: {
      eyebrow: 'Returer, Byten & EU-ångerrätt för Shopify',
      badge: 'EU-deadline 19 juni 2026',
      headline: 'En knapp för ångerrätt. Full kontroll över resten.',
      sub: 'ReturnControlPRO är det EU-redo self-service-lagret för allt som kan gå fel efter checkout: laglig ångerrätt, säker avbokning eller ändring före leverans, och byte eller retur efter leverans.',
      trustLine: 'Compliance-first · Ingen obligatorisk inloggning · EU-hostad · Byggd av e-handelsentreprenörer',
    },
    stats: [
      { value: '19 jun', label: 'EU ångerrättsknapp deadline' },
      { value: '1', label: 'Kundingång' },
      { value: '24 mån', label: 'Audit log-retention' },
      { value: 'NL/DE/EN', label: 'Språk från dag ett' },
    ],
    problemSolutions: {
      title: 'Känner du igen det?',
      intro: 'Från 19 juni 2026 behöver varje B2C-butik en ångerrättsknapp. Men en knapp löser inte returkaoset.',
      problemLabel: 'Problem',
      solutionLabel: 'Lösning',
      pairs: [
        { problem: { title: 'EU-deadline utan plan', text: 'Knapp med tvåstegsbekräftelse, audit log och utan obligatoriskt konto.' }, solution: { title: 'Compliance MVP redo', text: 'Theme block, hostat formulär, bekräftelsemail och full audit log.' } },
        { problem: { title: 'Support överbelastad', text: 'Mail om storlekar, adresser och avbokningar — ofta för sent.' }, solution: { title: 'Self-service före och efter', text: 'Avboka, ändra adress eller byt variant medan fulfilment tillåter.' } },
        { problem: { title: 'Returer kostar', text: 'Varje återbetalning är förlorad intäkt.' }, solution: { title: 'Exchange-first & store credit', text: 'Styr mot byte utan att blockera laglig ångerrätt.' } },
        { problem: { title: 'Inget bevis i tvist', text: 'Omöjligt bevisa när kunden ångrade sig.' }, solution: { title: 'Audit trail', text: 'Datum, tid, innehåll och audit_hash — CSV-export, 24 månader.' } },
      ],
    },
    showcase: {
      title: 'ReturnControlPRO i action',
      intro: 'Från storefront till admin — ett flöde, flera rutter.',
      items: [
        { title: 'Ångerrättsknapp', text: 'Synlig i footer, header eller retursida.' },
        { title: 'Tvåstegsformulär', text: 'Ordernummer + e-post — ingen obligatorisk inloggning.' },
        { title: 'Merchant inbox & audit', text: 'Alla förfrågningar i en dashboard med filter.' },
        { title: 'Avboka & ändra före leverans', text: 'Adress, variant eller artikel medan fulfilment inte är låst.' },
        { title: 'Retur & byte efter leverans', text: 'RMA, returskäl, exchange-first med lagerkontroll.' },
        { title: 'Hantera order', text: 'Customer Account-extension — åtgärder baserat på eligibility.' },
      ],
    },
    beforeAfter: {
      title: 'Skillnaden med ReturnControlPRO',
      intro: 'Från spridda mail till ett kontrollerat post-purchase-lager.',
      before: { title: 'Utan ReturnControlPRO', items: ['Ingen knapp — böterisk', 'Support full av avbokningar', 'För sent avbokade', 'Återbetalningar', 'Ingen audit log'] },
      after: { title: 'Med ReturnControlPRO', items: ['EU-kompatibel knapp + audit', 'Kunder hjälper sig själva', 'Fulfilment-lock-detektering', 'Exchange-first', 'Full audit trail'] },
    },
    outcomes: {
      title: 'Vad merchants vinner',
      intro: 'Inte en returportal — en intäktsbeskyddare med compliance.',
      items: [
        { title: 'Färre supportärenden', text: 'Kunder fixar det själva — utan konto eller mail.' },
        { title: 'Compliance utan stress', text: 'Ångerrätt med bekräftelse och audit log.' },
        { title: 'Rädda ordrar', text: 'Ändringar före leverans inom konfigurerbara tidsfönster.' },
        { title: 'Intäkter via byte', text: 'Exchange-first — återbetalning alltid möjlig.' },
      ],
    },
    features: {
      title: 'Allt i en app',
      intro: 'EU-compliance, orderkontroll och intäktsretention.',
      groups: [
        { title: 'EU Compliance', subtitle: 'Fas 1', items: ['Ångerrättsknapp', 'Tvåstegsformulär', 'Order matching', 'Bekräftelsemail', 'Audit log', 'Order tags'] },
        { title: 'Post-Purchase Control', subtitle: 'Fas 2', items: ['Avbokning', 'Ändra adress/variant', 'Fulfilment-lock', 'Per flöde konfigurerbart', 'Order status block', 'Shopify Flow'] },
        { title: 'Returns & Retention', subtitle: 'Fas 3–4', items: ['RMA', 'Exchange-first', 'Store credit', 'Returetiketter', 'Save offers', 'Automations'] },
      ],
    },
    howItWorks: {
      title: 'Så fungerar det',
      intro: 'En ingång för kunden. Appen bestämmer tillgängliga rutter.',
      steps: [
        { number: '1', title: 'Kund öppnar "Hantera order"', text: 'Via footer, kundkonto eller orderstatus.' },
        { number: '2', title: 'Eligibility-motor', text: 'allowed, request_only eller blocked.' },
        { number: '3', title: 'Kund väljer', text: 'Ångerrätt, avboka, ändra, retur eller byte.' },
        { number: '4', title: 'Du behåller kontrollen', text: 'Automatiskt eller manuellt — allt loggat.' },
      ],
    },
    security: {
      title: 'Privacy & compliance',
      lead: 'Dataminimering, audit logs och EU-hosting.',
      points: [
        { title: 'EU-hostad', text: 'Fly.io Amsterdam — endast nödvändig orderdata.' },
        { title: 'Audit log', text: 'audit_hash, 24 månader, CSV-export.' },
        { title: 'Inga dark patterns', text: 'Ångerrätt alltid fritt tillgänglig.' },
        { title: 'GDPR webhooks', text: 'customers/redact, data_request, shop/redact.' },
      ],
      conclusion: 'Låt copy granskas juridiskt — teknisk grund redo.',
    },
    roadmap: {
      title: 'Roadmap',
      intro: 'Compliance-first, sedan expansion.',
      phases: [
        { label: 'Fas 1', title: 'Compliance MVP', items: ['Knapp + formulär', 'Audit log', 'Dashboard', 'NL/DE/EN'] },
        { label: 'Fas 2', title: 'Pre-fulfillment', items: ['Avboka & ändra', 'Fulfilment-lock', 'Automations'] },
        { label: 'Fas 3', title: 'Returns', items: ['RMA', 'Exchange', 'Store credit', 'Etiketter'] },
        { label: 'Fas 4', title: 'Retention', items: ['Save offers', 'Upsells', 'Analytics'] },
      ],
    },
    testimonial: { placeholder: true, quote: 'Vi letade inte efter ytterligare en returportal, utan en plats för laglig ångerrätt och self-service före leverans.', name: 'Shopify merchant', role: 'Mode — SE' },
    midCta: { title: 'Redo för EU-deadline 19 juni 2026?' },
    finalCta: { title: 'ReturnControlPRO', subtitle: 'Det EU-redo self-service-lagret efter checkout.', body: 'Compliance-first, utbyggbart till returns och exchanges. En app — inget kaos.' },
  },
};

export function getReturnControlProContent(locale: Locale): ReturnControlProContent {
  return content[locale] ?? content.en;
}
