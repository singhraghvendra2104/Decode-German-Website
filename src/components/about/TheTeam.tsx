import { theTeamContent } from "@/lib/constants";

export default function TheTeam() {
  const { heading, description, founder, academicAdvisor, members } = theTeamContent;

  return (
    <section className="bg-surface-container py-14 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16 lg:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-4">{heading}</h2>
          <p className="text-base md:text-lg opacity-60">{description}</p>
        </div>
        {/* Main Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-16 lg:mb-24">
          <div className="aspect-[4/5] bg-white overflow-hidden polaroid -rotate-1">
            <img
              alt={founder.imageAlt}
              className="w-full h-full object-cover"
              src={founder.image}
            />
          </div>
          <div className="space-y-6 px-4">
            <h3 className="text-4xl font-[var(--font-serif)]">{founder.name}</h3>
            <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs">
              {founder.role}
              <br />
                {founder.location}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {founder.bio1}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {founder.bio2.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <blockquote className="font-[var(--font-serif)] italic text-base leading-relaxed opacity-80 border-l-2 border-primary pl-4 py-2">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
            <div className="flex gap-4">
              {founder.badges.map((badge) => (
                <span key={badge} className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Academic Advisor Feature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-16 lg:mb-24">
          <div className="space-y-6 px-4 order-2 md:order-1">
            <h3 className="text-4xl font-[var(--font-serif)]">
              {academicAdvisor.nameDisplay.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h3>
            <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs">
              {academicAdvisor.role}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {academicAdvisor.bio1}
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              {academicAdvisor.bio2}
            </p>
            <blockquote className="font-[var(--font-serif)] italic text-base leading-relaxed opacity-80 border-l-2 border-primary pl-4 py-2">
              &ldquo;{academicAdvisor.quote}&rdquo;
            </blockquote>
            <div className="flex flex-wrap gap-3">
              {academicAdvisor.badges.map((badge) => (
                <span key={badge} className="px-4 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] bg-white overflow-hidden polaroid rotate-1 order-1 md:order-2">
            <img
              alt={academicAdvisor.imageAlt}
              className="w-full h-full object-cover"
              src={academicAdvisor.image}
            />
          </div>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-16">
          {members.map((member) => (
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
            {[...members, ...members].map((member, idx) => (
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
