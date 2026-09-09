type Props = {
  eyebrow?: string;
  title: string;
  as?: "h1" | "h2";
  align?: "center" | "left";
};

export default function SectionHeader({ eyebrow, title, as = "h2", align = "center" }: Props) {
  const Heading = as;
  const alignCls = align === "center" ? "text-center" : "text-left";
  const ruleCls = align === "center" ? "coral-rule" : "coral-rule-left";

  return (
    <header className={alignCls}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className={`mt-3 font-heading text-heading-xl text-ink ${align === "center" ? "" : ""}`}>
        {title}
      </Heading>
      <div className={ruleCls} />
    </header>
  );
}
