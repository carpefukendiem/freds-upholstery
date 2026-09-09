import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import StickyCallBar from "@/components/StickyCallBar";
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
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@600;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pb-16 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <Schema />
      </body>
    </html>
  );
}
