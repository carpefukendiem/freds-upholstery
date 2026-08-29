import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import { site } from "@/lib/site";
import { brand } from "@/data/images";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Santa Barbara's Premier Custom Upholstery | Fred's Upholstery (Since 1986)",
    template: "%s | Fred's Upholstery",
  },
  description:
    "Fred's Upholstery has provided custom furniture, marine, commercial and outdoor upholstery in Santa Barbara County since 1986. Text us a photo for a fast, free quote.",
  openGraph: {
    type: "website",
    siteName: site.name,
    images: [brand.ogImage()],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-deep focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Schema />
      </body>
    </html>
  );
}
