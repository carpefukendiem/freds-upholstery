import Button from "./Button";

type Props = {
  title: string;
  eyebrow?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CtaBand({
  title,
  eyebrow,
  ctaHref = "/quote",
  ctaLabel = "Get a Free Quote",
}: Props) {
  return (
    <section className="bg-white px-5 py-16 text-center md:py-20">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-heading text-heading-xl text-ink">{title}</h2>
      <div className="coral-rule" />
      <div className="mt-8">
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </section>
  );
}
