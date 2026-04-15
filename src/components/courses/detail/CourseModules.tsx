interface Module {
  number: string;
  title: string;
  description: string;
}

interface CourseModulesProps {
  modules: Module[];
  level: string;
}

export default function CourseModules({ modules, level }: CourseModulesProps) {
  return (
    <section id="modules" className="py-10 md:py-14 lg:py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl mb-8 md:mb-12 lg:mb-20">
          <span className="inline-block text-primary-alt font-[var(--font-serif-alt)] italic text-base md:text-xl mb-3 md:mb-4">
            - The {level} Curriculum
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-[var(--font-serif-alt)] leading-tight tracking-tighter">
            What you will{" "}
            <span className="italic font-light opacity-60">master.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-12 lg:gap-y-20">
          {modules.map((module) => (
            <div key={module.number} className="group">
              <div className="flex items-baseline gap-4 md:gap-6 mb-4 md:mb-6">
                <span className="text-4xl md:text-6xl font-[var(--font-serif-alt)] text-warm-sand group-hover:text-primary-alt transition-colors duration-500">
                  {module.number}
                </span>
                <h3 className="text-xl md:text-2xl font-[var(--font-serif-alt)] italic">
                  {module.title}
                </h3>
              </div>
              <div className="pl-[calc(2.5rem+1rem)] md:pl-[calc(3.75rem+1.5rem)]">
                <p className="text-stone-gray leading-relaxed text-sm md:text-base">
                  {module.description}
                </p>
                <div className="mt-4 md:mt-6 h-px bg-warm-sand group-hover:bg-primary-alt/30 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
