import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

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
    en: 'Services - SnoekByte',
    nl: 'Services - SnoekByte',
    de: 'Services - SnoekByte',
    fr: 'Services - SnoekByte',
    es: 'Servicios - SnoekByte',
    pl: 'Usługi - SnoekByte',
    cs: 'Služby - SnoekByte',
    sv: 'Tjänster - SnoekByte',
  };

  return {
    title: titles[params.locale] || titles.en,
    description: 'Web development, marketing, and app development services from SnoekByte.',
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
