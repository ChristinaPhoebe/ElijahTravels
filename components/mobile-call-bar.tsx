import { Phone, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/site'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border/60 sm:hidden">
      <a
        href={SITE.phone.tel}
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="size-4" aria-hidden />
        Call Now
      </a>
      <a
        href={SITE.phone.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
      >
        <MessageCircle className="size-4" aria-hidden />
        WhatsApp
      </a>
    </div>
  )
}
