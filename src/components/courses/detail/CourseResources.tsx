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
    <section className="py-24 md:py-40 px-4 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="font-[var(--font-serif)] text-5xl md:text-7xl mb-16 md:mb-20 italic">
        Curated <span className="not-italic">Resources</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {resources.map((resource, index) => {
          if (resource.type === "primary") {
            return (
              <div
                key={index}
                className="md:col-span-2 bg-warm-sand/20 p-12 flex items-center justify-between border border-stone-gray/10 group hover:bg-white transition-colors duration-500"
              >
                <div className="space-y-4">
                  <h4 className="font-[var(--font-serif)] text-3xl md:text-4xl">
                    {resource.title}
                  </h4>
                  <p className="text-stone-gray">{resource.description}</p>
                  {resource.link && (
                    <a
                      href={resource.link}
                      className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-0.5 mt-4"
                    >
                      {resource.linkLabel || "Learn More"}
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
              className={`${bgClass} p-10 flex flex-col justify-between aspect-square group hover:shadow-xl transition-all duration-500 border border-stone-gray/10`}
            >
              <p className="uppercase text-[9px] tracking-[0.3em] font-bold text-charcoal/50">
                {resource.type === "watch"
                  ? "Watch"
                  : resource.type === "listen"
                  ? "Listen"
                  : "Read"}
              </p>
              <div>
                <p className="font-[var(--font-serif)] text-2xl md:text-3xl">
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
