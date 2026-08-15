'use client'

import { useState, type FormEvent } from 'react'
import { Send, MessageCircle, Mail } from 'lucide-react'
import { SITE } from '@/lib/site'
import { FLEET } from '@/lib/data'

const TRIP_TYPES = [
  { value: 'local', label: 'Local Taxi' },
  { value: 'airport', label: 'Airport Transfer' },
  { value: 'outstation', label: 'Outstation Trip' },
]

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20'

function buildMessage(data: FormData) {
  const name = String(data.get('name') ?? '').trim()
  const phone = String(data.get('phone') ?? '').trim()
  const tripType = String(data.get('tripType') ?? '').trim()
  const pickup = String(data.get('pickup') ?? '').trim()
  const drop = String(data.get('drop') ?? '').trim()
  const date = String(data.get('date') ?? '').trim()
  const vehicle = String(data.get('vehicle') ?? '').trim()

  return [
    `New booking enquiry for ${SITE.name}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Trip type: ${tripType}`,
    `Pickup: ${pickup}`,
    `Drop: ${drop}`,
    `Date: ${date || 'Flexible'}`,
    `Vehicle: ${vehicle}`,
  ].join('\n')
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [error, setError] = useState('')
  const [enquiry, setEnquiry] = useState({ whatsapp: '', mail: '', subject: '' })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    try {
      const form = e.currentTarget
      const data = new FormData(form)
      const message = buildMessage(data)
      const subject = `Booking enquiry from ${String(data.get('name') ?? '')}`.trim()

      setEnquiry({
        whatsapp: `${SITE.phone.whatsapp}?text=${encodeURIComponent(message)}`,
        mail: `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
        subject,
      })
      setStatus('sent')
    } catch {
      setError(
        'Something went wrong while preparing your enquiry. Please try again, or call us directly.',
      )
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-3xl border border-border bg-card p-7 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
          <Send className="size-6" aria-hidden />
        </span>
        <h3 className="mt-4 text-lg font-bold">Almost done — send your enquiry</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your details are ready. Choose WhatsApp or email to send them straight to our team and
          we&apos;ll confirm your vehicle and fare right away.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={enquiry.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" aria-hidden />
            Send via WhatsApp
          </a>
          <a
            href={enquiry.mail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/30"
          >
            <Mail className="size-4" aria-hidden />
            Send via Email
          </a>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-sm font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            Edit my details
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="cf-name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            placeholder="+91 98xxx xxxxx"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-tripType" className="mb-1.5 block text-sm font-medium">
            Trip type
          </label>
          <select id="cf-tripType" name="tripType" defaultValue="local" className={inputClass}>
            {TRIP_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-vehicle" className="mb-1.5 block text-sm font-medium">
            Vehicle
          </label>
          <select id="cf-vehicle" name="vehicle" defaultValue="Any / Not sure" className={inputClass}>
            <option>Any / Not sure</option>
            {FLEET.map((f) => (
              <option key={f.vehicle}>{f.vehicle}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-pickup" className="mb-1.5 block text-sm font-medium">
            Pickup location
          </label>
          <input id="cf-pickup" name="pickup" required placeholder="Area or landmark" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-drop" className="mb-1.5 block text-sm font-medium">
            Drop location
          </label>
          <input id="cf-drop" name="drop" placeholder="Destination (for trips)" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-date" className="mb-1.5 block text-sm font-medium">
            Preferred date
          </label>
          <input
            id="cf-date"
            name="date"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full touch-manipulation select-none items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.01]"
      >
        <Send className="size-4" aria-hidden />
        Request a Quote
      </button>

      {error && (
        <p role="alert" className="mt-4 text-center text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Prefer to talk? Call{' '}
        <a href={SITE.phone.tel} className="font-medium text-foreground underline underline-offset-2">
          {SITE.phone.display}
        </a>{' '}
        — we&apos;re available 24/7.
      </p>
    </form>
  )
}
