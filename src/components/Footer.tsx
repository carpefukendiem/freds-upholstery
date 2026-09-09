import Link from "next/link";
import { nav, site } from "@/lib/site";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.12em]">FRED&apos;S UPHOLSTERY</p>
          <address className="mt-4 not-italic leading-relaxed text-white/80">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </address>
          <p className="mt-4 text-white/80">
            For a free quote, text{" "}
            <a href={site.quoteTextHref} className="font-semibold text-white underline-offset-2 hover:underline">
              {site.quotePhone}
            </a>
          </p>
          <div className="mt-6">
            <Button href="/quote">Get a Free Quote</Button>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl">Office Hours</h2>
          <div className="coral-rule-left" />
          <ul className="mt-4 space-y-1 text-sm text-white/80">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span>{h.open ? `${h.open} – ${h.close}` : "Closed"}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl">Find us</h2>
          <div className="coral-rule-left" />
          <div className="mt-4 aspect-[4/3] overflow-hidden bg-ink">
            <iframe
              title="Map to Fred's Upholstery on Garden Street"
              src="https://maps.google.com/maps?q=132%20Garden%20Street%20Santa%20Barbara%20CA%2093101&z=15&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-teal-light hover:underline"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="bg-teal">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-4 text-center text-xs text-white sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. Established {site.established}.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 font-nav uppercase tracking-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:opacity-80">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
