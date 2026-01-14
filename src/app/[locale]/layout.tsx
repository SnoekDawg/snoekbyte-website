import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const localeNames: Record<string, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'SnoekByte - Powerful Apps for E-commerce Growth',
    description: 'We build smart Shopify applications that help store owners increase revenue, streamline operations, and never miss a sale.',
    ogLocale: 'en_US',
  },
  nl: {
    title: 'SnoekByte - Krachtige Apps voor E-commerce Groei',
    description: 'Wij bouwen slimme Shopify applicaties die webshop eigenaren helpen om omzet te verhogen en nooit een verkoop te missen.',
    ogLocale: 'nl_NL',
  },
  de: {
    title: 'SnoekByte - Leistungsstarke Apps für E-Commerce-Wachstum',
    description: 'Wir entwickeln intelligente Shopify-Anwendungen, die Online-Händlern helfen, den Umsatz zu steigern.',
    ogLocale: 'de_DE',
  },
  fr: {
    title: 'SnoekByte - Applications Puissantes pour la Croissance E-commerce',
    description: 'Nous créons des applications Shopify intelligentes qui aident les propriétaires de boutiques à augmenter leurs revenus.',
    ogLocale: 'fr_FR',
  },
  es: {
    title: 'SnoekByte - Aplicaciones Potentes para el Crecimiento del E-commerce',
    description: 'Creamos aplicaciones Shopify inteligentes que ayudan a los propietarios de tiendas a aumentar sus ingresos.',
    ogLocale: 'es_ES',
  },
  pl: {
    title: 'SnoekByte - Potężne Aplikacje dla Wzrostu E-commerce',
    description: 'Tworzymy inteligentne aplikacje Shopify, które pomagają właścicielom sklepów zwiększyć przychody.',
    ogLocale: 'pl_PL',
  },
  cs: {
    title: 'SnoekByte - Výkonné Aplikace pro Růst E-commerce',
    description: 'Vytváříme chytré Shopify aplikace, které pomáhají majitelům obchodů zvýšit příjmy.',
    ogLocale: 'cs_CZ',
  },
  sv: {
    title: 'SnoekByte - Kraftfulla Appar för E-handelstillväxt',
    description: 'Vi bygger smarta Shopify-applikationer som hjälper butiksägare att öka intäkterna.',
    ogLocale: 'sv_SE',
  },
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const localeData = localeNames[params.locale] || localeNames.en;
  
  return {
    title: {
      template: '%s | SnoekByte',
      default: localeData.title,
    },
    description: localeData.description,
    alternates: {
      canonical: `https://snoekbyte.nl/${params.locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://snoekbyte.nl/${l}`])
      ),
    },
    openGraph: {
      locale: localeData.ogLocale,
      alternateLocale: locales.filter(l => l !== params.locale).map(l => localeNames[l].ogLocale),
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
