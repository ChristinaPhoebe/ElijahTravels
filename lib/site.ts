// Single source of truth for client business details.
// Update these values in one place to change them site-wide.

const PHONE_DISPLAY = '88709 95042'
const PHONE_RAW = '+918870995042'

export const SITE = {
  name: 'Elijah Travels',
  tagline: 'Trusted Taxi & Tour Services in Chennai',
  description:
    'Reliable and affordable taxi services across Chennai and Tamil Nadu for local rides, airport drops, outstation trips and temple tours. Rentals start from ₹1549. Book online or call 24/7.',
  since: 2010,
  url: 'https://elijahtravels.in',
  location: 'Chennai, Tamil Nadu',
  priceAnchor: '₹1549',
  phone: {
    display: PHONE_DISPLAY,
    raw: PHONE_RAW,
    tel: `tel:${PHONE_RAW}`,
    whatsapp: `https://wa.me/${PHONE_RAW.replace('+', '')}`,
  },
  email: 'wjayakumar4@gmail.com',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Taxi Services', href: '/taxi-services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Contact', href: '/contact' },
] as const
