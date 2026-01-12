import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isNL = params.locale === 'nl';
  
  return {
    title: {
      template: '%s | SnoekByte',
      default: isNL 
        ? 'SnoekByte - Krachtige Apps voor E-commerce Groei'
        : 'SnoekByte - Powerful Apps for E-commerce Growth',
    },
    description: isNL
      ? 'Wij bouwen slimme Shopify applicaties die webshop eigenaren helpen om omzet te verhogen en nooit een verkoop te missen.'
      : 'We build smart Shopify applications that help store owners increase revenue, streamline operations, and never miss a sale.',
    alternates: {
      canonical: `https://snoekbyte.com/${params.locale}`,
      languages: {
        'en': 'https://snoekbyte.com/en',
        'nl': 'https://snoekbyte.com/nl',
      },
    },
    openGraph: {
      locale: isNL ? 'nl_NL' : 'en_US',
      alternateLocale: isNL ? 'en_US' : 'nl_NL',
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
