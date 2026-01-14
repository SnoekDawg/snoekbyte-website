'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

interface ServiceDetailClientProps {
  serviceId: 'webdev' | 'marketing' | 'appdev';
}

export default function ServiceDetailClient({ serviceId }: ServiceDetailClientProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  
  const serviceData = t.services[serviceId];
  
  const colors = {
    webdev: { bg: 'circuit/20', text: 'circuit', border: 'circuit' },
    marketing: { bg: 'pike/20', text: 'pike', border: 'pike' },
    appdev: { bg: 'purple-500/20', text: 'purple-400', border: 'purple-500' },
  };
  
  const color = colors[serviceId];

  const icons = {
    webdev: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    marketing: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    appdev: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-${color.text}/10 rounded-full blur-3xl`} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href={`/${locale}/services`} className="hover:text-circuit transition-colors">
              {t.services.title}
            </Link>
            <span>/</span>
            <span className="text-white">{serviceData.name}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl bg-${color.bg} text-${color.text} flex items-center justify-center mb-8`}>
              {icons[serviceId]}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {serviceData.name}
            </h1>
            <p className={`text-xl md:text-2xl text-${color.text} font-medium mb-6`}>
              {serviceData.tagline}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {serviceData.description}
            </p>

            <div className="mt-8">
              <Button variant="primary" size="lg" href={`/${locale}/contact`}>
                {t.services.cta}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {locale === 'nl' ? 'Wat we bieden' : 'What We Offer'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-navy/50 backdrop-blur-sm rounded-xl p-6 border border-circuit/20 hover:border-circuit/40 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-${color.bg} flex items-center justify-center mb-4`}>
                  <svg className={`w-5 h-5 text-${color.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Interesse?' : 'Interested?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Neem contact op en laat ons weten wat we voor je kunnen betekenen.'
              : 'Get in touch and let us know how we can help you.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href={`/${locale}/contact`}>
              {t.services.cta}
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/services`}>
              {locale === 'nl' ? 'Alle Services' : 'All Services'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
