import Image from "next/image";
import type { Img } from "@/data/images";
import { assetUrl } from "@/data/images";

export default function PhotoGrid({ images, columns = 3 }: { images: Img[]; columns?: number }) {
  const cols = columns === 4 ? "sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid grid-cols-2 gap-3 ${cols}`}>
      {images.map((img) => (
        <li key={img.file} className="relative aspect-square overflow-hidden bg-smoke">
          <Image
            src={assetUrl(img.tenant, img.file)}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className="object-cover transition-transform duration-500 motion-safe:hover:scale-105"
          />
        </li>
      ))}
    </ul>
  );
}
