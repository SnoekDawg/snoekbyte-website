'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/types';

export function CTA() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-circuit/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="section-title mb-4">{t.cta.title}</h2>
          <p className="section-subtitle mx-auto mb-10">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={`/${locale}/apps`}>
              {t.nav.apps}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/contact`}>
              {t.cta.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
