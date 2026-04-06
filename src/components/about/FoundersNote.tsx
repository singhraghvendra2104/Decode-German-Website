export default function FoundersNote() {
  return (
    <section className="bg-surface-container py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="w-16 h-[2px] bg-primary"></div>
            <h2 className="text-4xl font-[var(--font-serif-alt)] italic leading-snug">
              "I didn't leave my career to teach German. I left it to change what German changes."
            </h2>
            <div className="pt-4">
              <p className="font-bold text-sm uppercase tracking-widest">Shalini K Dubey</p>
              <p className="text-[11px] opacity-60 uppercase tracking-widest">
                Founder · Dresden, Germany
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-8 bg-white p-12 relative">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold">Message from the Founder</p>
          <p className="text-lg leading-relaxed text-on-surface/90">
            This is not a place for passive teaching. This is a place for <em>presence, energy, and ownership.</em>
          </p>
          <p className="text-lg leading-relaxed text-on-surface/90">
            I moved to Germany for my post-graduate studies. I didn't speak a word of German. I learned it from scratch - and I saw firsthand how broken the system was.
          </p>
          <p className="text-lg leading-relaxed text-on-surface/90">
            Large institutes teach in bulk. Students invest time and money, hit a wall of impersonal teaching, and either drop out or fail their exams. Not because they lacked willingness - but because no one was guiding them personally.
          </p>
          <p className="text-lg leading-relaxed text-on-surface/90">
            I built Decode German to fix that. Every student here gets individual attention. I personally know every student - their learning style, their weak points, their goals. We don't let anyone fall behind unnoticed.
          </p>
          <p className="text-lg leading-relaxed text-on-surface/90">
            Careers were left. Comfort was left. Everything was left - for students who deserve the best.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-on-surface/10">
            <div className="space-y-1">
              <span className="text-2xl font-[var(--font-serif-alt)] font-bold">30+</span>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Enroll Monthly</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-[var(--font-serif-alt)] font-bold">A1–B2</span>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Course Levels</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-[var(--font-serif-alt)] font-bold">100%</span>
              <p className="text-[10px] uppercase tracking-widest opacity-60">Word of Mouth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
