import { foundersNote } from "@/lib/constants";

export default function FoundersNote() {
  return (
    <section className="py-40 bg-paper-white">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary-alt/20 -z-0" />
          <div
            className="aspect-[4/5] bg-cover bg-center relative z-10 shadow-2xl"
            style={{ backgroundImage: `url("${foundersNote.image}")` }}
            role="img"
            aria-label={foundersNote.imageAlt}
          />
          <div className="absolute -bottom-6 -right-6 p-6 bg-primary-alt text-paper-white font-[var(--font-serif-alt)] italic text-xl z-20 shadow-xl">
            {foundersNote.imageLabel}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <header>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary-alt block mb-4">
              {foundersNote.tag}
            </span>
            <h2 className="text-4xl font-[var(--font-serif-alt)] italic">
              {foundersNote.heading}
            </h2>
          </header>
          <div className="space-y-6 text-lg text-stone-gray leading-relaxed font-light">
            {foundersNote.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-6">
            <p className="font-[var(--font-serif-alt)] italic text-2xl text-charcoal">
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
