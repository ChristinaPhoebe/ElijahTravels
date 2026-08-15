import {
  Car,
  PlaneTakeoff,
  Route,
  ShieldCheck,
  Wallet,
  Clock,
  CalendarRange,
  BadgePercent,
  type LucideIcon,
} from 'lucide-react'

/* ----------------------------- Services ----------------------------- */

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  highlights: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'local',
    title: 'Local Taxi Services',
    short: 'Fast, convenient rides within Chennai city limits.',
    description:
      'Fast and convenient rides within Chennai city limits — perfect for daily commutes, shopping runs, or last-minute plans. Book by the hour or by the day with transparent packages and no hidden charges.',
    icon: Car,
    highlights: [
      'Point-to-point city drops',
      'Hourly & daily rental packages',
      'Clean, sanitized vehicles',
      'Verified, courteous drivers',
    ],
  },
  {
    slug: 'airport',
    title: 'Airport Transfers',
    short: 'On-time pickups and drops to Chennai Airport.',
    description:
      'On-time pickups and drop-offs to Chennai International Airport with flight monitoring and real-time tracking. We plan for traffic so you never miss a flight, day or night.',
    icon: PlaneTakeoff,
    highlights: [
      'Flight monitoring for delays',
      'Meet & greet pickups',
      'Fixed, transparent fares',
      'Available 24/7',
    ],
  },
  {
    slug: 'outstation',
    title: 'Outstation Trips',
    short: 'Weekend getaways and one-way trips across Tamil Nadu.',
    description:
      'Explore nearby cities or plan weekend getaways with flexible round-trip or one-way bookings. Ideal for family holidays, corporate travel, and temple pilgrimages across Tamil Nadu and beyond.',
    icon: Route,
    highlights: [
      'Round-trip & one-way options',
      'Sedans, SUVs & tempo travellers',
      'Experienced highway drivers',
      'Custom multi-day itineraries',
    ],
  },
]

/* --------------------------- Destinations --------------------------- */

