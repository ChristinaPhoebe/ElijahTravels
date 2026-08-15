'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import { FLEET, LOCAL_HEADERS, PRICING_NOTES, type FleetRow } from '@/lib/data'

type Tab = 'local' | 'outstation'
type CategoryFilter = 'All' | FleetRow['category']

const CATEGORIES: CategoryFilter[] = ['All', 'Sedan', 'SUV', 'Tempo']

export function PricingTable() {
  const [tab, setTab] = useState<Tab>('local')
  const [category, setCategory] = useState<CategoryFilter>('All')

  const rows = FLEET.filter((r) => category === 'All' || r.category === category)

  return (
    <div>
      {/* Local vs Outstation */}
      <div aria-label="Rate type" className="flex justify-center">
        <div className="inline-flex rounded-full bg-card p-1 ring-1 ring-border">
          {(['local', 'outstation'] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
              className={`touch-manipulation select-none rounded-full px-6 py-2.5 text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t === 'local' ? 'Local Packages' : 'Outstation'}
            </button>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
            className={`touch-manipulation select-none rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              category === c
                ? 'bg-accent text-accent-foreground'
                : 'bg-card text-muted-foreground ring-1 ring-border hover:text-foreground'
            }`}
          >
            {c === 'All' ? 'All vehicles' : c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-6 overflow-hidden rounded-3xl bg-card ring-1 ring-border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th scope="col" className="px-4 py-4 font-medium">Vehicle</th>
                {tab === 'local' ? (
                  LOCAL_HEADERS.map((h) => (
                    <th key={h} scope="col" className="px-4 py-4 text-center font-medium">
                      {h}
                    </th>
                  ))
                ) : (
                  <>
                    <th scope="col" className="px-4 py-4 text-center font-medium">Round Trip</th>
                    <th scope="col" className="px-4 py-4 text-center font-medium">One Way</th>
                    <th scope="col" className="px-4 py-4 text-center font-medium">Driver Batta</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.vehicle} className="border-t border-border">
                  <th scope="row" className="px-4 py-4">
                    <span className="block font-medium text-foreground">{row.vehicle}</span>
                    <span className="text-xs text-muted-foreground">
                      {row.category} · {row.seats} seats
                    </span>
                  </th>
                  {tab === 'local' ? (
                    row.local.map((val, i) => (
                      <td key={i} className="px-4 py-4 text-center text-foreground">
                        {val ?? <span className="text-muted-foreground">—</span>}
                      </td>
                    ))
                  ) : (
                    <>
                      <td className="px-4 py-4 text-center text-foreground">{row.outstation.roundTrip}</td>
                      <td className="px-4 py-4 text-center text-foreground">{row.outstation.oneWay}</td>
                      <td className="px-4 py-4 text-center text-foreground">{row.outstation.batta}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes */}
      <ul className="mx-auto mt-6 max-w-3xl space-y-2 text-sm text-muted-foreground">
        {PRICING_NOTES.map((note) => (
          <li key={note} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="text-pretty">{note}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Fares are indicative and vary with route, tolls and season. Call{' '}
        <a href={SITE.phone.tel} className="font-medium text-foreground underline underline-offset-2">
          {SITE.phone.display}
        </a>{' '}
        for a confirmed quote.
      </p>

      <div className="mt-6 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get an exact quote
        </Link>
      </div>
    </div>
  )
}
