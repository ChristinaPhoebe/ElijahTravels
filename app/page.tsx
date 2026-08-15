import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { ServicesOverview } from '@/components/services-overview'
import { AboutSnapshot } from '@/components/home/about-snapshot'
import { PopularDestinations } from '@/components/home/popular-destinations'
import { WhyChoose } from '@/components/why-choose'
import { FleetCategories } from '@/components/fleet-categories'
import { Testimonials } from '@/components/testimonials'
import { CtaBand } from '@/components/cta-band'
import { Faq } from '@/components/faq'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `${SITE.name} — Chennai Taxi & Outstation Cab Service`,
  description:
    'Book reliable, affordable taxis in Chennai — local rides, airport transfers and outstation trips to Tirupati, Pondicherry, Kanchipuram and more. Clean cars, verified drivers, transparent fares.',
  alternates: { canonical: '/' },
}

const HOME_FAQ = [
  {
    q: 'How do I book a taxi with you?',
    a: 'Simply call or WhatsApp us on our number, or send an enquiry through the contact form. We confirm your vehicle, fare and pickup time instantly.',
  },
  {
    q: 'Are your fares fixed or metered?',
    a: 'We offer transparent, pre-agreed fares for local packages and outstation trips. You know the price before you travel — no hidden charges.',
  },
  {
    q: 'Do you provide cars for outstation and temple trips?',
    a: 'Yes. We specialise in outstation trips across Tamil Nadu and Andhra Pradesh, including popular temple destinations like Tirupati, Tiruvannamalai and Kanchipuram.',
  },
  {
    q: 'Is the service available 24/7?',
    a: 'Yes, our booking and support lines are open round the clock, including early-morning airport pickups and darshan trips.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutSnapshot />
      <PopularDestinations />
      <WhyChoose />
      <FleetCategories />
      <Testimonials />
      <Faq items={HOME_FAQ} description="Everything you need to know before you book your ride." />
      <CtaBand />
    </>
  )
}
