import { Metadata } from 'next';
import { PricingTable } from '@/components/sections/PricingTable';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isNL = params.locale === 'nl';
  
  return {
    title: isNL ? 'Prijzen' : 'Pricing',
    description: isNL
      ? 'Transparante prijzen voor BackorderPRO. Kies het abonnement dat bij je bedrijf past.'
      : 'Transparent pricing for BackorderPRO. Choose the plan that fits your business.',
    openGraph: {
      title: isNL ? 'Prijzen | SnoekByte' : 'Pricing | SnoekByte',
      description: isNL
        ? 'Bekijk onze prijsplannen en start vandaag nog.'
        : 'View our pricing plans and get started today.',
    },
  };
}

export default function PricingPage() {
  return (
    <>
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  );
}
