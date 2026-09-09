"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <ul className="divide-y divide-smoke border-y border-smoke">
        {items.map((item, i) => (
          <FaqRow key={item.q} item={item} index={i} />
        ))}
      </ul>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

function FaqRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = useId();

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-lg text-ink"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {item.q}
        <span aria-hidden className="font-body text-coral">
          {open ? "–" : "+"}
        </span>
      </button>
      {open && (
        <p id={panelId} className="pb-4 leading-relaxed text-charcoal">
          {item.a}
        </p>
      )}
    </li>
  );
}
