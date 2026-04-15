import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";

interface Props {
  pinnedResources: Post[];
}

function PinnedYouTube({ resource }: { resource: Post }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#e8e3d9] p-3 md:p-4 mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2">
        <div className="aspect-video bg-[#2d2a26] relative overflow-hidden">
          {resource.image && (
            <Image
              src={urlFor(resource.image).width(600).height(340).url()}
              alt={resource.image.alt || resource.title}
              fill
              className="object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 md:w-16 h-12 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
        </div>
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "YouTube Pinned"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">{resource.title}</h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
    </div>
  );
}

function PinnedGrammar({ resource }: { resource: Post }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#e8e3d9] p-3 md:p-4 mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2 -rotate-[0.8deg]">
        <div className="aspect-square bg-white p-4 flex flex-col justify-center border-t-8 border-primary">
          <h4 className="font-[var(--font-serif)] italic text-2xl md:text-4xl mb-3 md:mb-4">
            {resource.title}
          </h4>
          <p className="text-sm leading-relaxed">{resource.excerpt}</p>
        </div>
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "Grammar Insight"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">{resource.title}</h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
    </div>
  );
}

function PinnedUpdate({ resource }: { resource: Post }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#2d2a26] p-6 md:p-8 mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2 flex flex-col justify-between aspect-[4/3] md:aspect-square">
        <svg className="w-8 md:w-10 h-8 md:h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
        <div>
          <h3 className="text-xl md:text-3xl font-[var(--font-serif)] italic text-white leading-tight">
            {resource.title}
          </h3>
          <p className="text-white/60 text-xs tracking-widest mt-2 md:mt-4 uppercase">
            {resource.excerpt}
          </p>
        </div>
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "Batch Updates"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">{resource.title}</h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
    </div>
  );
}

const PINNED_COMPONENTS: Record<string, React.ComponentType<{ resource: Post }>> = {
  youtube: PinnedYouTube,
  grammar: PinnedGrammar,
  community: PinnedUpdate,
  resource: PinnedUpdate,
  "life-in-germany": PinnedUpdate,
};

export default function PinnedHighlights({ pinnedResources }: Props) {
  if (!pinnedResources.length) return null;

  return (
    <section className="mb-10 md:mb-16">
      <div className="flex justify-between items-end mb-6 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-4xl font-[var(--font-serif)] italic font-bold">
            The Monthly Highlights
          </h2>
          <p className="uppercase text-[11px] tracking-[0.2em] text-primary mt-1 md:mt-2 font-semibold">
            Essential starting points
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {pinnedResources.map((resource) => {
          const Component = PINNED_COMPONENTS[resource.category || ""] || PinnedUpdate;
          return <Component key={resource._id} resource={resource} />;
        })}
      </div>
    </section>
  );
}
