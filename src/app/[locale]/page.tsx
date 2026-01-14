import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <CTA />
    </>
  );
}
