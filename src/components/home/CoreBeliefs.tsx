"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { coreBeliefs } from "@/lib/constants";

export default function CoreBeliefs() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % coreBeliefs.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="philosophy" className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto space-y-16 md:space-y-24">
        {/* Carousel Slides */}
        <div className="relative min-h-[800px] md:min-h-[550px] lg:min-h-[650px]">
          {coreBeliefs.map((belief, index) => (
            <div
              key={belief.id}
              className={`absolute inset-0 flex flex-col md:flex-row lg:flex-row items-stretch gap-0 transition-opacity duration-1000 ease-in-out ${
                index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Mobile Image - Top */}
              <div className="md:hidden w-full h-1/3 relative overflow-hidden group bg-gray-900">
                <Image
                  src={belief.image}
                  alt={belief.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                {belief.imageOverlayText && (
                  <div className="absolute top-6 left-6 font-handwriting text-2xl text-white drop-shadow-lg">
                    {belief.imageOverlayText}
                  </div>
                )}
              </div>

              {/* Text Card - Mobile Bottom / Desktop Left */}
              <div className="w-full md:w-3/5 relative z-10 h-2/3 md:h-auto flex items-center">
                <div className="bg-white p-6 md:p-12 lg:p-20 shadow-2xl relative w-full h-full md:h-auto flex flex-col justify-center">
                  <div className="font-handwriting text-xl md:text-2xl lg:text-3xl text-primary mb-3 md:mb-4 lg:mb-6">
                    {belief.handwriting}
                  </div>
                  <h3 className="font-[var(--font-serif)] text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
                    {belief.heading} <br />
                    <span className="text-primary italic">
                      {belief.headingAccent}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base lg:text-xl text-gray-700 leading-relaxed font-light mb-4 md:mb-6 lg:mb-8">
                    {belief.body}
                  </p>
                  {belief.footer && (
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                        {belief.footer}
                      </span>
                      <div className="h-[1px] flex-grow bg-charcoal/10" />
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop Image - Right */}
              <div className="hidden md:block w-1/2 h-full -mr-20 relative overflow-hidden group">
                <Image
                  src={belief.image}
                  alt={belief.imageAlt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                {belief.imageOverlayText && (
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 font-handwriting text-2xl md:text-4xl text-white drop-shadow-lg">
                    {belief.imageOverlayText}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-4">
          {coreBeliefs.map((belief, index) => (
            <button
              key={belief.id}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-primary w-8"
                  : "bg-charcoal/20 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
