"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Phase 1: posts to /api/quote, which currently just validates and logs.
 * Leave QUOTE_WEBHOOK_URL unset until a CRM endpoint is supplied.
 */
export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-smoke bg-white p-8">
        <h3 className="font-heading text-2xl">Request received</h3>
        <p className="mt-3 text-charcoal">
          We&apos;ll get back to you with an estimate, usually within 12 hours. If it&apos;s urgent,
          call {site.quotePhone}.
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-none border border-stone bg-white px-4 py-3 font-body text-ink focus:border-teal";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-semibold">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="text-sm font-semibold">What needs work?</span>
        <select name="service" className={field} defaultValue="">
          <option value="" disabled>
            Choose a service
          </option>
          <option>Furniture upholstery</option>
          <option>Furniture repair</option>
          <option>Boat / marine upholstery</option>
          <option>Commercial upholstery</option>
          <option>Outdoor / patio cushions</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-semibold">Describe the piece and its rough dimensions</span>
        <textarea name="details" rows={5} required className={field} />
      </label>

      {status === "error" && (
        <p className="border border-coral bg-white p-4 text-ink">
          That didn&apos;t send. Call or text {site.quotePhone} and we&apos;ll take it from there.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-teal-btn px-7 py-3.5 font-cta text-sm font-bold uppercase tracking-wide text-white transition-transform duration-200 motion-safe:hover:scale-[1.03] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my quote"}
      </button>
      <p className="text-sm text-charcoal">
        Photos help a lot. After you submit, text them to {site.quotePhone}.
      </p>
    </form>
  );
}
