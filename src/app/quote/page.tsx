import type { Metadata } from "next";
import { Section } from "@/components/Blocks";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Upholstery Quote",
  description:
    "Send a photo and rough dimensions and Fred's Upholstery will reply with an estimate, usually within 12 hours. Serving Santa Barbara County since 1986.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <Section eyebrow="Fast and easy quotes" title="Get a free quote">
      <div className="grid gap-12 md:grid-cols-[1.2fr,1fr]">
        <QuoteForm />
        <aside>
          <h3 className="font-display text-2xl">Faster by text</h3>
          <p className="mt-3 text-ink/75">
            Most people get an answer quickest by texting a photo straight to the shop.
          </p>
          <a
            href={site.quoteTextHref}
            className="mt-4 inline-block rounded-sm bg-deep px-6 py-3 font-semibold text-bone transition-colors hover:bg-brass"
          >
            Text {site.quotePhone}
          </a>
          <ol className="mt-8 space-y-3 text-ink/75">
            <li>1. Take a picture of the piece.</li>
            <li>2. Measure it — rough dimensions are fine.</li>
            <li>3. Send both to the number above.</li>
            <li>4. We reply with an estimate, usually within 12 hours.</li>
          </ol>
        </aside>
      </div>
    </Section>
  );
}
