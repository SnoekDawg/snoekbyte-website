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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.products.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* BackorderPRO Section */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50/30 border border-circuit/20 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pike/10 border border-pike/30 mb-6">
                  <span className="w-2 h-2 bg-pike rounded-full animate-pulse" />
                  <span className="text-pike text-sm font-medium">Flagship Product</span>
                </div>

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
                    View Pricing
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative bg-navy/50 p-8 lg:p-12 flex items-center justify-center">
                {/* Mock UI */}
                <div className="w-full max-w-md space-y-6">
                  {/* Product card mock */}
                  <div className="bg-white rounded-xl p-6 shadow-xl">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">Premium Headphones</h3>
                        <p className="text-sm text-gray-500 mt-1">Wireless Noise Cancelling</p>
                        <p className="text-lg font-bold text-gray-900 mt-2">$299.00</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="text-sm text-red-500 font-medium">Out of Stock</div>
                      <button className="w-full py-3 px-4 bg-pike text-white font-semibold rounded-lg hover:bg-pike-700 transition-colors">
                        Pre-Order Now
                      </button>
                      <p className="text-xs text-gray-500 text-center">Expected restock: Feb 15, 2024</p>
                    </div>
                  </div>

                  {/* Notification mock */}
                  <div className="bg-navy-50 rounded-xl p-4 border border-circuit/30 animate-slide-up">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-pike/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Pre-order Confirmed!</p>
                        <p className="text-xs text-gray-400 mt-1">Customer will be notified when item ships</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-circuit/5 via-transparent to-pike/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32 bg-navy-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How BackorderPRO Helps You</h2>
            <p className="section-subtitle mx-auto">
              Turn inventory challenges into opportunities for growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Recover Lost Revenue',
                description: 'Stop losing sales when products go out of stock. Capture customer intent and convert it into orders.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                title: 'Automated Updates',
                description: 'Keep customers informed automatically with email notifications about their pre-order status.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Actionable Insights',
                description: 'Understand demand patterns with analytics that help you make smarter inventory decisions.',
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
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-circuit/10 border border-circuit/30 mb-6">
              <svg className="w-4 h-4 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-circuit text-sm font-medium">Coming Soon</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.products.comingSoon.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {t.products.comingSoon.description}
            </p>

            <Button variant="secondary" href={`/${locale}/contact`}>
              Get Notified About New Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