export type Destination = {
  slug: string
  name: string
  title: string
  short: string
  distanceKm: number
  driveTime: string
  image: string
  intro: string
  highlights: string[]
  bestVehicle: string
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'tirupati',
    name: 'Chennai to Tirupati',
    title: 'Chennai to Tirupati Taxi',
    short: 'Balaji Darshan made easy with same-day or overnight temple tours.',
    distanceKm: 135,
    driveTime: '≈ 3 hrs',
    image: '/images/dest-tirupati.png',
    intro:
      'Visit the world-famous Sri Venkateswara (Balaji) Temple at Tirumala with a comfortable, well-planned ride from Chennai. Choose a same-day darshan trip or an overnight package — we handle the driving so you can focus on your devotion.',
    highlights: [
      'Same-day or overnight darshan trips',
      'Early-morning starts to beat the queues',
      'Comfortable AC sedans, SUVs & tempo travellers',
      'Drivers familiar with the Tirumala ghat road',
    ],
    bestVehicle: 'Toyota Innova / Innova Crysta',
  },
  {
    slug: 'tiruvannamalai',
    name: 'Chennai to Tiruvannamalai',
    title: 'Chennai to Tiruvannamalai Taxi',
    short: 'Seek spiritual peace at Arunachaleswarar Temple and the Girivalam path.',
    distanceKm: 190,
    driveTime: '≈ 4 hrs',
    image: '/images/dest-tiruvannamalai.png',
    intro:
      'Experience the spiritual calm of Tiruvannamalai — home to the majestic Arunachaleswarar Temple and the sacred Girivalam path around Annamalai hill. Perfect for a peaceful day trip or a Pournami (full-moon) pilgrimage.',
    highlights: [
      'Arunachaleswarar Temple darshan',
      'Girivalam circumambulation route support',
      'Ideal for Pournami / full-moon visits',
      'Comfortable ride for senior citizens',
    ],
    bestVehicle: 'Toyota Innova / Etios',
  },
  {
    slug: 'kanchipuram',
    name: 'Chennai to Kanchipuram',
    title: 'Chennai to Kanchipuram Taxi',
    short: 'Discover the ancient city of temples and rich silk traditions.',
    distanceKm: 75,
    driveTime: '≈ 2 hrs',
    image: '/images/dest-kanchipuram.png',
    intro:
      'Kanchipuram, the "City of a Thousand Temples", is an easy half-day trip from Chennai. Visit iconic temples like Kamakshi Amman, Ekambareswarar and Kailasanathar, and shop for world-renowned Kanchipuram silk sarees.',
    highlights: [
      'Kamakshi Amman & Ekambareswarar temples',
      'Famous Kanchipuram silk saree shopping',
      'Great half-day trip from Chennai',
      'Flexible temple-hopping itinerary',
    ],
    bestVehicle: 'Swift Dzire / Toyota Etios',
  },
  {
    slug: 'mahabalipuram',
    name: 'Chennai to Mahabalipuram',
    title: 'Chennai to Mahabalipuram Taxi',
    short: 'Explore UNESCO heritage rock temples and scenic coastal beauty.',
    distanceKm: 55,
    driveTime: '≈ 1.5 hrs',
    image: '/images/dest-mahabalipuram.png',
    intro:
      'A scenic drive down the East Coast Road brings you to Mahabalipuram (Mamallapuram) — a UNESCO World Heritage site famous for its rock-cut monuments, the Shore Temple, and Arjuna\u2019s Penance. Ideal for families and day-trippers.',
    highlights: [
      'Shore Temple & Pancha Rathas',
      "Arjuna's Penance rock relief",
      'Scenic East Coast Road drive',
      'Beaches and seafood stops',
    ],
    bestVehicle: 'Swift Dzire / Mahindra Marazzo',
  },
  {
    slug: 'pondicherry',
    name: 'Chennai to Pondicherry',
    title: 'Chennai to Pondicherry Taxi',
    short: 'Enjoy French charm, beaches, and cafés in this coastal getaway.',
    distanceKm: 160,
    driveTime: '≈ 3.5 hrs',
    image: '/images/dest-pondicherry.png',
    intro:
      'Escape to Pondicherry for a relaxed coastal getaway — French Quarter streets, Promenade Beach, Auroville and charming cafés. We offer comfortable round-trip and one-way rides so you can travel at your own pace.',
    highlights: [
      'French Quarter (White Town) walks',
      'Promenade Beach & Rock Beach',
      'Auroville & Matrimandir visits',
      'Weekend getaway packages',
    ],
    bestVehicle: 'Toyota Innova / Marazzo',
  },
  {
    slug: 'tiruttani',
    name: 'Chennai to Tiruttani',
    title: 'Chennai to Tiruttani Taxi',
    short: "Visit one of Lord Murugan's sacred abodes for a divine experience.",
    distanceKm: 85,
    driveTime: '≈ 2 hrs',
    image: '/images/dest-tiruttani.png',
    intro:
      'Tiruttani is one of the six sacred abodes (Arupadai Veedu) of Lord Murugan. An easy day trip from Chennai, the hilltop temple offers a peaceful, devotional experience with beautiful views from the top.',
    highlights: [
      'Sri Subramaniya Swamy Temple darshan',
      'One of the six abodes of Lord Murugan',
      'Comfortable day trip from Chennai',
      'Hill-top temple with scenic views',
    ],
    bestVehicle: 'Swift Dzire / Toyota Etios',
  },
]

/* ---------------------------- Why choose ---------------------------- */

export type Advantage = { title: string; description: string; icon: LucideIcon }

export const ADVANTAGES: Advantage[] = [
  { title: 'Diverse Fleet', description: 'Wide variety of vehicle options for every need.', icon: Car },
  { title: 'Affordable Rates', description: 'Transparent pricing with no hidden charges.', icon: Wallet },
  { title: 'Flexible Rentals', description: 'Choose from hourly, daily, or package-based trips.', icon: CalendarRange },
  { title: '24/7 Support', description: 'Customer assistance available anytime you need it.', icon: Clock },
  { title: 'Safety First', description: 'Regularly sanitized cars and verified drivers.', icon: ShieldCheck },
  { title: 'Loyalty Rewards', description: 'Exclusive deals on repeat bookings and referrals.', icon: BadgePercent },
]

/* ------------------------------ Fleet ------------------------------- */

export type FleetRow = {
  vehicle: string
  category: 'Sedan' | 'SUV' | 'Tempo'
  seats: number
  image: string
  local: (string | null)[] // 5hr/50, 8hr/80, 10hr/100, 12hr/120, 15hr/150
  outstation: { roundTrip: string; oneWay: string; batta: string }
}

export const LOCAL_HEADERS = ['5hr / 50km', '8hr / 80km', '10hr / 100km', '12hr / 120km', '15hr / 150km']

