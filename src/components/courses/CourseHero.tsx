import { courseHero } from "@/lib/constants";

export default function CourseHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-4xl">
        <span className="inline-block text-primary-alt font-[var(--font-serif-alt)] italic text-lg md:text-2xl mb-4 md:mb-6">
          {courseHero.subtitle}
        </span>
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-[var(--font-serif-alt)] leading-[0.9] tracking-tighter mb-8 md:mb-12 text-charcoal">
          {courseHero.heading} <br />
          <span className="italic font-light opacity-60">
            {courseHero.headingAccent}
          </span>
        </h1>
        <p className="text-base md:text-xl text-stone-gray max-w-xl leading-relaxed">
          {courseHero.body}
        </p>
      </div>
    </section>
  );
}
