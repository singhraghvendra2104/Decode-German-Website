import { foundersNote } from "@/lib/constants";

export default function FoundersNote() {
  return (
    <section className="py-24 md:py-40 bg-paper-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Image */}
        <div className="relative">
          <div className="hidden md:block absolute -top-10 -left-10 w-full h-full border-2 border-primary-alt/20 -z-0" />
          <div
            className="aspect-[4/5] bg-cover bg-center relative z-10 shadow-2xl"
            style={{ backgroundImage: `url("${foundersNote.image}")` }}
            role="img"
            aria-label={foundersNote.imageAlt}
          />
          <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 p-4 md:p-6 bg-primary-alt text-paper-white font-[var(--font-serif-alt)] italic text-base md:text-xl z-20 shadow-xl">
            {foundersNote.imageLabel}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 md:space-y-10">
          <header>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary-alt block mb-3 md:mb-4">
              {foundersNote.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-[var(--font-serif-alt)] italic">
              {foundersNote.heading}
            </h2>
          </header>
          <div className="space-y-5 md:space-y-6 text-base md:text-lg text-stone-gray leading-relaxed font-light">
            {foundersNote.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-4 md:pt-6">
            <p className="font-[var(--font-serif-alt)] italic text-xl md:text-2xl text-charcoal">
              {foundersNote.name}
            </p>
            <p className="text-xs uppercase tracking-widest opacity-40 mt-1">
              {foundersNote.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
