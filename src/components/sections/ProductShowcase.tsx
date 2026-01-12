'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export function ProductShowcase() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  return (
    <section className="py-20 lg:py-32 bg-navy-50/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-pike/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-circuit/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pike/10 border border-pike/30 mb-6">
              <span className="text-pike text-sm font-medium">
                {locale === 'en' ? 'Free During Beta' : 'Gratis Tijdens Beta'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.products.backorderpro.name}
            </h2>
            
            <p className="text-xl text-circuit font-medium mb-4">
              {t.products.backorderpro.tagline}
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t.products.backorderpro.description}
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {t.products.backorderpro.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-pike flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href={`/${locale}/products`}>
                {locale === 'en' ? 'Learn More' : 'Meer Info'}
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
              <Button
                variant="secondary"
                href="https://apps.shopify.com/backorderpro"
                external
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-.801-.771-1.074-1.042-.802-.273-.802-.273L15.337 24v-.021zm-3.019-9.574c-.477-.253-1.009-.506-1.582-.506-1.284 0-1.347.801-1.347 1.009 0 1.093 2.862 1.516 2.862 4.074 0 2.013-1.284 3.312-3.014 3.312-2.073 0-3.138-1.284-3.138-1.284l.558-1.831s1.093.939 2.013.939c.6 0 .853-.477.853-.822 0-1.432-2.348-1.495-2.348-3.836 0-1.979 1.411-3.893 4.285-3.893 1.106 0 1.652.316 1.652.316l-.795 2.522z"/>
                </svg>
                {t.products.backorderpro.cta}
              </Button>
            </div>
          </div>

          {/* Product visual - Updated to show BackorderPRO workflow */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-50/50 border border-circuit/20 p-8">
              {/* Mock dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-circuit/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pike/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 9v6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">BackorderPRO</div>
                      <div className="text-xs text-gray-400">
                        {locale === 'en' ? 'Feed Sync Dashboard' : 'Feed Sync Dashboard'}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-pike/20 text-pike text-sm">
                    {locale === 'en' ? 'Synced' : 'Gesynchroniseerd'}
                  </div>
                </div>

                {/* Workflow visualization */}
                <div className="grid grid-cols-3 gap-2 text-center py-4">
                  <div className="bg-navy/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">
                      {locale === 'en' ? 'Supplier Feed' : 'Leverancier Feed'}
                    </div>
                    <div className="text-lg font-bold text-circuit">CSV</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="bg-navy/50 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-1">Shopify</div>
                    <div className="text-lg font-bold text-pike">
                      {locale === 'en' ? 'Updated' : 'Bijgewerkt'}
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-navy/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-circuit">1,247</div>
                    <div className="text-xs text-gray-400">
                      {locale === 'en' ? 'Products Synced' : 'Producten Gesynchroniseerd'}
                    </div>
                  </div>
                  <div className="bg-navy/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-pike">89%</div>
                    <div className="text-xs text-gray-400">
                      {locale === 'en' ? 'Match Rate' : 'Match Rate'}
                    </div>
                  </div>
                  <div className="bg-navy/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Auto</div>
                    <div className="text-xs text-gray-400">
                      {locale === 'en' ? 'Daily Sync' : 'Dagelijkse Sync'}
                    </div>
                  </div>
                </div>

                {/* Recent sync log */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-300">
                    {locale === 'en' ? 'Recent Rules Applied' : 'Recent Toegepaste Regels'}
                  </div>
                  {[
                    { rule: locale === 'en' ? 'Stock > 0 → Enable Backorder' : 'Voorraad > 0 → Backorder Aan', count: 847 },
                    { rule: locale === 'en' ? 'Stock = 0 → Disable Backorder' : 'Voorraad = 0 → Backorder Uit', count: 312 },
                    { rule: locale === 'en' ? 'ETA < 7 days → Enable' : 'ETA < 7 dagen → Aan', count: 88 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-navy/30"
                    >
                      <div className="text-sm text-white">{item.rule}</div>
                      <div className="text-sm font-medium text-circuit">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-circuit/20 via-pike/20 to-circuit/20 -z-10 blur-sm" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pike/20 rounded-2xl border border-pike/30 flex items-center justify-center animate-float">
              <svg className="w-10 h-10 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-circuit/20 rounded-xl border border-circuit/30 flex items-center justify-center animate-float animation-delay-300">
              <svg className="w-8 h-8 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
