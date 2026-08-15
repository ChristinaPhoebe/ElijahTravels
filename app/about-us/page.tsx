import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Clock, Car, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Eyebrow, SectionHeading } from '@/components/section-heading'
import { WhyChoose } from '@/components/why-choose'
import { CtaBand } from '@/components/cta-band'
import { SITE } from '@/lib/site'
import { FLEET, DESTINATIONS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Elijah Travels — a locally rooted taxi and tour service in Chennai since 2010. Sanitized cars, verified drivers, transparent fares and 24/7 support for local rides, airport transfers and temple tours.',
  alternates: { canonical: '/about-us' },
}

export default function AboutPage() {
  const yearsOfService = new Date().getFullYear() - SITE.since

  const stats = [
    { icon: ShieldCheck, label: 'Serving Chennai', value: `Since ${SITE.since}` },
    { icon: Car, label: 'Vehicles in fleet', value: String(FLEET.length) },
    { icon: MapPin, label: 'Destinations covered', value: String(DESTINATIONS.length) },
    { icon: Clock, label: 'Support', value: '24/7' },
  ]

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Your Local Travel Partner in Chennai"
        intro="A locally rooted taxi and tour service company committed to making travel safe, affordable, and convenient — every journey, short or long."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-driver.png"
                alt="A friendly professional Elijah Travels driver standing beside a clean car in Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 -top-3 rounded-2xl bg-accent px-5 py-4 text-center text-accent-foreground shadow-sm sm:-right-4 sm:-top-4">
              <p className="font-display text-2xl font-extrabold leading-none">
                {yearsOfService}+
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide">Years of service</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Trusted Rides Since {SITE.since}
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {SITE.name} is your trusted travel partner in Chennai, offering reliable cabs and
              spacious tempo travellers for all your city tours, outstation trips, and group
              travels. Whether you&apos;re planning a family vacation, corporate outing, or a
              pilgrimage, {SITE.name} ensures a comfortable, safe, and hassle-free journey with
              well-maintained vehicles and experienced drivers.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              With years of experience and a fleet of well-maintained vehicles, we serve everyone
              from daily commuters and tourists to families and corporate travelers. Our mission is
              to ensure every journey — short or long — is stress-free, punctual, and pleasant. From
              local rides to temple tours and outstation trips, we tailor each service to meet your
              specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const SIcon = s.icon
              return (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <SIcon className="mx-auto size-5 text-primary" aria-hidden />
                  <p className="mt-3 font-display text-2xl font-extrabold text-accent-foreground">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission + values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="Our promise"
          title="Travel With Confidence"
          intro="Your comfort and safety are our top priorities. From transparent fares to sanitized vehicles and verified drivers, everything we do is built around a stress-free, punctual ride."
        />
      </section>

      <WhyChoose />

      <div className="py-16 sm:py-20">
        <CtaBand
          title="Experience the Elijah Travels Difference"
          text="Book your next ride with a team that treats every journey like your own. Call us or send an enquiry today."
        />
      </div>
    </>
  )
}
