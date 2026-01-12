import type { Locale, Translation } from '@/types';

export const locales: Locale[] = ['en', 'nl'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Translation> = {
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
        {
          title: '€10M+ Revenue Generated',
          description: 'Our solutions have helped businesses generate over 10 million euros in revenue through smarter inventory management.',
        },
        {
          title: '10+ Languages Supported',
          description: 'We\'ve built stores on Lightspeed & Shopify in over 10 different languages. True international expertise.',
        },
        {
          title: 'Battle-Tested Daily',
          description: 'We run our own niche webshops where we develop and test our apps. Always up-to-date, always reliable.',
        },
        {
          title: 'Real Entrepreneur Support',
          description: 'Direct support from developers who understand e-commerce. No ticket queues, just real solutions.',
        },
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
          'Multi-language support (EN/NL)',
        ],
        cta: 'View on Shopify App Store',
      },
      comingSoon: {
        title: 'More Apps Coming Soon',
        description: 'We\'re constantly building new solutions based on our own e-commerce experience. Stay tuned for exciting announcements.',
      },
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Currently in Public Beta — completely free while we gather feedback and improve.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      plans: [
        {
          name: 'Public Beta',
          price: 'Free',
          description: 'Full access to all features during our beta period.',
          features: [
            'Unlimited supplier feeds',
            'Unlimited product syncs',
            'Full rule engine access',
            'Scheduled auto-sync',
            'Backorder analytics',
            'Email support',
          ],
          cta: 'Join Beta',
          popular: true,
        },
        {
          name: 'Pro (Coming Soon)',
          price: 'TBD',
          description: 'Enhanced features for high-volume stores.',
          features: [
            'Everything in Beta',
            'Priority support',
            'Advanced analytics',
            'API access',
            'Custom integrations',
            'SLA guarantee',
          ],
          cta: 'Get Notified',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'Tailored solutions for large operations.',
          features: [
            'Everything in Pro',
            'Dedicated account manager',
            'Custom development',
            'On-premise option',
            'Training & onboarding',
            'Custom SLA',
          ],
          cta: 'Contact Sales',
        },
      ],
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How long will the beta be free?',
            answer: 'We\'re focused on building the best possible product. The beta will remain free until we\'re confident the app delivers exceptional value. All beta users will receive special pricing when we launch paid plans.',
          },
          {
            question: 'What file formats are supported?',
            answer: 'BackorderPRO supports CSV, XLS, XLSX, and XML files. You can import via direct URL, FTP/SFTP connection, or manual file upload.',
          },
          {
            question: 'How does product matching work?',
            answer: 'Products are matched using SKU or EAN/barcode. The app automatically links your supplier feed data to the correct Shopify products and variants.',
          },
          {
            question: 'Is my data secure?',
            answer: 'Yes. We\'re fully GDPR compliant. We don\'t store any personal customer data — only the product and order information needed for backorder tracking.',
          },
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions about BackorderPRO or want to discuss a custom solution? We\'d love to hear from you.',
      email: {
        title: 'Email Us',
        description: 'For support, partnerships, or general questions.',
        cta: 'Send Email',
      },
      social: {
        title: 'Follow Us',
      },
    },
    footer: {
      tagline: 'Building powerful e-commerce automation tools. By entrepreneurs, for entrepreneurs.',
      links: [
        {
          title: 'Products',
          items: [
            { label: 'BackorderPRO', href: '/en/products' },
            { label: 'Pricing', href: '/en/pricing' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Contact', href: '/en/contact' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: '/en/privacy' },
            { label: 'Terms of Service', href: '/en/terms' },
          ],
        },
      ],
      copyright: '© 2024 SnoekByte. All rights reserved.',
    },
    cta: {
      title: 'Ready to Automate Your Inventory?',
      subtitle: 'Join our public beta and experience the power of automated backorder management. Completely free.',
      button: 'Start Free Beta',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      products: 'Producten',
      pricing: 'Prijzen',
      contact: 'Contact',
    },
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
        {
          title: '€10M+ Omzet Gegenereerd',
          description: 'Onze oplossingen hebben bedrijven geholpen om meer dan 10 miljoen euro omzet te genereren door slimmer voorraadbeheer.',
        },
        {
          title: '10+ Talen Ondersteund',
          description: 'We hebben webshops gebouwd op Lightspeed & Shopify in meer dan 10 verschillende talen. Echte internationale expertise.',
        },
        {
          title: 'Dagelijks Getest',
          description: 'We runnen onze eigen niche webshops waar we onze apps ontwikkelen en testen. Altijd up-to-date, altijd betrouwbaar.',
        },
        {
          title: 'Echte Ondernemer Support',
          description: 'Directe support van developers die e-commerce begrijpen. Geen ticket-wachtrijen, gewoon echte oplossingen.',
        },
      ],
    },
    products: {
      title: 'Onze Producten',
      subtitle: 'Professionele tools gebouwd om echte e-commerce uitdagingen op te lossen.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Automatiseer Je Backorder Beleid met Leveranciersfeeds',
        description: 'BackorderPRO synchroniseert automatisch je leveranciers-voorraadfeeds (CSV, Excel, XML, FTP) met je Shopify producten. Slimme regels bepalen welke producten op backorder verkocht mogen worden — geen handmatig voorraadbeheer meer.',
        features: [
          'Importeer leveranciersfeeds via URL, FTP of upload',
          'Auto-match producten via SKU of EAN barcode',
          'Slimme regel-engine voor backorder beslissingen',
          'Geplande auto-sync (dagelijks, wekelijks, custom)',
          'Backorder omzet tracking & analytics',
          'Meertalige ondersteuning (EN/NL)',
        ],
        cta: 'Bekijk op Shopify App Store',
      },
      comingSoon: {
        title: 'Meer Apps Binnenkort',
        description: 'We bouwen continu nieuwe oplossingen gebaseerd op onze eigen e-commerce ervaring. Blijf op de hoogte voor spannende aankondigingen.',
      },
    },
    pricing: {
      title: 'Eenvoudige, Transparante Prijzen',
      subtitle: 'Momenteel in Publieke Beta — volledig gratis terwijl we feedback verzamelen en verbeteren.',
      monthly: 'Maandelijks',
      yearly: 'Jaarlijks',
      plans: [
        {
          name: 'Publieke Beta',
          price: 'Gratis',
          description: 'Volledige toegang tot alle functies tijdens onze beta periode.',
          features: [
            'Onbeperkte leveranciersfeeds',
            'Onbeperkte product syncs',
            'Volledige regel-engine toegang',
            'Geplande auto-sync',
            'Backorder analytics',
            'Email support',
          ],
          cta: 'Start Beta',
          popular: true,
        },
        {
          name: 'Pro (Binnenkort)',
          price: 'TBD',
          description: 'Uitgebreide functies voor high-volume winkels.',
          features: [
            'Alles in Beta',
            'Prioriteit support',
            'Geavanceerde analytics',
            'API toegang',
            'Custom integraties',
            'SLA garantie',
          ],
          cta: 'Houd Me Op De Hoogte',
        },
        {
          name: 'Enterprise',
          price: 'Op Maat',
          description: 'Maatwerkoplossingen voor grote operaties.',
          features: [
            'Alles in Pro',
            'Toegewijd accountmanager',
            'Custom development',
            'On-premise optie',
            'Training & onboarding',
            'Custom SLA',
          ],
          cta: 'Neem Contact Op',
        },
      ],
      faq: {
        title: 'Veelgestelde Vragen',
        items: [
          {
            question: 'Hoe lang blijft de beta gratis?',
            answer: 'We focussen op het bouwen van het best mogelijke product. De beta blijft gratis totdat we zeker weten dat de app uitzonderlijke waarde levert. Alle beta-gebruikers krijgen speciale prijzen wanneer we betaalde plannen lanceren.',
          },
          {
            question: 'Welke bestandsformaten worden ondersteund?',
            answer: 'BackorderPRO ondersteunt CSV, XLS, XLSX en XML bestanden. Je kunt importeren via directe URL, FTP/SFTP verbinding of handmatige bestandsupload.',
          },
          {
            question: 'Hoe werkt de product matching?',
            answer: 'Producten worden gematcht via SKU of EAN/barcode. De app koppelt automatisch je leveranciersdata aan de juiste Shopify producten en varianten.',
          },
          {
            question: 'Is mijn data veilig?',
            answer: 'Ja. We zijn volledig GDPR-compliant. We slaan geen persoonlijke klantgegevens op — alleen de product- en orderinformatie die nodig is voor backorder tracking.',
          },
        ],
      },
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Heb je vragen over BackorderPRO of wil je een maatwerkoplossing bespreken? We horen graag van je.',
      email: {
        title: 'Email Ons',
        description: 'Voor support, partnerschappen of algemene vragen.',
        cta: 'Stuur Email',
      },
      social: {
        title: 'Volg Ons',
      },
    },
    footer: {
      tagline: 'Bouwen aan krachtige e-commerce automatiseringstools. Door ondernemers, voor ondernemers.',
      links: [
        {
          title: 'Producten',
          items: [
            { label: 'BackorderPRO', href: '/nl/products' },
            { label: 'Prijzen', href: '/nl/pricing' },
          ],
        },
        {
          title: 'Bedrijf',
          items: [
            { label: 'Contact', href: '/nl/contact' },
          ],
        },
        {
          title: 'Juridisch',
          items: [
            { label: 'Privacybeleid', href: '/nl/privacy' },
            { label: 'Algemene Voorwaarden', href: '/nl/terms' },
          ],
        },
      ],
      copyright: '© 2024 SnoekByte. Alle rechten voorbehouden.',
    },
    cta: {
      title: 'Klaar om je Voorraad te Automatiseren?',
      subtitle: 'Doe mee met onze publieke beta en ervaar de kracht van geautomatiseerd backorder beheer. Volledig gratis.',
      button: 'Start Gratis Beta',
    },
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
