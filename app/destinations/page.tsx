import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { DestinationsGrid } from '@/components/destinations-grid'
import { CtaBand } from '@/components/cta-band'
import { Faq } from '@/components/faq'

export const metadata: Metadata = {
  title: 'Popular Destinations & Temple Tours from Chennai',
  description:
    'Outstation taxi and temple tour packages from Chennai to Tirupati, Tiruvannamalai, Kanchipuram, Mahabalipuram, Pondicherry and Tiruttani. Comfortable cars, experienced drivers.',
  alternates: { canonical: '/destinations' },
}

const DEST_FAQ = [
  {
    q: 'Do you offer same-day return trips?',
    a: 'Yes. Most nearby destinations like Kanchipuram, Mahabalipuram and Tiruttani are comfortable same-day trips. For Tirupati we offer both same-day and overnight darshan packages.',
  },
  {
    q: 'Can I customise the itinerary?',
    a: 'Absolutely. Tell us the temples or spots you want to cover and we build a flexible itinerary around your schedule.',
  },
  {
    q: 'What vehicles are best for outstation trips?',
    a: 'Sedans suit couples and small families, while Innova / SUVs and tempo travellers are ideal for larger groups and longer journeys with luggage.',
  },
]

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Temple Tours & Getaways Across Tamil Nadu"
        intro="Custom tour packages and one-way taxi services to the most-loved destinations around Chennai — from sacred temple towns to coastal escapes."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <DestinationsGrid />
      </section>

      <Faq items={DEST_FAQ} eyebrow="Good to know" title="Destination FAQs" />

      <div className="pb-16 sm:pb-20">
        <CtaBand
          title="Plan Your Temple Tour Today"
          text="Tell us where you want to go — we'll handle the route, the car and the driver."
        />
      </div>
    </>
  )
}
