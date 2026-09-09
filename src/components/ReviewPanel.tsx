import Image from "next/image";
import { reviews } from "@/data/reviews";
import { reviewAvatars } from "@/data/images";
import Button from "./Button";

/**
 * Teal panel on charcoal with a white inset border — sampled from the live
 * `.midWideSection.borderFull` treatment. Body copy is ink, not white, so the
 * teal/text pair meets WCAG AA (white-on-teal on the live site fails badly).
 */
export default function ReviewPanel() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-content px-5">
        <div className="border-[10px] border-white bg-teal px-6 py-12 md:px-14 md:py-16">
          <h2 className="text-center font-heading text-heading-lg text-ink">Customer Reviews</h2>
          <div className="coral-rule" />
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {reviews.map((r, i) => (
              <li key={r.name} className="text-center">
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full bg-stone">
                  <Image src={reviewAvatars[i]} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <p className="mt-4 font-heading text-xl text-ink">{r.name}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{r.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href="/quote" variant="onTeal">
              Join These Happy Customers — Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
