import { foundersNoteContent } from "@/lib/constants";

export default function FoundersNote() {
  return (
    <section className="bg-surface-container py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3 flex flex-col justify-start">
          <div className="space-y-4 md:space-y-6">
            <div className="w-16 h-[2px] bg-primary"></div>
            <h2 className="text-2xl md:text-3xl font-[var(--font-serif-alt)] italic leading-snug">
              &ldquo;{foundersNoteContent.sidebarQuote}&rdquo;
            </h2>
            <div className="pt-2 md:pt-4">
              <p className="font-bold text-sm uppercase tracking-widest">{foundersNoteContent.founderName}</p>
              <p className="text-[11px] opacity-60 uppercase tracking-widest">
                {foundersNoteContent.founderTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-9 space-y-3 bg-white p-6 md:p-8 relative">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold">{foundersNoteContent.sectionTitle}</p>
          {foundersNoteContent.paragraphs.map((para, i) => (
            <p
              key={i}
              className={`text-base leading-normal text-on-surface/90${para.bold ? " font-semibold italic" : ""}`}
              dangerouslySetInnerHTML={{ __html: para.text }}
            />
          ))}
          <p className="text-sm tracking-widest text-on-surface/60 pt-1">
            {foundersNoteContent.signoff}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-on-surface/10">
            {foundersNoteContent.stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="text-2xl font-[var(--font-serif-alt)] font-bold">{stat.value}</span>
                <p className="text-[10px] uppercase tracking-widest opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
