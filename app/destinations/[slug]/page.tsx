import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Phone, MapPin, Clock, Car } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { DESTINATIONS } from '@/lib/data'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const dest = DESTINATIONS.find((d) => d.slug === slug)
  if (!dest) return {}
  return {
    title: dest.title,
    description: dest.intro,
    alternates: { canonical: `/destinations/${dest.slug}` },
    openGraph: { images: [{ url: dest.image }] },
  }
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const dest = DESTINATIONS.find((d) => d.slug === slug)
  if (!dest) notFound()

  const others = DESTINATIONS.filter((d) => d.slug !== slug).slice(0, 3)

  const stats = [
    { icon: MapPin, label: 'Distance', value: `${dest.distanceKm} km` },
    { icon: Clock, label: 'Drive time', value: dest.driveTime },
    { icon: Car, label: 'Best vehicle', value: dest.bestVehicle },
  ]

  return (
    <>
      <PageHero
        eyebrow="Destination"
        title={dest.name}
        intro={dest.short}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinations', href: '/destinations' },
          { label: dest.name.replace('Chennai to ', '') },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={dest.image}
                alt={`${dest.name.replace('Chennai to ', '')} — temple tour destination from Chennai`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((s) => {
                const SIcon = s.icon
                return (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                    <SIcon className="size-5 text-primary" aria-hidden />
                    <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
                    <p className="mt-1 font-semibold">{s.value}</p>
                  </div>
                )
              })}
            </div>

            <p className="text-pretty text-lg leading-relaxed text-foreground">{dest.intro}</p>

            <div>
              <h2 className="text-xl font-bold">Trip highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {dest.highlights.map((h) => (
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

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-lg font-bold">Book this trip</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Same-day or overnight, round-trip or one-way — we tailor the journey to you. Get an instant
                quote now.
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
                  Enquire about this trip
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold">Other popular destinations</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/destinations/${o.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={o.image}
                    alt={`${o.name.replace('Chennai to ', '')} taxi tour`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-bold">{o.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20">
        <CtaBand />
      </div>
    </>
  )
}
