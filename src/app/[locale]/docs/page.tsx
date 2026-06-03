import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslation, locales } from '@/lib/i18n';
import { DOCS_APPS } from '@/lib/docs-config';
import { getDocApps } from '@/lib/docs';
import type { Locale } from '@/types';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = getTranslation(params.locale);
  const url = `/${params.locale}/docs`;
  return {
    title: `${t.docs.hubTitle} | SnoekByte`,
    description: t.docs.hubSubtitle,
    alternates: { canonical: url },
    openGraph: { title: t.docs.hubTitle, description: t.docs.hubSubtitle, url, type: 'website' },
  };
}

const accentClasses: Record<string, string> = {
  circuit: 'from-circuit/15 to-circuit/5 border-circuit/25 text-circuit',
  pike: 'from-pike/15 to-pike/5 border-pike/25 text-pike',
};

export default function DocsHubPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslation(locale);
  const available = getDocApps();
  const apps = DOCS_APPS.filter((a) => available.includes(a.slug));

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-circuit/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pike/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-circuit/10 border border-circuit/30 text-circuit text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 bg-circuit rounded-full" />
              {t.nav.docs}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.docs.hubTitle}</h1>
            <p className="text-lg text-gray-300 leading-relaxed">{t.docs.hubSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {apps.map((app) => (
              <Link
                key={app.slug}
                href={`/${locale}/docs/${app.slug}`}
                className={`group rounded-2xl bg-gradient-to-br border p-7 transition-all hover:scale-[1.02] ${
                  accentClasses[app.accent] ?? accentClasses.circuit
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-white">{app.name}</h2>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium">{t.docs.hubCta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
