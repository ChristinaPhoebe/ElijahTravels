import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site'
import { Eyebrow } from '@/components/section-heading'

export function AboutSnapshot() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4]">
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
              {new Date().getFullYear() - SITE.since}+
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide">Years of service</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Eyebrow>Since {SITE.since}</Eyebrow>
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Your Local Travel Partner in Chennai
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            We are a locally rooted taxi and tour service company in Chennai, committed to making travel
            safe, affordable, and convenient. With years of experience and a fleet of well-maintained
            vehicles, we serve everyone from daily commuters and tourists to families and corporate
            travelers.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Our mission is to ensure every journey — short or long — is stress-free, punctual, and pleasant.
            From local rides to temple tours and outstation trips, we tailor each service to meet your
            specific needs. Your comfort and safety are our top priorities.
          </p>
          <Link
            href="/about-us"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            More about us
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
