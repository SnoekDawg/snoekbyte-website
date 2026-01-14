'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function ContactPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">{t.contact.title}</h1>
            <p className="section-subtitle mx-auto">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-circuit/20 p-8 hover:border-circuit/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-circuit/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{t.contact.email.title}</h2>
              <p className="text-gray-400 mb-6">{t.contact.email.description}</p>
              <Button variant="primary" href="mailto:info@snoekbyte.nl">
                {t.contact.email.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>

            {/* Response Time Card */}
            <div className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-pike/20 p-8">
              <div className="w-14 h-14 rounded-xl bg-pike/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                {locale === 'nl' ? 'Snelle Reactie' : 'Quick Response'}
              </h2>
              <p className="text-gray-400 mb-4">
                {locale === 'nl' 
                  ? 'We reageren meestal binnen 48 uur op alle berichten. Voor dringende zaken vermeld dit in het onderwerp.'
                  : 'We typically respond within 48 hours to all messages. For urgent matters, please mention it in the subject.'}
              </p>
              <div className="flex items-center gap-2 text-pike">
                <span className="font-bold text-2xl">&lt;48h</span>
                <span className="text-sm text-gray-400">
                  {locale === 'nl' ? 'gemiddelde reactietijd' : 'average response time'}
                </span>
              </div>
            </div>
          </div>

          {/* What We Can Help With */}
          <div className="mt-12 bg-navy/50 backdrop-blur-sm rounded-2xl border border-circuit/20 p-8">
            <h2 className="text-xl font-bold text-white mb-6 text-center">
              {locale === 'nl' ? 'Waarmee kunnen we helpen?' : 'What can we help with?'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📱', label: locale === 'nl' ? 'App Support' : 'App Support' },
                { icon: '🛒', label: locale === 'nl' ? 'Webshop Development' : 'Webshop Development' },
                { icon: '📈', label: locale === 'nl' ? 'Marketing & Google Ads' : 'Marketing & Google Ads' },
                { icon: '🤝', label: locale === 'nl' ? 'Partnerschappen' : 'Partnerships' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-lg bg-white/5">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Direct Email CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Direct contact opnemen?' : 'Want to get in touch directly?'}
          </h2>
          <p className="text-gray-300 mb-8">
            {locale === 'nl' 
              ? 'Stuur ons een email en we komen zo snel mogelijk bij je terug.'
              : 'Send us an email and we\'ll get back to you as soon as possible.'}
          </p>
          <a
            href="mailto:info@snoekbyte.nl"
            className="text-2xl md:text-3xl font-bold text-circuit hover:text-circuit/80 transition-colors"
          >
            info@snoekbyte.nl
          </a>
        </div>
      </section>
    </div>
  );
}
