import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslation, locales } from '@/lib/i18n';
import { getDocsApp, DOCS_APPS } from '@/lib/docs-config';
import { getDocApps, getDocsForApp, getDocsSearchIndex, getDocBySlug } from '@/lib/docs';
import { DocsBreadcrumbs } from '@/components/docs/DocsBreadcrumbs';
import AppDocsClient, { type GuideGroup, type FaqEntry } from './AppDocsClient';
import type { Locale } from '@/types';

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: Locale; app: string }[] = [];
  for (const locale of locales) {
    for (const app of DOCS_APPS) {
      params.push({ locale, app: app.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; app: string };
}): Promise<Metadata> {
  const t = getTranslation(params.locale);
  const appConfig = getDocsApp(params.app);
  const name = appConfig?.name ?? params.app;
  const title = `${name} ${t.docs.breadcrumb} | SnoekByte`;
  const description = `${t.docs.hubSubtitle}`;
  const url = `/${params.locale}/docs/${params.app}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  };
}

function parseFaq(body: string): FaqEntry[] {
  const lines = body.split('\n');
  const entries: FaqEntry[] = [];
  let current: FaqEntry | null = null;
  for (const line of lines) {
    const match = line.match(/^#{2,3}\s+(.+)$/);
    if (match) {
      if (current) entries.push(current);
      current = { question: match[1].trim(), answer: '' };
    } else if (current) {
      current.answer += `${line}\n`;
    }
  }
  if (current) entries.push(current);
  return entries
    .map((e) => ({ question: e.question, answer: e.answer.trim() }))
    .filter((e) => e.question.length > 0 && e.answer.length > 0);
}

export default function AppDocsPage({ params }: { params: { locale: Locale; app: string } }) {
  const { locale, app } = params;
  const appConfig = getDocsApp(app);
  if (!appConfig || !getDocApps().includes(app)) {
    notFound();
  }

  const t = getTranslation(locale);
  const basePath = `/${locale}/docs/${app}`;
  const metas = getDocsForApp(app, locale);
  const searchIndex = getDocsSearchIndex(app, locale);
  const categoryLabels = t.docs.categories as unknown as Record<string, string>;

  // Build guide groups (everything except FAQ), grouped by category in sorted order.
  const guideGroups: GuideGroup[] = [];
  for (const meta of metas) {
    if (meta.category === 'faq') continue;
    let group = guideGroups.find((g) => g.category === meta.category);
    if (!group) {
      group = {
        category: meta.category,
        label: categoryLabels[meta.category] ?? meta.category,
        items: [],
      };
      guideGroups.push(group);
    }
    group.items.push({ slug: meta.slug, title: meta.title, description: meta.description });
  }

  // Build FAQ accordion from all FAQ-category articles.
  const faqMetas = metas.filter((m) => m.category === 'faq');
  const faqItems: FaqEntry[] = [];
  for (const meta of faqMetas) {
    const doc = getDocBySlug(app, locale, meta.slug);
    if (doc) faqItems.push(...parseFaq(doc.content));
  }

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <DocsBreadcrumbs
              items={[
                { label: t.docs.breadcrumb, href: `/${locale}/docs` },
                { label: appConfig.name },
              ]}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{appConfig.name}</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">{t.docs.hubSubtitle}</p>

          <AppDocsClient
            basePath={basePath}
            searchIndex={searchIndex}
            guideGroups={guideGroups}
            faqItems={faqItems}
            categoryLabels={categoryLabels}
            labels={{
              articlesLabel: t.docs.articlesLabel,
              faqTitle: t.docs.faqTitle,
              searchPlaceholder: t.docs.searchPlaceholder,
              searchNoResults: t.docs.searchNoResults,
              searchResults: t.docs.searchResults,
              helpTitle: t.docs.helpTitle,
              helpSubtitle: t.docs.helpSubtitle,
              helpCta: t.liveChat.start,
              readMore: t.docs.next,
            }}
          />
        </div>
      </section>
    </div>
  );
}
