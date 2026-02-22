import Image from "next/image";
import { narrativeSection } from "@/lib/constants";

export default function NarrativeSection() {
  return (
    <section id="narrative" className="py-20 md:py-32 px-4 md:px-6 relative bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent -z-10 opacity-50 hidden md:block" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
            <Image
              src={narrativeSection.image}
              alt={narrativeSection.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 font-[var(--font-serif)] text-8xl md:text-9xl opacity-10 select-none pointer-events-none hidden md:block">
            STORY
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 md:space-y-10">
          <div className="inline-block px-4 py-1 border border-primary text-primary text-[10px] font-bold tracking-widest uppercase">
            {narrativeSection.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] font-bold leading-tight">
            {narrativeSection.heading}{" "}
            <span className="italic text-primary">
              {narrativeSection.headingAccent}
            </span>
            .
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            <p>{narrativeSection.body}</p>
          </div>
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 w-12 h-1 bg-primary" />
            <p className="font-[var(--font-handwriting)] text-2xl md:text-3xl text-charcoal/70 leading-snug">
              {narrativeSection.quote.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  &ldquo;{line}
                  {i === narrativeSection.quote.split("\n").length - 1 &&
                    "&rdquo;"}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
