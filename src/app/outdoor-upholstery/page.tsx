import type { Metadata } from "next";
import { Hero, Section, Prose, PhotoGrid, ServiceGrid, QuoteCta } from "@/components/Blocks";
import { outdoorImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Outdoor Cushions & Patio Furniture Upholstery in Santa Barbara",
  description:
    "Patio cushions, chaise lounge cushions and pool furniture recovered in Sunbrella and outdoor vinyl. Residential and commercial outdoor upholstery in Santa Barbara.",
  alternates: { canonical: "/outdoor-upholstery" },
};

export default function OutdoorPage() {
  return (
    <>
      <Hero
        eyebrow="We make the highest grade"
        title="Outdoor Cushions & Furniture"
        intro="Keep your patio furniture looking clean with an update to your chaise lounge cushions."
        image={outdoorImages[0]}
      />

      <Section title="Outdoor furniture upholstery experts">
        <Prose>
          <p>
            Outdoor upholstery is one of our specialties, with deep experience in both residential
            and commercial outdoor furniture. From outdoor vinyl to waterproof Sunbrella fabrics,
            we&apos;ve got you covered.
          </p>
          <p>
            Getting an estimate is as easy as sending a picture and the dimensions of the pieces in
            question. We&apos;ll come back with an estimated price to complete the work.
          </p>
        </Prose>
      </Section>

      <Section title="Photos">
        <PhotoGrid images={outdoorImages} />
      </Section>

      <Section eyebrow="We specialize in a variety of upholstery services" title="Explore our work">
        <ServiceGrid exclude="/outdoor-upholstery" />
      </Section>

      <QuoteCta />
    </>
  );
}
