export default function TheTeam() {
  const teamMembers = [
    {
      name: "Atalbihari Sharma",
      role: "Co-Founder & Director",
      description: "Growth & Strategic Direction",
      image: "/about/team/atalbihari-sharma.png",
      objectPosition: "center 25%",
    },
    {
      name: "Isabelle Das",
      role: "Native Speaker & German Language Teacher",
      description:
        "Helping international students master the German flow of speech and achieve real fluency.",
      image: "/about/team/isabelle-das.png",
    },
    {
      name: "Srishty Arora",
      role: "German Language Teacher",
      description:
        "Shaping confident communicators who can connect beyond borders.",
      image: "/about/team/srishty-arora.png",
    },
    {
      name: "Aditya Mohan Ray",
      role: "German Language Teacher",
      description:
        "Fostering care, camaraderie, and a collective learning experience across diverse backgrounds.",
      image: "/about/team/aditya-mohan-ray.png",
    },
    {
      name: "Tanya Wadhwa",
      role: "German Language Teacher",
      description:
        "Helping students speak German with clarity, confidence, and ease.",
      image: "/about/team/tanya-wadhwa.png",
    },
    {
      name: "Sakshi Tripathi",
      role: "Student Support & Doubt Resolution Lead",
      description:
        "Ensuring clarity at every step of the journey.",
      image: "/about/team/sakshi-tripathi.png",
    },
    {
      name: "Gurneesh Singh",
      role: "Language Support Specialist",
      description:
        "Ensuring class quality through content development and after-class support.",
      image: "/about/team/gurneesh-singh.png",
    },
    {
      name: "Ashutosh Dubey",
      role: "Program & Operations Manager",
      description:
        "Keeping everything structured, seamless, and on track.",
      image: "/about/team/ashutosh-dubey.png",
      objectPosition: "center 25%",
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
    <section className="bg-surface-container py-14 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-4">The Team</h2>
          <p className="text-base md:text-lg opacity-60">The people at Decode German, behind every student's progress - accountable & precise.</p>
        </div>
        {/* Main Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-16 lg:mb-24">
          <div className="aspect-[4/5] bg-white overflow-hidden polaroid -rotate-1">
            <img
              alt="Founder Portrait"
              className="w-full h-full object-cover"
              src="/about/team/Founder2.png"
            />
          </div>
          <div className="space-y-6 px-4">
            <h3 className="text-4xl font-[var(--font-serif)]">Shalini K Dubey</h3>
            <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs">
              Founder &amp; Lead Instructor
              <br />
                Dresden, Germany
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Personally teaches, designs the curriculum, and works closely with every student their patterns, their gaps, their journey.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Built from scratch after moving to Germany for post-graduate studies.<br />
              12+ years of teaching experience shaped through real students, not systems.
            </p>
            <blockquote className="font-[var(--font-serif)] italic text-base leading-relaxed opacity-80 border-l-2 border-primary pl-4 py-2">
              &ldquo;This is not a place where you take classes. This is a place where you commit. Where you build confidence, evolve, and transform.&rdquo;
            </blockquote>
            <div className="flex gap-4">
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                12+ Years Exp
              </span>
            </div>
          </div>
        </div>
        {/* Academic Advisor Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-16 lg:mb-24">
          <div className="space-y-6 px-4 order-2 md:order-1">
            <h3 className="text-4xl font-[var(--font-serif)]">
              Prof. Dr. Vridhagiri<br />Ganeshan
            </h3>
            <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs">
              Academic Advisor
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Over 50 years teaching, researching, and writing about German language and culture, from Universität München to CIEFL Hyderabad to Emory University. Prof. Dr. Ganeshan earned his doctorate in Germanistik in 1975 and spent 32 years as Professor of German at CIEFL, training generations of language teachers across India. He served twice as Vice-Chancellor, taught at leading American universities, and was awarded the Jakob-und-Wilhelm-Grimm-Preis by Germany in 1990, one of the highest honours in German philology.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              His life&apos;s work, bridging the gap between the learners and genuine German fluency, is exactly the challenge Decode German is built around.
            </p>
            <blockquote className="font-[var(--font-serif)] italic text-base leading-relaxed opacity-80 border-l-2 border-primary pl-4 py-2">
              &ldquo;Language is never just grammar. It is the bridge between who you are and who you are becoming in another culture.&rdquo;
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                Atlanta, USA
              </span>
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                Dr. Phil., München 1975
              </span>
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                Grimm-Preis 1990
              </span>
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                DAAD &amp; Humboldt Fellow
              </span>
              <span className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                50+ Years in Germanistik
              </span>
            </div>
          </div>
          <div className="aspect-[4/5] bg-white overflow-hidden polaroid rotate-1 order-1 md:order-2">
            <img
              alt="Prof. Dr. Vridhagiri Ganeshan"
              className="w-full h-full object-cover"
              src="/about/team/Founder3.jpeg"
            />
          </div>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-16">
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
