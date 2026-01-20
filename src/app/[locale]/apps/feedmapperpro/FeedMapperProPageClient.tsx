'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

// Feature icons mapped by index
const featureIcons = [
  // 0: Multi-format export
  <svg key="export" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>,
  // 1: 15+ platform templates
  <svg key="template" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  // 2: 25+ data transformations
  <svg key="transform" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>,
  // 3: Feed scheduling
  <svg key="clock" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // 4: Google Shopping compliance
  <svg key="check" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // 5: Quality scoring
  <svg key="chart" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // 6: IF/THEN logic
  <svg key="code" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // 7: Calculated fields
  <svg key="calc" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>,
  // 8: Multi-market support
  <svg key="globe" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  // 9: GDPR compliant
  <svg key="shield" className="w-5 h-5 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

// Platform logos/badges
const platforms = [
  { name: 'Google Shopping', color: 'bg-red-500/20 text-red-400' },
  { name: 'Facebook', color: 'bg-blue-500/20 text-blue-400' },
  { name: 'Instagram', color: 'bg-pink-500/20 text-pink-400' },
  { name: 'TikTok', color: 'bg-gray-500/20 text-gray-300' },
  { name: 'Pinterest', color: 'bg-red-600/20 text-red-400' },
  { name: 'Amazon', color: 'bg-orange-500/20 text-orange-400' },
  { name: 'eBay', color: 'bg-yellow-500/20 text-yellow-400' },
  { name: 'Bing', color: 'bg-cyan-500/20 text-cyan-400' },
];

export default function FeedMapperProPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const app = t.apps.feedmapperpro;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-circuit/10 rounded-full blur-3xl" />
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
                href="https://feedmapper-pro.fly.dev/auth/login"
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
                href={`/${locale}/apps/feedmapperpro/pricing`}
              >
                {t.apps.viewPricing}
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <Link
                href={`/${locale}/privacy/feedmapperpro`}
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

      {/* Supported Platforms */}
      <section className="py-12 bg-navy-light/30 border-y border-circuit/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-6">
            {locale === 'nl' ? 'Exporteer naar 15+ platformen' : 'Export to 15+ platforms'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform) => (
              <span
                key={platform.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${platform.color}`}
              >
                {platform.name}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-circuit/20 text-circuit">
              +7 more
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 bg-navy-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                {locale === 'nl' ? 'Prijzen vanaf €0/maand' : 'Pricing starts at €0/month'}
              </h2>
              <p className="text-gray-400">
                {locale === 'nl' 
                  ? 'Enterprise-grade features tegen SMB-prijzen.' 
                  : 'Enterprise-grade features at SMB pricing.'}
              </p>
            </div>
            <Button variant="secondary" href={`/${locale}/apps/feedmapperpro/pricing`}>
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

      {/* Problems Solved */}
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            {locale === 'nl' ? 'Welke Problemen Lost FeedMapper PRO Op?' : 'What Problems Does FeedMapper PRO Solve?'}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Van tijdrovend handmatig werk naar volledige automatisering'
              : 'From time-consuming manual work to full automation'}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: '⏱️', 
                title: locale === 'nl' ? 'Tijdrovend Feed-Management' : 'Time-Consuming Feed Management',
                desc: locale === 'nl' ? 'Geen handmatig exporteren meer. Scheduled updates van elk uur tot dagelijks.' : 'No more manual exports. Scheduled updates from hourly to daily.'
              },
              { 
                icon: '❌', 
                title: locale === 'nl' ? 'Afgekeurde Feeds' : 'Rejected Feeds',
                desc: locale === 'nl' ? '50+ validatie checks en Google Shopping compliance checker.' : '50+ validation checks and Google Shopping compliance checker.'
              },
              { 
                icon: '📊', 
                title: locale === 'nl' ? 'Geen Feed Inzichten' : 'No Feed Insights',
                desc: locale === 'nl' ? 'Quality scores, error tracking en product statistieken.' : 'Quality scores, error tracking, and product statistics.'
              },
              { 
                icon: '🔀', 
                title: locale === 'nl' ? 'Multi-Channel Complexiteit' : 'Multi-Channel Complexity',
                desc: locale === 'nl' ? '15+ pre-built templates voor alle grote platformen.' : '15+ pre-built templates for all major platforms.'
              },
              { 
                icon: '🔧', 
                title: locale === 'nl' ? 'Inflexibele Data' : 'Inflexible Data',
                desc: locale === 'nl' ? '25+ transformatie-acties, IF/THEN logica en lookup tabellen.' : '25+ transformation actions, IF/THEN logic, and lookup tables.'
              },
              { 
                icon: '💰', 
                title: locale === 'nl' ? 'Te Dure Alternatieven' : 'Too Expensive Alternatives',
                desc: locale === 'nl' ? 'Enterprise features tegen SMB-prijzen. Start gratis.' : 'Enterprise features at SMB pricing. Start free.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-navy-light/30 rounded-xl p-6 border border-circuit/20">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
              { step: '1', title: locale === 'nl' ? 'Kies Template' : 'Choose Template', desc: locale === 'nl' ? 'Selecteer uit 15+ platform templates of maak een custom feed' : 'Select from 15+ platform templates or create a custom feed' },
              { step: '2', title: locale === 'nl' ? 'Map Velden' : 'Map Fields', desc: locale === 'nl' ? 'Koppel Shopify velden aan platform vereisten' : 'Map Shopify fields to platform requirements' },
              { step: '3', title: locale === 'nl' ? 'Transformeer Data' : 'Transform Data', desc: locale === 'nl' ? 'Pas data aan met regels, formules en lookup tabellen' : 'Adjust data with rules, formulas, and lookup tables' },
              { step: '4', title: locale === 'nl' ? 'Automatiseer' : 'Automate', desc: locale === 'nl' ? 'Plan updates en deel de live feed URL' : 'Schedule updates and share the live feed URL' },
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
      <section className="py-16 md:py-24 bg-navy-light/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {locale === 'nl' ? 'Klaar om te Starten?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === 'nl' 
              ? 'Installeer FeedMapper PRO en ervaar geautomatiseerd feed management. Start gratis, geen creditcard nodig.'
              : 'Install FeedMapper PRO and experience automated feed management. Start free, no credit card required.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://feedmapper-pro.fly.dev/auth/login"
              target="_blank"
            >
              {t.apps.getStarted}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`/${locale}/apps/feedmapperpro/pricing`}
            >
              {t.apps.viewPricing}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
