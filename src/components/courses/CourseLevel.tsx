import Image from "next/image";
import Link from "next/link";

interface CourseDetail {
  label: string;
  value: string;
}

interface CourseQuote {
  text: string;
  caption: string;
  position: "bottom-right" | "top-left";
  bgClass: string;
}

interface CourseLevelProps {
  id: string;
  level: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageAspect: string;
  maskClass: string;
  details: CourseDetail[];
  buttonLabel: string;
  buttonStyle: "outline" | "filled";
  resources?: string[];
  reversed?: boolean;
  quote?: CourseQuote;
  isLast?: boolean;
}

export default function CourseLevel({
  id,
  level,
  title,
  description,
  image,
  imageAlt,
  imageAspect,
  maskClass,
  details,
  buttonLabel,
  buttonStyle,
  resources,
  reversed = false,
  quote,
  isLast = false,
}: CourseLevelProps) {
  const textBlock = (
    <div
      className={`space-y-8 md:space-y-12 ${
        reversed
          ? "lg:col-span-4 lg:order-1"
          : "lg:col-span-4 lg:col-start-9"
      }`}
    >
      <div>
        <h2 className="text-5xl md:text-6xl font-[var(--font-serif-alt)] mb-2">
          {level}
        </h2>
        <h3 className="text-xl md:text-2xl font-[var(--font-serif-alt)] italic text-primary-alt">
          {title}
        </h3>
      </div>
      <p className="text-base md:text-lg text-stone-gray leading-relaxed">
        {description}
      </p>
      <ul className="space-y-4 md:space-y-6">
        {details.map((detail, index) => (
          <li key={detail.label} className="flex items-baseline gap-3 md:gap-4">
            <span className="text-primary-alt font-[var(--font-serif-alt)] italic">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <div className="border-b border-warm-sand pb-2 flex-1 flex justify-between">
              <span className="uppercase text-[10px] font-bold tracking-[0.2em]">
                {detail.label}
              </span>
              <span className="text-sm italic">{detail.value}</span>
            </div>
          </li>
        ))}
      </ul>
      {resources && resources.length > 0 && (
        <div className="space-y-4">
          <p className="uppercase text-[10px] font-bold tracking-[0.2em] text-stone-gray">
            Learning Resources
          </p>
          <div className="flex flex-wrap gap-2">
            {resources.map((resource, index) => (
              <span
                key={index}
                className={`text-xs px-3 py-1.5 rounded-full border ${
                  index < 2
                    ? "bg-primary/10 border-primary/30 text-primary font-semibold"
                    : "bg-charcoal/5 border-charcoal/15 text-charcoal"
                }`}
              >
                {resource}
              </span>
            ))}
          </div>
        </div>
      )}
      <Link href={`/courses/${id}`}>
        {buttonStyle === "outline" ? (
          <button className="w-full py-4 md:py-5 border border-charcoal/20 uppercase text-xs font-bold tracking-widest hover:bg-charcoal hover:text-ivory transition-all mt-4">
            {buttonLabel}
          </button>
        ) : (
          <button className="w-full py-4 md:py-5 bg-primary text-ivory uppercase text-xs font-bold tracking-widest hover:bg-charcoal transition-all shadow-lg mt-4">
            {buttonLabel}
          </button>
        )}
      </Link>
    </div>
  );

  const imageBlock = (
    <div
      className={
        reversed
          ? "lg:col-span-7 lg:col-start-6 lg:order-2"
          : "lg:col-span-7"
      }
    >
      <div className="relative group">
        <div
          className={`${imageAspect} ${
            isLast ? "max-w-lg mx-auto" : ""
          } overflow-hidden ${maskClass} shadow-2xl relative`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        {quote?.position === "bottom-right" && (
          <div
            className={`hidden lg:block absolute -bottom-10 -right-10 ${quote.bgClass} p-12 max-w-sm`}
          >
            <p className="font-[var(--font-serif-alt)] italic text-2xl leading-snug">
              {quote.text}
            </p>
            {quote.caption && (
              <p className="text-[10px] uppercase tracking-widest mt-6 opacity-50">
                {quote.caption}
              </p>
            )}
          </div>
        )}
        {quote?.position === "top-left" && (
          <div
            className={`hidden lg:block absolute top-20 -left-12 ${quote.bgClass} p-12 max-w-xs`}
          >
            <p className="font-[var(--font-serif-alt)] italic text-xl leading-relaxed">
              {quote.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={`py-16 md:py-32 relative ${isLast ? "md:mb-20" : ""} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
        {reversed ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}
