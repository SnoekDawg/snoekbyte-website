import { Metadata } from 'next';
import ServiceDetailClient from '../ServiceDetailClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Web Development - SnoekByte',
    description: 'Lightning-fast Shopify & Lightspeed stores built by e-commerce experts.',
  };
}

export default function WebDevelopmentPage() {
  return <ServiceDetailClient serviceId="webdev" />;
}
