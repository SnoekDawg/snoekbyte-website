export const karpCoreContent = {
  title: 'KarpCore',

  hero: {
    eyebrow: 'Voor groothandels & importeurs met meerdere merken',
    badge: 'Case study · Live in productie',
    headline: 'Al je merken. Eén platform. Elke dealer ziet alleen wat van hem is.',
    sub: 'KarpCore is het B2B-bestelplatform voor groothandels en importeurs met meerdere merken. Eén systeem voor je hele catalogus, voorraad en prijzen — terwijl elke dealer inlogt en uitsluitend zijn merken, zijn inkoopprijzen en zijn voorraad ziet.',
    trustLine: 'Live op een eigen domein · Server-side afgeschermd · Gebouwd op Medusa v2 & Next.js 15',
    badges: ['Live op karpcore.com', 'Medusa v2', 'Next.js 15', 'Fly.io'],
  },

  stats: [
    { value: '1', label: 'Platform voor al je merken' },
    { value: '∞', label: 'Merken & dealers' },
    { value: '100%', label: 'Server-side afgeschermd' },
    { value: 'Live', label: 'Draait in productie' },
  ],

  problemSolutions: {
    title: 'Herken je dit?',
    intro:
      'Groothandels met meerdere merken lopen steeds tegen dezelfde drie muren aan. Zo haalt KarpCore ze weg:',
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

  outcomes: {
    title: 'Wat het je oplevert',
    intro: 'Geen technische features, maar wat het concreet betekent voor je business:',
    items: [
      {
        title: 'Uren minder beheer per week',
        text: 'Eén keer bijwerken in plaats van overal. Je team houdt tijd over voor klanten in plaats van data overtikken.',
      },
      {
        title: 'Geen prijslekken meer',
        text: 'Dealers zien nooit merken of inkoopprijzen die niet voor hen bedoeld zijn. Punt.',
      },
      {
        title: 'Een professionele dealerervaring',
        text: 'Snel bestellen, eigen prijzen, offertes en herhaalorders in een moderne portal — 24/7, zonder dat jij hoeft te schakelen.',
      },
      {
        title: 'Klaar om te groeien',
        text: 'Nieuw merk erbij? Gewoon aanzetten. Nieuwe dealer? Toegang toewijzen. Het platform groeit met je mee, zonder herbouw.',
      },
    ],
  },

  features: {
    title: 'Alles wat een B2B-platform nodig heeft',
    intro: 'Voor je dealers én voor jezelf achter de schermen.',
    dealer: {
      title: 'Voor je dealers',
      subtitle: 'De portal waar ze bestellen',
      items: [
        'Eigen merken & prijzen — ze zien alleen wat voor hun bedrijf is vrijgegeven, met dealerprijs én adviesprijs (RRP) naast elkaar.',
        'Bedrijfsaccounts met meerdere medewerkers — collega\u2019s uitnodigen, met rollen en rechten per persoon.',
        'Offertes aanvragen & onderhandelen — direct in de portal, met berichten, accepteren of afwijzen.',
        'Slim bestellen — bulk toevoegen, quick-add op artikelnummer, merk-totalen en gratis-verzending-drempels.',
        'Razendsnel zoeken met productthumbnails.',
        'Self-service onboarding — nieuwe merktoegang aanvragen vanuit de portal.',
      ],
    },
    operator: {
      title: 'Voor jou (admin)',
      subtitle: 'De controle achter de schermen',
      items: [
        'Merken aan/uit per bedrijf — met een volledige audit-trail van wie wat mag zien.',
        'Centraal merkbeheer — activeren, deactiveren en assets beheren op één plek.',
        'Dealerprijzen per klantgroep — en RRP-beheer per product.',
        'Offertes & goedkeuringen beheren — volledig vanuit de admin.',
        'Goedkeuringsdrempels — orders boven een bedrag eerst langs een interne fiatteur.',
        'Integraties configureren met connection-test — credentials versleuteld opgeslagen.',
      ],
    },
    integrations: {
      title: 'Koppelt met je systemen',
      subtitle: 'Geen losse eilanden',
      items: [
        'Pay.nl — iDEAL en Europese B2B-betaalmethoden, ingebouwd.',
        'Picqer — live voorraad- en ordersync via webhooks.',
        'Transactionele e-mail — orderbevestigingen en notificaties die altijd aankomen.',
        'Uitbreidbaar — modulair opgezet, dus nieuwe koppelingen zijn geen herbouw.',
      ],
    },
  },

  security: {
    title: 'Waterdicht afgeschermd — niet als bijzaak, maar als fundament',
    lead:
      'Bij maatwerk is één vergeten filter genoeg om een dealer andermans prijzen te laten zien. KarpCore is daar vanaf de eerste regel code op gebouwd.',
    points: [
      {
        title: 'Toegang op de server, nooit in de browser',
        text: 'Elke pagina die producten, prijzen of voorraad teruggeeft, controleert eerst op de server of die dealer dat merk überhaupt mag zien. Niet te omzeilen via een slimme URL.',
      },
      {
        title: 'Niets te vertrouwen van buitenaf',
        text: 'Een merk-id uit een link wordt nooit zomaar geaccepteerd — altijd eerst gecheckt tegen de merken die voor dat bedrijf aanstaan.',
      },
      {
        title: 'Alles wordt vastgelegd',
        text: 'Wijzigingen in merktoegang lopen via workflows met een audit-log. Je ziet precies wie wanneer wat kreeg.',
      },
      {
        title: 'Beschermd tegen misbruik',
        text: 'Inlog-endpoints zijn rate-limited tegen brute-force. Credentials staan versleuteld in de database.',
      },
    ],
    conclusion:
      'Het resultaat: een dealer kan principieel niet bij data van merken die niet voor hem aanstaan — ook niet via een omweg.',
    image: '/images/karpcore/dealer-only.png',
    imageAlt: 'Bestellen alleen voor dealers — log in om dealer-prijzen te zien',
    note: '/images/karpcore/dealer-price-note.png',
    noteAlt: 'Neem contact op met je account manager voor dealer-prijzen op dit merk',
  },

  results: {
    title: 'Het resultaat',
    items: [
      'Live op een eigen domein met geldige certificaten (karpcore.com, admin.karpcore.com).',
      'Eén centrale instance bedient álle merken — nul dubbel beheer.',
      'Complete B2B-flow: van merkgebonden catalogus en dealerprijzen tot offertes, goedkeuringen en betaling.',
      'Productieklaar op Fly.io, met geautomatiseerde releases die weigeren te draaien als er iets niet klopt.',
    ],
  },

  underTheHood: {
    title: 'Onder de motorkap',
    intro:
      'Voor wie het technisch wil weten: KarpCore draait op bewezen, moderne technologie — gekozen om schaalbaar, veilig en onderhoudbaar te zijn.',
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
    principles: [
      'Eén instance, merken als data — geen aparte installatie per merk, maar een eerste-klas brand-module.',
      'Web, API en worker netjes gescheiden — achtergrondtaken draaien zonder publieke toegang.',
      'Gebouwd op de officiële B2B-starter, geen harde fork — toekomstige upgrades blijven mogelijk.',
    ],
  },

  faq: {
    title: 'Veelgestelde vragen',
    items: [
      {
        question: 'Kan ik mijn bestaande merken en producten migreren?',
        answer:
          'Ja. We zetten je catalogus, prijzen en dealers over naar één centrale instance. Omdat merken als data worden behandeld, voeg je daarna nieuwe merken simpelweg toe zonder een nieuwe shop op te tuigen.',
      },
      {
        question: 'Kunnen dealers echt alleen hun eigen merken zien?',
        answer:
          'Ja, gegarandeerd. De toegangscontrole wordt op de server afgedwongen bij elke aanvraag — niet in de browser. Een dealer kan niet bij merken die niet voor hem zijn vrijgegeven, ook niet door met de URL te knoeien.',
      },
      {
        question: 'Werkt het met mijn voorraad- en betaalsysteem?',
        answer:
          'Out of the box koppelt KarpCore met Picqer (voorraad/orders) en Pay.nl (iDEAL en Europese betaalmethoden). Het platform is modulair, dus andere systemen koppelen is uitbreiding, geen herbouw.',
      },
      {
        question: 'Hoe lang duurt het om live te gaan?',
        answer:
          'Dat hangt af van je aantal merken, producten en koppelingen. Omdat we bouwen op een bewezen basis met geautomatiseerde deploys, gaat het sneller dan volledig maatwerk. In een kort gesprek schetsen we een realistische planning voor jouw situatie.',
      },
      {
        question: 'Kan het meegroeien als ik merken of dealers toevoeg?',
        answer:
          'Ja. Een nieuw merk zet je aan, een nieuwe dealer wijs je toegang toe. Eén instance bedient al je merken en dealers — de architectuur is hier vanaf het begin op ontworpen.',
      },
      {
        question: 'Wat als ik iets unieks nodig heb?',
        answer:
          'Dat kan. KarpCore is opgebouwd uit losse modules (merken, bedrijven, offertes, goedkeuringen). Maatwerk bouwen we als nette uitbreiding, zonder de upgradebaarheid van het platform op te offeren.',
      },
    ],
  },

  showcase: {
    title: 'Zie KarpCore in actie',
    intro: 'Echte schermen uit het live platform — gebouwd om dealers in seconden te laten bestellen.',
    items: [
      {
        img: '/images/karpcore/variant-picker.png',
        alt: 'Variant kiezen met dealerprijs en adviesprijs',
        title: 'Snel shoppen — direct de juiste variant',
        text: 'Via de add-to-cart op de catalogus kiest je dealer meteen de juiste variant en het aantal. Zijn dealerprijs en de adviesprijs (RRP) staan netjes naast elkaar.',
      },
      {
        img: '/images/karpcore/quick-add-sku.png',
        alt: 'Snel toevoegen op SKU of EAN',
        title: 'Bestellen op SKU of EAN — typen of scannen',
        text: 'Producten toevoegen in seconden op artikelnummer of barcode. Scannen werkt net zo goed. Aantal = aantal pakken; de verpakkingsgrootte wordt automatisch toegepast.',
      },
      {
        img: '/images/karpcore/quick-search.png',
        alt: 'Snelzoeken op naam, SKU of EAN',
        title: 'Snelzoeken op naam, SKU of EAN',
        text: 'Begin te typen en zie meteen de juiste producten met thumbnail — geen eindeloos scrollen door de catalogus.',
      },
      {
        img: '/images/karpcore/cart-quote.png',
        alt: 'Offerte aanvragen, direct afrekenen of cart exporteren',
        title: 'Offerte aanvragen of direct afrekenen',
        text: 'Vanuit het winkelmandje een offerte aanvragen, meteen afrekenen, of de hele mand exporteren als CSV. De dealer kiest zelf de snelste route.',
      },
    ],
  },

  beforeAfter: {
    title: 'Het verschil dat KarpCore maakt',
    intro: 'Van versnipperd en handmatig naar één strak platform.',
    before: {
      title: 'Zonder KarpCore',
      items: [
        'Een aparte webshop per merk, met dubbel beheer',
        'Prijzen en voorraad overal handmatig bijwerken',
        'Dealers zien prijzen die niet voor hen bedoeld zijn',
        'Offertes en goedkeuringen via e-mail en Excel',
        'Nieuw merk = weer een nieuwe shop opzetten',
      ],
    },
    after: {
      title: 'Met KarpCore',
      items: [
        'Eén platform voor al je merken',
        'Eén keer bijwerken, overal meteen correct',
        'Elke dealer ziet exact zijn merken en prijzen',
        'Offertes en goedkeuringen ingebouwd in de portal',
        'Nieuw merk = met één klik aanzetten',
      ],
    },
  },

  process: {
    title: 'Zo leveren we het op',
    intro: 'Van eerste gesprek tot livegang — een duidelijk traject zonder verrassingen.',
    steps: [
      {
        number: '01',
        title: 'Concept & scope',
        text: 'We brengen je merken, dealers, prijsstructuur en koppelingen in kaart en bepalen samen de scope.',
      },
      {
        number: '02',
        title: 'Bouw op bewezen basis',
        text: 'We bouwen op de Medusa v2 B2B-fundering met jouw merken, prijzen en toegangsregels — geen wegwerp-maatwerk.',
      },
      {
        number: '03',
        title: 'Koppelingen & data',
        text: 'Voorraad (Picqer), betalingen (Pay.nl) en je catalogus worden gekoppeld en gemigreerd.',
      },
      {
        number: '04',
        title: 'Livegang & overdracht',
        text: 'Een gecontroleerde, geautomatiseerde release naar productie op je eigen domein — plus uitleg voor je team.',
      },
    ],
  },

  testimonial: {
    placeholder: true,
    quote:
      'Vul hier een klantcitaat in — bijvoorbeeld over hoeveel tijd het platform bespaart, of hoe soepel dealers nu zelf bestellen.',
    name: 'Naam klant',
    role: 'Functie · bedrijf',
  },

  midCta: {
    title: 'Wil je dit voor jouw merken?',
    button: 'Start een live chat',
  },

  cta: {
    title: 'Wil jij ook al je merken onder één dak?',
    subtitle: 'Van concept tot livegang — wij bouwen het mee.',
    body: 'Meerdere merken bundelen, fijnmazige dealer-toegang of een volledige offerte- en goedkeuringsflow: vertel ons je B2B-uitdaging en we laten zien hoe het kan.',
    button: 'Start een live chat',
  },

  liveUrls: [
    { label: 'karpcore.com', href: 'https://karpcore.com' },
    { label: 'admin.karpcore.com', href: 'https://admin.karpcore.com' },
  ],
};
