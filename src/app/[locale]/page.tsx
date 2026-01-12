import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <CTA />
    </>
  );
}
