import { Metadata } from 'next';
import BackorderProPageClient from './BackorderProPageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BackorderPRO - Automate Delivery, Inventory & Pre-Orders',
    description: 'Sync supplier feeds and let smart rules drive pre-order buttons, delivery messages and Buy Advice across product, cart and checkout.',
  };
}

export default function BackorderProPage() {
  return <BackorderProPageClient />;
}
