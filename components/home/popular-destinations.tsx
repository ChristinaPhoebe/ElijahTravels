import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { DestinationsGrid } from '@/components/destinations-grid'

export function PopularDestinations() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Temple tours & getaways"
          title="Explore Tamil Nadu's Most Loved Destinations"
          intro="We offer custom tour packages and one-way taxi services to popular destinations across the state."
        />
        <Link
          href="/destinations"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/30"
        >
          View all destinations
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
      <div className="mt-10">
        <DestinationsGrid />
      </div>
    </section>
  )
}
