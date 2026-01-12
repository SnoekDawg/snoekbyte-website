'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export function PricingTable() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.pricing.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {t.pricing.subtitle}
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-navy-50/50 rounded-full border border-circuit/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-pike text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly
                  ? 'bg-pike text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.pricing.yearly}
              <span className="ml-2 text-xs text-pike-700 bg-pike/20 px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-circuit/10 to-pike/10 border-2 border-pike scale-105 shadow-glow-pike'
                  : 'bg-navy-50/30 border border-circuit/20 hover:border-circuit/40'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-pike text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {isYearly
                    ? plan.price.replace(/\d+(\.\d+)?/, (match) =>
                        (parseFloat(match) * 0.8 * 12).toFixed(0)
                      )
                    : plan.price}
                </span>
                <span className="text-gray-400 ml-2">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-pike' : 'text-circuit'
                      }`}
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
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
                href={
                  plan.name === 'Enterprise'
                    ? `/${locale}/contact`
                    : 'https://apps.shopify.com/backorderpro'
                }
                external={plan.name !== 'Enterprise'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
