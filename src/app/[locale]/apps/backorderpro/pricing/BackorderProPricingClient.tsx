'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function BackorderProPricingClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const app = t.apps.backorderpro;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href={`/${locale}/apps`} className="hover:text-circuit transition-colors">
              {t.apps.title}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/apps/backorderpro`} className="hover:text-circuit transition-colors">
              {app.name}
            </Link>
            <span>/</span>
            <span className="text-white">{t.apps.viewPricing}</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">{app.pricing.title}</h1>
            <p className="section-subtitle mx-auto">{app.pricing.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {app.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-br from-circuit/10 to-pike/10 border-2 border-circuit/50'
                    : 'bg-navy-light/30 border border-circuit/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-pike text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    {locale === 'nl' ? 'HUIDIGE AANBIEDING' : 'CURRENT OFFER'}
                  </div>
                )}
                
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Plan Info */}
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {plan.name}
                      </h2>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-circuit">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-gray-400">{plan.period}</span>
                        )}
                      </div>
                      <p className="text-gray-400 max-w-md">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex-1 lg:max-w-sm">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-pike flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-circuit/20">
                    <div className="flex flex-wrap gap-4">
                      <Button
                        variant="primary"
                        size="lg"
                        href="https://backorder-pro.fly.dev/auth/login"
                        target="_blank"
                      >
                        {plan.cta}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        href={`/${locale}/apps/backorderpro`}
                      >
                        {locale === 'nl' ? 'Meer Info' : 'Learn More'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {locale === 'nl' ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-4">
            {app.pricing.faq.map((item, index) => (
              <div
                key={index}
                className="bg-navy/50 backdrop-blur-sm rounded-xl border border-circuit/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-circuit transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
