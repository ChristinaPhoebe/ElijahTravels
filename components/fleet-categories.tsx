import Image from 'next/image'
import { Users } from 'lucide-react'
import { FLEET_CATEGORIES } from '@/lib/data'

export function FleetCategories() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {FLEET_CATEGORIES.map((c) => (
        <div key={c.title} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card">
          <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
            <Image
              src={c.image}
              alt={`${c.title} — ${c.examples}`}
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover"
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Users className="size-3.5 text-primary" aria-hidden />
              {c.seats}
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="text-sm font-medium text-primary">{c.examples}</p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
