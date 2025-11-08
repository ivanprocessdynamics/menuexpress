import { MetadataRoute } from 'next';
import { templates } from '@/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webdynamics.es';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Template pages
  const templatePages: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/plantillas/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Demo pages (not indexed by search engines)
  const demoPages: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/demo/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [...staticPages, ...templatePages, ...demoPages];
}
