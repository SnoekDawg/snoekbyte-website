import { Metadata } from 'next';
import KarpCorePageClient from './KarpCorePageClient';
import { getKarpCoreContent } from '@/lib/karpcore-content';
import type { Locale } from '@/types';

const locales: Locale[] = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const c = getKarpCoreContent(params.locale);
  const title = `${c.title} — ${c.hero.eyebrow} | SnoekByte`;
  const description = c.hero.sub;
  const url = `/${params.locale}/services/karpcore`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
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
