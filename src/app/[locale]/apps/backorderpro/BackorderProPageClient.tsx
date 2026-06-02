'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getBackorderProContent } from '@/lib/backorderpro-content';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

const SHOPIFY_URL = 'https://apps.shopify.com/backorderpro';

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

function ExternalIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

type ProductLabels = ReturnType<typeof getBackorderProContent>['mockLabels']['product'];
type TrackerLabels = ReturnType<typeof getBackorderProContent>['mockLabels']['tracker'];

function ProductPageMock({ labels }: { labels: ProductLabels }) {
  return (
    <div className="max-w-sm mx-auto rounded-2xl bg-white text-navy shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-hidden">
      <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">{labels.vendor}</div>
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-bold text-lg leading-tight">{labels.name}</h4>
          <span className="font-bold whitespace-nowrap">{labels.price}</span>
        </div>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-red-50 text-red-600 text-xs font-medium px-2.5 py-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          {labels.stockTag}
        </span>

        <div className="mt-4 flex items-center gap-2 rounded-lg bg-amber-50 text-amber-800 text-sm px-3 py-2 border border-amber-200">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H3m10 11h2.5a1 1 0 001-1V9.5a1 1 0 00-.293-.707l-2-2A1 1 0 0016.5 6.5H13" />
          </svg>
          <span className="font-medium">{labels.leadBadge}</span>
        </div>
        <div className="mt-2 text-xs text-slate-500">{labels.restock}</div>

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-circuit text-navy font-semibold py-2.5 leading-tight cursor-default"
        >
          {labels.preorderBtn}
          <span className="block text-[11px] font-normal text-navy/70">{labels.preorderSub}</span>
        </button>
        <div className="mt-2 text-center text-sm text-slate-400 line-through decoration-slate-300">{labels.addToCart}</div>
      </div>
    </div>
  );
}

function TrackerMock({ labels }: { labels: TrackerLabels }) {
  const rows: { order: string; product: string; qty: string; status: 'onTrack' | 'dueSoon' | 'overdue' }[] = [
    { order: '#1042', product: 'Carbon Reel 8000', qty: '2', status: 'onTrack' },
    { order: '#1048', product: 'Bivvy Shelter XL', qty: '1', status: 'dueSoon' },
    { order: '#1051', product: 'Boilies 5 kg', qty: '4', status: 'overdue' },
  ];
  const statusStyles: Record<string, string> = {
    onTrack: 'bg-pike/15 text-pike',
    dueSoon: 'bg-amber-400/15 text-amber-300',
    overdue: 'bg-red-500/15 text-red-300',
  };
  const statusLabel: Record<string, string> = {
    onTrack: labels.statusOnTrack,
    dueSoon: labels.statusDueSoon,
    overdue: labels.statusOverdue,
  };

  return (
    <div className="rounded-2xl bg-navy ring-1 ring-circuit/20 shadow-2xl shadow-black/40 overflow-hidden">
      <div className="px-5 py-3 border-b border-circuit/15 flex items-center gap-2">
        <svg className="w-4 h-4 text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="text-white font-semibold text-sm">{labels.title}</span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 text-xs uppercase tracking-wider">
            <th className="px-4 py-2 font-medium">{labels.colOrder}</th>
            <th className="px-4 py-2 font-medium">{labels.colProduct}</th>
            <th className="px-4 py-2 font-medium text-center">{labels.colQty}</th>
            <th className="px-4 py-2 font-medium text-right">{labels.colStatus}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.order} className="border-t border-circuit/10">
              <td className="px-4 py-3 text-gray-400 font-mono text-xs">{row.order}</td>
              <td className="px-4 py-3 text-gray-200">{row.product}</td>
              <td className="px-4 py-3 text-gray-300 text-center">{row.qty}</td>
              <td className="px-4 py-3 text-right">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[row.status]}`}>
                  {statusLabel[row.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BackorderProPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const c = getBackorderProContent(locale);

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
            <Link href={`/${locale}/apps`} className="hover:text-circuit transition-colors">
              {t.apps.title}
            </Link>
            <span>/</span>
            <span className="text-white">{c.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pike/10 border border-pike/30 text-pike text-xs font-semibold uppercase tracking-wider mb-5">
                <span className="w-2 h-2 bg-pike rounded-full" />
                {c.hero.badge}
              </div>

              <p className="text-circuit font-medium mb-3">{c.hero.eyebrow}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {c.hero.headline}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-7">{c.hero.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="primary" size="lg" href={SHOPIFY_URL} target="_blank">
                  {t.apps.installNow}
                  <ExternalIcon className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg" href={`/${locale}/apps/backorderpro/pricing`}>
                  {t.apps.viewPricing}
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <p className="text-gray-500">{c.hero.trustLine}</p>
              </div>
              <Link
                href={`/${locale}/privacy/backorderpro`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-circuit transition-colors mt-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {t.apps.privacyPolicy}
              </Link>
            </div>

            <div className="lg:pl-4">
              <ProductPageMock labels={c.mockLabels.product} />
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

      {/* Problem -> Solution */}
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">{c.problemSolutions.problemLabel}</span>
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-pike">{c.problemSolutions.solutionLabel}</span>
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

      {/* Showcase with mockups */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.showcase.title}</h2>
          <p className="text-gray-400 mb-14 max-w-3xl">{c.showcase.intro}</p>
          <div className="space-y-16">
            {c.showcase.items.map((item, i) => (
              <div key={item.title} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  {item.mock === 'product' ? (
                    <ProductPageMock labels={c.mockLabels.product} />
                  ) : (
                    <TrackerMock labels={c.mockLabels.tracker} />
                  )}
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20 bg-navy-light/20">
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
            <Button variant="primary" size="lg" href={SHOPIFY_URL} target="_blank">
              {t.apps.installNow}
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.features.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.features.intro}</p>
          <div className="grid lg:grid-cols-3 gap-8">
            {c.features.groups.map((group) => (
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

      {/* How it works */}
      <section className="py-16 md:py-20 bg-navy-light/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.howItWorks.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.howItWorks.intro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.howItWorks.steps.map((step) => (
              <div key={step.number} className="relative bg-navy/50 rounded-xl p-6 border border-circuit/20">
                <div className="w-12 h-12 rounded-full bg-circuit/20 border-2 border-circuit flex items-center justify-center mb-4">
                  <span className="text-circuit font-bold">{step.number}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.security.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">{c.security.lead}</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.security.points.map((point) => (
              <div key={point.title} className="flex items-start gap-3 bg-navy-light/30 rounded-xl p-6 border border-circuit/20">
                <CheckIcon className="text-pike mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-pike pl-5 py-2 bg-pike/5 rounded-r-xl">
            <p className="text-gray-200 font-medium leading-relaxed">{c.security.conclusion}</p>
          </blockquote>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-navy-light/20">
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{c.finalCta.title}</h2>
          <p className="text-xl text-circuit font-medium mb-4">{c.finalCta.subtitle}</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">{c.finalCta.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href={SHOPIFY_URL} target="_blank">
              {t.apps.installNow}
            </Button>
            <Button variant="secondary" size="lg" href={`/${locale}/apps/backorderpro/pricing`}>
              {t.apps.viewPricing}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
