import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface CourseDetailCTAProps {
  level: string;
  nextLevel: { id: string; level: string; title: string } | null;
}

export default function CourseDetailCTA({
  level,
  nextLevel,
}: CourseDetailCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${level} course at Decode German.`
  )}`;

  return (
    <section id="enroll" className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center px-4 md:px-8">
        <span className="inline-block text-primary-alt font-[var(--font-handwriting)] text-2xl md:text-3xl mb-6 md:mb-8">
          Your next chapter awaits...
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-[var(--font-serif-alt)] italic mb-8 md:mb-12 leading-tight">
          Ready to begin
          <br />
          <span className="opacity-60">{level}?</span>
        </h2>
        <p className="text-base md:text-xl text-stone-gray mb-10 md:mb-16 max-w-xl mx-auto leading-relaxed">
          Spaces are limited to ensure every student receives the attention they
          deserve. Reach out to reserve your seat.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-primary text-ivory font-bold uppercase tracking-[0.2em] text-xs hover:bg-charcoal transition-all duration-300 text-center"
          >
            Reserve Your Seat
          </a>
          {nextLevel && (
            <Link
              href={`/courses/${nextLevel.id}`}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-charcoal/20 font-bold uppercase tracking-[0.2em] text-xs hover:bg-charcoal hover:text-ivory transition-all duration-300 text-center"
            >
              Explore {nextLevel.level} &rarr;
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
