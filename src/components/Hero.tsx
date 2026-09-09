import Image from "next/image";
import type { Img } from "@/data/images";
import { assetUrl } from "@/data/images";
import Button from "./Button";

type Props = {
  image: Img;
  kicker: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Hero({
  image,
  kicker,
  ctaHref = "/quote",
  ctaLabel = "Get a Free Quote",
}: Props) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[78vh]">
      <Image
        src={assetUrl(image.tenant, image.file)}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/45"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-content flex-col items-center justify-center px-5 py-24 text-center md:min-h-[78vh]">
        <p className="font-heading text-display text-white drop-shadow-sm">{kicker}</p>
        <div className="mt-6 h-[2px] w-24 bg-teal" aria-hidden />
        <div className="mt-8">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
