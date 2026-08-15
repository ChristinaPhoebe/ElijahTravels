import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Bricolage_Grotesque } from 'next/font/google'
import { SITE } from '@/lib/site'
import { LocalBusinessSchema } from '@/components/local-business-schema'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCallBar } from '@/components/mobile-call-bar'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'taxi in Chennai',
    'Chennai to Tirupati taxi',
    'airport taxi Chennai',
    'tempo traveller rental Chennai',
    'outstation cabs Chennai',
    'temple tour Tamil Nadu',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f5f1e8',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${display.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <SiteHeader />
        <main className="pb-14 sm:pb-0">{children}</main>
        <SiteFooter />
        <MobileCallBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
