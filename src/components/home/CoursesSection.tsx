import Link from "next/link";
import { courses, coursesHeading } from "@/lib/constants";

export default function CoursesSection() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-[var(--font-serif)] font-bold leading-tight mb-6">
            {coursesHeading.heading}{" "}
            <span className="italic text-primary">{coursesHeading.accent}</span>
          </h2>
          <p className="mt-8 text-on-surface/60 max-w-3xl mx-auto font-light text-lg">
            {coursesHeading.description}
          </p>
        </div>

        {/* Courses Grid - Clean Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-accent p-8 md:p-10 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Level Label */}
              <div className="text-[11px] uppercase tracking-[0.2em] text-on-surface/60 font-bold mb-4">
                Level
              </div>

              {/* Large Level */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-[var(--font-serif)] font-bold text-primary leading-none">
                  {course.level}
                </span>
              </div>

              {/* Course Name */}
              <h3 className="text-base md:text-lg font-[var(--font-serif)] font-bold mb-6 text-on-surface">
                {course.name}
              </h3>

              {/* Divider */}
              <div className="w-10 h-1 bg-primary mb-8" />

              {/* Details */}
              <div className="space-y-4 mb-8">
                {course.details.map((detail, idx) => (
                  <div key={idx} className="text-sm">
                    <span
                      className={`${
                        detail.italic
                          ? "italic font-semibold text-primary"
                          : "text-on-surface/70"
                      }`}
                    >
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              {course.description && (
                <p className="text-sm text-on-surface/70 leading-relaxed">
                  {course.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/courses"
            className="relative group inline-block"
          >
            <button className="bg-primary hover:bg-primary/90 text-white font-[var(--font-serif)] font-bold py-5 px-16 md:py-6 md:px-24 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider">
              Explore All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
