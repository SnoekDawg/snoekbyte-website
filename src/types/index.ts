export type Locale = 'en' | 'nl';

export interface Translation {
  nav: {
    home: string;
    products: string;
    pricing: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  products: {
    title: string;
    subtitle: string;
    backorderpro: {
      name: string;
      tagline: string;
      description: string;
      features: string[];
      cta: string;
    };
    comingSoon: {
      title: string;
      description: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    plans: {
      name: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
      popular?: boolean;
    }[];
    faq: {
      title: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: {
      title: string;
      description: string;
      cta: string;
    };
    social: {
      title: string;
    };
  };
  footer: {
    tagline: string;
    links: {
      title: string;
      items: { label: string; href: string }[];
    }[];
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

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
