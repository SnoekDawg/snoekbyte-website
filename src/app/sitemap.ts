import { MetadataRoute } from 'next';

const locales = ['en', 'nl', 'de', 'fr', 'es', 'pl', 'cs', 'sv'];
const baseUrl = 'https://snoekbyte.nl';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', // Home
    '/apps',
    '/apps/backorderpro',
    '/apps/backorderpro/pricing',
    '/services',
    '/services/web-development',
    '/services/marketing',
    '/services/app-development',
    '/contact',
    '/privacy/backorderpro',
  ];
  
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
