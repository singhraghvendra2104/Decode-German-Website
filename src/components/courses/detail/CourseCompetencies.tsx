import Image from "next/image";

interface Competency {
  title: string;
  description: string;
  annotation?: string;
  image?: string;
  imageAlt?: string;
  scrapbookNote?: string;
}

interface CourseCompetenciesProps {
  competencies: Competency[];
}

export default function CourseCompetencies({
  competencies,
}: CourseCompetenciesProps) {
  // We expect 6 competencies arranged in the editorial grid
  const c = competencies;

  return (
    <section className="bg-warm-sand/30 py-10 sm:py-14 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-8 md:mb-14 lg:mb-24 text-center italic leading-tight">
          What You&apos;ll Be{" "}
          <span className="not-italic block md:inline">Able To Do</span>
        </h2>

        <div className="grid grid-cols-12 gap-y-10 sm:gap-y-14 md:gap-y-20 lg:gap-y-36">
          {/* Row 1 */}
          {c[0] && (
            <div className="col-span-12 md:col-span-5 relative">
              <div className="bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10 relative z-10">
                <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                  {c[0].title}
                </h3>
                <p className="text-stone-gray leading-relaxed text-sm">
                  {c[0].description}
                </p>
              </div>
              {c[0].annotation && (
                <div className="absolute -bottom-8 -left-4 md:-left-8 font-handwriting text-xl md:text-2xl text-primary -rotate-6 whitespace-nowrap z-30">
                  {c[0].annotation}
                </div>
              )}
            </div>
          )}

          {c[1] && (
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col md:flex-row items-center gap-8 relative">
              <div className="w-full md:w-2/3 bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10 order-2 md:order-1">
                <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                  {c[1].title}
                </h3>
                <p className="text-stone-gray leading-relaxed text-sm">
                  {c[1].description}
                </p>
              </div>
              {c[1].image && (
                <div className="w-1/2 md:w-1/3 order-1 md:order-2 relative aspect-[4/5]">
                  <Image
                    src={c[1].image}
                    alt={c[1].imageAlt || ""}
                    fill
                    className="object-cover rounded-sm grayscale shadow-md rotate-3"
                    sizes="200px"
                  />
                </div>
              )}
              {c[1].annotation && (
                <div className="absolute -top-10 right-4 font-handwriting text-xl md:text-2xl text-primary/60 rotate-12 z-30">
                  {c[1].annotation}
                </div>
              )}
            </div>
          )}

          {/* Row 2 */}
          <div className="col-span-12 md:col-span-7 md:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {c[2] && (
              <div className="bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10 flex flex-col">
                <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                  {c[2].title}
                </h3>
                <p className="text-stone-gray leading-relaxed text-sm">
                  {c[2].description}
                </p>
              </div>
            )}
            {c[2]?.scrapbookNote && (
              <div className="bg-primary/5 p-6 sm:p-8 md:p-14 border-2 border-dashed border-primary/20 flex flex-col justify-center items-center text-center">
                <p className="font-handwriting text-xl md:text-2xl text-charcoal/70">
                  {c[2].scrapbookNote}
                </p>
              </div>
            )}
            {!c[2]?.scrapbookNote && c[3] && (
              <div className="bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10 flex flex-col">
                <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                  {c[3].title}
                </h3>
                <p className="text-stone-gray leading-relaxed text-sm">
                  {c[3].description}
                </p>
              </div>
            )}
            {c[2]?.annotation && (
              <div className="absolute -bottom-10 right-0 md:right-1/4 font-handwriting text-xl md:text-2xl text-primary -rotate-2 z-30">
                {c[2].annotation}
              </div>
            )}
          </div>

          {/* Row 3 */}
          {c[3] && c[2]?.scrapbookNote && (
            <div className="col-span-12 md:col-span-4 md:col-start-1 relative">
              <div className="bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10">
                <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                  {c[3].title}
                </h3>
                <p className="text-stone-gray leading-relaxed text-sm">
                  {c[3].description}
                </p>
              </div>
            </div>
          )}

          {c[4] && c[5] && (
            <div className="col-span-12 md:col-span-6 md:col-start-6 relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 md:p-14 shadow-lg border border-stone-gray/10 md:-mt-24 z-20">
                  <h3 className="font-[var(--font-serif)] text-2xl md:text-3xl mb-4">
                    {c[4].title}
                  </h3>
                  <p className="text-stone-gray leading-relaxed text-sm">
                    {c[4].description}
                  </p>
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                  <div className="bg-white p-10 md:p-12 shadow-lg border border-stone-gray/10">
                    <h3 className="font-[var(--font-serif)] text-xl md:text-2xl mb-4">
                      {c[5].title}
                    </h3>
                    <p className="text-stone-gray leading-relaxed text-sm">
                      {c[5].description}
                    </p>
                  </div>
                  {c[5].annotation && (
                    <div className="font-handwriting text-xl md:text-2xl text-primary/80 pt-4 px-4 italic z-30 relative">
                      {c[5].annotation}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
