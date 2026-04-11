import Image from "next/image";
import { wallOfAchievement } from "@/lib/constants";

const polaroidStyles = [
  "lg:-rotate-3 hover:rotate-0",
  "lg:rotate-2 hover:rotate-0 lg:translate-y-12",
  "lg:-rotate-1 hover:rotate-0",
];

export default function WallOfAchievement() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-accent/30 overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="font-handwriting text-2xl md:text-3xl text-primary mb-2">
            {wallOfAchievement.handwriting}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-serif)] font-bold leading-tight">
            {wallOfAchievement.heading}{" "}
            <span className="italic text-primary">
              {wallOfAchievement.headingAccent}
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto font-light">
            {wallOfAchievement.description}
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 px-4 lg:px-12">
          {wallOfAchievement.polaroids.map((polaroid, index) => (
            <div
              key={polaroid.id}
              className={`relative flex justify-center transition-transform duration-500 ${polaroidStyles[index]}`}
            >
              <div className="bg-white p-4 pb-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,0,0,0.1)] max-w-[320px] w-full border border-black/5">
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <Image
                    src={polaroid.image}
                    alt={polaroid.alt}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="font-handwriting text-xl md:text-2xl text-charcoal/80">
                    {polaroid.caption}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-primary mt-2">
                    {polaroid.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
    </section>
  );
}
