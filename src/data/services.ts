import type { Img } from "@/data/images";
import { liveHome, furnitureImages } from "@/data/images";

export type ServiceCardData = {
  href: string;
  title: string;
  image: Img;
};

/** First four cards match the live homepage. Furniture Repair is the Phase 2 addition. */
export const homeServices: ServiceCardData[] = [
  {
    href: "/upholstery",
    title: "Fine Furniture Upholstery",
    image: liveHome.furniture,
  },
  {
    href: "/commercial-upholstery",
    title: "Commercial Upholstery",
    image: liveHome.commercial,
  },
  {
    href: "/outdoor-upholstery",
    title: "Outdoor Upholstery & Pool Cushions",
    image: liveHome.outdoor,
  },
  {
    href: "/marine-upholstery",
    title: "Boat Upholstery",
    image: liveHome.boat,
  },
  {
    href: "/furniture-repair",
    title: "Furniture Repair",
    image: furnitureImages[3],
  },
];
