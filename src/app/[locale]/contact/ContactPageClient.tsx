'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function ContactPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const email = 'hello@snoekbyte.nl';
  const subject = locale === 'en' ? 'Inquiry from SnoekByte Website' : 'Vraag via SnoekByte Website';

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-circuit/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pike/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Option - Email Only */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Email Card */}
          <Card className="p-8 text-center">
            <CardContent>
              <div className="w-16 h-16 rounded-2xl bg-pike/10 flex items-center justify-center text-pike mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                {t.contact.email.title}
              </h2>
              <p className="text-gray-400 mb-6">
                {t.contact.email.description}
              </p>
              
              <Button
                variant="primary"
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                className="w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.email.cta}
              </Button>
              
              <p className="mt-4 text-circuit font-mono text-sm">{email}</p>
            </CardContent>
          </Card>

          {/* Response Time Info */}
          <div className="mt-8 text-center">
            <Card className="p-6 inline-block">
              <CardContent>
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-pike/10 flex items-center justify-center text-pike flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {locale === 'en' ? 'Response Time' : 'Reactietijd'}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {locale === 'en' ? 'We typically respond within 48 hours' : 'We reageren meestal binnen 48 uur'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50/30 rounded-2xl border border-circuit/20 overflow-hidden">
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-circuit/10 flex items-center justify-center text-circuit mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {locale === 'en' ? 'Based in The Netherlands' : 'Gevestigd in Nederland'}
              </h3>
              <p className="text-gray-400">
                {locale === 'en' ? 'Serving e-commerce businesses worldwide' : 'Wij bedienen e-commerce bedrijven wereldwijd'}
              </p>
            </div>
            
            {/* Decorative map-like background */}
            <div className="h-32 bg-gradient-to-b from-navy-50/50 to-navy relative overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1" fill="#4DC3E0" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-dots)" />
              </svg>
              
              {/* Animated location pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-pike rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pike" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
