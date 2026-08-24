import { MetadataRoute } from 'next';
import { getDocApps, getCanonicalSlugs } from '@/lib/docs';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];
const baseUrl = 'https://snoekbyte.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', // Home
    '/apps',
    '/apps/backorderpro',
    '/apps/backorderpro/pricing',
    '/apps/returncontrolpro',
    '/services',
    '/services/web-development',
    '/services/marketing',
    '/services/app-development',
    '/services/karpcore',
    '/services/fitindebuurt',
    '/docs',
    '/contact',
    '/privacy/feedmapperpro',
    '/privacy/backorderpro',
  ];

  // Docs routes (hub is already covered above): app homes + articles.
  const docApps = getDocApps();
  for (const app of docApps) {
    routes.push(`/docs/${app}`);
    for (const slug of getCanonicalSlugs(app)) {
      routes.push(`/docs/${app}/${slug}`);
    }
  }

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.includes('/apps') ? 0.9 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
