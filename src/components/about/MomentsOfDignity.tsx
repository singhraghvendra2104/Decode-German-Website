"use client";

import { useRef } from "react";
import { momentsOfDignity } from "@/lib/constants";

export default function MomentsOfDignity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-warm-sand py-12 md:py-20 lg:py-32 overflow-hidden border-y border-stone-gray/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between mb-8 md:mb-12 lg:mb-20 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-[var(--font-serif-alt)] italic mb-3 md:mb-4">
              {momentsOfDignity.heading}
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-stone-gray/60">
              {momentsOfDignity.subtitle}
            </p>
          </div>
          <div className="flex gap-3 md:gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous story"
              className="size-11 md:size-14 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-paper-white transition-all group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                &larr;
              </span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next story"
              className="size-11 md:size-14 bg-charcoal text-paper-white rounded-full flex items-center justify-center hover:bg-primary-alt transition-all group"
            >
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-12 overflow-x-auto pb-12 md:pb-16 pt-4 md:pt-8 px-2 md:px-4 no-scrollbar snap-x"
        >
          {momentsOfDignity.cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[280px] md:min-w-[420px] polaroid snap-center shrink-0"
            >
              <div
                className="aspect-square bg-cover bg-center mb-4 md:mb-6 grayscale"
                style={{ backgroundImage: `url("${card.image}")` }}
                role="img"
                aria-label={card.imageAlt}
              />
              <div className="px-2">
                <h3 className="text-lg md:text-xl font-[var(--font-serif-alt)] mb-2 md:mb-3 italic">
                  {card.title}
                </h3>
                <p className="text-stone-gray text-sm leading-relaxed italic">
                  {card.quote}
                </p>
                <p className="font-handwriting text-xl md:text-2xl text-primary-alt mt-4 md:mt-6">
                  &mdash; {card.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
