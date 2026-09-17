import { cn } from '@/lib/utils'

export function SectionHeading({
  title,
  intro,
  description,
  align = 'left',
  className,
}: {
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
      <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {body && (
        <p className={cn('max-w-2xl text-pretty leading-relaxed text-muted-foreground')}>
          {body}
        </p>
      )}
    </div>
  )
}
