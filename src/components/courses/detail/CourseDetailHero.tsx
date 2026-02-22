import Image from "next/image";

interface CourseDetailHeroProps {
  level: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function CourseDetailHero({
  level,
  title,
  subtitle,
  description,
  image,
  imageAlt,
}: CourseDetailHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center pt-20 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50 md:from-charcoal/90 md:via-charcoal/70 md:to-charcoal/40" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-primary font-[var(--font-serif-alt)] italic text-base md:text-xl mb-3 md:mb-4">
            {subtitle}
          </span>
          <div className="flex items-baseline gap-4 md:gap-6 mb-6 md:mb-8">
            <span className="text-6xl md:text-9xl font-[var(--font-serif-alt)] text-ivory/20 leading-none">
              {level}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-[var(--font-serif-alt)] italic text-ivory leading-[0.95]">
              {title}
            </h1>
          </div>
          <p className="text-base md:text-xl text-ivory/70 leading-relaxed max-w-xl">
            {description}
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6">
            <a
              href="#enroll"
              className="px-10 md:px-12 py-4 md:py-5 bg-primary text-ivory font-bold uppercase tracking-[0.2em] text-xs hover:bg-ivory hover:text-charcoal transition-all duration-300 text-center"
            >
              Enroll Now
            </a>
            <a
              href="#modules"
              className="px-10 md:px-12 py-4 md:py-5 border border-ivory/30 text-ivory font-bold uppercase tracking-[0.2em] text-xs hover:border-primary transition-all duration-300 text-center"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
