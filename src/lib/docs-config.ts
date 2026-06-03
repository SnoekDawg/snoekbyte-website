import type { Locale } from '@/types';

export interface DocsApp {
  /** URL slug and content folder name */
  slug: string;
  /** Display name */
  name: string;
  /** Accent color key used for cards/badges */
  accent: 'circuit' | 'pike';
  /** Link to the marketing/app page */
  appHref: (locale: Locale) => string;
}

/**
 * Apps/programs that have a documentation section.
 * Add a new entry + a content/docs/<slug>/<locale> folder to document a new app.
 */
export const DOCS_APPS: DocsApp[] = [
  {
    slug: 'backorderpro',
    name: 'BackorderPRO',
    accent: 'pike',
    appHref: (locale) => `/${locale}/apps/backorderpro`,
  },
];

export function getDocsApp(slug: string): DocsApp | undefined {
  return DOCS_APPS.find((a) => a.slug === slug);
}

/**
 * Preferred ordering of categories on an app docs home page.
 * Categories not listed here are appended afterwards (alphabetically).
 * Labels are localized via i18n (`t.docs.categories[key]`).
 */
export const CATEGORY_ORDER = ['getting-started', 'configuration', 'preorders', 'faq'];
