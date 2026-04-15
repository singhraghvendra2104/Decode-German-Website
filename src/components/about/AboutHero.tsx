import { aboutHeroContent } from "@/lib/constants";

export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-14 lg:mb-20 pt-16 md:pt-20 lg:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7 space-y-6 md:space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
            {aboutHeroContent.tag}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
            {aboutHeroContent.heading}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-[var(--font-serif)] italic max-w-xl leading-relaxed">
            {aboutHeroContent.subheading}
            <br />
            <span className="uppercase text-base md:text-xl font-bold">{aboutHeroContent.subheadingBold}</span>
          </p>
          <div className="flex gap-8 md:gap-12 pt-2 md:pt-4">
            {aboutHeroContent.stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-3xl md:text-4xl font-[var(--font-serif)] font-bold">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="polaroid rotate-3 relative z-10">
            <img
              alt={aboutHeroContent.founderImageAlt}
              className="aspect-square object-cover w-full"
              src={aboutHeroContent.founderImage}
            />
            <p className="handwriting text-2xl text-primary absolute -bottom-8 -right-4 bg-background px-4 py-2 rotate-[-4deg]">
              {aboutHeroContent.founderCaption}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20 max-w-3xl ml-auto md:mr-12">
        <p
          className="text-xl leading-relaxed text-on-surface/80"
          dangerouslySetInnerHTML={{ __html: aboutHeroContent.introParagraph }}
        />
      </div>
    </section>
  );
}
