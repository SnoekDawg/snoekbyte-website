'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/types';

export function Hero() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const stats = locale === 'en' 
    ? [
        { value: '€10M+', label: 'Revenue Generated' },
        { value: '10+', label: 'Languages Built' },
        { value: 'Free', label: 'Public Beta' },
        { value: '<48h', label: 'Support Response' },
      ]
    : [
        { value: '€10M+', label: 'Omzet Gegenereerd' },
        { value: '10+', label: 'Talen Gebouwd' },
        { value: 'Gratis', label: 'Publieke Beta' },
        { value: '<48u', label: 'Support Reactie' },
      ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10h80M10 10v80M90 10v80M10 90h80"
                stroke="#4DC3E0"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle cx="10" cy="10" r="2" fill="#4DC3E0" opacity="0.5" />
              <circle cx="90" cy="10" r="2" fill="#4DC3E0" opacity="0.5" />
              <circle cx="10" cy="90" r="2" fill="#4DC3E0" opacity="0.5" />
              <circle cx="90" cy="90" r="2" fill="#4DC3E0" opacity="0.5" />
              <circle cx="50" cy="50" r="3" fill="#5CB85C" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pike/10 border border-pike/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-pike rounded-full animate-pulse" />
            <span className="text-pike text-sm font-medium">
              {locale === 'en' ? 'Public Beta — Free Access' : 'Publieke Beta — Gratis Toegang'}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">{t.hero.title.split(' ').slice(0, -2).join(' ')} </span>
            <span className="gradient-text">{t.hero.title.split(' ').slice(-2).join(' ')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            {t.hero.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <Button variant="primary" size="lg" href={`/${locale}/products`}>
              {t.hero.cta}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/contact`}>
              {t.hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-circuit mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-circuit"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
