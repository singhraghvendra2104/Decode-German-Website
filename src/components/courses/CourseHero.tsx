import Image from "@/components/ui/ImageWithSkeleton";
import { courseHero } from "@/lib/constants";

export default function CourseHero() {
  return (
    <section className="pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <span className="inline-block text-primary-alt font-[var(--font-serif-alt)] italic text-lg md:text-2xl mb-3 md:mb-5">
            {courseHero.subtitle}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-[var(--font-serif-alt)] leading-[0.9] tracking-tighter mb-6 md:mb-8 text-charcoal">
            {courseHero.heading} <br />
            <span className="italic font-light opacity-60">
              {courseHero.headingAccent}
            </span>
          </h1>
          <p className="text-base md:text-xl text-stone-gray max-w-xl leading-relaxed">
            {courseHero.body}
          </p>
        </div>
        <div className="hidden lg:block relative">
          <div className="bg-white p-3 shadow-lg rotate-[1deg]">
            <Image
              src="/courses/hero.webp"
              alt="Decode German courses"
              width={600}
              height={450}
              className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 font-handwriting text-primary text-3xl rotate-[-8deg]">
            Auf geht&apos;s!
          </div>
        </div>
      </div>
    </section>
  );
}
