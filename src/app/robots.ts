import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep investor materials (pitch deck, financials) out of search indexes during the
      // private Reg D 506(b) round. NOTE: this only blocks compliant crawlers — it does NOT
      // prevent direct-URL access or sharing; the files remain publicly downloadable.
      disallow: '/docs/',
    },
    sitemap: 'https://inbio.net/sitemap.xml',
  }
}
