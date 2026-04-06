export default function TheTeam() {
  const teamMembers = [
    {
      name: "Atal Bihari Sharma",
      role: "Co-Founder & Director",
      description: "Business strategy and growth.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBENodIaZadxy24G0T_JgDvHnkTGAi5eIixT699w1E0qBc61VGnPfbkBkXMNCYKPXD6ktH2F0eh1Mmim4vRJuV8SL78FFaWft4hA0A-Wu7TYPm2Br8Na0X8JweRH8DKD2iuf12cBcszQ02d05xlV6Sl8LoD0vAcNqnG_dGPYVRxTfq6R-swC_KCsZyAbtUGXt7-758MXCiIdlMVZ4zcnlpryHsZOmj2docYWfemQ9qdljTJc2bQijzLnHUHplO0zuIXXR8moC2IpII",
    },
    {
      name: "Shrishti Arora",
      role: "German Language Teacher",
      description: "Structured A1–B2 instruction with personal attention to every student.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbsM308JKjMZLbQoMI8S2BmeJI_dS2j9td-Yr5utTdKApzCSauGHLHTHqKNqQCGpyShRFBfRzAIFGVUyVGuvr8NoCPb7lhc7xRYf7FZsJb72_hQwugjyWe0ptogT1ZH4ueJbqnmu34fmqqiUpsd6ZPlhfpux8x4hXyiE9xehDI-dr7cf2I34zHDqhUZNHAH3gtUB6Yqy-kRAKXFSGVlWfC9RYYosXJxtIplcEYn6pV5Mgion0zEdZ44TjOzileJzu6kVEtZ89ru9c",
    },
    {
      name: "Sakshi Tripathi",
      role: "German Language Teacher",
      description: "Structured A1–B2 instruction with personal attention to every student.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaMxudNXnPxJiMF_d12o_cbodXE6Mw7Y1Q7eiHOQcwyCROdZsHxqY-NOTHwZmcUt2slcCQnJz4BR-Z5Mj2q54rhiGqYkXLAzBC7KX2Af2zUU-y9yi5Amh90vb2ScfeX4qPRDiKAQZ4N6gKWtVvK03oqGJAzNV4ZUlJVJLc7pcFTE1MS_PgSOC0TJr2IhzCbZB0W12k-ZNVvgJq2TziIFANF5B9ok52STbEk2Gjia6XkPh0jGzpGqRHSRBoWUYWndCOdJzt0lBtHYo",
    },
    {
      name: "Ashutosh Dubey",
      role: "Program Manager",
      description: "Operations and program coordination.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAU3us7Fb6WFAnZBpuB265lp-ErZ4NHa3UOgezbUtsw_QYRLR687juDHacPUU5kVI8K5rmIeS1lCi7TQYE794TC6xP2HtnsSwHnajsuNvjgk9IVC5aEHBEXIAx6VhzAlmE-lH9ouNEDOs6JA6drPktCA3WVIlRGnbumLNSWJVl6sINLvA5QruaENA_e5DJGD-y8BKO7bi6EPOUlpc4V07n1Jyo7OrTYVAUudyCLuclY7uteYRPMpLpHhWECRrL-mwLHeeommk1dIE0",
    },
    {
      name: "Emilia Bishara",
      role: "Native German Instructor",
      description: "Authentic pronunciation, real-world grammar, and cultural context.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAkP9BifWCR_fT3T4D-P7BDPGTSgBsAXsDHODxi63yrE6XtGpO3TKhTlRiD9tqIRQ1Q1dvN-E5EyOrTdc7chJD9XsaDAIPEYESop1Iz31_Zs9xhTTLStajEiKeIf74D9uAqUjWkqRWvwrXAQ0WLhiUpCwVrc9ZXiKgeZ3s7M7L7NveCccNVetKDly26v7Wti6TOSUZb93BZFBTKqA6Yj8NR9nE0ioprHPLUAduwDjI5vYiaO6dh2YwVfwNvrymi8mkHIY3FNSPclNw",
    },
    {
      name: "Isabelle Rita Das",
      role: "Native German Instructor",
      description: "Real German conversations and authentic language practice.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHvsASVBnGxmvOVh31SWpCx7flJYc4FmHBMGNWYq_CYz1ls3Rnm_dcWKwTabt1_NioYbH5zUzjH8Sqv4CnsoBz7L-qFXHbUi-pklk29Zqb100P50zALkI1m6aDjO2tJnUX8z0FxjefdWPo8aKgOSSyOq0owaMVG_NoAVnv_LhDPIW84XciGu9L5mJR1_EKpbrHDaFMqQKL-wzIzzV9-rb-m9muO8NsO3ixv7xzhVpk8e3K8NBK8jIpRxDBOlGqlievfU0Q_rCo",
    },
  ];

  return (
    <section className="bg-surface-container py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-[var(--font-serif)] mb-4">The Team</h2>
          <p className="text-lg opacity-60">The people behind Decode German.</p>
          <p className="text-lg opacity-60">7 team members including native German speakers. Every one personally invested in student success.</p>
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
        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="aspect-square bg-white mb-6 p-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img alt={member.name} className="w-full h-full object-cover" src={member.image} />
              </div>
              <h4 className="text-xl font-[var(--font-serif)] font-bold">{member.name}</h4>
              <p className="text-sm font-bold uppercase tracking-widest mt-2">{member.role}</p>
              {member.description && <p className="text-sm text-on-surface/60 mt-2">{member.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
