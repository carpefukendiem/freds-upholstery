import { site } from "@/lib/site";
import { brand } from "@/data/images";

/**
 * LocalBusiness schema with a stable @id so every page references the same
 * entity rather than declaring 200 separate businesses in Phase 2.
 */
export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    image: brand.ogImage(),
    telephone: site.mainPhone,
    foundingDate: String(site.established),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areaServed.map((n) => ({ "@type": "City", name: n })),
    openingHoursSpecification: site.hours
      .filter((h) => h.open)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "09:30",
        closes: "17:00",
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
