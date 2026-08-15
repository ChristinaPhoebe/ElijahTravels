import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string
  title: string
  intro?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-primary">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ChevronRight className="size-4 text-muted-foreground/60" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary ring-1 ring-border">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  )
}
