"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-teal">
        <nav className="mx-auto hidden max-w-content items-center justify-center gap-7 px-5 py-3 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-nav text-[15px] font-medium uppercase tracking-nav text-white transition-opacity hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between px-5 py-3 lg:hidden">
          <span className="font-nav text-sm font-semibold uppercase tracking-nav text-white">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div className="bg-stone py-5 text-center">
        <Link href="/" aria-label={`${site.name} home`} className="inline-block text-white">
          <span className="font-display text-2xl tracking-[0.12em] sm:text-3xl md:text-4xl">
            FRED&apos;S UPHOLSTERY
          </span>
          <span className="ml-3 font-heading text-lg italic sm:text-xl">Est. {site.established}</span>
        </Link>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/20 bg-teal lg:hidden"
          aria-label="Mobile"
        >
          <ul className="px-5 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/20 py-3 font-nav text-sm uppercase tracking-nav text-white"
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
