'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import { karpCoreContent as c } from '@/lib/karpcore-content';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

function CheckIcon({ className = 'text-pike' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon({ className = 'text-red-400' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export default function KarpCorePageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
            <Link href={`/${locale}/services`} className="hover:text-circuit transition-colors">
              {t.services.title}
            </Link>
            <span>/</span>
            <span className="text-white">{c.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit/10 border border-circuit/30 text-circuit text-xs font-semibold uppercase tracking-wider mb-6">
            {c.hero.badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {c.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
            {c.hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <LiveChatButton variant="primary" size="lg">
              {t.liveChat.start}
            </LiveChatButton>
            <a
              href="https://karpcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-circuit/40 text-circuit hover:bg-circuit/10 transition-colors font-medium"
            >
              Bekijk het live platform
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {c.hero.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full text-sm bg-navy-light/50 border border-circuit/20 text-gray-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-circuit/15 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-circuit mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem -> Solution (hak-a-tak) */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.problemSolutions.title}</h2>
          <p className="text-gray-400 mb-12 text-lg max-w-3xl">{c.problemSolutions.intro}</p>

          <div className="space-y-8">
            {c.problemSolutions.pairs.map((pair, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch"
              >
                {/* Problem */}
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CrossIcon className="text-red-400 w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      Probleem
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pair.problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pair.problem.text}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center text-circuit">
                  <ArrowIcon />
                </div>
                <div className="flex md:hidden items-center justify-center text-circuit -my-2">
                  <ArrowIcon className="rotate-90" />
                </div>

                {/* Solution */}
                <div className="bg-pike/5 border border-pike/30 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckIcon className="text-pike w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-pike">
                      Oplossing
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pair.solution.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pair.solution.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes / what you get */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.outcomes.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.outcomes.intro}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.outcomes.items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-navy/50 rounded-xl p-6 border border-circuit/20"
              >
                <CheckIcon className="text-pike mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.features.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.features.intro}</p>
          <div className="grid lg:grid-cols-3 gap-8">
            {[c.features.dealer, c.features.operator, c.features.integrations].map((group) => (
              <div
                key={group.title}
                className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-circuit/20 p-6"
              >
                <h3 className="text-lg font-bold text-white mb-1">{group.title}</h3>
                <p className="text-circuit text-sm mb-5">{group.subtitle}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckIcon className="text-circuit w-4 h-4 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.security.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">{c.security.lead}</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {c.security.points.map((point) => (
              <div
                key={point.title}
                className="bg-navy/50 rounded-xl p-6 border border-circuit/20"
              >
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <CheckIcon className="text-pike w-5 h-5" />
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="border-l-4 border-pike pl-6 py-2 bg-pike/5 rounded-r-xl">
            <p className="text-gray-200 font-medium leading-relaxed">{c.security.conclusion}</p>
          </blockquote>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{c.results.title}</h2>
          <ul className="space-y-4">
            {c.results.items.map((result) => (
              <li key={result} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                <CheckIcon className="text-pike mt-0.5" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Under the hood */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.underTheHood.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.underTheHood.intro}</p>

          <div className="overflow-x-auto rounded-xl border border-circuit/20 mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 text-white font-semibold">Laag</th>
                  <th className="text-left p-4 text-white font-semibold">Technologie</th>
                  <th className="text-left p-4 text-white font-semibold">Waarom</th>
                </tr>
              </thead>
              <tbody>
                {c.underTheHood.techStack.map((row) => (
                  <tr key={row.layer} className="border-t border-circuit/10">
                    <td className="p-4 text-gray-300 font-medium">{row.layer}</td>
                    <td className="p-4 text-circuit">{row.tech}</td>
                    <td className="p-4 text-gray-400">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-3">
            {c.underTheHood.principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-gray-300">
                <CheckIcon className="text-circuit mt-0.5" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">{c.faq.title}</h2>
          <div className="space-y-4">
            {c.faq.items.map((item) => (
              <details
                key={item.question}
                className="group bg-navy-light/30 rounded-xl border border-circuit/20 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-white font-medium hover:text-circuit transition-colors">
                  <span>{item.question}</span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-circuit transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
          <p className="text-xl text-circuit font-medium mb-4">{c.cta.subtitle}</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">{c.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiveChatButton variant="primary" size="lg">
              {t.liveChat.start}
            </LiveChatButton>
            <a
              href="https://karpcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-circuit/40 text-circuit hover:bg-circuit/10 transition-colors font-medium"
            >
              Bekijk het live platform
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
