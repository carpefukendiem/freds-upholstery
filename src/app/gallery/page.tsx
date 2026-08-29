import type { Metadata } from "next";
import { Section, PhotoGrid, QuoteCta } from "@/components/Blocks";
import { galleryImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery of Our Upholstery Work",
  description:
    "Furniture, marine, commercial and outdoor upholstery projects completed by Fred's Upholstery in Santa Barbara.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Section eyebrow="We love what we do. It shows in our work." title="Gallery">
        <p className="mb-8 max-w-prose text-lg text-ink/75">
          {galleryImages.length} projects from the shop — furniture, boats, restaurants and patios.
        </p>
        <PhotoGrid images={galleryImages} columns={4} />
      </Section>
      <QuoteCta />
    </>
  );
}
