import Link from "next/link";
import { courses, coursesHeading } from "@/lib/constants";

export default function CoursesSection() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-gradient-to-b from-white via-background to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-[var(--font-serif)] font-bold leading-tight mb-6">
            {coursesHeading.heading}{" "}
            <span className="italic text-primary">{coursesHeading.accent}</span>
          </h2>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto font-light text-lg">
            {coursesHeading.description}
          </p>
        </div>

        {/* Courses Grid - Artistic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`relative group transition-all duration-700 ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
              }`}
            >
              {/* Organic Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-white to-accent/50 rounded-3xl transform group-hover:scale-105 transition-transform duration-700 -z-10" />

              {/* Card Content */}
              <div className="relative p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between min-h-[380px] md:min-h-[420px]">
                {/* Top Section */}
                <div className="w-full">
                  {/* Handwriting Label */}
                  <div className="font-[var(--font-handwriting)] text-base md:text-lg text-primary mb-4 opacity-90">
                    Level
                  </div>

                  {/* Large Level Display */}
                  <div className="mb-8">
                    <span className="text-8xl md:text-9xl font-[var(--font-serif)] font-bold text-primary italic leading-none block">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-lg md:text-xl font-[var(--font-serif)] font-bold mb-8 leading-tight text-charcoal">
                    {course.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mb-12" />
                </div>

                {/* Details */}
                <div className="space-y-6 w-full">
                  {course.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary flex-shrink-0 text-lg min-w-fit">
                        {detail.icon}
                      </span>
                      <span
                        className={`text-sm text-gray-700 leading-relaxed ${
                          detail.italic ? "italic font-semibold" : "font-light"
                        }`}
                      >
                        {detail.text}
                      </span>
                    </div>
                  ))}

                  {/* Description */}
                  {course.description && (
                    <div className="pt-5 border-t border-primary/20 mt-5">
                      <p className="text-sm text-gray-600 leading-relaxed italic font-light">
                        {course.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent opacity-0 group-hover:opacity-100 rounded-t-3xl transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/courses"
            className="relative group inline-block"
          >
            <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <button className="relative bg-primary hover:bg-primary/95 text-white font-[var(--font-serif)] font-bold py-5 px-16 md:py-6 md:px-24 rounded-full text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 uppercase tracking-widest">
              Explore All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
