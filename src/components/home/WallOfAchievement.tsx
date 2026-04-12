"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { wallOfAchievement } from "@/lib/constants";

export default function WallOfAchievement() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || lightboxIndex !== null) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(interval);
  }, [emblaApi, lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) =>
          i === null ? i : (i + 1) % wallOfAchievement.polaroids.length
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === null
            ? i
            : (i - 1 + wallOfAchievement.polaroids.length) %
              wallOfAchievement.polaroids.length
        );
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 md:px-6 bg-accent/30 overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-24">
          <div className="font-handwriting text-2xl md:text-3xl text-primary mb-2">
            {wallOfAchievement.handwriting}
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center py-12">
              {wallOfAchievement.polaroids.map((polaroid, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={polaroid.id}
                    className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_33.333%] px-3 md:px-5 flex justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`View ${polaroid.alt}`}
                      className={`bg-white p-3 md:p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-black/5 w-full max-w-[340px] transition-all duration-500 ease-out cursor-zoom-in ${
                        isActive
                          ? "scale-110 opacity-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] z-10"
                          : "scale-90 opacity-60"
                      }`}
                    >
                      <div className="aspect-square overflow-hidden bg-gray-100 relative">
                        <Image
                          src={polaroid.image}
                          alt={polaroid.alt}
                          fill
                          className={`object-cover transition-all duration-700 ${
                            isActive ? "grayscale-0" : "grayscale"
                          }`}
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 33vw"
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-charcoal transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-charcoal transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:block absolute top-1/2 left-20 -translate-y-1/2 opacity-20 -z-0">
          <svg
            className="w-64 h-64 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            />
            <path
              d="M14 2v6h6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            />
            <path
              d="M16 13H8M16 17H8M10 9H8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + wallOfAchievement.polaroids.length) %
                  wallOfAchievement.polaroids.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex + 1) % wallOfAchievement.polaroids.length
              );
            }}
            aria-label="Next image"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={wallOfAchievement.polaroids[lightboxIndex].image}
              alt={wallOfAchievement.polaroids[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
