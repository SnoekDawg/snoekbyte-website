import { Metadata } from 'next';
import KarpCorePageClient from './KarpCorePageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'KarpCore — B2B Commerce Platform',
    description:
      'Case study: KarpCore is een productieklaar B2B-handelsplatform met merken als datadimensie. Medusa v2, Next.js 15, Fly.io.',
  };
}

export default function KarpCorePage() {
  return <KarpCorePageClient />;
}
