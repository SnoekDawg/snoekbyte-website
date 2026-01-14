export type Locale = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'pl' | 'cs' | 'sv';

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  yearlyPeriod?: string;
  description: string;
  features: string[];
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
    comingSoon: { title: string; description: string };
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
