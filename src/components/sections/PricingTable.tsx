'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export function PricingTable() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;

  const content = locale === 'en'
    ? {
        title: 'Currently Free',
        subtitle: 'BackorderPRO is in Public Beta. Full access to all features at no cost while we gather feedback.',
        betaTitle: 'Public Beta',
        betaPrice: 'Free',
        betaDescription: 'Full access to all features during our beta period. Help us improve and enjoy unlimited use.',
        features: [
          'Unlimited supplier feeds',
          'Unlimited product syncs',
          'Full rule engine access',
          'Scheduled auto-sync',
          'Backorder analytics dashboard',
          'Email support (within 48h)',
          'Multi-language (EN/NL)',
          'GDPR compliant',
        ],
        cta: 'Start Free Beta',
        note: 'No credit card required. No hidden fees.',
      }
    : {
        title: 'Momenteel Gratis',
        subtitle: 'BackorderPRO is in Publieke Beta. Volledige toegang tot alle functies zonder kosten terwijl we feedback verzamelen.',
        betaTitle: 'Publieke Beta',
        betaPrice: 'Gratis',
        betaDescription: 'Volledige toegang tot alle functies tijdens onze beta periode. Help ons verbeteren en geniet van onbeperkt gebruik.',
        features: [
          'Onbeperkte leveranciersfeeds',
          'Onbeperkte product syncs',
          'Volledige regel-engine toegang',
          'Geplande auto-sync',
          'Backorder analytics dashboard',
          'Email support (binnen 48u)',
          'Meertalig (EN/NL)',
          'GDPR compliant',
        ],
        cta: 'Start Gratis Beta',
        note: 'Geen creditcard nodig. Geen verborgen kosten.',
      };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pike/10 border border-pike/30 mb-6">
            <span className="w-2 h-2 bg-pike rounded-full animate-pulse" />
            <span className="text-pike text-sm font-medium">
              {locale === 'en' ? 'Limited Time' : 'Beperkte Tijd'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-8 bg-gradient-to-b from-circuit/10 to-pike/10 border-2 border-pike shadow-glow-pike">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 bg-pike text-white text-sm font-medium rounded-full">
                {locale === 'en' ? 'Available Now' : 'Nu Beschikbaar'}
              </span>
            </div>

            {/* Plan name */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{content.betaTitle}</h3>
              <p className="text-gray-400 text-sm">{content.betaDescription}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <span className="text-6xl font-bold text-white">{content.betaPrice}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {content.features.map((feature, index) => (
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

            {/* CTA */}
            <Button
              variant="primary"
              className="w-full text-lg py-4"
              href="https://apps.shopify.com/backorderpro"
              external
            >
              {content.cta}
            </Button>

            {/* Note */}
            <p className="text-center text-gray-500 text-sm mt-4">
              {content.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
