import { Metadata } from 'next';
import AppsPageClient from './AppsPageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titles: Record<string, string> = {
    en: 'Apps - SnoekByte',
    nl: 'Apps - SnoekByte',
    de: 'Apps - SnoekByte',
    fr: 'Apps - SnoekByte',
    es: 'Apps - SnoekByte',
    pl: 'Aplikacje - SnoekByte',
    cs: 'Aplikace - SnoekByte',
    sv: 'Appar - SnoekByte',
  };

  return {
    title: titles[params.locale] || titles.en,
    description: 'Professional Shopify apps built from real e-commerce experience.',
  };
}

export default function AppsPage() {
  return <AppsPageClient />;
}
