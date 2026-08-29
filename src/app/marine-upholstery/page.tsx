import type { Metadata } from "next";
import { Hero, Section, Prose, PhotoGrid, ServiceGrid, QuoteCta } from "@/components/Blocks";
import { marineImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Boat and Marine Upholstery in Santa Barbara",
  description:
    "Boat seat cushions, marine vinyl covers and marine upholstery repair for the Santa Barbara marina. Sunbrella fabric and stainless marine staples. Free quotes by text.",
  alternates: { canonical: "/marine-upholstery" },
};

export default function MarinePage() {
  return (
    <>
      <Hero
        eyebrow="Sunbrella fabric"
        title="Boat Upholstery"
        intro="Over 30 years of local boat and marine upholstery experience, working with owners in the Santa Barbara marina."
        image={marineImages[1]}
      />

      <Section title="30 years in marine upholstery">
        <Prose>
          <p>
            From boat seat cushions to marine vinyl cushion covers to marine upholstery repair, we
            work closely with boat owners in the Santa Barbara marina to keep their interiors clean
            and finished.
          </p>
        </Prose>
      </Section>

      <Section title="Photos">
        <PhotoGrid images={marineImages} />
      </Section>

      <Section title="Highest grade marine fabric">
        <Prose>
          <p>
            We exclusively use Sunbrella marine fabric and high-quality marine upholstery foam. We
            use stainless steel marine staples to prevent rust buildup, which means the work lasts
            longer on the water.
          </p>
          <p>
            If you have boat seats that need reupholstering, give us a call and we&apos;ll get you a
            timely quote.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="We specialize in a variety of upholstery services" title="Explore our work">
        <ServiceGrid exclude="/marine-upholstery" />
      </Section>

      <QuoteCta />
    </>
  );
}
