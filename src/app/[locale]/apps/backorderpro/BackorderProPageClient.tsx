'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

// Feature icons mapped by index
const featureIcons = [
  // 0: Import feeds via URL, FTP, or file upload
  <svg key="upload" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>,
  // 1: Auto-match products via SKU or EAN
  <svg key="link" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  // 2: Smart rule engine
  <svg key="cog" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // 3: Scheduled auto-sync
  <svg key="clock" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 4: Revenue tracking & analytics
  <svg key="chart" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // 5: Multi-language support
  <svg key="globe" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  // 6: GDPR compliant
  <svg key="shield" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 7: Set delivery times per supplier
  <svg key="truck" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>,
  // 8: Works with Search & Discovery
  <svg key="search" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>,
  // 9: Works with Translate & Adapt
  <svg key="translate" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>,
];

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

            {/* Free Plan Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pike/10 border border-pike/30 mb-6">
              <span className="w-2 h-2 bg-pike rounded-full" />
              <span className="text-pike text-sm font-medium">
                {locale === 'nl' ? 'Gratis Plan Beschikbaar' : 'Free Plan Available'}
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
                {t.apps.getStarted}
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

      {/* Pricing Teaser */}
      <section className="py-12 bg-navy-light/30 border-y border-circuit/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {locale === 'nl' ? 'Prijzen vanaf €0/maand' : 'Pricing starts at $0/month'}
              </h2>
              <p className="text-gray-400">
                {locale === 'nl' 
                  ? 'Gratis plan voor kleine winkels, betaalde plannen voor meer kracht.' 
                  : 'Free plan for small stores, paid plans for more power.'}
              </p>
            </div>
            <Button variant="secondary" href={`/${locale}/apps/backorderpro/pricing`}>
              {t.apps.viewPricing}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            {locale === 'nl' ? 'Belangrijkste Functies' : 'Key Features'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {app.features.map((feature, index) => (
              <div
                key={index}
                className="bg-navy-light/30 backdrop-blur-sm rounded-xl p-6 border border-circuit/20 hover:border-circuit/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-circuit/20 flex items-center justify-center mb-4">
                  {featureIcons[index] || featureIcons[0]}
                </div>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-navy-light/20">
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

      {/* Integrations */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {locale === 'nl' ? 'Werkt Naadloos met Shopify Apps' : 'Works Seamlessly with Shopify Apps'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {locale === 'nl' 
                ? 'BackorderPRO integreert met populaire Shopify apps voor een complete oplossing.'
                : 'BackorderPRO integrates with popular Shopify apps for a complete solution.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-navy-light/30 rounded-xl p-6 border border-circuit/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Search & Discovery</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {locale === 'nl' 
                  ? 'Maak automatisch stock filters om alleen producten op voorraad of met backorder te tonen.'
                  : 'Automatically create stock filters to show only in-stock or backorder products.'}
              </p>
            </div>
            
            <div className="bg-navy-light/30 rounded-xl p-6 border border-circuit/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Translate & Adapt</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {locale === 'nl' 
                  ? 'Backorder berichten en levertijden worden automatisch vertaald naar alle talen.'
                  : 'Backorder messages and delivery times are automatically translated to all languages.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Klaar om te Starten?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Installeer BackorderPRO en ervaar geautomatiseerd backorder beheer. Start gratis, geen creditcard nodig.'
              : 'Install BackorderPRO and experience automated backorder management. Start free, no credit card required.'}
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
              href={`/${locale}/apps/backorderpro/pricing`}
            >
              {t.apps.viewPricing}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
