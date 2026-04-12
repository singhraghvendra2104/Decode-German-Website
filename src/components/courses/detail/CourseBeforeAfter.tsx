import Link from "next/link";

interface CourseBeforeAfterProps {
  beforeText: string;
  afterText: string;
  nextLevel?: { id: string; level: string } | null;
}

export default function CourseBeforeAfter({
  beforeText,
  afterText,
  nextLevel,
}: CourseBeforeAfterProps) {
  return (
    <section className="bg-warm-sand/20 py-10 sm:py-14 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 border-y border-stone-gray/10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-stone-gray/20">
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-20 space-y-6 sm:space-y-8">
          <h3 className="font-[var(--font-serif)] text-2xl sm:text-3xl md:text-4xl italic">
            Before You Join
          </h3>
          <p className="text-stone-gray leading-relaxed text-sm sm:text-base md:text-lg">
            {beforeText}
          </p>
        </div>
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-20 space-y-6 sm:space-y-8">
          <h3 className="font-[var(--font-serif)] text-2xl sm:text-3xl md:text-4xl italic">
            After This Course
          </h3>
          <p className="text-stone-gray leading-relaxed text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
            {afterText}
          </p>
          {nextLevel && (
            <Link
              href={`/courses/${nextLevel.id}`}
              className="group inline-flex items-center gap-4 uppercase text-[11px] tracking-[0.3em] text-primary font-bold transition-all"
            >
              Explore {nextLevel.level} Course
              <span className="group-hover:translate-x-2 transition-transform">
                &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
