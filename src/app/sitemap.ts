import type { MetadataRoute } from 'next'

const BASE_URL = 'https://inbio.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // Core pages
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Service-line landing pages
    {
      url: `${BASE_URL}/buy-biochar-biofuel`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/build-operate-plant`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oem-equipment`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Product pages
    {
      url: `${BASE_URL}/biochar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/biofuels`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/biochar-applications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/biofuel-applications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Technology
    {
      url: `${BASE_URL}/our-technology`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fast-pyrolysis-specs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Company pages
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Blog index
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Quote / intake forms
    {
      url: `${BASE_URL}/quote-products`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/quote-epc`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/quote-oem`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Future pages (included for crawl readiness)
    {
      url: `${BASE_URL}/carbon-credits`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/modular-systems`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Blog posts
    {
      url: `${BASE_URL}/blog/what-is-fast-pyrolysis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/biochar-vs-compost`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/biochar-carbon-credits`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/bio-oil-applications`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/sustainable-aviation-fuel`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/biochar-stormwater`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/economics-pyrolysis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/usda-epa-incentives-2026`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
