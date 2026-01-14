import { Metadata } from 'next';
import PrivacyPageClient from './PrivacyPageClient';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];

export async function generateStaticParams() {
  return locales.flatMap((locale) => [
    { locale, app: 'backorderpro' },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; app: string };
}): Promise<Metadata> {
  const appName = params.app === 'backorderpro' ? 'BackorderPRO' : params.app;
  
  const titles: Record<string, string> = {
    en: `Privacy Policy - ${appName}`,
    nl: `Privacybeleid - ${appName}`,
    de: `Datenschutzrichtlinie - ${appName}`,
    fr: `Politique de Confidentialité - ${appName}`,
    es: `Política de Privacidad - ${appName}`,
    pl: `Polityka Prywatności - ${appName}`,
    cs: `Zásady Ochrany Soukromí - ${appName}`,
    sv: `Integritetspolicy - ${appName}`,
  };

  const descriptions: Record<string, string> = {
    en: `Privacy Policy for ${appName}. Learn how we handle your data.`,
    nl: `Privacybeleid voor ${appName}. Lees hoe wij omgaan met je gegevens.`,
    de: `Datenschutzrichtlinie für ${appName}. Erfahren Sie, wie wir Ihre Daten behandeln.`,
    fr: `Politique de confidentialité pour ${appName}. Découvrez comment nous traitons vos données.`,
    es: `Política de privacidad para ${appName}. Conozca cómo tratamos sus datos.`,
    pl: `Polityka prywatności dla ${appName}. Dowiedz się, jak przetwarzamy Twoje dane.`,
    cs: `Zásady ochrany soukromí pro ${appName}. Zjistěte, jak nakládáme s vašimi daty.`,
    sv: `Integritetspolicy för ${appName}. Läs om hur vi hanterar dina uppgifter.`,
  };
  
  return {
    title: titles[params.locale] || titles.en,
    description: descriptions[params.locale] || descriptions.en,
  };
}

export default function PrivacyAppPage() {
  return <PrivacyPageClient />;
}
