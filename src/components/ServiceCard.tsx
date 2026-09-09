import Image from "next/image";
import Link from "next/link";
import type { ServiceCardData } from "@/data/services";
import { assetUrl } from "@/data/images";

export default function ServiceCard({ href, title, image }: ServiceCardData) {
  return (
    <li>
      <Link
        href={href}
        className="group relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={assetUrl(image.tenant, image.file)}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="font-heading text-2xl leading-tight">{title}</p>
          <span className="mt-2 inline-block font-nav text-xs font-semibold uppercase tracking-wide">
            Learn More
          </span>
        </div>
      </Link>
    </li>
  );
}
