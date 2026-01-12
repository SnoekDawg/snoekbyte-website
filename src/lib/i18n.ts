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
      title: 'Powerful Apps for E-commerce Growth',
      subtitle: 'We build smart Shopify applications that help store owners increase revenue, streamline operations, and never miss a sale.',
      cta: 'Explore Products',
      secondaryCta: 'Get in Touch',
    },
    features: {
      title: 'Why Choose SnoekByte?',
      subtitle: 'We combine technical excellence with deep e-commerce expertise to deliver solutions that actually work.',
      items: [
        {
          title: 'Built for Scale',
          description: 'Our apps handle thousands of orders without breaking a sweat. Enterprise-grade reliability for stores of all sizes.',
        },
        {
          title: 'Seamless Integration',
          description: 'One-click installation with your Shopify store. No coding required, no complicated setup processes.',
        },
        {
          title: 'Revenue Focused',
          description: 'Every feature we build is designed to help you capture more sales and grow your business.',
        },
        {
          title: 'Expert Support',
          description: 'Our team of e-commerce specialists is here to help you succeed. Quick responses, real solutions.',
        },
      ],
    },
    products: {
      title: 'Our Products',
      subtitle: 'Powerful tools designed to solve real e-commerce challenges.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Never Lose a Sale to Out-of-Stock',
        description: 'Transform out-of-stock products into revenue opportunities. BackorderPRO automatically enables pre-orders, manages backorders, and keeps your customers informed every step of the way.',
        features: [
          'Automatic pre-order button for out-of-stock items',
          'Real-time inventory synchronization',
          'Automated email notifications to customers',
          'Customizable buttons and messaging',
          'Detailed backorder management dashboard',
          'Revenue recovery analytics',
        ],
        cta: 'View on Shopify App Store',
      },
      comingSoon: {
        title: 'More Apps Coming Soon',
        description: 'We\'re constantly working on new solutions to help your e-commerce business thrive. Stay tuned for exciting announcements.',
      },
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your business. No hidden fees, cancel anytime.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      plans: [
        {
          name: 'Starter',
          price: '$9.99',
          description: 'Perfect for small stores just getting started.',
          features: [
            'Up to 50 backorders/month',
            'Basic email notifications',
            'Standard support',
            'Pre-order button customization',
          ],
          cta: 'Start Free Trial',
        },
        {
          name: 'Professional',
          price: '$29.99',
          description: 'For growing stores with higher volume.',
          features: [
            'Up to 500 backorders/month',
            'Advanced email templates',
            'Priority support',
            'Full customization options',
            'Analytics dashboard',
            'Bulk order management',
          ],
          cta: 'Start Free Trial',
          popular: true,
        },
        {
          name: 'Enterprise',
          price: '$99.99',
          description: 'For high-volume stores with custom needs.',
          features: [
            'Unlimited backorders',
            'Custom email workflows',
            'Dedicated support manager',
            'API access',
            'Advanced analytics',
            'Custom integrations',
            'SLA guarantee',
          ],
          cta: 'Contact Sales',
        },
      ],
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How does the free trial work?',
            answer: 'You get 14 days to try BackorderPRO with full access to all features. No credit card required. Cancel anytime if it\'s not right for you.',
          },
          {
            question: 'Can I change plans later?',
            answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
          },
          {
            question: 'What happens when I exceed my backorder limit?',
            answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or we\'ll queue additional backorders for the next billing cycle.',
          },
          {
            question: 'Do you offer refunds?',
            answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
          },
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      email: {
        title: 'Email Us',
        description: 'For support inquiries, partnerships, or general questions.',
        cta: 'Send Email',
      },
      social: {
        title: 'Follow Us',
      },
    },
    footer: {
      tagline: 'Building powerful e-commerce solutions that help businesses grow.',
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
      title: 'Ready to Grow Your Store?',
      subtitle: 'Join thousands of merchants who trust SnoekByte to power their e-commerce success.',
      button: 'Get Started Today',
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
      title: 'Krachtige Apps voor E-commerce Groei',
      subtitle: 'Wij bouwen slimme Shopify applicaties die webshop eigenaren helpen om omzet te verhogen, operaties te stroomlijnen en nooit een verkoop te missen.',
      cta: 'Bekijk Producten',
      secondaryCta: 'Neem Contact Op',
    },
    features: {
      title: 'Waarom SnoekByte?',
      subtitle: 'Wij combineren technische excellentie met diepgaande e-commerce expertise om oplossingen te leveren die echt werken.',
      items: [
        {
          title: 'Gebouwd voor Schaal',
          description: 'Onze apps verwerken duizenden bestellingen zonder problemen. Enterprise-grade betrouwbaarheid voor winkels van alle groottes.',
        },
        {
          title: 'Naadloze Integratie',
          description: 'Eén-klik installatie met je Shopify winkel. Geen code nodig, geen ingewikkelde setup processen.',
        },
        {
          title: 'Omzet Gericht',
          description: 'Elke functie die we bouwen is ontworpen om je te helpen meer verkopen te realiseren en je bedrijf te laten groeien.',
        },
        {
          title: 'Expert Support',
          description: 'Ons team van e-commerce specialisten staat klaar om je te helpen slagen. Snelle reacties, echte oplossingen.',
        },
      ],
    },
    products: {
      title: 'Onze Producten',
      subtitle: 'Krachtige tools ontworpen om echte e-commerce uitdagingen op te lossen.',
      backorderpro: {
        name: 'BackorderPRO',
        tagline: 'Verlies Nooit Meer een Verkoop door Uitverkocht',
        description: 'Transformeer uitverkochte producten in omzetkansen. BackorderPRO schakelt automatisch pre-orders in, beheert backorders en houdt je klanten op de hoogte van elke stap.',
        features: [
          'Automatische pre-order knop voor uitverkochte items',
          'Real-time voorraad synchronisatie',
          'Automatische email notificaties naar klanten',
          'Aanpasbare knoppen en berichten',
          'Gedetailleerd backorder management dashboard',
          'Omzet recovery analytics',
        ],
        cta: 'Bekijk op Shopify App Store',
      },
      comingSoon: {
        title: 'Meer Apps Binnenkort',
        description: 'We werken continu aan nieuwe oplossingen om je e-commerce bedrijf te laten bloeien. Blijf op de hoogte voor spannende aankondigingen.',
      },
    },
    pricing: {
      title: 'Eenvoudige, Transparante Prijzen',
      subtitle: 'Kies het abonnement dat bij je bedrijf past. Geen verborgen kosten, annuleer wanneer je wilt.',
      monthly: 'Maandelijks',
      yearly: 'Jaarlijks',
      plans: [
        {
          name: 'Starter',
          price: '€9,99',
          description: 'Perfect voor kleine winkels die net beginnen.',
          features: [
            'Tot 50 backorders/maand',
            'Basis email notificaties',
            'Standaard support',
            'Pre-order knop aanpassing',
          ],
          cta: 'Start Gratis Proefperiode',
        },
        {
          name: 'Professional',
          price: '€29,99',
          description: 'Voor groeiende winkels met hoger volume.',
          features: [
            'Tot 500 backorders/maand',
            'Geavanceerde email templates',
            'Prioriteit support',
            'Volledige aanpasopties',
            'Analytics dashboard',
            'Bulk order beheer',
          ],
          cta: 'Start Gratis Proefperiode',
          popular: true,
        },
        {
          name: 'Enterprise',
          price: '€99,99',
          description: 'Voor hoog-volume winkels met custom behoeften.',
          features: [
            'Onbeperkte backorders',
            'Custom email workflows',
            'Toegewijd support manager',
            'API toegang',
            'Geavanceerde analytics',
            'Custom integraties',
            'SLA garantie',
          ],
          cta: 'Neem Contact Op',
        },
      ],
      faq: {
        title: 'Veelgestelde Vragen',
        items: [
          {
            question: 'Hoe werkt de gratis proefperiode?',
            answer: 'Je krijgt 14 dagen om BackorderPRO uit te proberen met volledige toegang tot alle functies. Geen creditcard nodig. Annuleer wanneer je wilt.',
          },
          {
            question: 'Kan ik later van abonnement wisselen?',
            answer: 'Absoluut! Je kunt je abonnement op elk moment upgraden of downgraden. Wijzigingen gaan direct in en we verrekenen eventuele factuuraanpassingen.',
          },
          {
            question: 'Wat gebeurt er als ik mijn backorder limiet overschrijd?',
            answer: 'We sturen je een melding als je de limiet nadert. Je kunt upgraden of we zetten extra backorders in de wachtrij voor de volgende factureringsperiode.',
          },
          {
            question: 'Bieden jullie restitutie aan?',
            answer: 'Ja, we bieden een 30 dagen geld-terug-garantie. Als je niet tevreden bent, neem contact met ons op voor volledige restitutie.',
          },
        ],
      },
    },
    contact: {
      title: 'Neem Contact Op',
      subtitle: 'Heb je vragen? We horen graag van je. Stuur ons een bericht en we reageren zo snel mogelijk.',
      email: {
        title: 'Email Ons',
        description: 'Voor support vragen, partnerschappen of algemene vragen.',
        cta: 'Stuur Email',
      },
      social: {
        title: 'Volg Ons',
      },
    },
    footer: {
      tagline: 'Bouwen aan krachtige e-commerce oplossingen die bedrijven helpen groeien.',
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
      title: 'Klaar om je Winkel te Laten Groeien?',
      subtitle: 'Sluit je aan bij duizenden verkopers die vertrouwen op SnoekByte voor hun e-commerce succes.',
      button: 'Start Vandaag Nog',
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
