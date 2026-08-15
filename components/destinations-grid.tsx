import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { DESTINATIONS } from '@/lib/data'

export function DestinationsGrid({ limit }: { limit?: number }) {
  const items = limit ? DESTINATIONS.slice(0, limit) : DESTINATIONS
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((d) => (
        <Link
          key={d.slug}
          href={`/destinations/${d.slug}`}
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={d.image}
              alt={`${d.name.replace('Chennai to ', '')} — temple tour destination`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              <MapPin className="size-3.5 text-accent" aria-hidden />
              {d.distanceKm} km · {d.driveTime}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold leading-snug">{d.name}</h3>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{d.short}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
