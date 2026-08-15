import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PricingTable } from '@/components/pricing-table'
import { WhyChoose } from '@/components/why-choose'
import { CtaBand } from '@/components/cta-band'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Taxi Services in Chennai — Local, Airport & Outstation Cabs',
  description:
    'Explore our Chennai taxi services: local city rides, airport transfers and outstation trips. Transparent fares for sedans, SUVs and tempo travellers. Book 24/7.',
  alternates: { canonical: '/taxi-services' },
}

export default function TaxiServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Taxi services"
        title="Reliable Cabs for Every Journey"
        intro="From quick city drops to long-distance temple tours, choose a service built around comfort, safety and honest pricing."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Taxi Services' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.slug}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-1 flex flex-col gap-2 text-sm">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/taxi-services/${service.slug}`}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-primary"
                >
                  View details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-20">
        <SectionHeading
          align="center"
          eyebrow="Fares & packages"
          title="Transparent Pricing"
          intro="Indicative rates for local packages and outstation trips. Toll, parking and permit charges apply as per the quote."
          className="mx-auto items-center text-center"
        />
        <div className="mt-10">
          <PricingTable />
        </div>
      </section>

      <WhyChoose />

      <div className="py-16 sm:py-20">
        <CtaBand />
      </div>
    </>
  )
}
