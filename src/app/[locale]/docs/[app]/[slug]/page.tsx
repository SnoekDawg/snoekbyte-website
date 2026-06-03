import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getTranslation } from '@/lib/i18n';
import { getDocsApp } from '@/lib/docs-config';
import { getDocApps, getDocBySlug, getDocsForApp, getDocStaticParams } from '@/lib/docs';
import { mdxComponents } from '@/components/mdx/MdxComponents';
import { DocsBreadcrumbs } from '@/components/docs/DocsBreadcrumbs';
import { DocsSidebar, type SidebarGroup } from '@/components/docs/DocsSidebar';
import { LiveChatButton } from '@/components/ui/LiveChatButton';
import type { Locale } from '@/types';

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: Locale; app: string; slug: string }[] = [];
  for (const app of getDocApps()) {
    for (const p of getDocStaticParams(app)) {
      params.push({ locale: p.locale, app, slug: p.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; app: string; slug: string };
}): Promise<Metadata> {
  const doc = getDocBySlug(params.app, params.locale, params.slug);
  if (!doc) return {};
  const appConfig = getDocsApp(params.app);
  const title = `${doc.title} — ${appConfig?.name ?? params.app} | SnoekByte`;
  const url = `/${params.locale}/docs/${params.app}/${params.slug}`;
  return {
    title,
    description: doc.description,
    alternates: { canonical: url },
    openGraph: { title: doc.title, description: doc.description, url, type: 'article' },
  };
}

export default async function DocArticlePage({
  params,
}: {
  params: { locale: Locale; app: string; slug: string };
}) {
  const { locale, app, slug } = params;
  const appConfig = getDocsApp(app);
  const doc = getDocBySlug(app, locale, slug);
  if (!appConfig || !doc) {
    notFound();
  }

  const t = getTranslation(locale);
  const basePath = `/${locale}/docs/${app}`;
  const categoryLabels = t.docs.categories as unknown as Record<string, string>;

  // Sidebar groups + prev/next from the ordered article list.
  const metas = getDocsForApp(app, locale);
  const groups: SidebarGroup[] = [];
  for (const meta of metas) {
    let group = groups.find((g) => g.category === meta.category);
    if (!group) {
      group = { category: meta.category, label: categoryLabels[meta.category] ?? meta.category, items: [] };
      groups.push(group);
    }
    group.items.push({ slug: meta.slug, title: meta.title });
  }
  const flatIndex = metas.findIndex((m) => m.slug === slug);
  const prev = flatIndex > 0 ? metas[flatIndex - 1] : null;
  const next = flatIndex >= 0 && flatIndex < metas.length - 1 ? metas[flatIndex + 1] : null;

  const { content } = await compileMDX({
    source: doc.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <DocsBreadcrumbs
              items={[
                { label: t.docs.breadcrumb, href: `/${locale}/docs` },
                { label: appConfig.name, href: basePath },
                { label: doc.title },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-10">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <DocsSidebar
                  groups={groups}
                  basePath={basePath}
                  currentSlug={slug}
                  title={t.docs.articlesLabel}
                />
              </div>
            </aside>

            {/* Article */}
            <article className="min-w-0">
              <header className="mb-8">
                <p className="text-circuit text-sm font-medium mb-2">
                  {categoryLabels[doc.category] ?? doc.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{doc.title}</h1>
                {doc.description && <p className="text-lg text-gray-300">{doc.description}</p>}

                {doc.isFallback && (
                  <div className="mt-5 flex items-start gap-3 rounded-lg bg-circuit/5 border border-circuit/20 px-4 py-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-circuit flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t.docs.fallbackNotice}</span>
                  </div>
                )}

                {doc.updated && (
                  <p className="mt-4 text-xs text-gray-500">
                    {t.docs.lastUpdated}: {doc.updated}
                  </p>
                )}
              </header>

              <div className="max-w-none">{content}</div>

              {/* Prev / Next */}
              {(prev || next) && (
                <nav className="mt-14 grid sm:grid-cols-2 gap-4 border-t border-circuit/15 pt-8">
                  {prev ? (
                    <Link
                      href={`${basePath}/${prev.slug}`}
                      className="group rounded-xl bg-navy-light/40 border border-circuit/15 p-4 hover:border-circuit/40 transition-all"
                    >
                      <span className="text-xs uppercase tracking-wider text-gray-500">{t.docs.prev}</span>
                      <p className="text-white font-medium mt-1 group-hover:text-circuit transition-colors">{prev.title}</p>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {next && (
                    <Link
                      href={`${basePath}/${next.slug}`}
                      className="group rounded-xl bg-navy-light/40 border border-circuit/15 p-4 hover:border-circuit/40 transition-all text-right"
                    >
                      <span className="text-xs uppercase tracking-wider text-gray-500">{t.docs.next}</span>
                      <p className="text-white font-medium mt-1 group-hover:text-circuit transition-colors">{next.title}</p>
                    </Link>
                  )}
                </nav>
              )}

              {/* Help CTA */}
              <div className="mt-12 rounded-2xl bg-gradient-to-br from-circuit/10 to-pike/10 border border-circuit/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold">{t.docs.helpTitle}</p>
                  <p className="text-gray-400 text-sm">{t.docs.helpSubtitle}</p>
                </div>
                <LiveChatButton variant="primary" size="md">
                  {t.liveChat.start}
                </LiveChatButton>
              </div>

              <div className="mt-8">
                <Link href={basePath} className="text-sm text-circuit hover:text-circuit-300 transition-colors">
                  ← {t.docs.backToDocs}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
