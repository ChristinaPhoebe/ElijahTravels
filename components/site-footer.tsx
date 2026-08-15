import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/site'
import { SERVICES, DESTINATIONS } from '@/lib/data'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo mono />
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {SITE.name} is your trusted travel partner in Chennai, offering reliable cabs and spacious
              tempo travellers for all your city tours, outstation trips, and group travels. Whether
              you&apos;re planning a family vacation, corporate outing, or a pilgrimage, {SITE.name}
              ensures a comfortable, safe, and hassle-free journey with well-maintained vehicles and
              experienced drivers. Book with us for a smooth ride every time!
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Taxi Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/taxi-services/${s.slug}`}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Outstation Cab Trips
            </h2>
            <ul className="space-y-2.5 text-sm">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {d.name} Cab
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Contact
            </h2>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={SITE.phone.tel} className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent">
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6">
          All Rights Reserved – {SITE.name} Chennai &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
