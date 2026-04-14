import { ourJourneyContent } from "@/lib/constants";

export default function OurJourney() {
  const { heading, timeline } = ourJourneyContent;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20 lg:py-32">
      <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-6 md:mb-8 text-center">{heading}</h2>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative space-y-12 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-on-surface/10 before:-translate-x-1/2">
        {timeline.map((item) => (
          <div key={item.year} className="relative flex justify-center items-start">
            <div className="relative">
              <div
                className={`${
                  item.isPrimary
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-primary text-primary hover:shadow-md transition-shadow"
                } px-6 py-2 text-[10px] font-bold tracking-widest uppercase z-10 rounded-full hover:scale-110 transition-transform duration-300`}
              >
                {item.year}
              </div>
              {!item.isPrimary && (
                <div className="absolute inset-0 bg-primary opacity-0 rounded-full blur-xl -z-10"></div>
              )}
            </div>
            <div
              className={`absolute top-0 ${item.isLeft ? "left-0" : "right-0"} w-5/12 ${
                item.isLeft ? "text-right pr-12" : "text-left pl-12"
              }`}
            >
              <h4 className="font-[var(--font-serif)] text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-on-surface/70 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Block Layout */}
      <div className="md:hidden space-y-6">
        {timeline.map((item) => (
          <div key={item.year} className="flex flex-col items-center gap-4">
            <div className="relative">
              <div
                className={`${
                  item.isPrimary
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-primary text-primary"
                } px-6 py-2 text-[10px] font-bold tracking-widest uppercase z-10 rounded-full`}
              >
                {item.year}
              </div>
            </div>
            <div className="bg-accent p-6 rounded-lg w-full">
              <h4 className="font-[var(--font-serif)] text-lg font-bold mb-2 text-on-surface">{item.title}</h4>
              <p className="text-sm text-on-surface/70 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
