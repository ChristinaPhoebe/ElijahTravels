import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rider stories"
          title="Trusted by families and travellers"
          description="Real experiences from customers who ride with us across Chennai and Tamil Nadu."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl bg-card p-7 ring-1 ring-border"
            >
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <div className="mt-4 flex gap-0.5" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="block font-medium text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
