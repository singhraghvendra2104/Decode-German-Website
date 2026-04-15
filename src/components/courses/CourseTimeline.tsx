import { courseTimeline } from "@/lib/constants";

export default function CourseTimeline() {
  return (
    <section className="py-10 md:py-14 lg:py-20 px-4 md:px-6 bg-charcoal text-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20">
          <span className="inline-block font-handwriting text-lg md:text-2xl text-primary mb-4">
            {courseTimeline.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-[var(--font-serif)] font-bold mb-4 md:mb-6">
            {courseTimeline.heading}
          </h2>
          <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto">
            {courseTimeline.description}
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Timeline Line — horizontal on desktop, vertical on mobile */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-primary to-primary/20" />
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary to-primary/20" />

          {/* Steps */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-8">
            {courseTimeline.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:flex-col md:text-center relative">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-charcoal font-bold relative z-10">
                  <span className="text-sm md:text-2xl">{step.level}</span>
                </div>
                <div className="md:text-center">
                  <h3 className="text-base md:text-xl font-bold mb-0.5 md:mb-2">{step.label}</h3>
                  <p className="text-primary text-xs md:text-base font-medium">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="text-center mt-10 md:mt-16">
            <p className="text-ivory/60 text-sm md:text-base">
              Total: <span className="text-ivory font-bold">{courseTimeline.total}</span> ·{" "}
              {courseTimeline.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
