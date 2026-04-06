export default function HowStudentsJoin() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32 border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-5xl font-[var(--font-serif)] mb-4">How Students Join</h2>
            <p className="text-lg text-on-surface/60">We take enrollment seriously - because your learning depends on it.</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-[var(--font-serif)] font-bold mb-6">A1 - Beginners</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-fit">1</span>
                  <p className="text-on-surface/70"><strong>Contact us</strong> for your batch</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-fit">2</span>
                  <p className="text-on-surface/70">We <strong>confirm your enrollment</strong> and you begin your journey</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-[var(--font-serif)] font-bold mb-6">A2, B1, B2 - Higher Levels</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-fit">1</span>
                  <p className="text-on-surface/70"><strong>Contact us</strong> for your target level</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-fit">2</span>
                  <p className="text-on-surface/70">Take the <strong>entrance test</strong></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-primary font-bold text-lg min-w-fit">3</span>
                  <div className="space-y-2">
                    <p className="text-on-surface/70"><strong>Pass</strong> → Enrolled</p>
                    <p className="text-on-surface/70"><strong>Don't pass yet</strong> → <strong>crash course</strong> - fast-paced, individual sessions with flexible scheduling. Keep studying until you pass. <strong>When you're ready, you get enrolled.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="font-[var(--font-handwriting)] text-2xl text-primary/80 pt-8 border-t border-on-surface/5">
            "Every batch has students who earned their place. No one is holding the class back. No one is lost."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
