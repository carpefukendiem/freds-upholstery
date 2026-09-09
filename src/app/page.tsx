import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceGrid from "@/components/ServiceGrid";
import PhotoBand from "@/components/PhotoBand";
import CtaBand from "@/components/CtaBand";
import ReviewPanel from "@/components/ReviewPanel";
import { liveHome } from "@/data/images";
import { yearsOfExpertise } from "@/lib/site";

export default function HomePage() {
  const years = yearsOfExpertise();

  return (
    <>
      <Hero image={liveHome.hero} kicker="Your Upholstery Resource" />

      <section className="mx-auto max-w-content px-5 py-16 md:py-20">
        <SectionHeader
          as="h1"
          eyebrow="We've Got You Covered"
          title="Santa Barbara's Finest Upholstery"
        />
        <ServiceGrid />
      </section>

      <PhotoBand
        image={liveHome.galleryBand}
        eyebrow="Want to see more of our work?"
        title="See the Full Gallery"
        ctaHref="/gallery"
        ctaLabel="See Full Gallery"
      />

      <CtaBand title={`${years} Years of Expertise`} />

      <PhotoBand
        image={liveHome.boatBand}
        eyebrow="Custom boat upholstery"
        title="Boat Cushions"
        subtitle="Sunbrella Fabric"
        ctaHref="/marine-upholstery"
        ctaLabel="Learn More"
      />

      <ReviewPanel />
    </>
  );
}
