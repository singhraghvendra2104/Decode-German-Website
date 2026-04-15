import { howStudentsJoinContent } from "@/lib/constants";

export default function HowStudentsJoin() {
  const { beginners, higherLevels } = howStudentsJoinContent;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14 lg:py-20 border-t border-black/5">
      <div className="space-y-8 md:space-y-12 lg:space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)]">{howStudentsJoinContent.heading}</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl">
            {howStudentsJoinContent.description}<br />
            <strong className="text-charcoal">{howStudentsJoinContent.descriptionBold}</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* A1 - Beginners */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-[var(--font-serif)] text-primary">
                {beginners.title}
              </h4>
              <ol className="space-y-4 text-charcoal/80">
                {beginners.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-bold text-primary text-lg">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* A2, B1, B2 - Higher Levels */}
          <div className="space-y-6">
            <h4 className="text-2xl font-[var(--font-serif)] text-primary">
              {higherLevels.title}
            </h4>
            <ol className="space-y-4 text-charcoal/80">
              {higherLevels.steps.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-bold text-primary text-lg">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="bg-accent p-6 border-l-2 border-primary mt-4">
              <p className="text-sm font-bold text-primary mb-2">
                {higherLevels.callout.title}
              </p>
              <p className="text-sm leading-relaxed text-charcoal/70">
                {higherLevels.callout.body}{" "}
                <strong>{higherLevels.callout.bodyBold}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-primary/20">
          <blockquote className="font-handwriting text-2xl md:text-3xl text-primary leading-relaxed italic text-center max-w-4xl mx-auto">
            &ldquo;{howStudentsJoinContent.blockquote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
