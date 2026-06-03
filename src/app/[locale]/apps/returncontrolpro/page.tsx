import { Metadata } from 'next';
import ReturnControlProPageClient from './ReturnControlProPageClient';
import { getReturnControlProContent } from '@/lib/returncontrolpro-content';
import type { Locale } from '@/types';

const locales: Locale[] = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const c = getReturnControlProContent(params.locale);
  const title = `${c.title} — ${c.hero.eyebrow} | SnoekByte`;
  const description = c.hero.sub;
  const url = `/${params.locale}/apps/returncontrolpro`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'article', url },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function ReturnControlProPage() {
  return <ReturnControlProPageClient />;
}
