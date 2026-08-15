import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PricingTable } from '@/components/pricing-table'
import { CtaBand } from '@/components/cta-band'
import { SectionHeading } from '@/components/section-heading'
import { SERVICES } from '@/lib/data'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} in Chennai`,
    description: service.description,
    alternates: { canonical: `/taxi-services/${service.slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.slug !== slug)
  const Icon = service.icon

  return (
    <>
      <PageHero
        eyebrow="Taxi services"
        title={service.title}
        intro={service.short}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Taxi Services', href: '/taxi-services' },
          { label: service.title },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-6" aria-hidden />
            </span>
            <p className="text-pretty text-lg leading-relaxed text-foreground">{service.description}</p>

            <div>
              <h2 className="text-xl font-bold">What&apos;s included</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking aside */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-lg font-bold">Book this service</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Call or message us for an instant quote. We confirm your vehicle, fare and pickup time
                right away.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <Phone className="size-4" aria-hidden />
                  {SITE.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/30"
                >
                  Send an enquiry
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <li>Available 24/7</li>
                <li>Transparent, pre-agreed fares</li>
                <li>Clean, sanitized vehicles</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Fares"
            title="Vehicle Rates"
            intro="Pick a vehicle category to see indicative local and outstation pricing."
            className="mx-auto items-center text-center"
          />
          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-2xl font-bold">Explore other services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {others.map((o) => {
            const OIcon = o.icon
            return (
              <Link
                key={o.slug}
                href={`/taxi-services/${o.slug}`}
                className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <OIcon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold">{o.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{o.short}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand />
      </div>
    </>
  )
}
