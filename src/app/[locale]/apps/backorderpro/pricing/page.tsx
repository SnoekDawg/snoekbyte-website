import { redirect } from 'next/navigation';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function BackorderProPricingPage({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}/apps`);
}
