'use client';

import React from 'react';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/types';

export function About() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="section-title mb-6">
              {t.about.title}
            </h2>
            <p className="text-circuit text-lg font-medium mb-4">
              {t.about.subtitle}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-light/50 to-navy border border-circuit/20 rounded-2xl p-8 backdrop-blur-sm">
              {/* Decorative circuit pattern */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="3" fill="#4DC3E0" />
                  <path d="M50 50 L80 50 L80 20" stroke="#4DC3E0" strokeWidth="2" />
                  <path d="M50 50 L20 50 L20 80" stroke="#4DC3E0" strokeWidth="2" />
                  <circle cx="80" cy="20" r="3" fill="#5CB85C" />
                  <circle cx="20" cy="80" r="3" fill="#5CB85C" />
                </svg>
              </div>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                {t.about.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`p-4 rounded-xl ${
                      index === 0 ? 'bg-circuit/10 border border-circuit/30' : 'bg-white/5'
                    }`}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="mt-6 flex items-center gap-3 p-3 bg-pike/10 rounded-lg border border-pike/30">
                <div className="w-10 h-10 bg-pike/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-pike" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Battle-Tested Daily</div>
                  <div className="text-gray-400 text-xs">We use our own tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
