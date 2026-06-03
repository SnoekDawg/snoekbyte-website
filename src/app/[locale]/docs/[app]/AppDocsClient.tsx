'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DocsSearch } from '@/components/docs/DocsSearch';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import type { DocSearchEntry } from '@/lib/docs';

export interface GuideItem {
  slug: string;
  title: string;
  description: string;
}

export interface GuideGroup {
  category: string;
  label: string;
  items: GuideItem[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

interface AppDocsClientProps {
  basePath: string;
  searchIndex: DocSearchEntry[];
  guideGroups: GuideGroup[];
  faqItems: FaqEntry[];
  faqSlug?: string;
  labels: {
    articlesLabel: string;
    faqTitle: string;
    searchPlaceholder: string;
    searchNoResults: string;
    searchResults: string;
    helpTitle: string;
    helpSubtitle: string;
    helpCta: string;
    readMore: string;
  };
  categoryLabels: Record<string, string>;
}

function ArticleArrow() {
  return (
    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 text-circuit transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function AppDocsClient({
  basePath,
  searchIndex,
  guideGroups,
  faqItems,
  faqSlug,
  labels,
  categoryLabels,
}: AppDocsClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Search */}
      <div className="max-w-2xl">
        <DocsSearch
          index={searchIndex}
          basePath={basePath}
          placeholder={labels.searchPlaceholder}
          noResults={labels.searchNoResults}
          resultsLabel={labels.searchResults}
          categoryLabels={categoryLabels}
        />
      </div>

      {/* Guides & tutorials */}
      {guideGroups.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">{labels.articlesLabel}</h2>
          <div className="space-y-12">
            {guideGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-circuit mb-4">{group.label}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`${basePath}/${item.slug}`}
                      className="group rounded-xl bg-navy-light/40 border border-circuit/15 p-5 hover:border-circuit/40 hover:bg-navy-light/60 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <span className="text-circuit mt-1">
                          <ArticleArrow />
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ accordion */}
      {faqItems.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">{labels.faqTitle}</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl bg-navy-light/40 border border-circuit/15 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-white font-medium">{item.question}</span>
                    <Chevron open={open} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 -mt-1">
                      {item.answer.split('\n\n').map((para, j) => (
                        <p key={j} className="text-gray-400 text-sm leading-relaxed mb-2 last:mb-0">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {faqSlug && (
            <Link
              href={`${basePath}/${faqSlug}`}
              className="inline-flex items-center gap-1 text-sm text-circuit hover:text-circuit-300 transition-colors mt-5"
            >
              {labels.readMore}
              <ArticleArrow />
            </Link>
          )}
        </section>
      )}

      {/* Help CTA */}
      <section className="mt-16 rounded-2xl bg-gradient-to-br from-circuit/10 to-pike/10 border border-circuit/20 p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{labels.helpTitle}</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">{labels.helpSubtitle}</p>
        <div className="flex justify-center">
          <LiveChatButton variant="primary" size="md">
            {labels.helpCta}
          </LiveChatButton>
        </div>
      </section>
    </>
  );
}
