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
  const [isYearly, setIsYearly] = useState(false);
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
            <p className="section-subtitle mx-auto mb-8">{app.pricing.subtitle}</p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-navy-light/50 rounded-full border border-circuit/20">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isYearly ? 'bg-circuit text-navy' : 'text-gray-400 hover:text-white'
                }`}
              >
                {app.pricing.monthly}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isYearly ? 'bg-circuit text-navy' : 'text-gray-400 hover:text-white'
                }`}
              >
                {app.pricing.yearly}
                <span className="text-xs px-2 py-0.5 bg-pike/20 text-pike rounded-full">
                  {app.pricing.yearlySave}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {app.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-br from-circuit/20 to-pike/10 border-2 border-circuit ring-2 ring-circuit/20'
                    : 'bg-navy-light/30 border border-circuit/20 hover:border-circuit/40'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-circuit text-navy text-xs font-bold py-1 text-center">
                    {locale === 'nl' ? 'MEEST GEKOZEN' : 'MOST POPULAR'}
                  </div>
                )}
                
                <div className={`p-6 flex-1 flex flex-col ${plan.popular ? 'pt-10' : ''}`}>
                  {/* Plan Name */}
                  <h2 className="text-xl font-bold text-white mb-2">{plan.name}</h2>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-circuit">
                        {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {isYearly && plan.yearlyPeriod ? plan.yearlyPeriod : plan.period}
                      </span>
                    </div>
                    {plan.trial && (
                      <span className="text-xs text-pike mt-1 block">{plan.trial}</span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-pike flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    href="https://backorder-pro.fly.dev/auth/login"
                    target="_blank"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enterprise Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              {locale === 'nl' 
                ? 'Meer nodig? ' 
                : 'Need more? '}
              <Link href={`/${locale}/contact`} className="text-circuit hover:underline">
                {locale === 'nl' ? 'Neem contact op voor enterprise oplossingen.' : 'Contact us for enterprise solutions.'}
              </Link>
            </p>
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

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Klaar om te Starten?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'nl' 
              ? 'Start vandaag nog met BackorderPRO. Gratis plan beschikbaar, geen creditcard nodig.'
              : 'Start with BackorderPRO today. Free plan available, no credit card required.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://backorder-pro.fly.dev/auth/login"
              target="_blank"
            >
              {t.apps.getStarted}
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
      </section>
    </div>
  );
}
