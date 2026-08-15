import { SITE } from '@/lib/site'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.raw,
    email: SITE.email,
    areaServed: 'Tamil Nadu, India',
    foundingDate: String(SITE.since),
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phone.raw,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
