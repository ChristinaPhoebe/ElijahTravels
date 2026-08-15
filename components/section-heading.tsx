import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  const body = intro ?? description
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {body && (
        <p className={cn('max-w-2xl text-pretty leading-relaxed text-muted-foreground')}>
          {body}
        </p>
      )}
    </div>
  )
}
