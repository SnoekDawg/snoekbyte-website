'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import { getFitInDeBuurtContent } from '@/lib/fitindebuurt-content';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

function CheckIcon({ className = 'text-pike' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ExternalIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function FitInDeBuurtPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const c = getFitInDeBuurtContent(locale);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
            <Link href={`/${locale}/services`} className="hover:text-circuit transition-colors">
              {t.services.title}
            </Link>
            <span>/</span>
            <span className="text-white">{c.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pike/10 border border-pike/30 text-pike text-xs font-semibold uppercase tracking-wider mb-5">
            {c.hero.badge}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit/10 border border-circuit/30 text-circuit text-xs font-semibold uppercase tracking-wider mb-5 ml-0 sm:ml-3">
            {c.hero.eyebrow}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl">
            {c.hero.headline}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-7 max-w-3xl">{c.hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <LiveChatButton variant="primary" size="lg">
              {t.liveChat.start}
            </LiveChatButton>
            <a
              href={c.liveUrl.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-circuit/40 text-circuit hover:bg-circuit/10 transition-colors font-medium"
            >
              {c.hero.viewSite}
              <ExternalIcon />
            </a>
          </div>

          {/* Meta facts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            {c.hero.meta.map((m) => (
              <div key={m.label} className="rounded-xl border border-circuit/15 bg-navy-light/30 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-circuit mb-1">{m.label}</div>
                <div className="text-sm text-gray-300 leading-snug">{m.value}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-6">{c.hero.trustLine}</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-circuit/15 bg-navy-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{c.problem.title}</h2>
          <div className="space-y-5">
            {c.problem.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Solution — audiences */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy to-navy-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.solution.title}</h2>
            <p className="text-gray-400 text-lg">{c.solution.intro}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.solution.audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-circuit/20 bg-navy-light/30 p-7 hover:border-circuit/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-gray-400 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-pike/30 bg-pike/5 p-6 flex gap-4 items-start">
            <CheckIcon className="text-pike mt-0.5" />
            <p className="text-gray-300 leading-relaxed">{c.solution.note}</p>
          </div>
        </div>
      </section>

      {/* Four choices */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.choices.title}</h2>
            <p className="text-gray-400 text-lg">{c.choices.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.choices.items.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-circuit/20 bg-navy-light/30 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-circuit/15 text-circuit font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.highlights.title}</h2>
            <p className="text-gray-400 text-lg">{c.highlights.intro}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.highlights.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-circuit/20 bg-gradient-to-br from-circuit/10 to-pike/5 p-7">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-circuit/30 bg-gradient-to-br from-circuit/10 to-pike/5 p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{c.midCta.title}</h2>
            <LiveChatButton variant="primary" size="lg">
              {c.midCta.button}
            </LiveChatButton>
          </div>
        </div>
      </section>

      {/* Under the hood */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.underTheHood.title}</h2>
            <p className="text-gray-400 text-lg">{c.underTheHood.intro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="overflow-hidden rounded-2xl border border-circuit/20">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/40 text-gray-300">
                    <th className="px-5 py-3 font-semibold">{c.underTheHood.layerLabel}</th>
                    <th className="px-5 py-3 font-semibold">{c.underTheHood.techLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.underTheHood.techStack.map((row, i) => (
                    <tr key={row.layer} className={i % 2 === 0 ? 'bg-navy-light/10' : 'bg-navy-light/20'}>
                      <td className="px-5 py-3 font-medium text-circuit whitespace-nowrap align-top">{row.layer}</td>
                      <td className="px-5 py-3 text-gray-400">{row.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-4">
              {c.underTheHood.principles.map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckIcon className="text-circuit mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy to-navy-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.quality.title}</h2>
            <p className="text-gray-400 text-lg">{c.quality.intro}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="overflow-hidden rounded-2xl border border-circuit/20">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/40 text-gray-300">
                    <th className="px-5 py-3 font-semibold">{c.quality.metricLabel}</th>
                    <th className="px-5 py-3 font-semibold">{c.quality.sizeLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.quality.metrics.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-navy-light/10' : 'bg-navy-light/20'}>
                      <td className="px-5 py-3 font-medium text-white align-top">{row.label}</td>
                      <td className="px-5 py-3 text-gray-400">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              {c.quality.points.map((point) => (
                <div key={point.title}>
                  <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.roadmap.title}</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">{c.roadmap.status}</p>
          <div className="rounded-2xl border border-circuit/20 bg-navy-light/30 p-7">
            <div className="text-xs font-semibold uppercase tracking-wide text-circuit mb-4">{c.roadmap.nextLabel}</div>
            <ul className="space-y-3">
              {c.roadmap.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <ArrowRightIcon className="w-4 h-4 text-pike mt-1 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.cta.title}</h2>
          <p className="text-circuit font-medium mb-4">{c.cta.subtitle}</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{c.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiveChatButton variant="primary" size="lg">
              {c.cta.button}
            </LiveChatButton>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-circuit/40 text-circuit hover:bg-circuit/10 transition-colors font-medium"
            >
              {t.nav.contact}
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
