import type { Metadata } from "next";
import { Hero, Section, Prose, PhotoGrid, ServiceGrid, QuoteCta } from "@/components/Blocks";
import { aboutImages } from "@/data/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Fred's Upholstery",
  description:
    "Fred's Upholstery was established in 1986 and has served Santa Barbara County ever since — two generations and a combined 50+ years of hands-on upholstery experience.",
  alternates: { canonical: "/about" },
};

/**
 * ⚠️ PHASE 2 BLOCKER — READ BEFORE LAUNCH
 *
 * The live site currently ends this page with an H1 reading:
 *   "SORRY WE NO LONGER PROVIDE AUTOMOTIVE UPHOLSTERY OR OFFER REPAIRS"
 *
 * That single line contradicts the entire furniture-repair expansion. It also
 * means the word "repairs" appears on the site exactly once — inside a refusal.
 * It is reproduced below for Phase 1 fidelity only.
 *
 * Set to false the moment repair services go live.
 */
const SHOW_LEGACY_NO_REPAIRS_NOTICE = true;

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="You're in good hands"
        title={`Est. ${site.established}`}
        intro="A boutique upholstery service in the same Santa Barbara shop for nearly four decades."
        image={aboutImages[0]}
      />

      <Section title="About us">
        <Prose>
          <p>
            Fred&apos;s Upholstery was established in {site.established} and has been providing
            Santa Barbara County with superior reupholstery services ever since. We have a long and
            humble history of working with a variety of clientele, from minor jobs to interior
            designers completing full home redesigns, and everything in between.
          </p>
          <p>
            We&apos;ve worked with many local businesses, offices and residents, as well as customers
            from around the country. We provide a boutique upholstery service.
          </p>
        </Prose>
      </Section>

      <Section title="Photos">
        <PhotoGrid images={aboutImages} columns={4} />
      </Section>

      <Section title="Two generations of expertise">
        <Prose>
          <p>
            We provide two generations and a combined 50+ years of hands-on experience at your
            fingertips. It is the quality of our workmanship that has always set us apart.
          </p>
          <p>
            If you have any questions, give us a call. You can get an estimate by texting a photo to{" "}
            <a href={site.quoteTextHref} className="font-semibold text-brass hover:underline">
              {site.quotePhone}
            </a>
            .
          </p>
        </Prose>
      </Section>

      <Section title="Types of upholstery">
        <ul className="grid gap-x-8 gap-y-2 text-lg text-ink/80 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Custom furniture upholstery",
            "Commercial upholstery",
            "Dining room chairs",
            "Custom built upholstered headboards",
            "Custom upholstered ottomans",
            "Loveseats",
            "Sectionals",
            "Leather chairs",
            "Antiques",
            "Marine cushions",
            "Gym",
            "Restaurant",
            "Country clubs",
            "Night clubs",
          ].map((t) => (
            <li key={t} className="border-b border-sand py-2">
              {t}
            </li>
          ))}
        </ul>

        {SHOW_LEGACY_NO_REPAIRS_NOTICE && (
          <p className="mt-10 border-l-4 border-brass bg-sand/50 p-6 font-semibold uppercase tracking-wide">
            Sorry, we no longer provide automotive upholstery or offer repairs.
          </p>
        )}
      </Section>

      <Section eyebrow="We've got you covered" title="Santa Barbara's finest upholstery">
        <ServiceGrid />
      </Section>

      <QuoteCta />
    </>
  );
}
