import { Metadata } from 'next';
import BackorderProPricingClient from './BackorderProPricingClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BackorderPRO Pricing - SnoekByte',
    description: 'Simple, transparent pricing for BackorderPRO. Currently in public beta — completely free.',
  };
}

export default function BackorderProPricingPage() {
  return <BackorderProPricingClient />;
}
