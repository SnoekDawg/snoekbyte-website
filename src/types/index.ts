export type Locale = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'pl' | 'cs' | 'sv';

export type PricingFeature = string | { text: string; included: false };

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  yearlyPeriod?: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  trial?: string;
}

export interface Translation {
  nav: {
    home: string;
    apps: string;
    services: string;
    contact: string;
    docs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    badge: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  whatWeDo: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  apps: {
    title: string;
    subtitle: string;
    viewPricing: string;
    viewAppStore: string;
    installNow: string;
    privacyPolicy: string;
    startTrial: string;
    getStarted: string;
    /** Shown on app cards when product pages are temporarily closed */
    internalUseOnly: string;
    comingSoon: { title: string; description: string };
    feedmapperpro: {
      name: string;
      tagline: string;
      shortDescription: string;
      description: string;
      features: string[];
      pricing: {
        title: string;
        subtitle: string;
        monthly: string;
        yearly: string;
        yearlySave: string;
        plans: PricingPlan[];
        faq: { question: string; answer: string }[];
      };
    };
    backorderpro: {
      name: string;
      tagline: string;
      shortDescription: string;
      description: string;
      features: string[];
      pricing: {
        title: string;
        subtitle: string;
        monthly: string;
        yearly: string;
        yearlySave: string;
        plans: PricingPlan[];
        faq: { question: string; answer: string }[];
      };
    };
    returncontrolpro: {
      name: string;
      tagline: string;
      shortDescription: string;
      description: string;
      features: string[];
    };
    invoicerpro: {
      name: string;
      tagline: string;
      shortDescription: string;
      description: string;
      features: string[];
    };
    stockpro: {
      name: string;
      tagline: string;
      shortDescription: string;
      description: string;
      features: string[];
    };
  };
  services: {
    title: string;
    subtitle: string;
    cta: string;
    webdev: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    };
    marketing: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    };
    appdev: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: { title: string; description: string; cta: string };
    social: { title: string };
  };
  footer: {
    tagline: string;
    links: { title: string; items: { label: string; href: string }[] }[];
    copyright: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  liveChat: {
    start: string;
    enterprise: string;
  };
  docs: {
    hubTitle: string;
    hubSubtitle: string;
    hubCta: string;
    breadcrumb: string;
    backToDocs: string;
    articlesLabel: string;
    faqTitle: string;
    searchPlaceholder: string;
    searchNoResults: string;
    searchResults: string;
    inThisArticle: string;
    prev: string;
    next: string;
    lastUpdated: string;
    fallbackNotice: string;
    helpTitle: string;
    helpSubtitle: string;
    categories: {
      'getting-started': string;
      configuration: string;
      preorders: string;
      faq: string;
      general: string;
    };
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
