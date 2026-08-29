import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-deep text-bone">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl">{site.name}</h2>
          <address className="mt-4 not-italic leading-relaxed text-bone/70">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <p className="mt-4 text-bone/70">
            For a free quote, text{" "}
            <a href={site.quoteTextHref} className="font-semibold text-brass hover:underline">
              {site.quotePhone}
            </a>
          </p>
          <p className="mt-1">
            <a href={site.mainPhoneHref} className="font-semibold text-brass hover:underline">
              {site.mainPhone}
            </a>
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Office Hours</h3>
          <ul className="mt-4 space-y-1 text-sm text-bone/70">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span>{h.open ? `${h.open} – ${h.close}` : "Closed"}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-bone/70 transition-colors hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-brass hover:underline"
          >
            Get directions →
          </a>
        </div>
      </div>

      <div className="border-t border-bone/10 px-5 py-6 text-center text-xs text-bone/50">
        © {new Date().getFullYear()} {site.name}. Established {site.established}. Santa Barbara, California.
      </div>
    </footer>
  );
}
