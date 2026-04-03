import { redirect } from 'next/navigation';
import { locales } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function FeedMapperProPricingPage({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}/apps`);
}
