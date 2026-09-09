import { site } from "@/lib/site";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-teal p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={site.quotePhoneHref}
        className="flex h-12 items-center justify-center rounded-full bg-charcoal font-cta text-sm font-bold uppercase tracking-wide text-white"
      >
        Call {site.quotePhone}
      </a>
    </div>
  );
}
