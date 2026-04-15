"use client";

import { useState } from "react";
import Image from "@/components/ui/ImageWithSkeleton";
import { Carousel } from "@mantine/carousel";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import ArticleDrawer from "./ArticleDrawer";

interface Props {
  pinnedResources: Post[];
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

function PinnedYouTube({
  resource,
  onOpen,
}: {
  resource: Post;
  onOpen: (post: Post) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const videoId = resource.youtubeUrl ? extractYouTubeId(resource.youtubeUrl) : null;

  return (
    <div className="group">
      <div className="bg-[#e8e3d9] p-3 md:p-4 mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2">
        <div className="aspect-video bg-[#2d2a26] relative overflow-hidden">
          {playing && videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={resource.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <>
              {resource.image ? (
                <Image
                  src={urlFor(resource.image).width(600).height(340).url()}
                  alt={resource.image.alt || resource.title}
                  fill
                  className="object-cover opacity-80"
                />
              ) : resource.youtubeThumbnail ? (
                <Image
                  src={resource.youtubeThumbnail}
                  alt={resource.title}
                  fill
                  className="object-cover opacity-80"
                />
              ) : null}
              <button
                onClick={() => {
                  if (videoId) setPlaying(true);
                }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <svg
                  className="w-12 md:w-16 h-12 md:h-16 text-white drop-shadow-lg hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "YouTube Pinned"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">
        {resource.title}
      </h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
      <div className="flex gap-3 mt-3">
        {resource.youtubeUrl && (
          <a
            href={resource.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Watch on YouTube
            <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </a>
        )}
        <button
          onClick={() => onOpen(resource)}
          className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors cursor-pointer"
        >
          Read More
          <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function PinnedGrammar({
  resource,
  onOpen,
}: {
  resource: Post;
  onOpen: (post: Post) => void;
}) {
  return (
    <div className="group cursor-pointer" onClick={() => onOpen(resource)}>
      <div className="bg-[#e8e3d9] p-3 md:p-4 mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2 -rotate-[0.8deg]">
        {resource.image ? (
          <div className="aspect-square relative overflow-hidden border-t-8 border-primary">
            <Image
              src={urlFor(resource.image).width(600).height(600).url()}
              alt={resource.image.alt || resource.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/80 flex flex-col justify-center p-4">
              <h4 className="font-[var(--font-serif)] italic text-2xl md:text-4xl mb-3 md:mb-4">
                {resource.title}
              </h4>
              <p className="text-sm leading-relaxed">{resource.excerpt}</p>
            </div>
          </div>
        ) : (
          <div className="aspect-square bg-white p-4 flex flex-col justify-center border-t-8 border-primary">
            <h4 className="font-[var(--font-serif)] italic text-2xl md:text-4xl mb-3 md:mb-4">
              {resource.title}
            </h4>
            <p className="text-sm leading-relaxed">{resource.excerpt}</p>
          </div>
        )}
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "Grammar Insight"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">
        {resource.title}
      </h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
    </div>
  );
}

function PinnedUpdate({
  resource,
  onOpen,
}: {
  resource: Post;
  onOpen: (post: Post) => void;
}) {
  return (
    <div className="group cursor-pointer" onClick={() => onOpen(resource)}>
      <div className="mb-4 md:mb-6 transition-all duration-300 group-hover:-translate-y-2 relative aspect-[4/3] md:aspect-square overflow-hidden">
        {resource.image ? (
          <>
            <Image
              src={urlFor(resource.image).width(600).height(600).url()}
              alt={resource.image.alt || resource.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#2d2a26]/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[#2d2a26]" />
        )}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
          <svg
            className="w-8 md:w-10 h-8 md:h-10 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
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
      </div>
      <span className="uppercase text-[10px] tracking-[0.3em] text-primary font-semibold">
        {resource.pinnedLabel || "Batch Updates"}
      </span>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic mt-1 md:mt-2">
        {resource.title}
      </h3>
      <p className="text-sm mt-1 md:mt-2 opacity-70">{resource.excerpt}</p>
    </div>
  );
}

const PINNED_COMPONENTS: Record<
  string,
  React.ComponentType<{ resource: Post; onOpen: (post: Post) => void }>
> = {
  youtube: PinnedYouTube,
  grammar: PinnedGrammar,
  community: PinnedUpdate,
  resource: PinnedUpdate,
  "life-in-germany": PinnedUpdate,
};

export default function PinnedHighlights({ pinnedResources }: Props) {
  const [drawerPost, setDrawerPost] = useState<Post | null>(null);

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
      {/* Mobile: carousel */}
      <div className="block md:hidden">
        <Carousel
          slideSize="85%"
          slideGap="md"
          withControls={false}
          emblaOptions={{ align: "start", containScroll: "trimSnaps" }}
        >
          {pinnedResources.map((resource) => {
            const Component =
              PINNED_COMPONENTS[resource.category || ""] || PinnedUpdate;
            return (
              <Carousel.Slide key={resource._id}>
                <Component resource={resource} onOpen={setDrawerPost} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {pinnedResources.map((resource) => {
          const Component =
            PINNED_COMPONENTS[resource.category || ""] || PinnedUpdate;
          return (
            <Component
              key={resource._id}
              resource={resource}
              onOpen={setDrawerPost}
            />
          );
        })}
      </div>

      <ArticleDrawer
        post={drawerPost}
        opened={!!drawerPost}
        onClose={() => setDrawerPost(null)}
      />
    </section>
  );
}
