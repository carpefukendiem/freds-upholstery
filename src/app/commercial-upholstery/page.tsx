import type { Metadata } from "next";
import { Hero, Section, Prose, PhotoGrid, ServiceGrid, QuoteCta } from "@/components/Blocks";
import { commercialImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Commercial Upholstery in Santa Barbara",
  description:
    "Restaurant booths, bar stools, office waiting rooms, medical offices and nightclub interiors. Full commercial reupholstery from Fred's Upholstery in Santa Barbara.",
  alternates: { canonical: "/commercial-upholstery" },
};

export default function CommercialPage() {
  return (
    <>
      <Hero
        eyebrow="All types of"
        title="Commercial Upholstery"
        intro="Working with local restaurants, bars, offices, night clubs and more."
        image={commercialImages[0]}
      />

      <Section title="Working with local businesses">
        <Prose>
          <p>
            We provide full commercial furniture reupholstery including outdoor and patio furniture,
            commercial upholstered seating areas and office waiting rooms. We work with large medical
            offices like the Sansum Clinic and numerous local businesses including chiropractors,
            doctors, dentists and law offices.
          </p>
        </Prose>
      </Section>

      <Section title="Photos">
        <PhotoGrid images={commercialImages} columns={4} />
      </Section>

      <Section title="Restaurant upholstery">
        <Prose>
          <p>
            We work with dozens of local restaurants and reupholster most restaurant furniture:
            dining chairs, sofas, upholstered patio furniture, bar stools and more.
          </p>
          <p>
            Working with local restaurateurs and nightclub owners, we&apos;ve built a number of
            custom commercial interiors including fully upholstered walls, ceilings and booths.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="We specialize in a variety of upholstery services" title="Explore our work">
        <ServiceGrid exclude="/commercial-upholstery" />
      </Section>

      <QuoteCta />
    </>
  );
}
