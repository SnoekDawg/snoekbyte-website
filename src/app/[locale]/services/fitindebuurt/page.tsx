import { Metadata } from 'next';
import FitInDeBuurtPageClient from './FitInDeBuurtPageClient';
import { getFitInDeBuurtContent } from '@/lib/fitindebuurt-content';
import type { Locale } from '@/types';

const locales: Locale[] = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const c = getFitInDeBuurtContent(params.locale);
  const title = `${c.title} — ${c.hero.eyebrow} | SnoekByte`;
  const description = c.hero.sub;
  const url = `/${params.locale}/services/fitindebuurt`;
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

export default function FitInDeBuurtPage() {
  return <FitInDeBuurtPageClient />;
}
