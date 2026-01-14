'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function BackorderProPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const app = t.apps.backorderpro;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href={`/${locale}/apps`} className="hover:text-circuit transition-colors">
                {t.apps.title}
              </Link>
              <span>/</span>
              <span className="text-white">{app.name}</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pike/10 border border-pike/30 mb-6">
              <span className="w-2 h-2 bg-pike rounded-full animate-pulse" />
              <span className="text-pike text-sm font-medium">
                {locale === 'nl' ? 'Publieke Beta — Gratis' : 'Public Beta — Free'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {app.name}
            </h1>
            <p className="text-xl md:text-2xl text-circuit font-medium mb-4">
              {app.tagline}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {app.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                href="https://backorder-pro.fly.dev/auth/login"
                target="_blank"
              >
                {t.apps.installNow}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={`/${locale}/apps/backorderpro/pricing`}
              >
                {t.apps.viewPricing}
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <Link
                href={`/${locale}/privacy/backorderpro`}
                className="text-gray-400 hover:text-circuit transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {t.apps.privacyPolicy}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {locale === 'nl' ? 'Belangrijkste Functies' : 'Key Features'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, index) => (
              <div
                key={index}
                className="bg-navy/50 backdrop-blur-sm rounded-xl p-6 border border-circuit/20 hover:border-circuit/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-circuit/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {locale === 'nl' ? 'Hoe Het Werkt' : 'How It Works'}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: locale === 'nl' ? 'Configureer Feed' : 'Configure Feed', desc: locale === 'nl' ? 'Upload of link je leveranciersfeed (CSV, Excel, XML)' : 'Upload or link your supplier feed (CSV, Excel, XML)' },
              { step: '2', title: locale === 'nl' ? 'Map Kolommen' : 'Map Columns', desc: locale === 'nl' ? 'Koppel SKU/EAN aan je Shopify producten' : 'Match SKU/EAN to your Shopify products' },
              { step: '3', title: locale === 'nl' ? 'Stel Regels In' : 'Set Rules', desc: locale === 'nl' ? 'Definieer wanneer backorder actief wordt' : 'Define when backorder becomes active' },
              { step: '4', title: locale === 'nl' ? 'Automatiseer' : 'Automate', desc: locale === 'nl' ? 'Plan automatische syncs en laat het draaien' : 'Schedule auto-syncs and let it run' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-circuit/20 border-2 border-circuit flex items-center justify-center mx-auto mb-4">
                  <span className="text-circuit font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Klaar om te Starten?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Installeer BackorderPRO gratis tijdens onze publieke beta en ervaar geautomatiseerd backorder beheer.'
              : 'Install BackorderPRO for free during our public beta and experience automated backorder management.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://backorder-pro.fly.dev/auth/login"
              target="_blank"
            >
              {t.apps.installNow}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`/${locale}/contact`}
            >
              {t.contact.email.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
