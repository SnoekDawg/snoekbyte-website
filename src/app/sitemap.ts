import { MetadataRoute } from 'next';

const locales = ['en', 'nl'];
const baseUrl = 'https://snoekbyte.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/products', '/pricing', '/contact'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
