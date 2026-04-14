import { courseFeatures, courseComponentStrings } from "@/lib/constants";

export default function CourseFeatures() {
  return (
    <section className="py-14 md:py-20 lg:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] font-bold text-center mb-10 md:mb-16 lg:mb-20 text-charcoal">
          {courseComponentStrings.features.heading}
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className="border-b border-stone-gray/20 pb-6 md:pb-8 last:border-b-0"
            >
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-stone-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
