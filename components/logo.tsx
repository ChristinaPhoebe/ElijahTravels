import { cn } from '@/lib/utils'

export function Logo({ className, mono = false }: { className?: string; mono?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-xl',
          mono ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-primary text-primary-foreground',
        )}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M3 13.5 4.6 8.2A2.5 2.5 0 0 1 7 6.4h10a2.5 2.5 0 0 1 2.4 1.8L21 13.5V18a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-1H6.2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="15" r="1" fill="currentColor" />
          <circle cx="17" cy="15" r="1" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-lg font-extrabold tracking-tight', mono && 'text-primary-foreground')}>
          Elijah
        </span>
        <span
          className={cn(
            'text-[0.62rem] font-semibold uppercase tracking-[0.22em]',
            mono ? 'text-primary-foreground/70' : 'text-accent',
          )}
        >
          Travels
        </span>
      </span>
    </span>
  )
}
