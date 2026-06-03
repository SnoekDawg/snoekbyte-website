import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Locale } from '@/types';
import { locales, defaultLocale } from '@/lib/i18n';
import { CATEGORY_ORDER, DOCS_APPS } from '@/lib/docs-config';

const DOCS_DIR = path.join(process.cwd(), 'content', 'docs');

export interface DocFrontmatter {
  title: string;
  description: string;
  category: string;
  order?: number;
  updated?: string;
}

export interface DocMeta extends DocFrontmatter {
  slug: string;
  app: string;
  locale: Locale;
  /** True when the requested locale was missing and English content is shown */
  isFallback: boolean;
}

export interface DocArticle extends DocMeta {
  /** Raw MDX body (without frontmatter) */
  content: string;
}

export interface DocSearchEntry {
  slug: string;
  title: string;
  description: string;
  category: string;
  headings: string[];
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/** All apps that have a docs content folder AND a config entry. */
export function getDocApps(): string[] {
  const folders = safeReadDir(DOCS_DIR).filter((entry) => {
    try {
      return fs.statSync(path.join(DOCS_DIR, entry)).isDirectory();
    } catch {
      return false;
    }
  });
  return DOCS_APPS.map((a) => a.slug).filter((slug) => folders.includes(slug));
}

/** Slugs that exist for a given app + locale. */
function listSlugs(app: string, locale: Locale): string[] {
  const dir = path.join(DOCS_DIR, app, locale);
  return safeReadDir(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Canonical slug set for an app = the English slugs (English is the fallback
 * language). This guarantees every locale exposes the same set of routes.
 */
export function getCanonicalSlugs(app: string): string[] {
  const enSlugs = listSlugs(app, defaultLocale);
  return enSlugs.length > 0 ? enSlugs : listSlugs(app, 'nl');
}

function readRaw(app: string, locale: Locale, slug: string): string | null {
  const file = path.join(DOCS_DIR, app, locale, `${slug}.mdx`);
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return null;
  }
}

function parseFrontmatter(raw: string): { data: DocFrontmatter; body: string } {
  const { data, content } = matter(raw);
  return {
    data: {
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      category: String(data.category ?? 'general'),
      order: typeof data.order === 'number' ? data.order : undefined,
      updated: data.updated ? String(data.updated) : undefined,
    },
    body: content,
  };
}

/** Read a single article with English fallback. Returns null if it doesn't exist anywhere. */
export function getDocBySlug(app: string, locale: Locale, slug: string): DocArticle | null {
  let isFallback = false;
  let raw = readRaw(app, locale, slug);
  if (raw === null && locale !== defaultLocale) {
    raw = readRaw(app, defaultLocale, slug);
    isFallback = true;
  }
  if (raw === null) return null;

  const { data, body } = parseFrontmatter(raw);
  return { ...data, slug, app, locale, isFallback, content: body };
}

function categoryRank(category: string): number {
  const idx = CATEGORY_ORDER.indexOf(category);
  return idx === -1 ? CATEGORY_ORDER.length : idx;
}

function sortMetas(a: DocMeta, b: DocMeta): number {
  const catDiff = categoryRank(a.category) - categoryRank(b.category);
  if (catDiff !== 0) return catDiff;
  const orderDiff = (a.order ?? 999) - (b.order ?? 999);
  if (orderDiff !== 0) return orderDiff;
  return a.title.localeCompare(b.title);
}

/** All article metas for an app + locale (with English fallback), sorted by category + order. */
export function getDocsForApp(app: string, locale: Locale): DocMeta[] {
  const metas = getCanonicalSlugs(app)
    .map((slug) => {
      const doc = getDocBySlug(app, locale, slug);
      if (!doc) return null;
      const { content, ...meta } = doc;
      void content;
      return meta;
    })
    .filter((m): m is DocMeta => m !== null);
  return metas.sort(sortMetas);
}

/** Distinct category keys for an app, in display order. */
export function getCategoriesForApp(app: string, locale: Locale): string[] {
  const cats = Array.from(new Set(getDocsForApp(app, locale).map((m) => m.category)));
  return cats.sort((a, b) => categoryRank(a) - categoryRank(b));
}

function extractHeadings(body: string): string[] {
  const matches = body.match(/^#{2,3}\s+(.+)$/gm) ?? [];
  return matches.map((h) => h.replace(/^#{2,3}\s+/, '').trim());
}

/** Lightweight search index for an app + locale (used by the client-side search). */
export function getDocsSearchIndex(app: string, locale: Locale): DocSearchEntry[] {
  return getCanonicalSlugs(app)
    .map((slug) => {
      const doc = getDocBySlug(app, locale, slug);
      if (!doc) return null;
      return {
        slug: doc.slug,
        title: doc.title,
        description: doc.description,
        category: doc.category,
        headings: extractHeadings(doc.content),
      };
    })
    .filter((e): e is DocSearchEntry => e !== null);
}

/** Every (locale, slug) pair for an app — used by generateStaticParams. */
export function getDocStaticParams(app: string): { locale: Locale; slug: string }[] {
  const slugs = getCanonicalSlugs(app);
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}
