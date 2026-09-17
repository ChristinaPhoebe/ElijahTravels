import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'

interface LogoProps {
  className?: string
  mono?: boolean
  variant?: 'teal' | 'white'
  size?: 'sm' | 'md' | 'lg'
  hideText?: boolean
}

export function Logo({
  className,
  mono = false,
  variant,
  size = 'md',
  hideText = false,
}: LogoProps) {
  const isWhite = variant === 'white' || mono
  const logoSrc = isWhite ? '/elijah-logo-white.png' : '/elijah-logo-teal.png'

  const sizeConfig = {
    sm: {
      imgSize: 32,
      imgClass: 'size-8',
      titleClass: 'text-base',
      subtitleClass: 'text-[0.55rem]',
    },
    md: {
      imgSize: 42,
      imgClass: 'size-10 sm:size-11',
      titleClass: 'text-lg sm:text-xl',
      subtitleClass: 'text-[0.62rem] sm:text-[0.68rem]',
    },
    lg: {
      imgSize: 56,
      imgClass: 'size-14',
      titleClass: 'text-2xl',
      subtitleClass: 'text-xs',
    },
  }[size]

  return (
    <span className={cn('inline-flex items-center gap-2.5 sm:gap-3 select-none', className)}>
      <span className={cn('relative flex shrink-0 items-center justify-center', sizeConfig.imgClass)}>
        <Image
          src={logoSrc}
          alt={`${SITE.name} Logo`}
          width={sizeConfig.imgSize}
          height={sizeConfig.imgSize}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {!hideText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display font-extrabold tracking-tight',
              sizeConfig.titleClass,
              isWhite ? 'text-primary-foreground' : 'text-foreground',
            )}
          >
            Elijah
          </span>
          <span
            className={cn(
              'font-bold uppercase tracking-[0.24em] mt-0.5',
              sizeConfig.subtitleClass,
              isWhite ? 'text-primary-foreground/75' : 'text-accent',
            )}
          >
            Travels
          </span>
        </span>
      )}
    </span>
  )
}