export const FLEET: FleetRow[] = [
  {
    vehicle: 'Swift Dzire',
    category: 'Sedan',
    seats: 4,
    image: '/images/vehicle-sedan.png',
    local: ['₹1550', '₹2300', '₹2800', '₹3400', '₹4200'],
    outstation: { roundTrip: '₹13/km', oneWay: '₹15/km', batta: '₹500' },
  },
  {
    vehicle: 'Toyota Etios',
    category: 'Sedan',
    seats: 4,
    image: '/images/vehicle-sedan.png',
    local: ['₹1600', '₹2400', '₹2900', '₹3500', '₹4400'],
    outstation: { roundTrip: '₹14/km', oneWay: '₹16/km', batta: '₹500' },
  },
  {
    vehicle: 'Mahindra Marazzo',
    category: 'SUV',
    seats: 7,
    image: '/images/vehicle-suv.png',
    local: ['₹2100', '₹3200', '₹3800', '₹4600', '₹5600'],
    outstation: { roundTrip: '₹17/km', oneWay: '₹21/km', batta: '₹500' },
  },
  {
    vehicle: 'Mahindra Xylo',
    category: 'SUV',
    seats: 7,
    image: '/images/vehicle-suv.png',
    local: ['₹2100', '₹3200', '₹3800', '₹4600', '₹5600'],
    outstation: { roundTrip: '₹17/km', oneWay: '₹21/km', batta: '₹500' },
  },
  {
    vehicle: 'Chevrolet Tavera',
    category: 'SUV',
    seats: 7,
    image: '/images/vehicle-suv.png',
    local: ['₹2200', '₹3200', '₹3800', '₹4600', '₹5600'],
    outstation: { roundTrip: '₹17/km', oneWay: '₹22/km', batta: '₹500' },
  },
  {
    vehicle: 'Toyota Innova',
    category: 'SUV',
    seats: 7,
    image: '/images/vehicle-suv.png',
    local: ['₹2200', '₹3400', '₹4000', '₹4700', '₹5800'],
    outstation: { roundTrip: '₹18/km', oneWay: '₹22/km', batta: '₹500' },
  },
  {
    vehicle: 'Toyota Innova Crysta',
    category: 'SUV',
    seats: 7,
    image: '/images/vehicle-suv.png',
    local: ['₹2500', null, '₹5000', null, '₹7500'],
    outstation: { roundTrip: '₹23/km', oneWay: 'Not Available', batta: '₹700' },
  },
  {
    vehicle: 'Tempo Traveler',
    category: 'Tempo',
    seats: 12,
    image: '/images/vehicle-tempo.png',
    local: ['₹3500', null, '₹7000', null, '₹10500'],
    outstation: { roundTrip: '₹24/km', oneWay: 'Not Available', batta: '₹800' },
  },
]

export const PRICING_NOTES = [
  'Additional Kms for Sedan is ₹25/km, additional hour ₹250/hour.',
  'Additional Kms for SUV is ₹35/km, additional hour ₹350/hour.',
  'Toll and parking charges will be added extra as per the quotation.',
  'Carrier charges ₹300/- for SUV (for loading luggage in carrier, if mentioned in the quote).',
  'State temporary permit charges apply as per the quotation and differ from state to state.',
  'Hill charges ₹500/- for sedan and ₹1000/- for SUV — mostly for hill outstation trips.',
]

/* --------------------------- Testimonials --------------------------- */

export type Testimonial = { name: string; role: string; quote: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ramesh K',
    role: 'Chennai',
    quote:
      'Booked a Chennai to Tirupati cab for my family. The driver was punctual, polite, and the vehicle was very clean. Highly recommend!',
  },
  {
    name: 'Anjali M',
    role: 'IT Professional',
    quote:
      'I use their airport drop service regularly. Always on time and professional. Hassle-free experience every single time.',
  },
  {
    name: 'Rajeshwari D',
    role: 'Homemaker',
    quote:
      'The Kanchipuram temple tour was well organized. Safe ride for senior citizens. Will book again for Rameshwaram.',
  },
]

/* ------------------------- Vehicle categories ------------------------ */

export const FLEET_CATEGORIES = [
  {
    title: 'Sedans',
    seats: '4 seats',
    image: '/images/vehicle-sedan.png',
    examples: 'Swift Dzire, Toyota Etios',
    blurb: 'Comfortable and economical — ideal for city rides, airport drops and small families.',
  },
  {
    title: 'SUVs & MUVs',
    seats: '6–7 seats',
    image: '/images/vehicle-suv.png',
    examples: 'Innova, Innova Crysta, Marazzo, Xylo, Tavera',
    blurb: 'Spacious and sturdy — perfect for outstation trips, temple tours and larger families.',
  },
  {
    title: 'Tempo Travellers',
    seats: '12+ seats',
    image: '/images/vehicle-tempo.png',
    examples: 'Force Tempo Traveller',
    blurb: 'Roomy group travel for pilgrimages, corporate outings and family holidays.',
  },
]
