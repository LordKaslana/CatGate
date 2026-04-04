import { MetadataRoute } from 'next'
import { locales } from '@/i18n'

// Базовый URL (замени на свой при деплое)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://catgate.ru'

// Статические страницы
const staticPages = [
  { path: '', priority: 1.0 },
  { path: '/login', priority: 0.7 },
  { path: '/register', priority: 0.8 },
  { path: '/forgot-password', priority: 0.5 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPages) {
      const url = `${BASE_URL}/${locale}${page.path}`
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.path === '' ? 'weekly' : 'monthly',
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${BASE_URL}/${loc}${page.path}`])
          ),
        },
      })
    }
  }

  return sitemapEntries
}