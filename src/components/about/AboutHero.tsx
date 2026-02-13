import { aboutHero } from "@/lib/constants";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] bg-warm-sand/30 flex items-center pt-20 pb-32">
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Text Content */}
        <div className="lg:col-span-6 relative z-10 lg:pt-20">
          <span className="inline-block text-primary-alt font-[var(--font-serif-alt)] italic text-xl mb-6">
            {aboutHero.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-[var(--font-serif-alt)] leading-[0.95] tracking-tighter mb-10 text-charcoal">
            {aboutHero.heading} <br />
            <span className="italic font-light opacity-80">
              {aboutHero.headingAccent}
            </span>
            .
          </h1>
          <div className="max-w-md ml-12 lg:ml-24">
            <p className="text-lg leading-relaxed text-stone-gray mb-10">
              {aboutHero.body}
            </p>
            <div className="flex items-center gap-8">
              <button className="group flex items-center gap-3 text-primary-alt font-bold uppercase tracking-widest text-xs">
                {aboutHero.ctaLabel}
                <span className="text-sm group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Polaroid Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[3/4] p-4 bg-white shadow-2xl rotate-2">
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url("${aboutHero.image}")` }}
              role="img"
              aria-label={aboutHero.imageAlt}
            />
            {/* Quote Overlay */}
            <div className="absolute -bottom-8 -left-12 max-w-[280px] bg-paper-white p-8 shadow-xl torn-edge torn-edge-bottom -rotate-3 border-x border-warm-sand/30">
              <p className="font-[var(--font-handwriting)] text-2xl text-primary-alt leading-tight">
                {aboutHero.quoteText}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-4 opacity-40">
                {aboutHero.quoteCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
