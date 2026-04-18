"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "@/components/ui/ImageWithSkeleton";
import { heroSlides, heroSectionContent } from "@/lib/constants";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-charcoal"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Slides */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => {
          const HeadingTag = index === 0 ? "h1" : "p";
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== activeSlide}
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
                <HeadingTag className="font-[var(--font-serif)] text-ivory text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.2] tracking-tight">
                  {slide.heading}{" "}
                  <span className="italic text-primary">
                    {slide.headingAccent}
                  </span>{" "}
                  {slide.headingEnd}
                </HeadingTag>
              </div>
            </div>
          );
        })}
      </div>

      {/* Left/Right Navigation Arrows (desktop only, visible on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 bottom-0 z-20 w-20 hidden md:flex items-center justify-start pl-6 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
        aria-label="Previous slide"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 bottom-0 z-20 w-20 hidden md:flex items-center justify-end pr-6 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
        aria-label="Next slide"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </div>
      </button>

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
          {heroSectionContent.scrollHint}
        </span>
        <div className="w-12 h-[1px] bg-ivory/30" />
      </div>
    </section>
  );
}
