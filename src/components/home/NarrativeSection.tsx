import { narrativeSectionContent } from "@/lib/constants";

export default function NarrativeSection() {
  const { handwriting, heading, headingAccent, commitments, closingQuote } = narrativeSectionContent;

  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-24 relative">
          <div className="font-handwriting text-3xl text-primary mb-4">
            {handwriting}
          </div>
          <h2 className="text-4xl md:text-6xl font-[var(--font-serif)] font-bold leading-tight">
            {heading}{" "}
            <span className="italic text-primary">{headingAccent}</span>
          </h2>
        </div>

        {/* Overlapping Circles */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:-space-x-12 xl:-space-x-20 space-y-8 lg:space-y-0 max-w-6xl mx-auto mb-12">
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
              <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md shrink-0">
                <span className="text-xl md:text-2xl font-[var(--font-serif)] font-bold text-charcoal">
                  {commitment.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-3 md:mt-4">
                <h3 className="text-sm md:text-base font-[var(--font-serif)] font-bold mb-2 md:mb-3 uppercase tracking-wide leading-tight text-charcoal">
                  {commitment.title}
                </h3>
                <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed font-light">
                  {commitment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Handwriting line */}
        <div className="mt-10 md:mt-16 lg:mt-20 text-center">
          <p className="font-handwriting text-2xl md:text-4xl text-primary">
            &ldquo;{closingQuote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
