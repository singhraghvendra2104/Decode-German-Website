import { courseTimeline } from "@/lib/constants";

export default function CourseTimeline() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-charcoal text-ivory">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-[var(--font-handwriting)] text-lg md:text-2xl text-primary mb-4">
            {courseTimeline.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] font-bold mb-6">
            {courseTimeline.heading}
          </h2>
          <p className="text-base md:text-lg text-ivory/70 max-w-2xl mx-auto">
            {courseTimeline.description}
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-primary to-primary/20"></div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {courseTimeline.steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-charcoal font-bold mb-4 relative z-10 mx-auto">
                  <span className="text-lg md:text-2xl">{step.level}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{step.label}</h3>
                <p className="text-primary text-sm md:text-base font-medium">
                  {step.duration}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="text-center mt-16">
            <p className="text-ivory/60">
              Total: <span className="text-ivory font-bold">{courseTimeline.total}</span> ·{" "}
              {courseTimeline.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
