'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export default function ProductsPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const workflowSteps = locale === 'en'
    ? [
        { step: '1', title: 'Add Feed', desc: 'Upload URL, FTP, or file' },
        { step: '2', title: 'Map Columns', desc: 'Link SKU/EAN fields' },
        { step: '3', title: 'Set Rules', desc: 'Define backorder conditions' },
        { step: '4', title: 'Schedule', desc: 'Auto-sync daily/weekly' },
        { step: '5', title: 'Done!', desc: 'Inventory managed automatically' },
      ]
    : [
        { step: '1', title: 'Feed Toevoegen', desc: 'Upload URL, FTP of bestand' },
        { step: '2', title: 'Kolommen Mappen', desc: 'Koppel SKU/EAN velden' },
        { step: '3', title: 'Regels Instellen', desc: 'Definieer backorder condities' },
        { step: '4', title: 'Plannen', desc: 'Auto-sync dagelijks/wekelijks' },
        { step: '5', title: 'Klaar!', desc: 'Voorraad automatisch beheerd' },
      ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-circuit/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pike/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pike/10 border border-pike/30 mb-6">
              <span className="w-2 h-2 bg-pike rounded-full animate-pulse" />
              <span className="text-pike text-sm font-medium">
                {locale === 'en' ? 'Free During Public Beta' : 'Gratis Tijdens Publieke Beta'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.products.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* BackorderPRO Main Section */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50/30 border border-circuit/20 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t.products.backorderpro.name}
                </h2>

                <p className="text-xl text-circuit font-medium mb-4">
                  {t.products.backorderpro.tagline}
                </p>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {t.products.backorderpro.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {t.products.backorderpro.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-pike/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    href="https://apps.shopify.com/backorderpro"
                    external
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-.801-.771-1.074-1.042-.802-.273-.802-.273L15.337 24v-.021zm-3.019-9.574c-.477-.253-1.009-.506-1.582-.506-1.284 0-1.347.801-1.347 1.009 0 1.093 2.862 1.516 2.862 4.074 0 2.013-1.284 3.312-3.014 3.312-2.073 0-3.138-1.284-3.138-1.284l.558-1.831s1.093.939 2.013.939c.6 0 .853-.477.853-.822 0-1.432-2.348-1.495-2.348-3.836 0-1.979 1.411-3.893 4.285-3.893 1.106 0 1.652.316 1.652.316l-.795 2.522z"/>
                    </svg>
                    {t.products.backorderpro.cta}
                  </Button>
                  <Button variant="secondary" href={`/${locale}/pricing`}>
                    {locale === 'en' ? 'View Pricing' : 'Bekijk Prijzen'}
                  </Button>
                </div>
              </div>

              {/* Visual - File format support */}
              <div className="relative bg-navy/50 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full max-w-md space-y-6">
                  {/* Supported formats */}
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-400 mb-4">
                      {locale === 'en' ? 'Supported Formats' : 'Ondersteunde Formaten'}
                    </div>
                    <div className="flex justify-center gap-4">
                      {['CSV', 'XLS', 'XLSX', 'XML'].map((format) => (
                        <div key={format} className="px-4 py-2 bg-navy-50 rounded-lg border border-circuit/30 text-circuit font-mono text-sm">
                          {format}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Import sources */}
                  <div className="bg-navy-50 rounded-xl p-6 border border-circuit/20">
                    <div className="text-sm font-medium text-white mb-4">
                      {locale === 'en' ? 'Import Sources' : 'Import Bronnen'}
                    </div>
                    <div className="space-y-3">
                      {[
                        { icon: '🔗', name: locale === 'en' ? 'Direct URL' : 'Directe URL', desc: 'https://supplier.com/feed.csv' },
                        { icon: '📁', name: 'FTP/SFTP', desc: 'ftp://supplier.com/inventory/' },
                        { icon: '📤', name: locale === 'en' ? 'File Upload' : 'Bestand Upload', desc: locale === 'en' ? 'Manual upload supported' : 'Handmatige upload ondersteund' },
                      ].map((source, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-navy/50 rounded-lg">
                          <span className="text-xl">{source.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-white">{source.name}</div>
                            <div className="text-xs text-gray-500 font-mono">{source.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sync indicator */}
                  <div className="flex items-center justify-center gap-3 p-4 bg-pike/10 rounded-xl border border-pike/30">
                    <svg className="w-5 h-5 text-pike animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-pike font-medium">
                      {locale === 'en' ? 'Auto-sync every 24h' : 'Auto-sync elke 24u'}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-circuit/5 via-transparent to-pike/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-navy-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {locale === 'en' ? 'How It Works' : 'Hoe Het Werkt'}
            </h2>
            <p className="section-subtitle mx-auto">
              {locale === 'en' 
                ? 'Get started in under 5 minutes with our simple setup flow'
                : 'Start binnen 5 minuten met onze eenvoudige setup flow'}
            </p>
          </div>

          {/* Workflow steps */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            {workflowSteps.map((item, index) => (
              <React.Fragment key={item.step}>
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-2 flex-1">
                  <div className="w-12 h-12 rounded-full bg-circuit/20 border-2 border-circuit flex items-center justify-center text-circuit font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="md:text-center">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block w-full max-w-[60px] h-0.5 bg-circuit/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {locale === 'en' ? 'Why BackorderPRO?' : 'Waarom BackorderPRO?'}
            </h2>
            <p className="section-subtitle mx-auto">
              {locale === 'en' 
                ? 'Built to solve the real problems dropshippers and retailers face daily'
                : 'Gebouwd om de echte problemen op te lossen waar dropshippers en retailers dagelijks mee te maken hebben'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: locale === 'en' ? 'Save 5+ Hours/Week' : 'Bespaar 5+ Uur/Week',
                description: locale === 'en' 
                  ? 'Stop manually updating inventory from supplier spreadsheets. Let automation handle it.'
                  : 'Stop met handmatig voorraad bijwerken uit leveranciers spreadsheets. Laat automatisering het doen.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: locale === 'en' ? 'Prevent Overselling' : 'Voorkom Overselling',
                description: locale === 'en'
                  ? 'Never accidentally sell products your supplier doesn\'t have. Smart rules protect your business.'
                  : 'Verkoop nooit per ongeluk producten die je leverancier niet heeft. Slimme regels beschermen je bedrijf.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: locale === 'en' ? 'Track Backorder Revenue' : 'Track Backorder Omzet',
                description: locale === 'en'
                  ? 'See exactly how much revenue comes from backorders. Make data-driven inventory decisions.'
                  : 'Zie precies hoeveel omzet uit backorders komt. Neem data-gedreven voorraad beslissingen.',
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-circuit/10 flex items-center justify-center text-circuit mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 lg:py-32 bg-navy-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-circuit/10 border border-circuit/30 mb-6">
              <svg className="w-4 h-4 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-circuit text-sm font-medium">
                {locale === 'en' ? 'Coming Soon' : 'Binnenkort'}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.products.comingSoon.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {t.products.comingSoon.description}
            </p>

            <Button variant="secondary" href={`/${locale}/contact`}>
              {locale === 'en' ? 'Get Notified About New Products' : 'Ontvang Meldingen Over Nieuwe Producten'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
