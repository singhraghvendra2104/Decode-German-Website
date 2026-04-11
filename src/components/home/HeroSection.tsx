"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { heroSlides, heroCta } from "@/lib/constants";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Carousel Slides */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover brightness-[0.4] contrast-[1.1]"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
              {slide.handwriting && (
                <span className="font-handwriting text-primary text-xl md:text-3xl mb-4 md:mb-6 block opacity-90">
                  {slide.handwriting}
                </span>
              )}
              <h1 className="font-[var(--font-serif)] text-ivory text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.2] tracking-tight">
                {slide.heading}{" "}
                <span className="italic text-primary">
                  {slide.headingAccent}
                </span>{" "}
                {slide.headingEnd}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-8 md:gap-12 w-full px-6">
        <div className="flex gap-4">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeSlide ? "bg-primary" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:flex items-center gap-4 text-ivory/60">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Scroll for the Journey
        </span>
        <div className="w-12 h-[1px] bg-ivory/30" />
      </div>
    </section>
  );
}
