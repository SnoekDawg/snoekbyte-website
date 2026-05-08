import { Metadata } from 'next';
import BackorderProPricingClient from './BackorderProPricingClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'BackorderPRO Pricing - SnoekByte',
    description: 'One fixed price per month, no transaction fees. Free plan, plus paid tiers from $14/month with 2 months free on annual billing.',
  };
}

export default function BackorderProPricingPage() {
  return <BackorderProPricingClient />;
}
