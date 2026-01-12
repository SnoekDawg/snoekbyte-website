import { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

export async function generateStaticParams() {
  return [
    { locale: 'en', app: 'backorderpro' },
    { locale: 'nl', app: 'backorderpro' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; app: string };
}): Promise<Metadata> {
  const isNL = params.locale === 'nl';
  const appName = params.app === 'backorderpro' ? 'BackorderPRO' : params.app;
  
  return {
    title: isNL ? `Privacybeleid - ${appName}` : `Privacy Policy - ${appName}`,
    description: isNL
      ? `Privacybeleid voor ${appName}. Lees hoe wij omgaan met je gegevens.`
      : `Privacy Policy for ${appName}. Learn how we handle your data.`,
  };
}

export default function PrivacyAppPage() {
  return <PrivacyPageClient />;
}
