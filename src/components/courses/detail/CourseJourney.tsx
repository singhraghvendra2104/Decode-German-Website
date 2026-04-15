import { courseComponentStrings } from "@/lib/constants";

interface JourneyBlock {
  number: string;
  weeks: string;
  title: string;
  description: string;
  badge: string;
  annotation?: string;
}

interface CourseJourneyProps {
  level: string;
  blocks: JourneyBlock[];
}

export default function CourseJourney({ level, blocks }: CourseJourneyProps) {
  return (
    <section id="journey" className="bg-ivory py-8 sm:py-10 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14 lg:mb-24">
          <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl italic leading-none mb-4 sm:mb-6">
            The <span className="not-italic">{level} Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-gray max-w-md mx-auto px-4">
            {courseComponentStrings.journey.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 z-0 hidden md:block" />

          <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-40">
            {blocks.map((block, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === blocks.length - 1;

              return (
                <div
                  key={block.number}
                  className="relative flex flex-col items-center md:flex-row md:items-start group"
                >
                  {/* Left Content (even blocks) / Right badge (odd blocks) */}
                  {isEven ? (
                    <div className="hidden md:block w-1/2 pr-16 text-right pt-8">
                      <p className="uppercase text-[10px] tracking-[0.3em] text-primary font-bold mb-2">
                        {block.weeks}
                      </p>
                      <h4 className="font-[var(--font-serif)] text-3xl md:text-4xl mb-4">
                        {block.title}
                      </h4>
                      <p className="text-sm text-stone-gray leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full md:w-1/2 pr-0 md:pr-16 pt-8 order-2 md:order-1 text-center md:text-right">
                      <div
                        className={`inline-flex items-center gap-3 py-3 px-6 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${
                          isLast
                            ? "bg-primary text-ivory shadow-lg shadow-primary/20"
                            : "bg-warm-sand/50 text-primary/80 border border-primary/10"
                        }`}
                      >
                        {block.badge}
                      </div>
                      <p className="md:hidden mt-6 text-sm text-stone-gray leading-relaxed">
                        {block.description}
                      </p>
                      {block.annotation && (
                        <div className="mt-8 font-handwriting text-2xl md:text-3xl text-primary rotate-2">
                          {block.annotation}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Center Circle */}
                  <div
                    className={`relative z-10 flex flex-col items-center ${
                      !isEven ? "order-1 md:order-2" : ""
                    }`}
                  >
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center border-4 border-ivory shadow-md transition-transform group-hover:scale-110 ${
                        isLast ? "bg-primary" : "bg-accent"
                      }`}
                    >
                      <span
                        className={`font-[var(--font-serif)] text-xl md:text-2xl ${
                          isLast ? "text-ivory" : "text-primary"
                        }`}
                      >
                        {block.number}
                      </span>
                    </div>
                    {/* Mobile title */}
                    <div className="md:hidden mt-6 text-center">
                      <p className="uppercase text-[10px] tracking-[0.3em] text-primary font-bold mb-2">
                        {block.weeks}
                      </p>
                      <h4 className="font-[var(--font-serif)] text-3xl md:text-4xl mb-4">
                        {block.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Content (even blocks) / Left description (odd blocks) */}
                  {isEven ? (
                    <div className="w-full md:w-1/2 pl-0 md:pl-16 pt-8 text-center md:text-left">
                      <div className="inline-flex items-center gap-3 py-3 px-6 bg-warm-sand/50 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 border border-primary/10">
                        {block.badge}
                      </div>
                      <p className="md:hidden mt-6 text-sm text-stone-gray leading-relaxed">
                        {block.description}
                      </p>
                      {block.annotation && (
                        <div className="mt-8 font-handwriting text-2xl text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                          {block.annotation}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="hidden md:block w-1/2 pl-16 pt-8 order-3">
                      <p className="uppercase text-[10px] tracking-[0.3em] text-primary font-bold mb-2">
                        {block.weeks}
                      </p>
                      <h4 className="font-[var(--font-serif)] text-3xl md:text-4xl mb-4">
                        {block.title}
                      </h4>
                      <p className="text-sm text-stone-gray leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
