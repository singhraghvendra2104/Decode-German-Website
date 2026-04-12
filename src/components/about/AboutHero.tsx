export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14 md:mb-20 lg:mb-32 pt-16 md:pt-24 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7 space-y-6 md:space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
            The Promise
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight">
            Our Story
          </h1>
          <p className="text-xl md:text-3xl text-primary font-[var(--font-serif)] italic max-w-xl leading-relaxed">
            We built a promise to students. You commit, we commit the hardest.
          </p>
          <div className="flex gap-8 md:gap-12 pt-2 md:pt-4">
            <div>
              <span className="block text-3xl md:text-4xl font-[var(--font-serif)] font-bold">1000+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">
                Students Taught
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-[var(--font-serif)] font-bold">2020</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">
                Year Founded
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="polaroid rotate-3 relative z-10">
            <img
              alt="Shalini K Dubey teaching"
              className="aspect-square object-cover w-full"
              src="/about/team/Founder1.png"
            />
            <p className="handwriting text-2xl text-primary absolute -bottom-8 -right-4 bg-background px-4 py-2 rotate-[-4deg]">
              Shalini K Dubey
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20 max-w-3xl ml-auto md:mr-12">
        <p className="text-xl leading-relaxed text-on-surface/80">
          Founded in 2020 by <strong>Shalini K Dubey</strong>. 1000+ students taught across the world. We built this platform with discipline, dedication, and relentless clarity. With teaching that is structured, demanding, and deeply human. <strong>With equal commitment from us and from YOU.</strong>
        </p>
      </div>
    </section>
  );
}
