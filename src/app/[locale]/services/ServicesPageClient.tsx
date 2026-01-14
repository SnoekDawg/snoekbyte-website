'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function ServicesPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const services = [
    {
      id: 'web-development',
      name: t.services.webdev.name,
      tagline: t.services.webdev.tagline,
      description: t.services.webdev.description,
      features: t.services.webdev.features,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'circuit',
    },
    {
      id: 'marketing',
      name: t.services.marketing.name,
      tagline: t.services.marketing.tagline,
      description: t.services.marketing.description,
      features: t.services.marketing.features,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'pike',
    },
    {
      id: 'app-development',
      name: t.services.appdev.name,
      tagline: t.services.appdev.tagline,
      description: t.services.appdev.description,
      features: t.services.appdev.features,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pike/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">{t.services.title}</h1>
            <p className="section-subtitle mx-auto">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-circuit/20 overflow-hidden hover:border-circuit/40 transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Icon & Info */}
                    <div className="flex-1">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                        service.color === 'circuit' ? 'bg-circuit/20 text-circuit' :
                        service.color === 'pike' ? 'bg-pike/20 text-pike' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {service.icon}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {service.name}
                      </h2>
                      <p className={`text-lg font-medium mb-4 ${
                        service.color === 'circuit' ? 'text-circuit' :
                        service.color === 'pike' ? 'text-pike' :
                        'text-purple-400'
                      }`}>
                        {service.tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: Features */}
                    <div className="lg:w-80">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                        {locale === 'nl' ? 'Wat we bieden' : 'What we offer'}
                      </h3>
                      <ul className="space-y-3">
                        {service.features.slice(0, 6).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              service.color === 'circuit' ? 'text-circuit' :
                              service.color === 'pike' ? 'text-pike' :
                              'text-purple-400'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-circuit/20">
                    <div className="flex flex-wrap gap-4">
                      <Button variant="primary" href={`/${locale}/services/${service.id}`}>
                        {locale === 'nl' ? 'Meer Info' : 'Learn More'}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                      <Button variant="secondary" href={`/${locale}/contact`}>
                        {t.services.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Op zoek naar een maatwerkoplossing?' : 'Looking for a custom solution?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Laten we bespreken hoe we je kunnen helpen. Van webshops tot AI-gestuurde marketing — we hebben de expertise.'
              : 'Let\'s discuss how we can help you. From webshops to AI-powered marketing — we have the expertise.'}
          </p>
          <Button variant="primary" size="lg" href={`/${locale}/contact`}>
            {t.services.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
