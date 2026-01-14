import { Metadata } from 'next';
import BackorderProPageClient from './BackorderProPageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BackorderPRO - Automate Your Backorder Policy',
    description: 'Automatically sync supplier inventory feeds with your Shopify products. Smart rules determine backorder availability.',
  };
}

export default function BackorderProPage() {
  return <BackorderProPageClient />;
}
