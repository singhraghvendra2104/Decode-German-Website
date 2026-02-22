interface CourseOutcomesProps {
  outcomes: string[];
  level: string;
}

export default function CourseOutcomes({
  outcomes,
  level,
}: CourseOutcomesProps) {
  return (
    <section className="py-20 md:py-32 bg-charcoal text-ivory">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="inline-block text-primary font-[var(--font-serif-alt)] italic text-base md:text-xl mb-3 md:mb-4">
              — After {level}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-[var(--font-serif-alt)] italic leading-tight">
              What you will
              <br />
              walk away with.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-0">
              {outcomes.map((outcome, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 md:gap-6 py-5 md:py-8 border-b border-ivory/10"
                >
                  <span className="text-primary font-[var(--font-serif-alt)] italic text-base md:text-lg shrink-0">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-base md:text-lg text-ivory/80 leading-relaxed">
                    {outcome}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
