import { Metadata } from 'next';
import ServiceDetailClient from '../ServiceDetailClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'App Development - SnoekByte',
    description: 'Custom Shopify apps and e-commerce integrations built to your specifications.',
  };
}

export default function AppDevelopmentPage() {
  return <ServiceDetailClient serviceId="appdev" />;
}
