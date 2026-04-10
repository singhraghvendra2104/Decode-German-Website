export default function TheTeam() {
  const teamMembers = [
    {
      name: "Atalbihari Sharma",
      role: "Co-Founder & Director",
      description: "Business strategy and growth.",
      image: "/about/team/atalbihari-sharma.png",
      objectPosition: "center 25%",
    },
    {
      name: "Gurneesh Singh",
      role: "Language Support Specialist",
      description:
        "Ensuring class quality through content development and after-class support.",
      image: "/about/team/gurneesh-singh.png",
    },
    {
      name: "Tanya Wadhwa",
      role: "German Language Teacher",
      description:
        "Helping students speak German with clarity, confidence, and ease.",
      image: "/about/team/tanya-wadhwa.png",
    },
    {
      name: "Aditya Mohan Ray",
      role: "German Language Teacher",
      description:
        "Fostering care, camaraderie, and a collective learning experience across diverse backgrounds.",
      image: "/about/team/aditya-mohan-ray.png",
    },
    {
      name: "Srishty Arora",
      role: "German Language Teacher",
      description:
        "Shaping confident communicators who can connect beyond borders.",
      image: "/about/team/srishty-arora.png",
    },
    {
      name: "Isabelle Das",
      role: "Native Speaker & German Language Teacher",
      description:
        "Helping international students master the German flow of speech and achieve real fluency.",
      image: "/about/team/isabelle-das.png",
    },
    {
      name: "Ashutosh Dubey",
      role: "Legal Advisor",
      description:
        "Handling legal and compliance matters behind the scenes.",
      image: "/about/team/ashutosh-dubey.png",
      objectPosition: "center 25%",
    },
    {
      name: "Sakshi Tripathi",
      role: "Digital Marketing Lead",
      description:
        "Leading digital strategy to reach learners across the world.",
      image: "/about/team/sakshi-tripathi.png",
    },
    {
      name: "Afroj Ansari",
      role: "Social Media Strategist",
      description:
        "Making German language learning accessible through structured, easy-to-understand content.",
      image: "/about/team/afroj-ansari.png",
    },
  ];

  return (
    <section className="bg-surface-container py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-[var(--font-serif)] mb-4">The Team</h2>
          <p className="text-lg opacity-60">The people behind Decode German.</p>
          <p className="text-lg opacity-60">A team of teachers, strategists, and specialists. Every one personally invested in student success.</p>
        </div>
        {/* Main Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="aspect-[4/5] bg-white overflow-hidden polaroid -rotate-1">
            <img
              alt="Founder Portrait"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDplb2v7C0_y00dAsj2XCpaPVeT2yuzKj4aUsSHVUnmfBx0toS-B7ehO32SXC-KtoREEv5Tb0dtBRHpIZrCErxvE3Fk9t_Br5IhR9chcKkDt9L5ssghZBeblraFRBlpQcRG7ijxqIyTCsA3yQcqwTvYlF-Cq75C_BNZiih8AURNbVBqH9-NI50fYvB6Gxqq7b5Zjuw0sfAjg3tjfCVuVZ5OeU1b5fmvEHSje5RPqN179u5ns7smhro9ZetjWuaMlxUrmvLzT4JsShk"
            />
          </div>
          <div className="space-y-6 px-4">
            <h3 className="text-4xl font-[var(--font-serif)]">Shalini K Dubey</h3>
            <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs">
              Founder &amp; Lead Instructor
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              12 years of teaching experience. Based in Dresden, Germany. Personally teaches, designs the curriculum, and knows every student by name. Moved to Germany for post-graduate studies, learned German from scratch, and built the system that gets results where bulk teaching fails.
            </p>
            <blockquote className="font-[var(--font-serif)] italic text-base leading-relaxed opacity-80 border-l-2 border-primary pl-4 py-2">
              "When you study here, you don't 'take classes.' You commit. You build confidence. You evolve. You transform."
            </blockquote>
            <div className="flex gap-4">
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                Dresden Based
              </span>
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                12 Years Exp
              </span>
            </div>
          </div>
        </div>
        {/* Team Grid - Desktop */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="aspect-square bg-white mb-6 p-4 md:grayscale md:group-hover:grayscale-0 transition-all duration-500">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover"
                  src={member.image}
                  style={{ objectPosition: member.objectPosition || "top" }}
                />
              </div>
              <h4 className="text-xl font-[var(--font-serif)] font-bold">{member.name}</h4>
              <p className="text-sm font-bold uppercase tracking-widest mt-2">{member.role}</p>
              {member.description && <p className="text-sm text-on-surface/60 mt-2">{member.description}</p>}
            </div>
          ))}
        </div>

        {/* Team Slider - Mobile (Infinite Scroll) */}
        <div className="md:hidden -mx-8 overflow-hidden">
          <div className="marquee-track flex gap-6">
            {[...teamMembers, ...teamMembers].map((member, idx) => (
              <div key={`${member.name}-${idx}`} className="text-center w-64 flex-shrink-0">
                <div className="aspect-square bg-white mb-6 p-4">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    src={member.image}
                    style={{ objectPosition: member.objectPosition || "top" }}
                  />
                </div>
                <h4 className="text-xl font-[var(--font-serif)] font-bold">{member.name}</h4>
                <p className="text-sm font-bold uppercase tracking-widest mt-2">{member.role}</p>
                {member.description && <p className="text-sm text-on-surface/60 mt-2 px-2">{member.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
