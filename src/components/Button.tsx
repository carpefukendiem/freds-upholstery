import Link from "next/link";

type Variant = "primary" | "ghost" | "onTeal";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-cta text-sm font-bold uppercase tracking-wide transition-[transform,background-color,color] duration-200 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-teal-btn text-white hover:bg-teal-light",
  ghost: "border-2 border-white text-white hover:bg-white hover:text-ink",
  onTeal: "bg-charcoal text-white hover:bg-ink",
};

export default function Button({ href, children, variant = "primary", className = "", external }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
