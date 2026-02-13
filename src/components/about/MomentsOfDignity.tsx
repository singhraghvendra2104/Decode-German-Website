"use client";

import { useRef } from "react";
import { momentsOfDignity } from "@/lib/constants";

export default function MomentsOfDignity() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-warm-sand py-32 overflow-hidden border-y border-stone-gray/10">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl font-[var(--font-serif-alt)] italic mb-4">
              {momentsOfDignity.heading}
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] font-medium text-stone-gray/60">
              {momentsOfDignity.subtitle}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous story"
              className="size-14 border border-charcoal/10 rounded-full flex items-center justify-center hover:bg-paper-white transition-all group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                &larr;
              </span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next story"
              className="size-14 bg-charcoal text-paper-white rounded-full flex items-center justify-center hover:bg-primary-alt transition-all group"
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
          className="flex gap-12 overflow-x-auto pb-16 pt-8 px-4 no-scrollbar snap-x"
        >
          {momentsOfDignity.cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[340px] md:min-w-[420px] polaroid snap-center shrink-0"
            >
              <div
                className="aspect-square bg-cover bg-center mb-6 grayscale"
                style={{ backgroundImage: `url("${card.image}")` }}
                role="img"
                aria-label={card.imageAlt}
              />
              <div className="px-2">
                <h3 className="text-xl font-[var(--font-serif-alt)] mb-3 italic">
                  {card.title}
                </h3>
                <p className="text-stone-gray text-sm leading-relaxed italic">
                  {card.quote}
                </p>
                <p className="font-[var(--font-handwriting)] text-2xl text-primary-alt mt-6">
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
