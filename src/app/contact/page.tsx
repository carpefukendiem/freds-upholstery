import type { Metadata } from "next";
import { Hero, Section } from "@/components/Blocks";
import { contactImage } from "@/data/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Fred's Upholstery",
  description:
    "Visit Fred's Upholstery at 132 Garden Street in Santa Barbara, or text a photo for a free quote. Open Monday through Friday.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title="Contact us"
        intro="Visit the shop on Garden Street, or text a photo for a free quote."
        image={contactImage}
      />
      <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl">Visit the shop</h3>
          <address className="mt-3 not-italic text-lg leading-relaxed text-ink/75">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-semibold text-brass hover:underline"
          >
            Get directions →
          </a>

          <h3 className="mt-10 font-display text-2xl">Call or text</h3>
          <p className="mt-3 text-lg">
            <a href={site.quotePhoneHref} className="font-semibold text-brass hover:underline">
              {site.quotePhone}
            </a>{" "}
            <span className="text-ink/60">— quotes by text</span>
          </p>
          <p className="mt-1 text-lg">
            <a href={site.mainPhoneHref} className="font-semibold text-brass hover:underline">
              {site.mainPhone}
            </a>{" "}
            <span className="text-ink/60">— shop line</span>
          </p>

          <p className="mt-8 rounded-sm border border-sand bg-white p-5 text-ink/75">
            An accurate quote over the phone needs photos and accurate dimensions. Text them over and
            we&apos;ll come back to you, usually within 12 hours.
          </p>
        </div>

        <div>
          <h3 className="font-display text-2xl">Office hours</h3>
          <ul className="mt-4 divide-y divide-sand border-y border-sand">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between py-3">
                <span className="font-medium">{h.day}</span>
                <span className="text-ink/70">
                  {h.open ? `${h.open} – ${h.close}` : "Closed"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
    </>
  );
}
