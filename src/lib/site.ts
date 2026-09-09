/**
 * Single source of truth for business data.
 * Change it here, it changes everywhere. Nothing below should be hardcoded in a page.
 */

export const site = {
  name: "Fred's Upholstery",
  legalName: "Fred's Upholstery",
  established: 1986,
  url: "https://fredsupholstery.com",
  tagline: "We've Got You Covered",

  /**
   * NAP — Name, Address, Phone.
   * IMPORTANT: two different numbers are currently published.
   *   - quotePhone  805-500-4873  appears on the live website (text-for-quote line)
   *   - mainPhone   805-962-9880  appears on Yelp, Houzz, YellowPages, Google
   * These must be reconciled before launch. See README "NAP conflicts".
   */
  mainPhone: "(805) 962-9880",
  mainPhoneHref: "tel:+18059629880",
  quotePhone: "(805) 500-4873",
  quotePhoneHref: "tel:+18055004873",
  quoteTextHref: "sms:+18055004873",

  email: "info@fredsupholstery.com", // VERIFY: obfuscated on live site

  address: {
    street: "132 Garden Street, Suite 2K", // VERIFY: Yelp/YP list "Ste 2d"
    city: "Santa Barbara",
    state: "CA",
    zip: "93101",
    country: "US",
  },
  geo: { lat: 34.4147, lng: -119.6907 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ_QSfEo8T6YARJgCPZ4KmmNo",

  hours: [
    { day: "Monday", open: "9:30 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "9:30 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "9:30 AM", close: "5:00 PM" },
    { day: "Thursday", open: "9:30 AM", close: "5:00 PM" },
    { day: "Friday", open: "9:30 AM", close: "5:00 PM" }, // VERIFY: Yelp says 3:00 PM Fri
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],

  areaServed: [
    "Santa Barbara",
    "Goleta",
    "Montecito",
    "Carpinteria",
    "Summerland",
    "Hope Ranch",
    "Isla Vista",
    "Solvang",
    "Santa Ynez",
    "Buellton",
    "Lompoc",
    "Santa Maria",
  ],
} as const;

/** Always derive the year-count from `site.established`. Never hardcode 32 / 36 / 40. */
export function yearsOfExpertise(now = new Date().getFullYear()) {
  return now - site.established;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Furniture", href: "/upholstery" },
  { label: "Boat", href: "/marine-upholstery" },
  { label: "Commercial", href: "/commercial-upholstery" },
  { label: "Outdoor", href: "/outdoor-upholstery" },
  { label: "Gallery", href: "/gallery" },
  { label: "Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
] as const;
