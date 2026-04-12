"use client";

import { specializedCourses } from "@/lib/constants";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

export default function SpecializedCourses() {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <section className="py-14 md:py-20 lg:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <span className="inline-block text-primary font-handwriting text-lg md:text-2xl mb-4">
            Already Know Some German?
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] font-bold">
            Pick Up Where You Left Off
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specializedCourses.map((course) => (
            <div
              key={course.id}
              className="border border-stone-gray/20 rounded-lg p-8 md:p-10 hover:shadow-lg transition-shadow duration-300 bg-white/50"
            >
              <h3 className="text-2xl md:text-3xl font-[var(--font-serif)] font-bold mb-2 text-charcoal">
                {course.title}
              </h3>
              <p className="text-sm md:text-base text-primary font-medium mb-6">
                {course.levels}
              </p>
              <p className="text-sm md:text-base text-stone-gray mb-8 leading-relaxed">
                {course.description}
              </p>

              {/* Details */}
              <div className="space-y-4 border-t border-stone-gray/10 pt-6">
                {course.details.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs md:text-sm uppercase tracking-wide text-stone-gray/70">
                      {detail.label}
                    </span>
                    <span className="text-sm md:text-base font-bold text-charcoal">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary/80 font-medium text-sm md:text-base transition-colors cursor-pointer"
              >
                Enquire <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </section>
  );
}
