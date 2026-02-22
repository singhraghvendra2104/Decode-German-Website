import { courseQuote } from "@/lib/constants";

export default function CourseQuoteDivider() {
  return (
    <section className="py-16 md:py-24 bg-warm-sand/30">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-8">
        <h2 className="font-[var(--font-handwriting)] text-2xl md:text-4xl text-primary-alt leading-tight">
          {courseQuote}
        </h2>
      </div>
    </section>
  );
}
