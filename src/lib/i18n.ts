import type { Locale, Translation } from '@/types';

export const locales: Locale[] = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Translation> = {
  // ENGLISH
  en: {
    nav: { home: 'Home', apps: 'Apps', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'E-commerce Innovation by Entrepreneurs',
      subtitle: 'SnoekByte builds cutting-edge apps and services that help webshops maximize revenue. From automated inventory to AI-powered Google Shopping optimization.',
      cta: 'Discover Our Apps',
      secondaryCta: 'Our Services',
      badge: 'Founded by the Snoek Brothers',
    },
    about: {
      title: 'Who We Are',
      subtitle: 'Dutch entrepreneurs building solutions we use ourselves',
      description: 'SnoekByte is a Dutch company founded by the Snoek brothers. We\'re the entrepreneurs behind one of the largest players in carp fishing, actively selling in 10 countries. For our ambitious plans in a fiercely competitive market, we need to develop innovative solutions to maximize revenue.',
      stats: [
        { value: '€10M+', label: 'Revenue Generated' },
        { value: '10+', label: 'Countries Active' },
        { value: '10+', label: 'Languages Supported' },
        { value: 'Daily', label: 'Battle Tested' },
      ],
    },
    whatWeDo: {
      title: 'What We Build',
      subtitle: 'We develop the tools we need — and share them with you',
      items: [
        { title: 'Backorder Automation', description: 'Never miss a sale. Our apps automatically manage backorder policies based on supplier feeds.', icon: 'package' },
        { title: 'Price Optimization', description: 'Smart pricing software that analyzes competitors and adjusts prices for maximum profit.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Complete AI models that manage Google Shopping feeds to make EVERY product profitable.', icon: 'sparkles' },
        { title: 'High-Speed Webshops', description: 'Like this website or our mega store — we can build lightning-fast experiences for you.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Our Apps',
      subtitle: 'Professional Shopify apps built from real e-commerce experience',
      viewPricing: 'View Pricing',
      viewAppStore: 'Shopify App Store',
      installNow: 'Install Now',
      privacyPolicy: 'Privacy Policy',
      comingSoon: { title: 'More Apps Coming', description: 'We\'re constantly building new solutions. Stay tuned!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automate Your Backorder Policy with Supplier Feeds',
        shortDescription: 'Automatically sync supplier inventory feeds with your Shopify products. Smart rules determine backorder availability.',
        description: 'BackorderPRO automatically syncs your supplier inventory feeds (CSV, Excel, XML, FTP) with your Shopify products. Smart rules determine which products can be sold on backorder — no more manual inventory management.',
        features: [
          'Import supplier feeds via URL, FTP, or file upload',
          'Auto-match products via SKU or EAN barcode',
          'Smart rule engine for backorder decisions',
          'Scheduled auto-sync (daily, weekly, custom)',
          'Backorder revenue tracking & analytics',
          'Multi-language support (8 languages)',
          'GDPR compliant - no customer data stored',
        ],
        pricing: {
          title: 'BackorderPRO Pricing',
          subtitle: 'Currently in Public Beta — completely free',
          plans: [{
            name: 'Public Beta',
            price: 'Free',
            period: '',
            description: 'Full access to all features during our beta period.',
            features: ['Unlimited supplier feeds', 'Unlimited product syncs', 'Full rule engine access', 'Scheduled auto-sync', 'Analytics dashboard', 'Email support within 48h'],
            cta: 'Install Free',
            popular: true,
          }],
          faq: [
            { question: 'How long will the beta be free?', answer: 'The beta remains free until we\'re confident the app delivers exceptional value. We\'ll announce pricing changes well in advance.' },
            { question: 'What file formats are supported?', answer: 'CSV, XLS, XLSX, and XML files. Import via direct URL, FTP/SFTP, or manual upload.' },
            { question: 'How does product matching work?', answer: 'Products are matched using SKU or EAN/barcode. The app automatically links supplier data to Shopify products.' },
            { question: 'Is my data secure?', answer: 'Yes. We\'re fully GDPR compliant and don\'t store any customer data — only product/inventory information.' },
          ],
        },
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Need a custom solution? We\'ve got you covered.',
      cta: 'Get in Touch',
      webdev: {
        name: 'Web Development',
        tagline: 'Lightning-fast Shopify & Lightspeed stores',
        description: 'We build high-performance webshops that convert. From custom Shopify themes to complete Lightspeed implementations. Multi-language, multi-currency, optimized for speed.',
        features: ['Shopify & Lightspeed specialists', 'Multi-language (10+ languages)', 'Performance optimized', 'Custom theme development', 'Migration services', 'Ongoing maintenance'],
      },
      marketing: {
        name: 'Marketing',
        tagline: 'AI-powered Google Shopping optimization',
        description: 'Our proprietary AI models analyze and optimize Google Shopping feeds to make every product profitable. We manage feeds across 10+ countries with proven results.',
        features: ['Google Shopping management', 'AI-powered feed optimization', 'Multi-country campaigns', 'ROI-focused strategy', 'Performance analytics', 'Competitor analysis'],
      },
      appdev: {
        name: 'App Development',
        tagline: 'Custom Shopify & e-commerce apps',
        description: 'Need a custom solution? We build Shopify apps, integrations, and automation tools tailored to your specific business needs.',
        features: ['Custom Shopify apps', 'API integrations', 'Automation workflows', 'Supplier feed connectors', 'ERP/WMS integrations', 'Ongoing support'],
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Interested in our apps or services? Let\'s talk about the possibilities.',
      email: { title: 'Email Us', description: 'For apps, services, or partnerships.', cta: 'Send Email' },
      social: { title: 'Connect' },
    },
    footer: {
      tagline: 'E-commerce innovation by entrepreneurs, for entrepreneurs.',
      links: [],
      copyright: '© 2024 SnoekByte. All rights reserved.',
    },
    cta: {
      title: 'Ready to Grow Your E-commerce?',
      subtitle: 'Discover our affordable apps or contact us for custom services.',
      button: 'Contact Us',
    },
  },

  // DUTCH
  nl: {
    nav: { home: 'Home', apps: 'Apps', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'E-commerce Innovatie door Ondernemers',
      subtitle: 'SnoekByte bouwt innovatieve apps en services die webshops helpen hun omzet te maximaliseren. Van geautomatiseerd voorraadbeheer tot AI-gestuurde Google Shopping optimalisatie.',
      cta: 'Ontdek Onze Apps',
      secondaryCta: 'Onze Services',
      badge: 'Opgericht door de Gebroeders Snoek',
    },
    about: {
      title: 'Wie We Zijn',
      subtitle: 'Nederlandse ondernemers die oplossingen bouwen die we zelf gebruiken',
      description: 'SnoekByte is een Nederlands bedrijf opgericht door de gebroeders Snoek. Wij zijn de ondernemers achter een van de grootste spelers op het gebied van karpervissen, actief in 10 landen. Voor onze ambitieuze plannen in een moordende markt ontwikkelen we innovatieve oplossingen voor maximale omzet.',
      stats: [
        { value: '€10M+', label: 'Omzet Gegenereerd' },
        { value: '10+', label: 'Landen Actief' },
        { value: '10+', label: 'Talen Ondersteund' },
        { value: 'Dagelijks', label: 'Getest' },
      ],
    },
    whatWeDo: {
      title: 'Wat We Bouwen',
      subtitle: 'We ontwikkelen de tools die we zelf nodig hebben — en delen ze met jou',
      items: [
        { title: 'Backorder Automatisering', description: 'Mis nooit een verkoop. Onze apps beheren automatisch backorder beleid op basis van leveranciersfeeds.', icon: 'package' },
        { title: 'Prijs Optimalisatie', description: 'Slimme prijssoftware die concurrenten analyseert en prijzen aanpast voor maximale winst.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Complete AI modellen die Google Shopping feeds beheren om IEDER product winstgevend te maken.', icon: 'sparkles' },
        { title: 'Razendsnelle Webshops', description: 'Zoals deze website of onze mega store — we kunnen het voor je bouwen.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Onze Apps',
      subtitle: 'Professionele Shopify apps gebouwd vanuit echte e-commerce ervaring',
      viewPricing: 'Bekijk Prijzen',
      viewAppStore: 'Shopify App Store',
      installNow: 'Installeer Nu',
      privacyPolicy: 'Privacybeleid',
      comingSoon: { title: 'Meer Apps Binnenkort', description: 'We bouwen continu nieuwe oplossingen. Stay tuned!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatiseer Je Backorder Beleid met Leveranciersfeeds',
        shortDescription: 'Synchroniseer automatisch leveranciersfeeds met je Shopify producten. Slimme regels bepalen backorder beschikbaarheid.',
        description: 'BackorderPRO synchroniseert automatisch je leveranciers-voorraadfeeds (CSV, Excel, XML, FTP) met je Shopify producten. Slimme regels bepalen welke producten op backorder verkocht mogen worden.',
        features: [
          'Importeer leveranciersfeeds via URL, FTP of upload',
          'Auto-match producten via SKU of EAN',
          'Slimme regel-engine voor backorder beslissingen',
          'Geplande auto-sync (dagelijks, wekelijks, custom)',
          'Backorder omzet tracking & analytics',
          'Meertalige ondersteuning (8 talen)',
          'GDPR compliant - geen klantdata opgeslagen',
        ],
        pricing: {
          title: 'BackorderPRO Prijzen',
          subtitle: 'Momenteel in Publieke Beta — volledig gratis',
          plans: [{
            name: 'Publieke Beta',
            price: 'Gratis',
            period: '',
            description: 'Volledige toegang tot alle functies tijdens onze beta periode.',
            features: ['Onbeperkte leveranciersfeeds', 'Onbeperkte product syncs', 'Volledige regel-engine', 'Geplande auto-sync', 'Analytics dashboard', 'Email support binnen 48u'],
            cta: 'Installeer Gratis',
            popular: true,
          }],
          faq: [
            { question: 'Hoe lang blijft de beta gratis?', answer: 'De beta blijft gratis totdat we zeker weten dat de app uitzonderlijke waarde levert. We kondigen prijswijzigingen ruim van tevoren aan.' },
            { question: 'Welke bestandsformaten worden ondersteund?', answer: 'CSV, XLS, XLSX en XML bestanden. Importeer via URL, FTP/SFTP of handmatige upload.' },
            { question: 'Hoe werkt de product matching?', answer: 'Producten worden gematcht via SKU of EAN/barcode. De app koppelt automatisch leveranciersdata aan Shopify producten.' },
            { question: 'Is mijn data veilig?', answer: 'Ja. We zijn volledig GDPR-compliant en slaan geen klantdata op — alleen product/voorraad informatie.' },
          ],
        },
      },
    },
    services: {
      title: 'Onze Services',
      subtitle: 'Een maatwerkoplossing nodig? Wij helpen je verder.',
      cta: 'Neem Contact Op',
      webdev: {
        name: 'Web Development',
        tagline: 'Razendsnelle Shopify & Lightspeed webshops',
        description: 'Wij bouwen high-performance webshops die converteren. Van custom Shopify themes tot complete Lightspeed implementaties. Meertalig, multi-currency, geoptimaliseerd voor snelheid.',
        features: ['Shopify & Lightspeed specialisten', 'Meertalig (10+ talen)', 'Performance geoptimaliseerd', 'Custom theme development', 'Migratie services', 'Doorlopend onderhoud'],
      },
      marketing: {
        name: 'Marketing',
        tagline: 'AI-gestuurde Google Shopping optimalisatie',
        description: 'Onze eigen AI modellen analyseren en optimaliseren Google Shopping feeds om ieder product winstgevend te maken. We beheren feeds in 10+ landen met bewezen resultaten.',
        features: ['Google Shopping beheer', 'AI-gestuurde feed optimalisatie', 'Multi-country campagnes', 'ROI-gerichte strategie', 'Performance analytics', 'Concurrentie analyse'],
      },
      appdev: {
        name: 'App Development',
        tagline: 'Custom Shopify & e-commerce apps',
        description: 'Een maatwerkoplossing nodig? Wij bouwen Shopify apps, integraties en automatiseringstools op maat van jouw specifieke bedrijfsbehoeften.',
        features: ['Custom Shopify apps', 'API integraties', 'Automatisering workflows', 'Leveranciersfeed connectors', 'ERP/WMS integraties', 'Doorlopende support'],
      },
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Interesse in onze apps of services? Laten we de mogelijkheden bespreken.',
      email: { title: 'Email Ons', description: 'Voor apps, services of partnerschappen.', cta: 'Stuur Email' },
      social: { title: 'Connect' },
    },
    footer: {
      tagline: 'E-commerce innovatie door ondernemers, voor ondernemers.',
      links: [],
      copyright: '© 2024 SnoekByte. Alle rechten voorbehouden.',
    },
    cta: {
      title: 'Klaar om Je E-commerce te Laten Groeien?',
      subtitle: 'Ontdek onze gunstig geprijsde apps of neem contact op voor maatwerkservices.',
      button: 'Neem Contact Op',
    },
  },

  // GERMAN
  de: {
    nav: { home: 'Startseite', apps: 'Apps', services: 'Services', contact: 'Kontakt' },
    hero: {
      title: 'E-Commerce Innovation von Unternehmern',
      subtitle: 'SnoekByte entwickelt innovative Apps und Services, die Webshops helfen, ihren Umsatz zu maximieren.',
      cta: 'Unsere Apps Entdecken',
      secondaryCta: 'Unsere Services',
      badge: 'Gegründet von den Snoek Brüdern',
    },
    about: {
      title: 'Wer Wir Sind',
      subtitle: 'Niederländische Unternehmer, die Lösungen bauen, die wir selbst nutzen',
      description: 'SnoekByte ist ein niederländisches Unternehmen, gegründet von den Brüdern Snoek. Wir sind die Unternehmer hinter einem der größten Spieler im Karpfenangeln, aktiv in 10 Ländern.',
      stats: [
        { value: '€10M+', label: 'Umsatz Generiert' },
        { value: '10+', label: 'Länder Aktiv' },
        { value: '10+', label: 'Sprachen' },
        { value: 'Täglich', label: 'Getestet' },
      ],
    },
    whatWeDo: {
      title: 'Was Wir Bauen',
      subtitle: 'Wir entwickeln die Tools, die wir brauchen — und teilen sie mit dir',
      items: [
        { title: 'Nachbestellungs-Automatisierung', description: 'Verpassen Sie nie einen Verkauf. Unsere Apps verwalten automatisch Nachbestellungsrichtlinien.', icon: 'package' },
        { title: 'Preisoptimierung', description: 'Intelligente Preissoftware, die Wettbewerber analysiert und Preise für maximalen Gewinn anpasst.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Komplette KI-Modelle, die Google Shopping Feeds verwalten, um JEDES Produkt profitabel zu machen.', icon: 'sparkles' },
        { title: 'Blitzschnelle Webshops', description: 'Wie diese Website oder unser Mega-Store — wir können es für Sie bauen.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Unsere Apps',
      subtitle: 'Professionelle Shopify-Apps aus echter E-Commerce-Erfahrung',
      viewPricing: 'Preise Ansehen',
      viewAppStore: 'Shopify App Store',
      installNow: 'Jetzt Installieren',
      privacyPolicy: 'Datenschutz',
      comingSoon: { title: 'Weitere Apps Kommen', description: 'Wir bauen ständig neue Lösungen. Bleiben Sie dran!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisieren Sie Ihre Nachbestellungsrichtlinie mit Lieferanten-Feeds',
        shortDescription: 'Synchronisiert automatisch Lieferanten-Feeds mit Ihren Shopify-Produkten.',
        description: 'BackorderPRO synchronisiert automatisch Ihre Lieferanten-Inventar-Feeds mit Ihren Shopify-Produkten.',
        features: ['Lieferanten-Feeds per URL, FTP oder Upload importieren', 'Auto-Match über SKU oder EAN', 'Intelligente Regel-Engine', 'Geplante Auto-Synchronisation', 'Umsatztracking & Analytics', 'Mehrsprachig (8 Sprachen)', 'DSGVO-konform'],
        pricing: {
          title: 'BackorderPRO Preise',
          subtitle: 'Derzeit in öffentlicher Beta — völlig kostenlos',
          plans: [{ name: 'Öffentliche Beta', price: 'Kostenlos', period: '', description: 'Voller Zugang zu allen Funktionen.', features: ['Unbegrenzte Feeds', 'Unbegrenzte Syncs', 'Volle Regel-Engine', 'Auto-Sync', 'Analytics', 'E-Mail-Support'], cta: 'Kostenlos Installieren', popular: true }],
          faq: [{ question: 'Wie lange bleibt die Beta kostenlos?', answer: 'Die Beta bleibt kostenlos, bis wir sicher sind, dass die App außergewöhnlichen Wert liefert.' }, { question: 'Welche Dateiformate werden unterstützt?', answer: 'CSV, XLS, XLSX und XML-Dateien.' }, { question: 'Wie funktioniert das Produkt-Matching?', answer: 'Über SKU oder EAN/Barcode.' }, { question: 'Sind meine Daten sicher?', answer: 'Ja. Wir sind vollständig DSGVO-konform.' }],
        },
      },
    },
    services: {
      title: 'Unsere Services',
      subtitle: 'Brauchen Sie eine maßgeschneiderte Lösung? Wir helfen Ihnen.',
      cta: 'Kontaktieren Sie Uns',
      webdev: { name: 'Web Development', tagline: 'Blitzschnelle Shopify & Lightspeed Shops', description: 'Wir bauen High-Performance-Webshops.', features: ['Shopify & Lightspeed Spezialisten', 'Mehrsprachig', 'Performance-optimiert', 'Custom Themes', 'Migration', 'Wartung'] },
      marketing: { name: 'Marketing', tagline: 'KI-gestützte Google Shopping Optimierung', description: 'Unsere KI-Modelle optimieren Google Shopping Feeds.', features: ['Google Shopping Management', 'KI-Feed-Optimierung', 'Multi-Country', 'ROI-fokussiert', 'Analytics', 'Konkurrenzanalyse'] },
      appdev: { name: 'App Development', tagline: 'Custom Shopify & E-Commerce Apps', description: 'Wir bauen maßgeschneiderte Shopify-Apps.', features: ['Custom Apps', 'API-Integrationen', 'Automatisierung', 'Feed-Connectors', 'ERP/WMS', 'Support'] },
    },
    contact: { title: 'Kontakt', subtitle: 'Interesse an unseren Apps oder Services?', email: { title: 'E-Mail', description: 'Für Apps, Services oder Partnerschaften.', cta: 'E-Mail Senden' }, social: { title: 'Verbinden' } },
    footer: { tagline: 'E-Commerce-Innovation von Unternehmern, für Unternehmer.', links: [], copyright: '© 2024 SnoekByte. Alle Rechte vorbehalten.' },
    cta: { title: 'Bereit für E-Commerce-Wachstum?', subtitle: 'Entdecken Sie unsere Apps oder kontaktieren Sie uns für individuelle Lösungen.', button: 'Kontaktieren' },
  },

  // FRENCH
  fr: {
    nav: { home: 'Accueil', apps: 'Apps', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Innovation E-commerce par des Entrepreneurs',
      subtitle: 'SnoekByte crée des applications et services innovants qui aident les boutiques en ligne à maximiser leurs revenus.',
      cta: 'Découvrir Nos Apps',
      secondaryCta: 'Nos Services',
      badge: 'Fondé par les Frères Snoek',
    },
    about: {
      title: 'Qui Sommes-Nous',
      subtitle: 'Entrepreneurs néerlandais créant des solutions que nous utilisons nous-mêmes',
      description: 'SnoekByte est une entreprise néerlandaise fondée par les frères Snoek. Nous sommes les entrepreneurs derrière l\'un des plus grands acteurs de la pêche à la carpe, actifs dans 10 pays.',
      stats: [{ value: '€10M+', label: 'Revenus Générés' }, { value: '10+', label: 'Pays Actifs' }, { value: '10+', label: 'Langues' }, { value: 'Quotidien', label: 'Testé' }],
    },
    whatWeDo: {
      title: 'Ce Que Nous Construisons',
      subtitle: 'Nous développons les outils dont nous avons besoin — et les partageons avec vous',
      items: [
        { title: 'Automatisation des Précommandes', description: 'Ne manquez jamais une vente. Nos apps gèrent automatiquement les politiques de précommande.', icon: 'package' },
        { title: 'Optimisation des Prix', description: 'Logiciel de tarification intelligent qui analyse la concurrence.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Modèles IA qui gèrent les feeds Google Shopping pour rendre CHAQUE produit rentable.', icon: 'sparkles' },
        { title: 'Boutiques Ultra-Rapides', description: 'Comme ce site ou notre méga-boutique — nous pouvons le construire pour vous.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Nos Apps',
      subtitle: 'Applications Shopify professionnelles issues d\'une vraie expérience e-commerce',
      viewPricing: 'Voir les Prix',
      viewAppStore: 'Shopify App Store',
      installNow: 'Installer',
      privacyPolicy: 'Confidentialité',
      comingSoon: { title: 'Plus d\'Apps Bientôt', description: 'Nous construisons constamment de nouvelles solutions. Restez à l\'écoute!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisez Votre Politique de Précommande',
        shortDescription: 'Synchronise automatiquement les feeds fournisseurs avec vos produits Shopify.',
        description: 'BackorderPRO synchronise automatiquement vos feeds d\'inventaire fournisseurs avec vos produits Shopify.',
        features: ['Import via URL, FTP ou upload', 'Auto-match via SKU ou EAN', 'Moteur de règles intelligent', 'Auto-sync programmée', 'Analytics des revenus', 'Multilingue (8 langues)', 'Conforme RGPD'],
        pricing: {
          title: 'Prix BackorderPRO',
          subtitle: 'Actuellement en Bêta Publique — entièrement gratuit',
          plans: [{ name: 'Bêta Publique', price: 'Gratuit', period: '', description: 'Accès complet à toutes les fonctionnalités.', features: ['Feeds illimités', 'Syncs illimités', 'Moteur de règles complet', 'Auto-sync', 'Analytics', 'Support email'], cta: 'Installer Gratuitement', popular: true }],
          faq: [{ question: 'Combien de temps la bêta sera-t-elle gratuite?', answer: 'La bêta reste gratuite jusqu\'à ce que nous soyons sûrs de la valeur exceptionnelle de l\'app.' }, { question: 'Quels formats sont supportés?', answer: 'CSV, XLS, XLSX et XML.' }, { question: 'Comment fonctionne le matching?', answer: 'Via SKU ou code EAN.' }, { question: 'Mes données sont-elles sécurisées?', answer: 'Oui. Nous sommes conformes au RGPD.' }],
        },
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Besoin d\'une solution sur mesure? Nous sommes là.',
      cta: 'Nous Contacter',
      webdev: { name: 'Développement Web', tagline: 'Boutiques Shopify & Lightspeed ultra-rapides', description: 'Nous créons des boutiques haute performance.', features: ['Spécialistes Shopify & Lightspeed', 'Multilingue', 'Performance optimisée', 'Thèmes custom', 'Migration', 'Maintenance'] },
      marketing: { name: 'Marketing', tagline: 'Optimisation Google Shopping par IA', description: 'Nos modèles IA optimisent les feeds Google Shopping.', features: ['Gestion Google Shopping', 'Optimisation IA', 'Multi-pays', 'ROI-focused', 'Analytics', 'Analyse concurrence'] },
      appdev: { name: 'Développement d\'Apps', tagline: 'Apps Shopify & E-commerce sur mesure', description: 'Nous créons des apps Shopify personnalisées.', features: ['Apps custom', 'Intégrations API', 'Automatisation', 'Connecteurs feeds', 'ERP/WMS', 'Support'] },
    },
    contact: { title: 'Contactez-Nous', subtitle: 'Intéressé par nos apps ou services?', email: { title: 'Email', description: 'Pour apps, services ou partenariats.', cta: 'Envoyer Email' }, social: { title: 'Connexion' } },
    footer: { tagline: 'Innovation e-commerce par des entrepreneurs, pour des entrepreneurs.', links: [], copyright: '© 2024 SnoekByte. Tous droits réservés.' },
    cta: { title: 'Prêt pour la Croissance E-commerce?', subtitle: 'Découvrez nos apps ou contactez-nous pour des solutions personnalisées.', button: 'Nous Contacter' },
  },

  // SPANISH
  es: {
    nav: { home: 'Inicio', apps: 'Apps', services: 'Servicios', contact: 'Contacto' },
    hero: {
      title: 'Innovación E-commerce por Emprendedores',
      subtitle: 'SnoekByte crea apps y servicios innovadores que ayudan a las tiendas online a maximizar sus ingresos.',
      cta: 'Descubrir Apps',
      secondaryCta: 'Nuestros Servicios',
      badge: 'Fundado por los Hermanos Snoek',
    },
    about: {
      title: 'Quiénes Somos',
      subtitle: 'Emprendedores holandeses creando soluciones que usamos nosotros mismos',
      description: 'SnoekByte es una empresa holandesa fundada por los hermanos Snoek. Somos los emprendedores detrás de uno de los mayores actores en la pesca de carpas, activos en 10 países.',
      stats: [{ value: '€10M+', label: 'Ingresos Generados' }, { value: '10+', label: 'Países Activos' }, { value: '10+', label: 'Idiomas' }, { value: 'Diario', label: 'Probado' }],
    },
    whatWeDo: {
      title: 'Lo Que Construimos',
      subtitle: 'Desarrollamos las herramientas que necesitamos — y las compartimos contigo',
      items: [
        { title: 'Automatización de Pedidos', description: 'Nunca pierdas una venta. Nuestras apps gestionan automáticamente políticas de pedidos anticipados.', icon: 'package' },
        { title: 'Optimización de Precios', description: 'Software inteligente que analiza competidores y ajusta precios.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Modelos IA que gestionan feeds de Google Shopping para hacer CADA producto rentable.', icon: 'sparkles' },
        { title: 'Tiendas Ultrarrápidas', description: 'Como este sitio o nuestra mega tienda — podemos construirlo para ti.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Nuestras Apps',
      subtitle: 'Apps Shopify profesionales de experiencia real en e-commerce',
      viewPricing: 'Ver Precios',
      viewAppStore: 'Shopify App Store',
      installNow: 'Instalar Ahora',
      privacyPolicy: 'Privacidad',
      comingSoon: { title: 'Más Apps Pronto', description: 'Constantemente creamos nuevas soluciones. ¡Mantente atento!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatiza Tu Política de Pedidos con Feeds de Proveedores',
        shortDescription: 'Sincroniza automáticamente feeds de proveedores con tus productos Shopify.',
        description: 'BackorderPRO sincroniza automáticamente tus feeds de inventario de proveedores con tus productos Shopify.',
        features: ['Importar feeds vía URL, FTP o subida', 'Auto-coincidencia vía SKU o EAN', 'Motor de reglas inteligente', 'Auto-sync programada', 'Analytics de ingresos', 'Multiidioma (8 idiomas)', 'Cumple RGPD'],
        pricing: {
          title: 'Precios BackorderPRO',
          subtitle: 'Actualmente en Beta Pública — completamente gratis',
          plans: [{ name: 'Beta Pública', price: 'Gratis', period: '', description: 'Acceso completo a todas las funciones.', features: ['Feeds ilimitados', 'Syncs ilimitados', 'Motor de reglas completo', 'Auto-sync', 'Analytics', 'Soporte email'], cta: 'Instalar Gratis', popular: true }],
          faq: [{ question: '¿Cuánto tiempo será gratis la beta?', answer: 'La beta permanece gratis hasta que estemos seguros del valor excepcional.' }, { question: '¿Qué formatos se soportan?', answer: 'CSV, XLS, XLSX y XML.' }, { question: '¿Cómo funciona el matching?', answer: 'Vía SKU o código EAN.' }, { question: '¿Mis datos están seguros?', answer: 'Sí. Cumplimos con RGPD.' }],
        },
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: '¿Necesitas una solución personalizada? Te ayudamos.',
      cta: 'Contactar',
      webdev: { name: 'Desarrollo Web', tagline: 'Tiendas Shopify & Lightspeed ultrarrápidas', description: 'Creamos tiendas de alto rendimiento.', features: ['Especialistas Shopify & Lightspeed', 'Multiidioma', 'Optimizado', 'Temas custom', 'Migración', 'Mantenimiento'] },
      marketing: { name: 'Marketing', tagline: 'Optimización Google Shopping con IA', description: 'Nuestros modelos IA optimizan feeds de Google Shopping.', features: ['Gestión Google Shopping', 'Optimización IA', 'Multi-país', 'ROI-focused', 'Analytics', 'Análisis competencia'] },
      appdev: { name: 'Desarrollo de Apps', tagline: 'Apps Shopify & E-commerce a medida', description: 'Creamos apps Shopify personalizadas.', features: ['Apps custom', 'Integraciones API', 'Automatización', 'Conectores feeds', 'ERP/WMS', 'Soporte'] },
    },
    contact: { title: 'Contacto', subtitle: '¿Interesado en nuestras apps o servicios?', email: { title: 'Email', description: 'Para apps, servicios o partnerships.', cta: 'Enviar Email' }, social: { title: 'Conectar' } },
    footer: { tagline: 'Innovación e-commerce por emprendedores, para emprendedores.', links: [], copyright: '© 2024 SnoekByte. Todos los derechos reservados.' },
    cta: { title: '¿Listo para Crecer tu E-commerce?', subtitle: 'Descubre nuestras apps o contáctanos para soluciones personalizadas.', button: 'Contactar' },
  },

  // POLISH
  pl: {
    nav: { home: 'Strona Główna', apps: 'Aplikacje', services: 'Usługi', contact: 'Kontakt' },
    hero: {
      title: 'Innowacje E-commerce od Przedsiębiorców',
      subtitle: 'SnoekByte tworzy innowacyjne aplikacje i usługi, które pomagają sklepom internetowym maksymalizować przychody.',
      cta: 'Odkryj Nasze Aplikacje',
      secondaryCta: 'Nasze Usługi',
      badge: 'Założone przez Braci Snoek',
    },
    about: {
      title: 'Kim Jesteśmy',
      subtitle: 'Holenderscy przedsiębiorcy tworzący rozwiązania, których sami używamy',
      description: 'SnoekByte to holenderska firma założona przez braci Snoek. Jesteśmy przedsiębiorcami stojącymi za jednym z największych graczy w wędkarstwie karpiowym, działającymi w 10 krajach.',
      stats: [{ value: '€10M+', label: 'Przychody' }, { value: '10+', label: 'Krajów' }, { value: '10+', label: 'Języków' }, { value: 'Codziennie', label: 'Testowane' }],
    },
    whatWeDo: {
      title: 'Co Budujemy',
      subtitle: 'Rozwijamy narzędzia, których potrzebujemy — i dzielimy się nimi z tobą',
      items: [
        { title: 'Automatyzacja Zamówień', description: 'Nigdy nie trać sprzedaży. Nasze aplikacje automatycznie zarządzają polityką zamówień.', icon: 'package' },
        { title: 'Optymalizacja Cen', description: 'Inteligentne oprogramowanie analizujące konkurencję.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'Modele AI zarządzające feedami Google Shopping, by każdy produkt był zyskowny.', icon: 'sparkles' },
        { title: 'Błyskawiczne Sklepy', description: 'Jak ta strona lub nasz mega sklep — możemy to dla ciebie zbudować.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Nasze Aplikacje',
      subtitle: 'Profesjonalne aplikacje Shopify z prawdziwego doświadczenia e-commerce',
      viewPricing: 'Zobacz Ceny',
      viewAppStore: 'Shopify App Store',
      installNow: 'Zainstaluj Teraz',
      privacyPolicy: 'Prywatność',
      comingSoon: { title: 'Więcej Aplikacji Wkrótce', description: 'Ciągle tworzymy nowe rozwiązania. Bądź na bieżąco!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatyzuj Politykę Zamówień z Feedami Dostawców',
        shortDescription: 'Automatycznie synchronizuje feedy dostawców z produktami Shopify.',
        description: 'BackorderPRO automatycznie synchronizuje feedy magazynowe dostawców z produktami Shopify.',
        features: ['Import feedów przez URL, FTP lub upload', 'Auto-dopasowanie przez SKU lub EAN', 'Inteligentny silnik reguł', 'Zaplanowana auto-sync', 'Analytics przychodów', 'Wielojęzyczny (8 języków)', 'Zgodny z RODO'],
        pricing: {
          title: 'Ceny BackorderPRO',
          subtitle: 'Obecnie w Publicznej Becie — całkowicie za darmo',
          plans: [{ name: 'Publiczna Beta', price: 'Za Darmo', period: '', description: 'Pełny dostęp do wszystkich funkcji.', features: ['Nieograniczone feedy', 'Nieograniczone syncy', 'Pełny silnik reguł', 'Auto-sync', 'Analytics', 'Wsparcie email'], cta: 'Zainstaluj Za Darmo', popular: true }],
          faq: [{ question: 'Jak długo beta będzie darmowa?', answer: 'Beta pozostaje darmowa, dopóki nie będziemy pewni wyjątkowej wartości.' }, { question: 'Jakie formaty są obsługiwane?', answer: 'CSV, XLS, XLSX i XML.' }, { question: 'Jak działa dopasowywanie?', answer: 'Przez SKU lub kod EAN.' }, { question: 'Czy moje dane są bezpieczne?', answer: 'Tak. Jesteśmy zgodni z RODO.' }],
        },
      },
    },
    services: {
      title: 'Nasze Usługi',
      subtitle: 'Potrzebujesz rozwiązania na miarę? Pomożemy.',
      cta: 'Skontaktuj się',
      webdev: { name: 'Web Development', tagline: 'Błyskawiczne sklepy Shopify & Lightspeed', description: 'Budujemy sklepy wysokiej wydajności.', features: ['Specjaliści Shopify & Lightspeed', 'Wielojęzyczny', 'Zoptymalizowany', 'Custom themes', 'Migracja', 'Utrzymanie'] },
      marketing: { name: 'Marketing', tagline: 'Optymalizacja Google Shopping przez AI', description: 'Nasze modele AI optymalizują feedy Google Shopping.', features: ['Zarządzanie Google Shopping', 'Optymalizacja AI', 'Multi-kraj', 'ROI-focused', 'Analytics', 'Analiza konkurencji'] },
      appdev: { name: 'App Development', tagline: 'Custom Shopify & E-commerce apps', description: 'Tworzymy niestandardowe aplikacje Shopify.', features: ['Custom apps', 'Integracje API', 'Automatyzacja', 'Konektory feedów', 'ERP/WMS', 'Wsparcie'] },
    },
    contact: { title: 'Kontakt', subtitle: 'Zainteresowany naszymi aplikacjami lub usługami?', email: { title: 'Email', description: 'Dla aplikacji, usług lub partnerstw.', cta: 'Wyślij Email' }, social: { title: 'Połącz' } },
    footer: { tagline: 'Innowacje e-commerce od przedsiębiorców, dla przedsiębiorców.', links: [], copyright: '© 2024 SnoekByte. Wszelkie prawa zastrzeżone.' },
    cta: { title: 'Gotowy na Wzrost E-commerce?', subtitle: 'Odkryj nasze aplikacje lub skontaktuj się w sprawie rozwiązań na miarę.', button: 'Kontakt' },
  },

  // CZECH
  cs: {
    nav: { home: 'Domů', apps: 'Aplikace', services: 'Služby', contact: 'Kontakt' },
    hero: {
      title: 'E-commerce Inovace od Podnikatelů',
      subtitle: 'SnoekByte vytváří inovativní aplikace a služby, které pomáhají e-shopům maximalizovat příjmy.',
      cta: 'Objevte Naše Aplikace',
      secondaryCta: 'Naše Služby',
      badge: 'Založeno Bratry Snoekovými',
    },
    about: {
      title: 'Kdo Jsme',
      subtitle: 'Nizozemští podnikatelé vytvářející řešení, která sami používáme',
      description: 'SnoekByte je nizozemská společnost založená bratry Snoekovými. Jsme podnikatelé za jedním z největších hráčů v kaprařském rybolovu, aktivní v 10 zemích.',
      stats: [{ value: '€10M+', label: 'Příjmy' }, { value: '10+', label: 'Zemí' }, { value: '10+', label: 'Jazyků' }, { value: 'Denně', label: 'Testováno' }],
    },
    whatWeDo: {
      title: 'Co Budujeme',
      subtitle: 'Vyvíjíme nástroje, které potřebujeme — a sdílíme je s vámi',
      items: [
        { title: 'Automatizace Předobjednávek', description: 'Nikdy nepřijďte o prodej. Naše aplikace automaticky spravují politiky předobjednávek.', icon: 'package' },
        { title: 'Optimalizace Cen', description: 'Inteligentní software analyzující konkurenci.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'AI modely spravující Google Shopping feeds, aby byl KAŽDÝ produkt ziskový.', icon: 'sparkles' },
        { title: 'Bleskové E-shopy', description: 'Jako tyto stránky nebo náš mega obchod — můžeme to postavit pro vás.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Naše Aplikace',
      subtitle: 'Profesionální Shopify aplikace ze skutečných e-commerce zkušeností',
      viewPricing: 'Zobrazit Ceny',
      viewAppStore: 'Shopify App Store',
      installNow: 'Nainstalovat',
      privacyPolicy: 'Soukromí',
      comingSoon: { title: 'Další Aplikace Brzy', description: 'Neustále vytváříme nová řešení. Sledujte nás!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatizujte Politiku Předobjednávek s Dodavatelskými Feedy',
        shortDescription: 'Automaticky synchronizuje dodavatelské feedy s vašimi Shopify produkty.',
        description: 'BackorderPRO automaticky synchronizuje vaše dodavatelské skladové feedy s vašimi Shopify produkty.',
        features: ['Import feedů přes URL, FTP nebo upload', 'Auto-párování přes SKU nebo EAN', 'Chytrý engine pravidel', 'Plánovaná auto-sync', 'Analytics příjmů', 'Vícejazyčný (8 jazyků)', 'GDPR kompatibilní'],
        pricing: {
          title: 'Ceny BackorderPRO',
          subtitle: 'Aktuálně ve Veřejné Betě — zcela zdarma',
          plans: [{ name: 'Veřejná Beta', price: 'Zdarma', period: '', description: 'Plný přístup ke všem funkcím.', features: ['Neomezené feedy', 'Neomezené syncy', 'Plný engine pravidel', 'Auto-sync', 'Analytics', 'E-mailová podpora'], cta: 'Nainstalovat Zdarma', popular: true }],
          faq: [{ question: 'Jak dlouho bude beta zdarma?', answer: 'Beta zůstane zdarma, dokud nebudeme jisti výjimečnou hodnotou.' }, { question: 'Jaké formáty jsou podporovány?', answer: 'CSV, XLS, XLSX a XML.' }, { question: 'Jak funguje párování?', answer: 'Přes SKU nebo EAN kód.' }, { question: 'Jsou moje data v bezpečí?', answer: 'Ano. Jsme GDPR kompatibilní.' }],
        },
      },
    },
    services: {
      title: 'Naše Služby',
      subtitle: 'Potřebujete řešení na míru? Pomůžeme vám.',
      cta: 'Kontaktujte Nás',
      webdev: { name: 'Web Development', tagline: 'Bleskové Shopify & Lightspeed obchody', description: 'Stavíme vysoce výkonné e-shopy.', features: ['Specialisté Shopify & Lightspeed', 'Vícejazyčný', 'Optimalizovaný', 'Custom themes', 'Migrace', 'Údržba'] },
      marketing: { name: 'Marketing', tagline: 'AI optimalizace Google Shopping', description: 'Naše AI modely optimalizují Google Shopping feedy.', features: ['Správa Google Shopping', 'AI optimalizace', 'Multi-země', 'ROI-focused', 'Analytics', 'Analýza konkurence'] },
      appdev: { name: 'App Development', tagline: 'Custom Shopify & E-commerce aplikace', description: 'Vytváříme vlastní Shopify aplikace.', features: ['Custom apps', 'API integrace', 'Automatizace', 'Feed konektory', 'ERP/WMS', 'Podpora'] },
    },
    contact: { title: 'Kontakt', subtitle: 'Zájem o naše aplikace nebo služby?', email: { title: 'Email', description: 'Pro aplikace, služby nebo partnerství.', cta: 'Poslat Email' }, social: { title: 'Propojit' } },
    footer: { tagline: 'E-commerce inovace od podnikatelů, pro podnikatele.', links: [], copyright: '© 2024 SnoekByte. Všechna práva vyhrazena.' },
    cta: { title: 'Připraveni na E-commerce Růst?', subtitle: 'Objevte naše aplikace nebo nás kontaktujte pro řešení na míru.', button: 'Kontakt' },
  },

  // SWEDISH
  sv: {
    nav: { home: 'Hem', apps: 'Appar', services: 'Tjänster', contact: 'Kontakt' },
    hero: {
      title: 'E-handelsinnovation av Entreprenörer',
      subtitle: 'SnoekByte skapar innovativa appar och tjänster som hjälper webbutiker att maximera intäkterna.',
      cta: 'Upptäck Våra Appar',
      secondaryCta: 'Våra Tjänster',
      badge: 'Grundat av Bröderna Snoek',
    },
    about: {
      title: 'Vilka Vi Är',
      subtitle: 'Nederländska entreprenörer som bygger lösningar vi själva använder',
      description: 'SnoekByte är ett nederländskt företag grundat av bröderna Snoek. Vi är entreprenörerna bakom en av de största aktörerna inom karpfiske, aktiva i 10 länder.',
      stats: [{ value: '€10M+', label: 'Intäkter' }, { value: '10+', label: 'Länder' }, { value: '10+', label: 'Språk' }, { value: 'Dagligen', label: 'Testad' }],
    },
    whatWeDo: {
      title: 'Vad Vi Bygger',
      subtitle: 'Vi utvecklar verktygen vi behöver — och delar dem med dig',
      items: [
        { title: 'Restorderautomatisering', description: 'Missa aldrig en försäljning. Våra appar hanterar automatiskt restorderpolicyer.', icon: 'package' },
        { title: 'Prisoptimering', description: 'Smart prissättningsprogramvara som analyserar konkurrenter.', icon: 'chart' },
        { title: 'Google Feed AI', description: 'AI-modeller som hanterar Google Shopping-flöden för att göra VARJE produkt lönsam.', icon: 'sparkles' },
        { title: 'Blixtsnabba Butiker', description: 'Som denna webbplats eller vår megabutik — vi kan bygga det åt dig.', icon: 'rocket' },
      ],
    },
    apps: {
      title: 'Våra Appar',
      subtitle: 'Professionella Shopify-appar från verklig e-handelserfarenhet',
      viewPricing: 'Se Priser',
      viewAppStore: 'Shopify App Store',
      installNow: 'Installera Nu',
      privacyPolicy: 'Integritet',
      comingSoon: { title: 'Fler Appar Snart', description: 'Vi bygger ständigt nya lösningar. Håll utkik!' },
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisera Din Restorderpolicy med Leverantörsflöden',
        shortDescription: 'Synkroniserar automatiskt leverantörsflöden med dina Shopify-produkter.',
        description: 'BackorderPRO synkroniserar automatiskt dina leverantörers lagerflöden med dina Shopify-produkter.',
        features: ['Importera flöden via URL, FTP eller uppladdning', 'Auto-matchning via SKU eller EAN', 'Smart regelmotor', 'Schemalagd auto-synk', 'Intäktsanalytik', 'Flerspråkig (8 språk)', 'GDPR-kompatibel'],
        pricing: {
          title: 'BackorderPRO Priser',
          subtitle: 'För närvarande i Publik Beta — helt gratis',
          plans: [{ name: 'Publik Beta', price: 'Gratis', period: '', description: 'Full tillgång till alla funktioner.', features: ['Obegränsade flöden', 'Obegränsade synkar', 'Full regelmotor', 'Auto-synk', 'Analytik', 'E-postsupport'], cta: 'Installera Gratis', popular: true }],
          faq: [{ question: 'Hur länge kommer betan vara gratis?', answer: 'Betan förblir gratis tills vi är säkra på det exceptionella värdet.' }, { question: 'Vilka format stöds?', answer: 'CSV, XLS, XLSX och XML.' }, { question: 'Hur fungerar matchningen?', answer: 'Via SKU eller EAN-kod.' }, { question: 'Är min data säker?', answer: 'Ja. Vi är GDPR-kompatibla.' }],
        },
      },
    },
    services: {
      title: 'Våra Tjänster',
      subtitle: 'Behöver du en skräddarsydd lösning? Vi hjälper dig.',
      cta: 'Kontakta Oss',
      webdev: { name: 'Webbutveckling', tagline: 'Blixtsnabba Shopify & Lightspeed butiker', description: 'Vi bygger högpresterande webbutiker.', features: ['Shopify & Lightspeed specialister', 'Flerspråkig', 'Optimerad', 'Custom teman', 'Migration', 'Underhåll'] },
      marketing: { name: 'Marknadsföring', tagline: 'AI-driven Google Shopping-optimering', description: 'Våra AI-modeller optimerar Google Shopping-flöden.', features: ['Google Shopping-hantering', 'AI-optimering', 'Multi-land', 'ROI-fokuserad', 'Analytik', 'Konkurrentanalys'] },
      appdev: { name: 'Apputveckling', tagline: 'Skräddarsydda Shopify & E-handelsappar', description: 'Vi bygger anpassade Shopify-appar.', features: ['Custom appar', 'API-integrationer', 'Automatisering', 'Flödesanslutningar', 'ERP/WMS', 'Support'] },
    },
    contact: { title: 'Kontakt', subtitle: 'Intresserad av våra appar eller tjänster?', email: { title: 'E-post', description: 'För appar, tjänster eller partnerskap.', cta: 'Skicka E-post' }, social: { title: 'Anslut' } },
    footer: { tagline: 'E-handelsinnovation av entreprenörer, för entreprenörer.', links: [], copyright: '© 2024 SnoekByte. Alla rättigheter förbehållna.' },
    cta: { title: 'Redo för E-handelstillväxt?', subtitle: 'Upptäck våra appar eller kontakta oss för skräddarsydda lösningar.', button: 'Kontakta' },
  },
};

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0] as Locale;
  return locales.includes(potentialLocale) ? potentialLocale : defaultLocale;
}
