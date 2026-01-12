import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isNL = params.locale === 'nl';
  
  return {
    title: isNL ? 'Contact' : 'Contact',
    description: isNL
      ? 'Neem contact op met SnoekByte. Wij helpen je graag met vragen over onze Shopify apps.'
      : 'Get in touch with SnoekByte. We\'re happy to help with questions about our Shopify apps.',
    openGraph: {
      title: isNL ? 'Contact | SnoekByte' : 'Contact | SnoekByte',
      description: isNL
        ? 'Neem contact met ons op voor vragen of support.'
        : 'Contact us for questions or support.',
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
