'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

export type FaqItem = { q: string; a: string }

export function Faq({
  items,
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description,
}: {
  items: FaqItem[]
  eyebrow?: string
  title?: string
  description?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <dl className="mt-10 divide-y divide-border rounded-3xl bg-card px-6 ring-1 ring-border">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="py-2">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="font-medium text-foreground">{item.q}</span>
                    <ChevronRight
                      className={`size-5 shrink-0 text-accent transition-transform ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden text-pretty leading-relaxed text-muted-foreground transition-all ${
                    isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
                  }`}
                >
                  <span className="min-h-0">{item.a}</span>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
