import { locales } from '@/lib/i18n';
import FeedMapperProPricingClient from './FeedMapperProPricingClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function FeedMapperProPricingPage() {
  return <FeedMapperProPricingClient />;
}
