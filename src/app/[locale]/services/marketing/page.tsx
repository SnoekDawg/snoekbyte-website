import { Metadata } from 'next';
import ServiceDetailClient from '../ServiceDetailClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing - SnoekByte',
    description: 'AI-powered Google Shopping optimization and feed management.',
  };
}

export default function MarketingPage() {
  return <ServiceDetailClient serviceId="marketing" />;
}
