import { Metadata } from 'next';
import ProductsPageClient from './ProductsPageClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isNL = params.locale === 'nl';
  
  return {
    title: isNL ? 'Producten' : 'Products',
    description: isNL
      ? 'Ontdek onze krachtige Shopify apps. BackorderPRO - Verlies nooit meer een verkoop door uitverkochte producten.'
      : 'Discover our powerful Shopify apps. BackorderPRO - Never lose a sale to out-of-stock products again.',
    openGraph: {
      title: isNL ? 'Producten | SnoekByte' : 'Products | SnoekByte',
      description: isNL
        ? 'Ontdek BackorderPRO en andere krachtige e-commerce tools.'
        : 'Discover BackorderPRO and other powerful e-commerce tools.',
    },
  };
}

export default function ProductsPage() {
  return <ProductsPageClient />;
}
