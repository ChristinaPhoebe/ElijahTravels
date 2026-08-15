import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site'

export function CtaBand({
  title = 'Ready to Ride? Book Now!',
  text = 'Enjoy stress-free travel across Tamil Nadu with our reliable taxi and tour services.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src="/images/cta-coast.png"
          alt=""
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden />
        <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center text-primary-foreground sm:py-20">
          <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/85">{text}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Book Your Ride
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={SITE.phone.tel}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              <Phone className="size-4" aria-hidden />
              Speak to Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
