export default function OurJourney() {
  const timeline = [
    {
      year: "2020",
      title: "The beginning",
      description: "Decode German founded. First A1 batch starts online. One teacher, a small group of students, and a commitment to do things differently.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2021",
      title: "Expanding levels",
      description: "A2 and B1 courses launched. First native German speakers join the teaching team.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2022",
      title: "500+ students milestone",
      description: "Exam preparation courses launched - Goethe-Zertifikat, TestDaF, and TELC. Still growing entirely through student recommendations.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2023",
      title: "B2 level and revision courses",
      description: "B2 added to complete the A1–B2 journey. Revision courses introduced. Team grows to 7.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2024",
      title: "1000+ students - company registered",
      description: "SKiD Decode Deutsch Language Institute Pvt Ltd formally registered. Entrance test system implemented for all levels above A1.",
      isLeft: true,
      isPrimary: true,
    },
    {
      year: "2025",
      title: "Scaling excellence",
      description: "Expanded team, advanced curriculum, and personalized learning technology. Commitment to maintaining quality while reaching more students.",
      isLeft: false,
      isPrimary: false,
    },
    {
      year: "2026",
      title: "The future",
      description: "New AI-driven tracking systems, same educational soul. Building the next generation of confident German speakers.",
      isLeft: true,
      isPrimary: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <h2 className="text-5xl font-[var(--font-serif)] mb-20 text-center">Our Journey</h2>
      <p className="text-lg text-on-surface/60 text-center mb-16 max-w-2xl mx-auto">Six years of growing - one student at a time.</p>

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
