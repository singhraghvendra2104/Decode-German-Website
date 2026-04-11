export default function NarrativeSection() {
  const commitments = [
    {
      number: 1,
      title: "Know Each Student Personally",
      description:
        "We maintain a personal profile of every student: career goals, learning pace, challenges. This is not a database. This is a relationship.",
    },
    {
      number: 2,
      title: "Structured Follow-Up",
      description:
        "Regular check-ins before class, after class, and between batches. If a student falls behind, the teacher reaches out proactively to ensure continuity.",
    },
    {
      number: 3,
      title: "Targeted Gap Filling",
      description:
        "Struggling with Akkusativ? You get a targeted micro-session, not a repeat lecture. Real solutions, tailored to your specific friction points.",
    },
  ];

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24 relative">
          <div className="font-handwriting text-3xl text-primary mb-4">
            Our Promise
          </div>
          <h2 className="text-4xl md:text-6xl font-[var(--font-serif)] font-bold leading-tight">
            The Decode{" "}
            <span className="italic text-primary">Commitment</span>
          </h2>
        </div>

        {/* Overlapping Circles */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:-space-x-12 xl:-space-x-20 space-y-12 lg:space-y-0 max-w-6xl mx-auto mb-12">
          {commitments.map((commitment, index) => (
            <div
              key={commitment.number}
              className={`relative group w-80 h-80 md:w-96 md:h-96 rounded-full flex flex-col items-center justify-center p-10 md:p-16 text-center transition-all duration-700 hover:z-40 hover:scale-105 shadow-lg border border-primary/10 ${
                index === 0
                  ? "z-10 bg-accent/40 hover:bg-accent/60"
                  : index === 1
                  ? "z-20 bg-white/90 hover:bg-white/95"
                  : "z-30 bg-white/80 hover:bg-white/90"
              }`}
              style={{
                backgroundColor:
                  index === 0
                    ? "rgba(244, 235, 230, 0.4)"
                    : index === 1
                    ? "#f0ede9"
                    : "#e8e4df",
              }}
            >
              {/* Number Badge */}
              <div className="absolute top-12 md:top-16 bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md mb-6">
                <span className="text-2xl md:text-3xl font-[var(--font-serif)] font-bold text-charcoal">
                  {commitment.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-20 md:mt-24">
                <h3 className="text-lg md:text-2xl font-[var(--font-serif)] font-bold mb-4 uppercase tracking-wide leading-tight text-charcoal">
                  {commitment.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light px-2">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="w-24 h-1 bg-primary/30" />
        </div>
      </div>
    </section>
  );
}
