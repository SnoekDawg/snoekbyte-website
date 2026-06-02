'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function FeedMapperProPricingClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const app = t.apps.feedmapperpro;
  const pricing = app.pricing;
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href={`/${locale}/apps`} className="hover:text-circuit transition-colors">
            {t.apps.title}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/apps/feedmapperpro`} className="hover:text-circuit transition-colors">
            {app.name}
          </Link>
          <span>/</span>
          <span className="text-white">{locale === 'nl' ? 'Prijzen' : 'Pricing'}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {pricing.title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {pricing.subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-navy-light/50 rounded-full p-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-circuit text-navy' : 'text-gray-400 hover:text-white'
              }`}
            >
              {pricing.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-circuit text-navy' : 'text-gray-400 hover:text-white'
              }`}
            >
              {pricing.yearly}
              <span className="bg-pike/20 text-pike text-xs px-2 py-0.5 rounded-full">
                {pricing.yearlySave}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-navy-light/30 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                plan.popular
                  ? 'border-circuit shadow-lg shadow-circuit/20 scale-105'
                  : 'border-circuit/20 hover:border-circuit/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-circuit text-navy text-xs font-bold rounded-full">
                  {locale === 'nl' ? 'MEEST POPULAIR' : 'MOST POPULAR'}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {isYearly && plan.yearlyPeriod ? plan.yearlyPeriod : plan.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                {plan.trial && (
                  <p className="text-pike text-xs mt-2">{plan.trial}</p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => {
                  const label = typeof feature === 'string' ? feature : feature.text;
                  return (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-pike mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {label}
                    </li>
                  );
                })}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="w-full"
                href="https://feedmapper-pro.fly.dev/auth/login"
                target="_blank"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {locale === 'nl' ? 'Vergelijk Alle Features' : 'Compare All Features'}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-circuit/20">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-medium">Free</th>
                  <th className="text-center py-4 px-4 text-white font-medium">Starter</th>
                  <th className="text-center py-4 px-4 text-circuit font-medium">Pro</th>
                  <th className="text-center py-4 px-4 text-white font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: locale === 'nl' ? 'Feeds' : 'Feeds', values: ['1', '3', '10', locale === 'nl' ? 'Onbeperkt' : 'Unlimited'] },
                  { feature: locale === 'nl' ? 'Producten' : 'Products', values: ['500', '2,500', '25,000', locale === 'nl' ? 'Onbeperkt' : 'Unlimited'] },
                  { feature: 'Templates', values: ['Google Shopping', '5', '15+', locale === 'nl' ? '15+ + Custom' : '15+ + Custom'] },
                  { feature: locale === 'nl' ? 'Update Frequentie' : 'Update Frequency', values: ['24h', '6h', '1h', 'Real-time'] },
                  { feature: 'Transformations', values: ['5', '15', '25+', 'All + Custom'] },
                  { feature: 'Calculated Fields', values: ['❌', '❌', '✅', '✅'] },
                  { feature: 'Auto-Validation', values: ['❌', '❌', '✅', '✅'] },
                  { feature: 'Multi-Market', values: ['❌', '❌', '5', locale === 'nl' ? 'Onbeperkt' : 'Unlimited'] },
                  { feature: locale === 'nl' ? 'Wachtwoord Beveiliging' : 'Password Protection', values: ['❌', '✅', '✅', '✅'] },
                  { feature: 'API Access', values: ['❌', '❌', '❌', '✅'] },
                  { feature: 'Support', values: ['Community', 'Email', 'Priority', 'Dedicated'] },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-circuit/10">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={valueIndex} className={`text-center py-4 px-4 ${valueIndex === 2 ? 'text-circuit' : 'text-gray-400'}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            {locale === 'nl' ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-4">
            {pricing.faq.map((item, index) => (
              <div
                key={index}
                className="bg-navy-light/30 rounded-xl p-6 border border-circuit/20"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            {locale === 'nl' 
              ? 'Nog vragen? Neem contact met ons op.'
              : 'Still have questions? Get in touch.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" href="https://feedmapper-pro.fly.dev/auth/login" target="_blank">
              {t.apps.getStarted}
            </Button>
            <LiveChatButton variant="secondary">
              {t.liveChat.start}
            </LiveChatButton>
          </div>
        </div>
      </div>
    </div>
  );
}
