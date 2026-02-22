import Image from "next/image";
import { testimonials } from "@/lib/constants";

function QuoteIcon() {
  return (
    <svg
      className="absolute top-0 left-0 w-12 md:w-16 h-12 md:h-16 text-primary opacity-20"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-accent">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <h2 className="text-5xl md:text-7xl font-[var(--font-serif)] font-bold opacity-10 absolute left-0 right-0 -translate-y-8 md:-translate-y-12 select-none pointer-events-none hidden md:block">
            TESTIMONIALS
          </h2>
          <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] font-bold relative z-10">
            Voices of Transformation
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative pt-12 ${index === 1 ? "md:translate-y-12" : ""}`}
            >
              <QuoteIcon />
              <p className="text-base md:text-lg text-gray-700 italic mb-6 md:mb-8 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
