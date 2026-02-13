import Image from "next/image";
import { coreBeliefs } from "@/lib/constants";

export default function CoreBeliefs() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-background relative">
      <div className="max-w-[1300px] mx-auto space-y-40">
        {coreBeliefs.map((belief) => (
          <div
            key={belief.id}
            className={`flex flex-col ${
              belief.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-0`}
          >
            {/* Text Card */}
            <div className="w-full lg:w-3/5 relative z-10">
              <div className="bg-white p-12 lg:p-20 shadow-2xl relative">
                <div className="font-[var(--font-handwriting)] text-3xl text-primary mb-6">
                  {belief.handwriting}
                </div>
                <h3 className="font-[var(--font-serif)] text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  {belief.heading} <br />
                  <span className="text-primary italic">
                    {belief.headingAccent}
                  </span>
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed font-light mb-8 italic">
                  {belief.body}
                </p>
                {belief.footer && (
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-40">
                      {belief.footer}
                    </span>
                    <div className="h-[1px] flex-grow bg-charcoal/10" />
                  </div>
                )}
                {belief.tags.length > 0 && (
                  <div className="flex gap-4">
                    {belief.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-accent text-[10px] font-bold uppercase tracking-widest text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            <div
              className={`w-full lg:w-1/2 -mt-10 lg:mt-0 ${
                belief.reversed ? "lg:-mr-20" : "lg:-ml-20"
              } h-[500px] relative overflow-hidden group`}
            >
              <Image
                src={belief.image}
                alt={belief.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              {belief.imageOverlayText && (
                <div className="absolute top-10 left-10 font-[var(--font-handwriting)] text-4xl text-white drop-shadow-lg">
                  {belief.imageOverlayText}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
