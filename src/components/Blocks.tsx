import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { assetUrl } from "@/data/images";

type Img = { file: string; tenant: string; alt: string };

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
    <section className="relative overflow-hidden border-b border-sand bg-sand/40">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-4xl leading-[1.1] md:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/75">{intro}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="rounded-sm bg-deep px-7 py-3.5 font-semibold text-bone transition-colors hover:bg-brass"
            >
              Get a free quote
            </Link>
            <a
              href={site.quotePhoneHref}
              className="rounded-sm border border-deep px-7 py-3.5 font-semibold transition-colors hover:bg-deep hover:text-bone"
            >
              Call {site.quotePhone}
            </a>
          </div>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
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
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">{title}</h2>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-prose space-y-4 text-lg leading-relaxed text-ink/80">{children}</div>;
}

export function PhotoGrid({ images, columns = 3 }: { images: Img[]; columns?: number }) {
  const cols = columns === 4 ? "sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid grid-cols-2 gap-3 ${cols}`}>
      {images.map((img) => (
        <li key={img.file} className="relative aspect-square overflow-hidden rounded-sm bg-sand">
          <Image
            src={assetUrl(img.tenant, img.file)}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </li>
      ))}
    </ul>
  );
}

const services = [
  { href: "/upholstery", title: "Fine Furniture Upholstery", blurb: "Sofas, chairs, sectionals, antiques and custom pieces." },
  { href: "/marine-upholstery", title: "Boat Upholstery", blurb: "Cushions, vinyl and Sunbrella work for the harbor." },
  { href: "/commercial-upholstery", title: "Commercial Upholstery", blurb: "Restaurants, offices, bars and medical waiting rooms." },
  { href: "/outdoor-upholstery", title: "Outdoor & Pool Cushions", blurb: "Patio, chaise and poolside cushions built to last outside." },
];

export function ServiceGrid({ exclude }: { exclude?: string }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {services
        .filter((s) => s.href !== exclude)
        .map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="group block h-full rounded-sm border border-sand bg-white p-7 transition-colors hover:border-brass"
            >
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-ink/70">{s.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brass">Learn more →</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export function QuoteCta() {
  return (
    <section className="bg-deep text-bone">
      <div className="mx-auto max-w-content px-5 py-16 text-center">
        <p className="eyebrow">Fast and easy quotes</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl md:text-4xl">
          Text us a photo and rough dimensions. You&apos;ll have an estimate back within 12 hours.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.quoteTextHref}
            className="rounded-sm bg-brass px-7 py-3.5 font-semibold text-deep transition-opacity hover:opacity-90"
          >
            Text {site.quotePhone}
          </a>
          <Link
            href="/quote"
            className="rounded-sm border border-bone/40 px-7 py-3.5 font-semibold transition-colors hover:bg-bone hover:text-deep"
          >
            Use the quote form
          </Link>
        </div>
        <p className="mt-6 text-sm text-bone/60">
          Accurate photos and dimensions are what make a phone estimate accurate.
        </p>
      </div>
    </section>
  );
}
