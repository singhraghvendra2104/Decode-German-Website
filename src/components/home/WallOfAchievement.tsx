"use client";

import Image from "@/components/ui/ImageWithSkeleton";
import { useEffect, useState } from "react";
import { wallOfAchievement } from "@/lib/constants";

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PIN_COLORS = [
  "bg-red-400",
  "bg-primary",
  "bg-yellow-500",
  "bg-emerald-400",
  "bg-blue-400",
  "bg-pink-400",
];

function PolaroidCard({
  polaroid,
  index,
  onClick,
}: {
  polaroid: { id: number; image: string; alt: string };
  index: number;
  onClick: () => void;
}) {
  const rand = seededRandom(polaroid.id);
  const rotation = (rand - 0.5) * 12;
  const pinColor = PIN_COLORS[index % PIN_COLORS.length];
  const hasTape = index % 4 === 1;
  const hasCornerFold = index % 5 === 3;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View ${polaroid.alt}`}
      className="group relative shrink-0 cursor-zoom-in"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="bg-white p-2 md:p-3 pb-12 md:pb-16 shadow-[4px_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[6px_10px_35px_rgba(0,0,0,0.2)] border border-black/[0.04] transition-all duration-500 w-[200px] sm:w-[240px] md:w-[280px] group-hover:scale-105 group-hover:z-20 relative">
        <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
          <Image
            src={polaroid.image}
            alt={polaroid.alt}
            fill
            className="object-cover sepia-[0.15] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
            sizes="280px"
          />
        </div>
        {hasCornerFold && (
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10">
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[32px] md:border-l-[40px] border-l-transparent border-b-[32px] md:border-b-[40px] border-b-accent/60" />
          </div>
        )}
      </div>

    </button>
  );
}

function Lightbox({
  polaroids,
  index,
  onClose,
  onChange,
}: {
  polaroids: { id: number; image: string; alt: string }[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onChange((index + 1) % polaroids.length);
      if (e.key === "ArrowLeft")
        onChange((index - 1 + polaroids.length) % polaroids.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, polaroids.length, onClose, onChange]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/93 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + polaroids.length) % polaroids.length);
        }}
        aria-label="Previous"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % polaroids.length);
        }}
        aria-label="Next"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={polaroids[index].image}
          alt={polaroids[index].alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}

export default function WallOfAchievement() {
  const polaroids = wallOfAchievement.polaroids;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const doubled = [...polaroids, ...polaroids];

  return (
    <section className="py-10 md:py-14 lg:py-20 px-4 md:px-6 bg-accent/30 overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <div className="font-handwriting text-4xl md:text-6xl text-primary mb-2">
            {wallOfAchievement.handwriting}
          </div>
        </div>
      </div>

      {/* Single row infinite scroll */}
      <div
        className="wall-marquee-row overflow-hidden"
        style={{ ["--wall-speed" as string]: "90s" }}
      >
        <div className="wall-marquee wall-marquee-left flex items-center gap-6 md:gap-10 py-8 md:py-12">
          {doubled.map((p, i) => (
            <PolaroidCard
              key={`${p.id}-${i}`}
              polaroid={p}
              index={i}
              onClick={() => {
                const origIdx = i % polaroids.length;
                setLightboxIndex(origIdx);
              }}
            />
          ))}
        </div>
      </div>


      {lightboxIndex !== null && (
        <Lightbox
          polaroids={polaroids}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
