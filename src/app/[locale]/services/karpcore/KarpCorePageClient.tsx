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

function ExternalIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-circuit/25 bg-navy shadow-2xl shadow-circuit/10">
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-light/60 border-b border-circuit/15">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-pike/70" />
        <div className="ml-3 flex-1 truncate rounded-md bg-navy/70 px-3 py-1 text-xs text-gray-400">{url}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

const mockProducts = [
  { name: 'Hengel Pro X', dealer: '€ 89,00', rrp: '€ 149,00', from: 'from-circuit/40', to: 'to-pike/30' },
  { name: 'Karper Voer 5kg', dealer: '€ 12,50', rrp: '€ 19,95', from: 'from-pike/40', to: 'to-circuit/30' },
  { name: 'Molen Carbon', dealer: '€ 64,00', rrp: '€ 109,00', from: 'from-circuit/30', to: 'to-navy-light' },
  { name: 'Tent Bivvy 2-man', dealer: '€ 210,00', rrp: '€ 329,00', from: 'from-pike/30', to: 'to-circuit/40' },
];

function DealerPortalMock() {
  return (
    <BrowserFrame url="karpcore.com  ·  ingelogd als dealer">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] uppercase tracking-wider text-gray-500">Jouw merken</span>
        <span className="text-[11px] text-pike">3 vrijgegeven</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {['Merk A', 'Merk B', 'Merk C'].map((b) => (
          <span key={b} className="px-2.5 py-1 rounded-full text-xs bg-circuit/15 border border-circuit/30 text-circuit">
            {b}
          </span>
        ))}
        <span className="px-2.5 py-1 rounded-full text-xs bg-navy-light/40 border border-white/5 text-gray-600 line-through">
          Merk D
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {mockProducts.map((p) => (
          <div key={p.name} className="rounded-lg border border-circuit/15 bg-navy-light/30 p-2.5">
            <div className={`h-14 rounded-md bg-gradient-to-br ${p.from} ${p.to} mb-2`} />
            <p className="text-xs text-gray-300 font-medium truncate">{p.name}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-sm font-bold text-pike">{p.dealer}</span>
              <span className="text-[11px] text-gray-500 line-through">{p.rrp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-gray-500 text-center">Jouw dealerprijs · adviesprijs ernaast</div>
    </BrowserFrame>
  );
}

const mockAccess = [
  { brand: 'Merk A', on: true },
  { brand: 'Merk B', on: true },
  { brand: 'Merk C', on: true },
  { brand: 'Merk D', on: false },
  { brand: 'Merk E', on: false },
];

function AdminToggleMock() {
  return (
    <BrowserFrame url="admin.karpcore.com  ·  merktoegang">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gray-500">Bedrijf</p>
          <p className="text-sm text-white font-semibold">Jansen Hengelsport B.V.</p>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-pike/15 text-pike border border-pike/30">
          audit-log aan
        </span>
      </div>
      <div className="space-y-2">
        {mockAccess.map((row) => (
          <div
            key={row.brand}
            className="flex items-center justify-between rounded-lg border border-circuit/15 bg-navy-light/30 px-3 py-2.5"
          >
            <span className="text-sm text-gray-300">{row.brand}</span>
            <span
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                row.on ? 'bg-pike/70' : 'bg-navy-light border border-white/10'
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                  row.on ? 'translate-x-4' : 'translate-x-1'
                }`}
              />
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-gray-500 text-center">Zet merken per bedrijf aan of uit — met één klik</p>
    </BrowserFrame>
  );
}

export default function KarpCorePageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit/10 border border-circuit/30 text-circuit text-xs font-semibold uppercase tracking-wider mb-5">
                {c.hero.eyebrow}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {c.hero.headline}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-7">{c.hero.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
                  <ExternalIcon />
                </a>
              </div>

              <p className="text-sm text-gray-500">{c.hero.trustLine}</p>
            </div>

            <div className="lg:pl-4">
              <DealerPortalMock />
            </div>
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
              <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CrossIcon className="text-red-400 w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Probleem</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pair.problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pair.problem.text}</p>
                </div>

                <div className="hidden md:flex items-center justify-center text-circuit">
                  <ArrowIcon />
                </div>
                <div className="flex md:hidden items-center justify-center text-circuit -my-2">
                  <ArrowIcon className="rotate-90" />
                </div>

                <div className="bg-pike/5 border border-pike/30 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckIcon className="text-pike w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-pike">Oplossing</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{pair.solution.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pair.solution.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.beforeAfter.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.beforeAfter.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <CrossIcon className="text-red-400 w-5 h-5" />
                {c.beforeAfter.before.title}
              </h3>
              <ul className="space-y-3">
                {c.beforeAfter.before.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <CrossIcon className="text-red-400/70 w-4 h-4 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-pike/30 bg-pike/5 p-6">
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <CheckIcon className="text-pike w-5 h-5" />
                {c.beforeAfter.after.title}
              </h3>
              <ul className="space-y-3">
                {c.beforeAfter.after.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckIcon className="text-pike w-4 h-4 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.outcomes.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.outcomes.intro}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.outcomes.items.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-navy-light/30 rounded-xl p-6 border border-circuit/20">
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

      {/* Mid CTA */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-circuit/25 bg-gradient-to-r from-circuit/10 to-pike/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">{c.midCta.title}</h2>
            <LiveChatButton variant="primary" size="lg">
              {t.liveChat.start}
            </LiveChatButton>
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
              <div key={group.title} className="bg-navy-light/30 backdrop-blur-sm rounded-2xl border border-circuit/20 p-6">
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

      {/* Security with admin mock */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.security.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{c.security.lead}</p>
              <div className="space-y-5">
                {c.security.points.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <CheckIcon className="text-pike mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <AdminToggleMock />
              <blockquote className="mt-6 border-l-4 border-pike pl-5 py-2 bg-pike/5 rounded-r-xl">
                <p className="text-gray-200 font-medium text-sm leading-relaxed">{c.security.conclusion}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl border border-circuit/20 bg-navy-light/30 p-8 md:p-12 text-center">
            <svg className="w-10 h-10 text-circuit/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 8c-2.5 0-4.5 2-4.5 4.5S7 17 9.5 17c.3 0 .5 0 .8-.1-.6 1.3-1.8 2.3-3.3 2.6v2.5c3.7-.5 6.5-3.7 6.5-7.5V12.5C13.5 9.5 11.7 8 9.5 8zm9 0c-2.5 0-4.5 2-4.5 4.5S16 17 18.5 17c.3 0 .5 0 .8-.1-.6 1.3-1.8 2.3-3.3 2.6v2.5c3.7-.5 6.5-3.7 6.5-7.5V12.5C22.5 9.5 20.7 8 18.5 8z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 italic">&ldquo;{c.testimonial.quote}&rdquo;</p>
            <div className="text-white font-semibold">{c.testimonial.name}</div>
            <div className="text-gray-400 text-sm">{c.testimonial.role}</div>
            {c.testimonial.placeholder && (
              <span className="absolute top-4 right-4 text-[11px] px-2 py-0.5 rounded-full bg-navy border border-circuit/30 text-gray-500">
                placeholder
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.process.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.process.intro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.process.steps.map((step) => (
              <div key={step.number} className="relative bg-navy/50 rounded-xl p-6 border border-circuit/20">
                <div className="text-3xl font-bold text-circuit/40 mb-3">{step.number}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
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

      {/* Under the hood (collapsible) */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <details className="group">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{c.underTheHood.title}</h2>
                <p className="text-gray-400 mt-2 max-w-3xl">{c.underTheHood.intro}</p>
              </div>
              <svg
                className="w-6 h-6 flex-shrink-0 text-circuit transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="mt-8">
              <div className="overflow-x-auto rounded-xl border border-circuit/20 mb-8">
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
          </details>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">{c.faq.title}</h2>
          <div className="space-y-4">
            {c.faq.items.map((item) => (
              <details key={item.question} className="group bg-navy-light/30 rounded-xl border border-circuit/20 overflow-hidden">
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
