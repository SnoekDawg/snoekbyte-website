import { locales } from '@/lib/i18n';
import FeedMapperProPageClient from './FeedMapperProPageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function FeedMapperProPage() {
  return <FeedMapperProPageClient />;
}
