import { courseComponentStrings } from "@/lib/constants";

interface Resource {
  title: string;
  description: string;
  type: "primary" | "watch" | "listen" | "read";
  link?: string;
  linkLabel?: string;
}

interface CourseResourcesProps {
  resources: Resource[];
}

export default function CourseResources({ resources }: CourseResourcesProps) {
  return (
    <section className="py-10 sm:py-14 md:py-24 lg:py-40 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-8 md:mb-14 lg:mb-20 italic">
        {courseComponentStrings.resources.headingItalic} <span className="not-italic">{courseComponentStrings.resources.headingNormal}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {resources.map((resource, index) => {
          if (resource.type === "primary") {
            return (
              <div
                key={index}
                className="sm:col-span-2 bg-warm-sand/20 p-6 sm:p-8 md:p-12 flex items-center justify-between border border-stone-gray/10 group hover:bg-white transition-colors duration-500"
              >
                <div className="space-y-4">
                  <h4 className="font-[var(--font-serif)] text-2xl sm:text-3xl md:text-4xl">
                    {resource.title}
                  </h4>
                  <p className="text-stone-gray">{resource.description}</p>
                  {resource.link && (
                    <a
                      href={resource.link}
                      className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-0.5 mt-4"
                    >
                      {resource.linkLabel || courseComponentStrings.resources.learnMore}
                    </a>
                  )}
                </div>
              </div>
            );
          }

          const bgClass =
            resource.type === "watch"
              ? "bg-accent"
              : resource.type === "listen"
              ? "bg-warm-sand"
              : "bg-warm-sand/30";

          return (
            <div
              key={index}
              className={`${bgClass} p-6 sm:p-8 md:p-10 flex flex-col justify-between aspect-square group hover:shadow-xl transition-all duration-500 border border-stone-gray/10`}
            >
              <p className="uppercase text-[9px] tracking-[0.3em] font-bold text-charcoal/50">
                {courseComponentStrings.resources.typeLabels[resource.type] ?? resource.type}
              </p>
              <div>
                <p className="font-[var(--font-serif)] text-xl sm:text-2xl md:text-3xl">
                  {resource.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
