import Image from "next/image";
import type { Img } from "@/data/images";
import { assetUrl } from "@/data/images";
import Button from "./Button";

type Props = {
  image: Img;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaHref: string;
  ctaLabel?: string;
};

export default function PhotoBand({
  image,
  eyebrow,
  title,
  subtitle,
  ctaHref,
  ctaLabel = "Learn More",
}: Props) {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
      <Image
        src={assetUrl(image.tenant, image.file)}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" aria-hidden />
      <div className="relative mx-auto flex min-h-[420px] max-w-content flex-col items-center justify-center px-5 py-20 text-center text-white md:min-h-[520px]">
        {eyebrow && <p className="font-nav text-eyebrow uppercase tracking-wide text-white/90">{eyebrow}</p>}
        <h2 className="mt-3 font-heading text-heading-xl">{title}</h2>
        {subtitle && <p className="mt-2 font-heading text-heading-lg">{subtitle}</p>}
        <div className="mt-8">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
