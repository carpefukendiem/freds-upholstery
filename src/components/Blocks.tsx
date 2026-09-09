import Image from "next/image";
import type { Img } from "@/data/images";
import { assetUrl } from "@/data/images";
import { site } from "@/lib/site";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import CtaBand from "./CtaBand";

export { default as PhotoGrid } from "./PhotoGrid";
export { default as ServiceGrid } from "./ServiceGrid";
export { default as PhotoBand } from "./PhotoBand";
export { default as SectionHeader } from "./SectionHeader";

/** Inner-page hero used by routes not yet rebuilt. Homepage imports `./Hero` directly. */
export function Hero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: Img;
}) {
  return (
    <section className="relative overflow-hidden bg-smoke">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-heading text-heading-xl text-ink">{title}</h1>
          <div className="coral-rule-left" />
          {intro && <p className="mt-6 max-w-prose text-lg leading-relaxed text-charcoal">{intro}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote">Get a free quote</Button>
            <a
              href={site.quotePhoneHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3.5 font-cta text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Call {site.quotePhone}
            </a>
          </div>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={assetUrl(image.tenant, image.file)}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-content px-5 py-16">
      {title && <SectionHeader eyebrow={eyebrow} title={title} />}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-prose space-y-4 text-lg leading-relaxed text-charcoal">{children}</div>;
}

export function QuoteCta() {
  return (
    <CtaBand
      eyebrow="Fast and easy quotes"
      title="Text us a photo and rough dimensions"
      ctaHref="/quote"
    />
  );
}
