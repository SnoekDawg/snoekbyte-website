import type { Locale, Translation } from '@/types';

export const locales: Locale[] = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Translation> = {
  // ENGLISH
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'Automate Your E-commerce Inventory',
      subtitle: 'We build smart Shopify apps that connect your supplier feeds to your store. Stop managing inventory manually — let automation handle it.',
      cta: 'Explore Products',
      secondaryCta: 'Get in Touch',
    },
    features: {
      title: 'Why Choose SnoekByte?',
      subtitle: 'Built by e-commerce entrepreneurs, for e-commerce entrepreneurs. We run our own niche webshops and develop apps to solve real problems.',
      items: [
        { title: '€10M+ Revenue Generated', description: 'Our solutions have helped businesses generate over 10 million euros in revenue through smarter inventory management.' },
        { title: '10+ Languages Supported', description: 'We\'ve built stores on Lightspeed & Shopify in over 10 different languages. True international expertise.' },
        { title: 'Battle-Tested Daily', description: 'We run our own niche webshops where we develop and test our apps. Always up-to-date, always reliable.' },
        { title: 'Real Entrepreneur Support', description: 'Direct support from developers who understand e-commerce. No ticket queues, just real solutions.' },
      ],
    },
    products: {
      title: 'Our Products',
      subtitle: 'Professional tools built to solve real e-commerce challenges.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automate Your Backorder Policy with Supplier Feeds',
        description: 'BackorderPRO automatically syncs your supplier inventory feeds (CSV, Excel, XML, FTP) with your Shopify products. Smart rules determine which products can be sold on backorder — no more manual inventory management.',
        features: [
          'Import supplier feeds via URL, FTP, or file upload',
          'Auto-match products via SKU or EAN barcode',
          'Smart rule engine for backorder decisions',
          'Scheduled auto-sync (daily, weekly, custom)',
          'Backorder revenue tracking & analytics',
          'Multi-language support',
        ],
        cta: 'View on Shopify App Store',
      },
      comingSoon: { title: 'More Apps Coming Soon', description: 'We\'re constantly building new solutions based on our own e-commerce experience. Stay tuned for exciting announcements.' },
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Currently in Public Beta — completely free while we gather feedback and improve.',
      monthly: 'Monthly', yearly: 'Yearly',
      plans: [{ name: 'Public Beta', price: 'Free', description: 'Full access to all features during our beta period.', features: ['Unlimited supplier feeds', 'Unlimited product syncs', 'Full rule engine access', 'Scheduled auto-sync', 'Backorder analytics', 'Email support'], cta: 'Join Beta', popular: true }],
      faq: { title: 'Frequently Asked Questions', items: [
        { question: 'How long will the beta be free?', answer: 'We\'re focused on building the best possible product. The beta will remain free until we\'re confident the app delivers exceptional value.' },
        { question: 'What file formats are supported?', answer: 'BackorderPRO supports CSV, XLS, XLSX, and XML files. You can import via direct URL, FTP/SFTP connection, or manual file upload.' },
        { question: 'How does product matching work?', answer: 'Products are matched using SKU or EAN/barcode. The app automatically links your supplier feed data to the correct Shopify products.' },
        { question: 'Is my data secure?', answer: 'Yes. We\'re fully GDPR compliant. We don\'t store any personal customer data.' },
      ]},
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions about BackorderPRO or want to discuss a custom solution? We\'d love to hear from you.',
      email: { title: 'Email Us', description: 'For support, partnerships, or general questions.', cta: 'Send Email' },
      social: { title: 'Follow Us' },
    },
    footer: {
      tagline: 'Building powerful e-commerce automation tools. By entrepreneurs, for entrepreneurs.',
      links: [],
      copyright: '© 2024 SnoekByte. All rights reserved.',
    },
    cta: {
      title: 'Ready to Automate Your Inventory?',
      subtitle: 'Join our public beta and experience the power of automated backorder management. Completely free.',
      button: 'Start Free Beta',
    },
  },

  // DUTCH
  nl: {
    nav: { home: 'Home', products: 'Producten', pricing: 'Prijzen', contact: 'Contact' },
    hero: {
      title: 'Automatiseer Je E-commerce Voorraad',
      subtitle: 'Wij bouwen slimme Shopify apps die je leveranciersfeeds koppelen aan je winkel. Stop met handmatig voorraadbeheer — laat automatisering het overnemen.',
      cta: 'Bekijk Producten',
      secondaryCta: 'Neem Contact Op',
    },
    features: {
      title: 'Waarom SnoekByte?',
      subtitle: 'Gebouwd door e-commerce ondernemers, voor e-commerce ondernemers. We runnen onze eigen niche webshops en ontwikkelen apps om echte problemen op te lossen.',
      items: [
        { title: '€10M+ Omzet Gegenereerd', description: 'Onze oplossingen hebben bedrijven geholpen om meer dan 10 miljoen euro omzet te genereren.' },
        { title: '10+ Talen Ondersteund', description: 'We hebben webshops gebouwd op Lightspeed & Shopify in meer dan 10 verschillende talen.' },
        { title: 'Dagelijks Getest', description: 'We runnen onze eigen niche webshops waar we onze apps ontwikkelen en testen.' },
        { title: 'Echte Ondernemer Support', description: 'Directe support van developers die e-commerce begrijpen.' },
      ],
    },
    products: {
      title: 'Onze Producten',
      subtitle: 'Professionele tools gebouwd om echte e-commerce uitdagingen op te lossen.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatiseer Je Backorder Beleid met Leveranciersfeeds',
        description: 'BackorderPRO synchroniseert automatisch je leveranciers-voorraadfeeds (CSV, Excel, XML, FTP) met je Shopify producten. Slimme regels bepalen welke producten op backorder verkocht mogen worden.',
        features: ['Importeer leveranciersfeeds via URL, FTP of upload', 'Auto-match producten via SKU of EAN', 'Slimme regel-engine voor backorder beslissingen', 'Geplande auto-sync (dagelijks, wekelijks)', 'Backorder omzet tracking & analytics', 'Meertalige ondersteuning'],
        cta: 'Bekijk op Shopify App Store',
      },
      comingSoon: { title: 'Meer Apps Binnenkort', description: 'We bouwen continu nieuwe oplossingen gebaseerd op onze eigen e-commerce ervaring.' },
    },
    pricing: {
      title: 'Eenvoudige, Transparante Prijzen',
      subtitle: 'Momenteel in Publieke Beta — volledig gratis terwijl we feedback verzamelen.',
      monthly: 'Maandelijks', yearly: 'Jaarlijks',
      plans: [{ name: 'Publieke Beta', price: 'Gratis', description: 'Volledige toegang tot alle functies tijdens onze beta periode.', features: ['Onbeperkte leveranciersfeeds', 'Onbeperkte product syncs', 'Volledige regel-engine', 'Geplande auto-sync', 'Backorder analytics', 'Email support'], cta: 'Start Beta', popular: true }],
      faq: { title: 'Veelgestelde Vragen', items: [
        { question: 'Hoe lang blijft de beta gratis?', answer: 'We focussen op het bouwen van het best mogelijke product. De beta blijft gratis totdat we zeker weten dat de app uitzonderlijke waarde levert.' },
        { question: 'Welke bestandsformaten worden ondersteund?', answer: 'BackorderPRO ondersteunt CSV, XLS, XLSX en XML bestanden.' },
        { question: 'Hoe werkt de product matching?', answer: 'Producten worden gematcht via SKU of EAN/barcode.' },
        { question: 'Is mijn data veilig?', answer: 'Ja. We zijn volledig GDPR-compliant.' },
      ]},
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Heb je vragen over BackorderPRO of wil je een maatwerkoplossing bespreken?',
      email: { title: 'Email Ons', description: 'Voor support, partnerschappen of algemene vragen.', cta: 'Stuur Email' },
      social: { title: 'Volg Ons' },
    },
    footer: { tagline: 'Bouwen aan krachtige e-commerce automatiseringstools. Door ondernemers, voor ondernemers.', links: [], copyright: '© 2024 SnoekByte. Alle rechten voorbehouden.' },
    cta: { title: 'Klaar om je Voorraad te Automatiseren?', subtitle: 'Doe mee met onze publieke beta en ervaar de kracht van geautomatiseerd backorder beheer. Volledig gratis.', button: 'Start Gratis Beta' },
  },

  // GERMAN
  de: {
    nav: { home: 'Startseite', products: 'Produkte', pricing: 'Preise', contact: 'Kontakt' },
    hero: {
      title: 'Automatisieren Sie Ihr E-Commerce-Inventar',
      subtitle: 'Wir entwickeln intelligente Shopify-Apps, die Ihre Lieferanten-Feeds mit Ihrem Shop verbinden. Schluss mit manueller Bestandsverwaltung.',
      cta: 'Produkte Entdecken',
      secondaryCta: 'Kontakt Aufnehmen',
    },
    features: {
      title: 'Warum SnoekByte?',
      subtitle: 'Von E-Commerce-Unternehmern für E-Commerce-Unternehmer entwickelt. Wir betreiben unsere eigenen Nischen-Webshops.',
      items: [
        { title: '€10M+ Umsatz Generiert', description: 'Unsere Lösungen haben Unternehmen geholfen, über 10 Millionen Euro Umsatz zu generieren.' },
        { title: '10+ Sprachen Unterstützt', description: 'Wir haben Shops auf Lightspeed & Shopify in über 10 verschiedenen Sprachen erstellt.' },
        { title: 'Täglich Getestet', description: 'Wir betreiben unsere eigenen Nischen-Webshops, in denen wir unsere Apps entwickeln und testen.' },
        { title: 'Echter Unternehmer-Support', description: 'Direkter Support von Entwicklern, die E-Commerce verstehen.' },
      ],
    },
    products: {
      title: 'Unsere Produkte',
      subtitle: 'Professionelle Tools für echte E-Commerce-Herausforderungen.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisieren Sie Ihre Nachbestellungsrichtlinie mit Lieferanten-Feeds',
        description: 'BackorderPRO synchronisiert automatisch Ihre Lieferanten-Inventar-Feeds (CSV, Excel, XML, FTP) mit Ihren Shopify-Produkten.',
        features: ['Lieferanten-Feeds per URL, FTP oder Upload importieren', 'Auto-Match Produkte über SKU oder EAN', 'Intelligente Regel-Engine für Nachbestellungsentscheidungen', 'Geplante Auto-Synchronisation', 'Nachbestellungs-Umsatztracking & Analytics', 'Mehrsprachige Unterstützung'],
        cta: 'Im Shopify App Store ansehen',
      },
      comingSoon: { title: 'Weitere Apps in Kürze', description: 'Wir entwickeln ständig neue Lösungen basierend auf unserer eigenen E-Commerce-Erfahrung.' },
    },
    pricing: {
      title: 'Einfache, Transparente Preise',
      subtitle: 'Derzeit in der öffentlichen Beta — völlig kostenlos.',
      monthly: 'Monatlich', yearly: 'Jährlich',
      plans: [{ name: 'Öffentliche Beta', price: 'Kostenlos', description: 'Voller Zugang zu allen Funktionen während unserer Beta-Phase.', features: ['Unbegrenzte Lieferanten-Feeds', 'Unbegrenzte Produkt-Syncs', 'Volle Regel-Engine', 'Geplante Auto-Sync', 'Nachbestellungs-Analytics', 'E-Mail-Support'], cta: 'Beta Starten', popular: true }],
      faq: { title: 'Häufig Gestellte Fragen', items: [
        { question: 'Wie lange bleibt die Beta kostenlos?', answer: 'Wir konzentrieren uns darauf, das bestmögliche Produkt zu bauen. Die Beta bleibt kostenlos.' },
        { question: 'Welche Dateiformate werden unterstützt?', answer: 'BackorderPRO unterstützt CSV, XLS, XLSX und XML-Dateien.' },
        { question: 'Wie funktioniert das Produkt-Matching?', answer: 'Produkte werden über SKU oder EAN/Barcode gematcht.' },
        { question: 'Sind meine Daten sicher?', answer: 'Ja. Wir sind vollständig DSGVO-konform.' },
      ]},
    },
    contact: {
      title: 'Kontakt Aufnehmen',
      subtitle: 'Haben Sie Fragen zu BackorderPRO oder möchten Sie eine maßgeschneiderte Lösung besprechen?',
      email: { title: 'E-Mail Senden', description: 'Für Support, Partnerschaften oder allgemeine Fragen.', cta: 'E-Mail Senden' },
      social: { title: 'Folgen Sie Uns' },
    },
    footer: { tagline: 'Leistungsstarke E-Commerce-Automatisierungstools entwickeln. Von Unternehmern, für Unternehmer.', links: [], copyright: '© 2024 SnoekByte. Alle Rechte vorbehalten.' },
    cta: { title: 'Bereit, Ihr Inventar zu Automatisieren?', subtitle: 'Nehmen Sie an unserer öffentlichen Beta teil und erleben Sie die Kraft der automatisierten Nachbestellungsverwaltung.', button: 'Kostenlose Beta Starten' },
  },

  // FRENCH
  fr: {
    nav: { home: 'Accueil', products: 'Produits', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      title: 'Automatisez Votre Inventaire E-commerce',
      subtitle: 'Nous créons des applications Shopify intelligentes qui connectent vos flux de fournisseurs à votre boutique. Arrêtez de gérer manuellement.',
      cta: 'Explorer les Produits',
      secondaryCta: 'Nous Contacter',
    },
    features: {
      title: 'Pourquoi SnoekByte?',
      subtitle: 'Créé par des entrepreneurs e-commerce, pour des entrepreneurs e-commerce. Nous gérons nos propres boutiques en ligne.',
      items: [
        { title: '€10M+ de Revenus Générés', description: 'Nos solutions ont aidé les entreprises à générer plus de 10 millions d\'euros de revenus.' },
        { title: '10+ Langues Supportées', description: 'Nous avons créé des boutiques sur Lightspeed & Shopify dans plus de 10 langues différentes.' },
        { title: 'Testé Quotidiennement', description: 'Nous gérons nos propres boutiques de niche où nous développons et testons nos applications.' },
        { title: 'Support Entrepreneur Réel', description: 'Support direct de développeurs qui comprennent l\'e-commerce.' },
      ],
    },
    products: {
      title: 'Nos Produits',
      subtitle: 'Des outils professionnels construits pour résoudre de vrais défis e-commerce.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisez Votre Politique de Précommande avec les Flux Fournisseurs',
        description: 'BackorderPRO synchronise automatiquement vos flux d\'inventaire fournisseurs (CSV, Excel, XML, FTP) avec vos produits Shopify.',
        features: ['Importer les flux via URL, FTP ou upload', 'Auto-correspondance via SKU ou EAN', 'Moteur de règles intelligent', 'Auto-sync programmée', 'Suivi des revenus précommande', 'Support multilingue'],
        cta: 'Voir sur Shopify App Store',
      },
      comingSoon: { title: 'Plus d\'Apps Bientôt', description: 'Nous construisons constamment de nouvelles solutions basées sur notre expérience e-commerce.' },
    },
    pricing: {
      title: 'Tarification Simple et Transparente',
      subtitle: 'Actuellement en Bêta Publique — entièrement gratuit.',
      monthly: 'Mensuel', yearly: 'Annuel',
      plans: [{ name: 'Bêta Publique', price: 'Gratuit', description: 'Accès complet à toutes les fonctionnalités pendant notre période bêta.', features: ['Flux fournisseurs illimités', 'Syncs produits illimités', 'Moteur de règles complet', 'Auto-sync programmée', 'Analytics précommande', 'Support email'], cta: 'Rejoindre la Bêta', popular: true }],
      faq: { title: 'Questions Fréquentes', items: [
        { question: 'Combien de temps la bêta sera-t-elle gratuite?', answer: 'Nous nous concentrons sur la création du meilleur produit possible. La bêta restera gratuite.' },
        { question: 'Quels formats de fichiers sont supportés?', answer: 'BackorderPRO supporte les fichiers CSV, XLS, XLSX et XML.' },
        { question: 'Comment fonctionne la correspondance produit?', answer: 'Les produits sont matchés via SKU ou code EAN.' },
        { question: 'Mes données sont-elles sécurisées?', answer: 'Oui. Nous sommes entièrement conformes au RGPD.' },
      ]},
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Des questions sur BackorderPRO ou envie de discuter d\'une solution personnalisée?',
      email: { title: 'Envoyez-nous un Email', description: 'Pour le support, les partenariats ou les questions générales.', cta: 'Envoyer Email' },
      social: { title: 'Suivez-nous' },
    },
    footer: { tagline: 'Construire des outils d\'automatisation e-commerce puissants. Par des entrepreneurs, pour des entrepreneurs.', links: [], copyright: '© 2024 SnoekByte. Tous droits réservés.' },
    cta: { title: 'Prêt à Automatiser Votre Inventaire?', subtitle: 'Rejoignez notre bêta publique et découvrez la puissance de la gestion automatisée des précommandes.', button: 'Commencer la Bêta Gratuite' },
  },

  // SPANISH
  es: {
    nav: { home: 'Inicio', products: 'Productos', pricing: 'Precios', contact: 'Contacto' },
    hero: {
      title: 'Automatiza Tu Inventario E-commerce',
      subtitle: 'Creamos aplicaciones Shopify inteligentes que conectan tus feeds de proveedores con tu tienda. Deja de gestionar el inventario manualmente.',
      cta: 'Explorar Productos',
      secondaryCta: 'Contactar',
    },
    features: {
      title: '¿Por Qué SnoekByte?',
      subtitle: 'Creado por emprendedores de e-commerce, para emprendedores de e-commerce. Gestionamos nuestras propias tiendas online.',
      items: [
        { title: '€10M+ en Ingresos Generados', description: 'Nuestras soluciones han ayudado a empresas a generar más de 10 millones de euros en ingresos.' },
        { title: '10+ Idiomas Soportados', description: 'Hemos creado tiendas en Lightspeed & Shopify en más de 10 idiomas diferentes.' },
        { title: 'Probado Diariamente', description: 'Gestionamos nuestras propias tiendas de nicho donde desarrollamos y probamos nuestras apps.' },
        { title: 'Soporte Real de Emprendedores', description: 'Soporte directo de desarrolladores que entienden el e-commerce.' },
      ],
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Herramientas profesionales construidas para resolver desafíos reales de e-commerce.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatiza Tu Política de Pedidos Anticipados con Feeds de Proveedores',
        description: 'BackorderPRO sincroniza automáticamente tus feeds de inventario de proveedores (CSV, Excel, XML, FTP) con tus productos Shopify.',
        features: ['Importar feeds vía URL, FTP o subida', 'Auto-coincidencia vía SKU o EAN', 'Motor de reglas inteligente', 'Auto-sync programada', 'Seguimiento de ingresos', 'Soporte multiidioma'],
        cta: 'Ver en Shopify App Store',
      },
      comingSoon: { title: 'Más Apps Próximamente', description: 'Estamos constantemente construyendo nuevas soluciones basadas en nuestra experiencia de e-commerce.' },
    },
    pricing: {
      title: 'Precios Simples y Transparentes',
      subtitle: 'Actualmente en Beta Pública — completamente gratis.',
      monthly: 'Mensual', yearly: 'Anual',
      plans: [{ name: 'Beta Pública', price: 'Gratis', description: 'Acceso completo a todas las funciones durante nuestro período beta.', features: ['Feeds de proveedores ilimitados', 'Syncs de productos ilimitados', 'Motor de reglas completo', 'Auto-sync programada', 'Analytics de pedidos', 'Soporte por email'], cta: 'Unirse a la Beta', popular: true }],
      faq: { title: 'Preguntas Frecuentes', items: [
        { question: '¿Cuánto tiempo será gratuita la beta?', answer: 'Nos enfocamos en construir el mejor producto posible. La beta permanecerá gratuita.' },
        { question: '¿Qué formatos de archivo se soportan?', answer: 'BackorderPRO soporta archivos CSV, XLS, XLSX y XML.' },
        { question: '¿Cómo funciona la coincidencia de productos?', answer: 'Los productos se emparejan usando SKU o código EAN.' },
        { question: '¿Mis datos están seguros?', answer: 'Sí. Cumplimos totalmente con el RGPD.' },
      ]},
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Tienes preguntas sobre BackorderPRO o quieres discutir una solución personalizada?',
      email: { title: 'Envíanos un Email', description: 'Para soporte, asociaciones o preguntas generales.', cta: 'Enviar Email' },
      social: { title: 'Síguenos' },
    },
    footer: { tagline: 'Construyendo herramientas de automatización e-commerce potentes. Por emprendedores, para emprendedores.', links: [], copyright: '© 2024 SnoekByte. Todos los derechos reservados.' },
    cta: { title: '¿Listo para Automatizar Tu Inventario?', subtitle: 'Únete a nuestra beta pública y experimenta el poder de la gestión automatizada de pedidos.', button: 'Comenzar Beta Gratis' },
  },

  // POLISH
  pl: {
    nav: { home: 'Strona Główna', products: 'Produkty', pricing: 'Cennik', contact: 'Kontakt' },
    hero: {
      title: 'Zautomatyzuj Swój Magazyn E-commerce',
      subtitle: 'Tworzymy inteligentne aplikacje Shopify, które łączą feedy dostawców z Twoim sklepem. Przestań ręcznie zarządzać zapasami.',
      cta: 'Odkryj Produkty',
      secondaryCta: 'Skontaktuj się',
    },
    features: {
      title: 'Dlaczego SnoekByte?',
      subtitle: 'Stworzone przez przedsiębiorców e-commerce, dla przedsiębiorców e-commerce. Prowadzimy własne sklepy internetowe.',
      items: [
        { title: '€10M+ Wygenerowanych Przychodów', description: 'Nasze rozwiązania pomogły firmom wygenerować ponad 10 milionów euro przychodu.' },
        { title: '10+ Obsługiwanych Języków', description: 'Stworzyliśmy sklepy na Lightspeed & Shopify w ponad 10 różnych językach.' },
        { title: 'Testowane Codziennie', description: 'Prowadzimy własne sklepy niszowe, gdzie rozwijamy i testujemy nasze aplikacje.' },
        { title: 'Prawdziwe Wsparcie', description: 'Bezpośrednie wsparcie od deweloperów, którzy rozumieją e-commerce.' },
      ],
    },
    products: {
      title: 'Nasze Produkty',
      subtitle: 'Profesjonalne narzędzia stworzone do rozwiązywania prawdziwych wyzwań e-commerce.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Zautomatyzuj Politykę Zamówień z Feedami Dostawców',
        description: 'BackorderPRO automatycznie synchronizuje feedy magazynowe dostawców (CSV, Excel, XML, FTP) z produktami Shopify.',
        features: ['Import feedów przez URL, FTP lub upload', 'Auto-dopasowanie przez SKU lub EAN', 'Inteligentny silnik reguł', 'Zaplanowana auto-synchronizacja', 'Śledzenie przychodów', 'Wsparcie wielojęzyczne'],
        cta: 'Zobacz w Shopify App Store',
      },
      comingSoon: { title: 'Więcej Aplikacji Wkrótce', description: 'Ciągle tworzymy nowe rozwiązania oparte na naszym doświadczeniu e-commerce.' },
    },
    pricing: {
      title: 'Proste, Przejrzyste Ceny',
      subtitle: 'Obecnie w Publicznej Becie — całkowicie za darmo.',
      monthly: 'Miesięcznie', yearly: 'Rocznie',
      plans: [{ name: 'Publiczna Beta', price: 'Za Darmo', description: 'Pełny dostęp do wszystkich funkcji podczas naszego okresu beta.', features: ['Nieograniczone feedy dostawców', 'Nieograniczone synchronizacje', 'Pełny silnik reguł', 'Zaplanowana auto-sync', 'Analityka zamówień', 'Wsparcie email'], cta: 'Dołącz do Bety', popular: true }],
      faq: { title: 'Często Zadawane Pytania', items: [
        { question: 'Jak długo beta będzie darmowa?', answer: 'Skupiamy się na budowaniu najlepszego możliwego produktu. Beta pozostanie darmowa.' },
        { question: 'Jakie formaty plików są obsługiwane?', answer: 'BackorderPRO obsługuje pliki CSV, XLS, XLSX i XML.' },
        { question: 'Jak działa dopasowywanie produktów?', answer: 'Produkty są dopasowywane za pomocą SKU lub kodu EAN.' },
        { question: 'Czy moje dane są bezpieczne?', answer: 'Tak. Jesteśmy w pełni zgodni z RODO.' },
      ]},
    },
    contact: {
      title: 'Skontaktuj się z Nami',
      subtitle: 'Masz pytania o BackorderPRO lub chcesz omówić rozwiązanie na zamówienie?',
      email: { title: 'Wyślij Email', description: 'W sprawie wsparcia, partnerstwa lub ogólnych pytań.', cta: 'Wyślij Email' },
      social: { title: 'Śledź Nas' },
    },
    footer: { tagline: 'Budujemy potężne narzędzia automatyzacji e-commerce. Przez przedsiębiorców, dla przedsiębiorców.', links: [], copyright: '© 2024 SnoekByte. Wszelkie prawa zastrzeżone.' },
    cta: { title: 'Gotowy do Automatyzacji Magazynu?', subtitle: 'Dołącz do naszej publicznej bety i doświadcz mocy automatycznego zarządzania zamówieniami.', button: 'Rozpocznij Darmową Betę' },
  },

  // CZECH
  cs: {
    nav: { home: 'Domů', products: 'Produkty', pricing: 'Ceník', contact: 'Kontakt' },
    hero: {
      title: 'Automatizujte Svůj E-commerce Sklad',
      subtitle: 'Vytváříme chytré Shopify aplikace, které propojují vaše dodavatelské feedy s vaším obchodem. Přestaňte ručně spravovat zásoby.',
      cta: 'Prozkoumat Produkty',
      secondaryCta: 'Kontaktujte Nás',
    },
    features: {
      title: 'Proč SnoekByte?',
      subtitle: 'Vytvořeno e-commerce podnikateli pro e-commerce podnikatele. Provozujeme vlastní internetové obchody.',
      items: [
        { title: '€10M+ Generovaných Příjmů', description: 'Naše řešení pomohla firmám vygenerovat přes 10 milionů eur příjmů.' },
        { title: '10+ Podporovaných Jazyků', description: 'Vytvořili jsme obchody na Lightspeed & Shopify ve více než 10 různých jazycích.' },
        { title: 'Testováno Denně', description: 'Provozujeme vlastní specializované obchody, kde vyvíjíme a testujeme naše aplikace.' },
        { title: 'Skutečná Podpora', description: 'Přímá podpora od vývojářů, kteří rozumí e-commerce.' },
      ],
    },
    products: {
      title: 'Naše Produkty',
      subtitle: 'Profesionální nástroje vytvořené pro řešení skutečných e-commerce výzev.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatizujte Politiku Předobjednávek s Dodavatelskými Feedy',
        description: 'BackorderPRO automaticky synchronizuje vaše dodavatelské skladové feedy (CSV, Excel, XML, FTP) s vašimi Shopify produkty.',
        features: ['Import feedů přes URL, FTP nebo upload', 'Auto-párování přes SKU nebo EAN', 'Chytrý engine pravidel', 'Plánovaná auto-synchronizace', 'Sledování příjmů', 'Vícejazyčná podpora'],
        cta: 'Zobrazit na Shopify App Store',
      },
      comingSoon: { title: 'Další Aplikace Brzy', description: 'Neustále vytváříme nová řešení založená na našich e-commerce zkušenostech.' },
    },
    pricing: {
      title: 'Jednoduché, Transparentní Ceny',
      subtitle: 'Aktuálně ve Veřejné Betě — zcela zdarma.',
      monthly: 'Měsíčně', yearly: 'Ročně',
      plans: [{ name: 'Veřejná Beta', price: 'Zdarma', description: 'Plný přístup ke všem funkcím během našeho beta období.', features: ['Neomezené dodavatelské feedy', 'Neomezené synchronizace', 'Plný engine pravidel', 'Plánovaná auto-sync', 'Analytika objednávek', 'E-mailová podpora'], cta: 'Připojit se k Betě', popular: true }],
      faq: { title: 'Často Kladené Otázky', items: [
        { question: 'Jak dlouho bude beta zdarma?', answer: 'Soustředíme se na vytvoření nejlepšího možného produktu. Beta zůstane zdarma.' },
        { question: 'Jaké formáty souborů jsou podporovány?', answer: 'BackorderPRO podporuje soubory CSV, XLS, XLSX a XML.' },
        { question: 'Jak funguje párování produktů?', answer: 'Produkty jsou párovány pomocí SKU nebo EAN kódu.' },
        { question: 'Jsou moje data v bezpečí?', answer: 'Ano. Jsme plně v souladu s GDPR.' },
      ]},
    },
    contact: {
      title: 'Kontaktujte Nás',
      subtitle: 'Máte otázky o BackorderPRO nebo chcete probrat řešení na míru?',
      email: { title: 'Napište nám Email', description: 'Pro podporu, partnerství nebo obecné dotazy.', cta: 'Poslat Email' },
      social: { title: 'Sledujte Nás' },
    },
    footer: { tagline: 'Vytváříme výkonné e-commerce automatizační nástroje. Od podnikatelů, pro podnikatele.', links: [], copyright: '© 2024 SnoekByte. Všechna práva vyhrazena.' },
    cta: { title: 'Připraveni Automatizovat Svůj Sklad?', subtitle: 'Připojte se k naší veřejné betě a zažijte sílu automatizované správy objednávek.', button: 'Začít Zdarma Beta' },
  },

  // SWEDISH
  sv: {
    nav: { home: 'Hem', products: 'Produkter', pricing: 'Priser', contact: 'Kontakt' },
    hero: {
      title: 'Automatisera Ditt E-handels Lager',
      subtitle: 'Vi bygger smarta Shopify-appar som kopplar dina leverantörsflöden till din butik. Sluta hantera lager manuellt.',
      cta: 'Utforska Produkter',
      secondaryCta: 'Kontakta Oss',
    },
    features: {
      title: 'Varför SnoekByte?',
      subtitle: 'Byggt av e-handelsföretagare, för e-handelsföretagare. Vi driver våra egna nischade webbutiker.',
      items: [
        { title: '€10M+ i Genererade Intäkter', description: 'Våra lösningar har hjälpt företag att generera över 10 miljoner euro i intäkter.' },
        { title: '10+ Språk Stöds', description: 'Vi har byggt butiker på Lightspeed & Shopify i över 10 olika språk.' },
        { title: 'Testad Dagligen', description: 'Vi driver våra egna nischbutiker där vi utvecklar och testar våra appar.' },
        { title: 'Riktig Entreprenörssupport', description: 'Direkt support från utvecklare som förstår e-handel.' },
      ],
    },
    products: {
      title: 'Våra Produkter',
      subtitle: 'Professionella verktyg byggda för att lösa verkliga e-handelsutmaningar.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatisera Din Restorderpolicy med Leverantörsflöden',
        description: 'BackorderPRO synkroniserar automatiskt dina leverantörers lagerflöden (CSV, Excel, XML, FTP) med dina Shopify-produkter.',
        features: ['Importera flöden via URL, FTP eller uppladdning', 'Auto-matchning via SKU eller EAN', 'Smart regelmotor', 'Schemalagd auto-synk', 'Intäktsspårning', 'Flerspråksstöd'],
        cta: 'Se på Shopify App Store',
      },
      comingSoon: { title: 'Fler Appar Kommer Snart', description: 'Vi bygger ständigt nya lösningar baserade på vår e-handelserfarenhet.' },
    },
    pricing: {
      title: 'Enkla, Transparenta Priser',
      subtitle: 'För närvarande i Publik Beta — helt gratis.',
      monthly: 'Månadsvis', yearly: 'Årsvis',
      plans: [{ name: 'Publik Beta', price: 'Gratis', description: 'Full tillgång till alla funktioner under vår betaperiod.', features: ['Obegränsade leverantörsflöden', 'Obegränsade produktsynkar', 'Full regelmotor', 'Schemalagd auto-synk', 'Orderanalytik', 'E-postsupport'], cta: 'Gå med i Beta', popular: true }],
      faq: { title: 'Vanliga Frågor', items: [
        { question: 'Hur länge kommer betan vara gratis?', answer: 'Vi fokuserar på att bygga bästa möjliga produkt. Betan förblir gratis.' },
        { question: 'Vilka filformat stöds?', answer: 'BackorderPRO stöder CSV, XLS, XLSX och XML-filer.' },
        { question: 'Hur fungerar produktmatchning?', answer: 'Produkter matchas med SKU eller EAN-kod.' },
        { question: 'Är min data säker?', answer: 'Ja. Vi är helt GDPR-kompatibla.' },
      ]},
    },
    contact: {
      title: 'Kontakta Oss',
      subtitle: 'Har du frågor om BackorderPRO eller vill diskutera en skräddarsydd lösning?',
      email: { title: 'Maila Oss', description: 'För support, partnerskap eller allmänna frågor.', cta: 'Skicka E-post' },
      social: { title: 'Följ Oss' },
    },
    footer: { tagline: 'Bygger kraftfulla e-handelsautomatiseringsverktyg. Av företagare, för företagare.', links: [], copyright: '© 2024 SnoekByte. Alla rättigheter förbehållna.' },
    cta: { title: 'Redo att Automatisera Ditt Lager?', subtitle: 'Gå med i vår publika beta och upplev kraften i automatiserad orderhantering.', button: 'Starta Gratis Beta' },
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
