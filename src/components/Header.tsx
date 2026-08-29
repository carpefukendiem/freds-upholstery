"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { brand } from "@/data/images";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src={brand.logo()}
            alt={site.name}
            width={180}
            height={56}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.quotePhoneHref}
            className="hidden rounded-sm bg-deep px-5 py-2.5 text-sm font-semibold text-bone transition-colors hover:bg-brass sm:inline-block"
          >
            {site.quotePhone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
            <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-sand lg:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-content px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-sand/60 py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
