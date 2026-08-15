import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="What we do"
        title="Our Taxi & Tour Services"
        intro="Whether you're traveling within the city or exploring spiritual destinations, we have the right service for every need."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.slug}
              href={`/taxi-services/${service.slug}`}
              className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{service.short}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
