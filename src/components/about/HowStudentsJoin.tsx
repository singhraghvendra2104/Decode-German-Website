export default function HowStudentsJoin() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 border-t border-black/5">
      <div className="space-y-12 md:space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)]">How Students Join</h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl">
            We take enrollment seriously, because your learning depends on it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* A1 - Beginners */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-[var(--font-serif)] text-primary">
                A1: Beginners
              </h4>
              <ol className="space-y-4 text-charcoal/80">
                <li className="flex gap-4 items-start">
                  <span className="font-bold text-primary text-lg">1</span>
                  <span>Contact us for your batch</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="font-bold text-primary text-lg">2</span>
                  <span>We confirm your enrollment and you begin your journey</span>
                </li>
              </ol>
            </div>
          </div>

          {/* A2, B1, B2 - Higher Levels */}
          <div className="space-y-6">
            <h4 className="text-2xl font-[var(--font-serif)] text-primary">
              A2, B1, B2: Higher Levels
            </h4>
            <ol className="space-y-4 text-charcoal/80">
              <li className="flex gap-4 items-start">
                <span className="font-bold text-primary text-lg">1</span>
                <span>Contact us for your target level</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-bold text-primary text-lg">2</span>
                <span>Take the entrance test</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="font-bold text-primary text-lg">3</span>
                <span>Pass → Enrolled</span>
              </li>
            </ol>
            <div className="bg-accent p-6 border-l-2 border-primary mt-4">
              <p className="text-sm font-bold text-primary mb-2">
                Don&apos;t pass yet? →
              </p>
              <p className="text-sm leading-relaxed text-charcoal/70">
                Crash course: fast-paced, individual sessions with flexible scheduling. Keep studying until you pass.{" "}
                <strong>When you&apos;re ready, you get enrolled.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-primary/20">
          <blockquote className="font-handwriting text-2xl md:text-3xl text-primary leading-relaxed italic text-center max-w-4xl mx-auto">
            &ldquo;Every batch has students who earned their place. No one is holding the class back. No one is lost.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
