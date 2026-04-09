interface MethodStep {
  number: string;
  title: string;
  description: string;
}

interface CourseMethodProps {
  steps: MethodStep[];
  benefits?: string[];
}

export default function CourseMethod({ steps, benefits = [] }: CourseMethodProps) {
  return (
    <section className="py-24 md:py-40 px-4 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Sticky Sidebar */}
        <div className="md:w-1/3">
          <div className="md:sticky md:top-32">
            <h2 className="font-[var(--font-serif)] text-5xl md:text-6xl lg:text-7xl mb-12 leading-[0.9]">
              The <br />
              <span className="italic text-primary">Blended</span> <br />
              Method
            </h2>
            {benefits.length > 0 && (
              <div className="space-y-6">
                <p className="uppercase text-[10px] tracking-[0.3em] font-bold text-charcoal/60">
                  Key Benefits
                </p>
                <ul className="space-y-4 text-sm">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="md:w-2/3 space-y-20 md:space-y-32">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col sm:flex-row gap-10 group">
              <span className="font-[var(--font-serif)] text-[8rem] md:text-[10rem] leading-none text-warm-sand group-hover:text-primary/10 transition-colors duration-700 select-none">
                {step.number}
              </span>
              <div className="pt-4 md:pt-8">
                <h4 className="font-[var(--font-serif)] text-3xl md:text-4xl mb-6">
                  {step.title}
                </h4>
                <p className="text-stone-gray leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
