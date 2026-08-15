import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, ShieldCheck, Star, Clock } from 'lucide-react'
import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-6 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pt-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Trusted in Chennai since {SITE.since}
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Trusted Taxi &amp; Tour Services in{' '}
            <span className="text-primary">Chennai</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Reliable and affordable taxi services across Chennai and Tamil Nadu for local rides, airport
            drops, and temple tours.
          </p>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3">
            <span className="text-sm text-muted-foreground">Rent starts from</span>
            <span className="font-display text-2xl font-bold text-accent-foreground">
              {SITE.priceAnchor}
              <span className="text-base font-semibold text-muted-foreground">/- only</span>
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Book a Ride
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={SITE.phone.tel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
          </div>

          <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden />
              <dt className="font-medium">Verified drivers</dt>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden />
              <dt className="font-medium">24/7 support</dt>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-accent" aria-hidden />
              <dt className="font-medium">Transparent fares</dt>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/images/hero-road.png"
              alt="A clean white sedan taxi on a scenic Tamil Nadu highway at golden hour"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-sm backdrop-blur sm:left-6">
            <div className="flex -space-x-2">
              {['bg-primary', 'bg-accent', 'bg-secondary-foreground'].map((c) => (
                <span key={c} className={`size-7 rounded-full border-2 border-card ${c}`} aria-hidden />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold leading-none">4.9 / 5 rating</p>
              <p className="text-xs text-muted-foreground">from thousands of happy riders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
