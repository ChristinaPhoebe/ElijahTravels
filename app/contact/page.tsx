import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Book a Ride',
  description:
    'Book a taxi in Chennai or get a quote — call, WhatsApp, or send an enquiry. Local rides, airport transfers and outstation trips across Tamil Nadu. Available 24/7.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      label: 'Call us',
      value: SITE.phone.display,
      href: SITE.phone.tel,
      hint: 'Instant confirmation, 24/7',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: SITE.phone.display,
      href: SITE.phone.whatsapp,
      hint: 'Quick chat & quotes',
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      hint: 'We reply within a few hours',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: SITE.location,
      hint: 'Serving all of Tamil Nadu',
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Ride or Get a Quote"
        intro="Tell us your trip and we'll confirm your vehicle and fare within minutes. Call, WhatsApp, or use the form below — whatever is easiest for you."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Send your booking enquiry</h2>
            <ContactForm />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-4">
              {contactCards.map((c) => {
                const CIcon = c.icon
                const inner = (
                  <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <CIcon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                      <p className="mt-1 font-semibold break-words">{c.value}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.hint}</p>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="transition-transform hover:-translate-y-0.5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                )
              })}

              <div className="flex items-start gap-4 rounded-3xl bg-primary p-5 text-primary-foreground">
                <Clock className="mt-0.5 size-5 shrink-0" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/70">Hours</p>
                  <p className="mt-1 font-semibold">Open 24/7, every day</p>
                  <p className="mt-0.5 text-xs text-primary-foreground/70">
                    Including early-morning airport pickups and darshan trips
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold">Find Us in Chennai</h2>
          <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Based in Chennai and serving every corner of Tamil Nadu — from the city&apos;s
            neighbourhoods to outstation temple towns and coastal getaways.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              title={`${SITE.name} — ${SITE.location}`}
              src="https://www.google.com/maps?q=Chennai%2C%20Tamil%20Nadu%2C%20India&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  )
}
