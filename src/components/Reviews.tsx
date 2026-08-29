import Image from "next/image";
import { reviews } from "@/data/reviews";
import { reviewAvatars } from "@/data/images";

export default function Reviews() {
  return (
    <section className="border-y border-sand bg-white">
      <div className="mx-auto max-w-content px-5 py-16">
        <p className="eyebrow">We love what we do. It shows in our work.</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Customer reviews</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={r.name} className="flex flex-col rounded-sm border border-sand p-7">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-sand">
                  <Image src={reviewAvatars[i]} alt="" fill sizes="48px" className="object-cover" />
                </div>
                <p className="font-display text-xl">{r.name}</p>
              </div>
              <p className="mt-4 leading-relaxed text-ink/75">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
