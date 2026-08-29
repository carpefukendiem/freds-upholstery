import Link from "next/link";
import { Hero, Section, ServiceGrid, PhotoGrid, QuoteCta } from "@/components/Blocks";
import Reviews from "@/components/Reviews";
import { galleryImages } from "@/data/images";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={site.tagline}
        title="Santa Barbara's Finest Upholstery"
        intro={`Two generations and a combined 50+ years of hands-on experience, in the same Garden Street shop since ${site.established}. Furniture, boats, restaurants and patios.`}
        image={galleryImages[0]}
      />

      <Section eyebrow="We specialize in a variety of upholstery services" title="What we do">
        <ServiceGrid />
      </Section>

      <Section eyebrow="Recent work" title="A look at the shop">
        <PhotoGrid images={galleryImages.slice(1, 9)} columns={4} />
        <Link
          href="/gallery"
          className="mt-8 inline-block font-semibold text-brass hover:underline"
        >
          See the full gallery →
        </Link>
      </Section>

      <Reviews />
      <QuoteCta />
    </>
  );
}
