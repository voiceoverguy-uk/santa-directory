import Link from "next/link";

interface CTABlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "brand" | "forest";
}

export default function CTABlock({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "brand",
}: CTABlockProps) {
  const bgClass = variant === "brand"
    ? "bg-gradient-to-br from-brand to-brand-dark"
    : "bg-gradient-to-br from-forest to-forest-light";

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-white text-brand hover:bg-cream px-8 py-3.5 rounded-lg font-semibold transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
