import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Phase 2: generate this from the page registry rather than a hand-kept list,
 * or it will drift the moment the site passes ~30 pages.
 */
const routes = [
  { path: "/", priority: 1.0 },
  { path: "/upholstery", priority: 0.9 },
  { path: "/marine-upholstery", priority: 0.9 },
  { path: "/commercial-upholstery", priority: 0.9 },
  { path: "/outdoor-upholstery", priority: 0.9 },
  { path: "/gallery", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/quote", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
