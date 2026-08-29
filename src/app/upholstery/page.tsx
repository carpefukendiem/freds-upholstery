import type { Metadata } from "next";
import { Hero, Section, Prose, PhotoGrid, ServiceGrid, QuoteCta } from "@/components/Blocks";
import { furnitureImages } from "@/data/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fine Furniture Upholstery in Santa Barbara",
  description:
    "Sofas, loveseats, dining chairs, wing chairs, sectionals, recliners and antiques reupholstered by Fred's Upholstery in Santa Barbara. Free quotes by text.",
  alternates: { canonical: "/upholstery" },
};

export default function UpholsteryPage() {
  return (
    <>
      <Hero
        eyebrow="Fine furniture"
        title="Furniture Upholstery Is What We Do"
        intro="There's no substitute for first-hand experience. Working with fine furniture is our specialty. With a tried and true process and top-quality materials, we let the work speak for itself."
        image={furnitureImages[0]}
      />

      <Section title="We work on all types of furniture">
        <Prose>
          <p>
            We work on sofas, loveseats, kitchen chairs, wing chairs, ottomans, cornice boxes,
            headboards, bench seats, sectionals, recliners, antique furniture and much more. We also
            build custom ottomans and upholstered headboards from scratch.
          </p>
        </Prose>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Highest quality materials", "We don't cut corners on fabric or thread."],
            ["Premium grade foam", "Cushions that hold their shape years in."],
            ["Built to last", "Frames and springs done properly the first time."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-sm border border-sand bg-white p-6">
              <h3 className="font-display text-xl">{h}</h3>
              <p className="mt-2 text-ink/70">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recent furniture work">
        <PhotoGrid images={furnitureImages} />
      </Section>

      <Section eyebrow="Quote via text" title="Four steps to an estimate">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Take a picture of your furniture.",
            "Measure it — rough dimensions are fine.",
            `Text the photo and dimensions to ${site.quotePhone}.`,
            "We reply with an estimate, usually within 12 hours.",
          ].map((step, i) => (
            <li key={step} className="rounded-sm border border-sand bg-white p-6">
              <span className="font-display text-3xl text-brass">{i + 1}</span>
              <p className="mt-2 text-ink/75">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Also from Fred's" title="Other services">
        <ServiceGrid exclude="/upholstery" />
      </Section>

      <QuoteCta />
    </>
  );
}
