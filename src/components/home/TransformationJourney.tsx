import { transformationSteps, transformationHeading } from "@/lib/constants";

export default function TransformationJourney() {
  const offsetClasses = ["", "mt-12", "lg:-mt-6", "mt-12"];

  return (
    <section id="transformation" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-[var(--font-serif)] font-bold">
              {transformationHeading.title.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div className="max-w-xs text-right hidden md:block">
            <p className="font-[var(--font-handwriting)] text-2xl text-gray-500">
              {transformationHeading.subtitle}
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {transformationSteps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group cursor-default ${offsetClasses[index] || ""}`}
            >
              <div
                className={`${step.shapeClass} w-full aspect-square bg-accent flex flex-col items-center justify-center p-10 group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-xl group-hover:scale-105`}
              >
                <span className="text-5xl font-[var(--font-serif)] italic mb-4 opacity-40">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-center text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                  {step.description}
                </p>
              </div>
              {step.label && (
                <div
                  className={`absolute font-[var(--font-handwriting)] text-primary text-xl pointer-events-none ${
                    index === 0
                      ? "-bottom-6 -right-4 rotate-6"
                      : "-top-8 -left-4 -rotate-12"
                  }`}
                >
                  {step.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
