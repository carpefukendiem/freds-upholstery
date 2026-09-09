import { homeServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ exclude }: { exclude?: string }) {
  const items = homeServices.filter((s) => s.href !== exclude);
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2">
      {items.map((s) => (
        <ServiceCard key={s.href} {...s} />
      ))}
    </ul>
  );
}
