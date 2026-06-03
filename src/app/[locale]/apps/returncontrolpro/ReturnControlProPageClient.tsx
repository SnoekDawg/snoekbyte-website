'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import { getReturnControlProContent } from '@/lib/returncontrolpro-content';
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

function MockFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl p-2 bg-gradient-to-br from-circuit/15 to-pike/10 ring-1 ring-white/10 shadow-2xl shadow-black/40 ${className}`}>
      <div className="rounded-lg bg-white overflow-hidden">{children}</div>
    </div>
  );
}

function HeroMock({ locale }: { locale: Locale }) {
  const isNl = locale === 'nl';
  return (
    <MockFrame>
      <div className="bg-gray-50 text-gray-800 text-xs">
        <div className="bg-navy px-4 py-2 flex items-center justify-between">
          <span className="text-white font-semibold text-[10px]">yourstore.myshopify.com</span>
          <span className="text-circuit text-[10px]">Footer</span>
        </div>
        <div className="p-6 text-center border-t border-gray-200">
          <p className="text-gray-500 mb-3">{isNl ? '© 2026 Jouw Webshop' : '© 2026 Your Store'}</p>
          <button type="button" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold text-sm shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isNl ? 'Overeenkomst herroepen' : 'Withdraw from agreement'}
          </button>
          <p className="text-[10px] text-gray-400 mt-2">{isNl ? 'EU-herroepingsknop · ReturnControlPRO' : 'EU withdrawal button · ReturnControlPRO'}</p>
        </div>
      </div>
    </MockFrame>
  );
}

function ShowcaseMock({ variant, locale }: { variant: number; locale: Locale }) {
  const isNl = locale === 'nl';

  if (variant === 0) {
    return (
      <MockFrame>
        <div className="p-4 bg-gray-50 text-xs">
          <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-3 text-center">
            <p className="font-semibold text-amber-800">{isNl ? 'Overeenkomst herroepen' : 'Withdraw from agreement'}</p>
          </div>
        </div>
      </MockFrame>
    );
  }
  if (variant === 1) {
    return (
      <MockFrame>
        <div className="p-4 bg-white text-xs space-y-3">
          <p className="font-bold text-gray-800">{isNl ? 'Stap 1: Bevestig je gegevens' : 'Step 1: Confirm your details'}</p>
          <div className="space-y-2">
            <div className="h-7 bg-gray-100 rounded border border-gray-200 px-2 flex items-center text-gray-400">#1042</div>
            <div className="h-7 bg-gray-100 rounded border border-gray-200 px-2 flex items-center text-gray-400">email@example.com</div>
          </div>
          <div className="rounded bg-amber-50 border border-amber-200 p-2 text-amber-800 text-[10px]">
            {isNl ? 'Stap 2: Bevestig expliciet je herroeping' : 'Step 2: Explicitly confirm withdrawal'}
          </div>
        </div>
      </MockFrame>
    );
  }
  if (variant === 2) {
    return (
      <MockFrame>
        <div className="p-3 bg-navy text-white text-[10px]">
          <p className="font-semibold mb-2 text-circuit">{isNl ? 'Verzoeken inbox' : 'Requests inbox'}</p>
          {['Herroeping #1042', 'Annulering #1038', 'Retour #1031'].map((row, i) => (
            <div key={row} className={`flex justify-between py-1.5 px-2 rounded ${i === 0 ? 'bg-circuit/20' : ''}`}>
              <span>{row}</span>
              <span className={i === 0 ? 'text-pike' : 'text-gray-400'}>{i === 0 ? 'confirmed' : 'pending'}</span>
            </div>
          ))}
        </div>
      </MockFrame>
    );
  }
  if (variant === 3) {
    return (
      <MockFrame>
        <div className="p-4 bg-white text-xs space-y-2">
          <p className="font-bold text-gray-800">{isNl ? 'Bestelling wijzigen' : 'Edit order'}</p>
          {[
            isNl ? 'Adres corrigeren' : 'Fix address',
            isNl ? 'Variant wisselen' : 'Swap variant',
            isNl ? 'Bestelling annuleren' : 'Cancel order',
          ].map((action) => (
            <div key={action} className="flex items-center gap-2 p-2 rounded border border-gray-200">
              <CheckIcon className="text-pike w-4 h-4" />
              <span className="text-gray-700">{action}</span>
            </div>
          ))}
          <p className="text-[10px] text-gray-400">{isNl ? 'Fulfilment: nog niet verzonden ✓' : 'Fulfilment: not shipped yet ✓'}</p>
        </div>
      </MockFrame>
    );
  }
  if (variant === 4) {
    return (
      <MockFrame>
        <div className="p-4 bg-white text-xs space-y-2">
          <p className="font-bold text-gray-800">{isNl ? 'Item ruilen' : 'Exchange item'}</p>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-gray-200 rounded" />
            <div>
              <p className="text-gray-700">Size M → L</p>
              <p className="text-pike text-[10px]">{isNl ? 'Op voorraad' : 'In stock'}</p>
            </div>
          </div>
          <button type="button" className="w-full py-1.5 rounded bg-pike/20 text-pike font-medium">{isNl ? 'Exchange-first' : 'Exchange-first'}</button>
        </div>
      </MockFrame>
    );
  }
  return (
    <MockFrame>
      <div className="p-4 bg-gray-50 text-xs">
        <p className="font-bold text-gray-800 mb-2">{isNl ? 'Mijn bestellingen' : 'My orders'}</p>
        <div className="rounded border border-circuit/30 bg-white p-3">
          <p className="text-gray-700 font-medium">#1042</p>
          <button type="button" className="mt-2 text-circuit font-semibold">{isNl ? 'Bestelling beheren →' : 'Manage order →'}</button>
        </div>
      </div>
    </MockFrame>
  );
}

export default function ReturnControlProPageClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);
  const c = getReturnControlProContent(locale);

  return (
    <div className="min-h-screen">
      {/* Internal notice */}
      <div className="bg-amber-500/90 text-navy text-center text-sm font-semibold py-2 px-4">
        {t.apps.internalUseOnly}
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-circuit/10 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-5">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                {c.hero.badge}
              </div>

              <p className="text-circuit font-medium mb-3">{c.hero.eyebrow}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{c.hero.headline}</h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-7">{c.hero.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <LiveChatButton variant="primary" size="lg">
                  {t.liveChat.start}
                </LiveChatButton>
                <Button variant="secondary" size="lg" href={`/${locale}/apps`}>
                  {t.apps.title}
                </Button>
              </div>

              <p className="text-gray-500 text-sm">{c.hero.trustLine}</p>
            </div>

            <div className="lg:pl-4">
              <HeroMock locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.showcase.title}</h2>
          <p className="text-gray-400 mb-14 max-w-3xl">{c.showcase.intro}</p>
          <div className="space-y-16">
            {c.showcase.items.map((item, i) => (
              <div key={item.title} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <ShowcaseMock variant={i} locale={locale} />
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
          <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/10 to-circuit/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">{c.midCta.title}</h2>
            <LiveChatButton variant="primary" size="lg">{t.liveChat.start}</LiveChatButton>
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

      {/* Roadmap */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{c.roadmap.title}</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">{c.roadmap.intro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.roadmap.phases.map((phase) => (
              <div key={phase.label} className="rounded-xl border border-circuit/20 bg-navy-light/30 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{phase.label}</span>
                <h3 className="text-white font-semibold mt-2 mb-3">{phase.title}</h3>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="text-gray-400 text-xs flex items-start gap-1.5">
                      <span className="text-circuit mt-0.5">·</span>
                      {item}
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-navy-light/20 to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{c.finalCta.title}</h2>
          <p className="text-xl text-circuit font-medium mb-4">{c.finalCta.subtitle}</p>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">{c.finalCta.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiveChatButton variant="primary" size="lg">{t.liveChat.start}</LiveChatButton>
            <Button variant="secondary" size="lg" href={`/${locale}/apps`}>
              {t.apps.title}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
