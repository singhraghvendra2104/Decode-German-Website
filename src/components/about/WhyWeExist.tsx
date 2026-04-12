export default function WhyWeExist() {
  const reasons = [
    {
      number: "01",
      title: "German That Works",
      description1: "Built for how you actually use German in real situations.",
      description2: "In conversations, at work, and in everyday life, with clarity and confidence.",
      bgClass: "bg-accent",
    },
    {
      number: "02",
      title: "Individual Understanding",
      description1: "Every student learns differently, and that is at the core of how we teach.",
      description2: "Your patterns, your pace, and the way you learn are understood and shaped into a method that works for you.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
    {
      number: "03",
      title: "Every Step Matters",
      description1: "Learning continues beyond the classroom.",
      description2: "Through regular follow-ups, focused check-ins, and constant attention to how you are learning and where you need to go next.",
      bgClass: "bg-accent",
    },
    {
      number: "04",
      title: "Right Level, From the Start",
      description1: "Every student begins at a level that fits where they are.",
      description2: "This creates a focused pace, clear direction, and a group that stays aligned as it moves forward.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 lg:py-32">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-4">What Makes Us Unique</h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
          Students come with hope, believing this is where everything finally comes together, with the right guidance and a structured approach.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className={`${reason.bgClass} ${reason.offsetY ? "md:translate-y-6" : ""} p-6 sm:p-8 md:p-10 flex flex-col min-h-[240px] sm:min-h-[280px] md:min-h-[380px]`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-serif)] text-primary">
              {reason.number}
            </span>
            <div className="mt-3 sm:mt-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-serif)] mb-2 sm:mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-70">{reason.description1}</p>
              <p className="text-xs sm:text-sm leading-relaxed opacity-70 mt-1.5 sm:mt-2">{reason.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
