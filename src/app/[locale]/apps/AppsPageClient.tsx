'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function AppsPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const apps = [
    {
      id: 'backorderpro',
      name: t.apps.backorderpro.name,
      tagline: t.apps.backorderpro.tagline,
      description: t.apps.backorderpro.shortDescription,
      startingPrice: locale === 'nl' ? 'Vanaf €0/maand' : 'From $0/month',
      href: `/${locale}/apps/backorderpro`,
      color: 'circuit',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">{t.apps.title}</h1>
            <p className="section-subtitle mx-auto">{t.apps.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {apps.map((app) => (
              <div
                key={app.id}
                className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-circuit/20 overflow-hidden hover:border-circuit/40 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Left: Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {app.name}
                        </h2>
                        <span className="px-3 py-1 text-xs font-medium bg-pike/20 text-pike rounded-full border border-pike/30">
                          {app.startingPrice}
                        </span>
                      </div>
                      <p className="text-circuit text-lg font-medium mb-3">
                        {app.tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        {app.description}
                      </p>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                      <Button variant="primary" href={app.href} className="w-full justify-center">
                        {locale === 'nl' ? 'Bekijk Details' : 'View Details'}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                      <Button variant="secondary" href={`/${locale}/apps/${app.id}/pricing`} className="w-full justify-center">
                        {t.apps.viewPricing}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-navy/50 backdrop-blur-sm rounded-2xl border border-dashed border-circuit/30 p-8 md:p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-circuit/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.apps.comingSoon.title}
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                {t.apps.comingSoon.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
