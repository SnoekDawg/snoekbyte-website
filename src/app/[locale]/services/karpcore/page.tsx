import { Metadata } from 'next';
import KarpCorePageClient from './KarpCorePageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'KarpCore — B2B-platform voor meerdere merken | SnoekByte';
  const description =
    'Case study: één B2B-bestelplatform voor al je merken. Elke dealer ziet alleen zijn merken, prijzen en voorraad. Wij bouwen jouw B2B-platform van concept tot livegang.';
  return {
    title,
    description,
    alternates: { canonical: '/nl/services/karpcore' },
    openGraph: {
      title,
      description,
      type: 'article',
      url: '/nl/services/karpcore',
      images: ['/images/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.png'],
    },
  };
}

export default function KarpCorePage() {
  return <KarpCorePageClient />;
}
