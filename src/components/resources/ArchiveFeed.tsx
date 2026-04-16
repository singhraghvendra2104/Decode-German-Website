"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Image from "@/components/ui/ImageWithSkeleton";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import ArticleDrawer from "./ArticleDrawer";

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

interface SanityCategory {
  _id: string;
  title: string;
  value: string;
}

interface Props {
  resources: Post[];
  categories?: SanityCategory[];
}

// Fallback categories when none come from Sanity
const FALLBACK_CATEGORIES = [
  { label: "Grammar Tips", value: "grammar" },
  { label: "YouTube", value: "youtube" },
  { label: "Life in Germany", value: "life-in-germany" },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function categoryLabel(category: string, cats: { label: string; value: string }[]) {
  const found = cats.find((c) => c.value === category);
  return found?.label || category;
}

function YouTubeCard({
  resource,
  onOpen,
  cats,
}: {
  resource: Post;
  onOpen: (post: Post) => void;
  cats: { label: string; value: string }[];
}) {
  const [playing, setPlaying] = useState(false);
  const videoId = resource.youtubeUrl
    ? extractYouTubeId(resource.youtubeUrl)
    : null;

  const handlePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (videoId) setPlaying(true);
    },
    [videoId]
  );

  return (
    <article className="group h-full">
      <div className="bg-[#e8e3d9] p-2.5 md:p-3 mb-4 md:mb-6 transition-all duration-300 md:group-hover:-translate-y-2">
        <div className="aspect-[3/2] relative overflow-hidden bg-[#2d2a26]">
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
                  src={urlFor(resource.image).width(600).height(400).url()}
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
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <svg
                  className="w-12 md:w-14 h-12 md:h-14 text-white drop-shadow-lg hover:scale-110 transition-transform"
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
      <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-primary mb-2 md:mb-3 font-semibold">
        <span>{categoryLabel(resource.category || "resource", cats)}</span>
        <span>{formatDate(resource.publishedAt)}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic leading-tight md:group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      <div className="flex items-center gap-4 mt-3 md:mt-4">
        {resource.youtubeUrl && (
          <a
            href={resource.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Watch on YouTube
            <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </a>
        )}
        <button
          onClick={() => onOpen(resource)}
          className="inline-flex items-center text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors cursor-pointer"
        >
          Read More
          <svg className="w-3.5 h-3.5 ml-1.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

function ArticleCard({
  resource,
  onOpen,
  cats,
}: {
  resource: Post;
  onOpen: (post: Post) => void;
  cats: { label: string; value: string }[];
}) {
  // Show YouTube card for youtubeVideo documents or articles with a youtubeUrl
  if (resource._type === "youtubeVideo" || resource.youtubeUrl) {
    return <YouTubeCard resource={resource} onOpen={onOpen} cats={cats} />;
  }

  return (
    <article className="group h-full cursor-pointer" onClick={() => onOpen(resource)}>
      {resource.image && (
        <div className="bg-[#e8e3d9] p-2.5 md:p-3 mb-4 md:mb-6 transition-all duration-300 md:group-hover:-translate-y-2">
          <div className="overflow-hidden">
            <Image
              src={urlFor(resource.image).width(600).height(400).url()}
              alt={resource.image.alt || resource.title}
              width={600}
              height={400}
              className="w-full aspect-[3/2] object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-primary mb-2 md:mb-3 font-semibold">
        <span>{categoryLabel(resource.category || "resource", cats)}</span>
        <span>{formatDate(resource.publishedAt)}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic leading-tight md:group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      <span className="mt-3 md:mt-4 inline-flex items-center text-xs uppercase tracking-widest font-bold md:group-hover:pl-2 transition-all">
        Read Story{" "}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </span>
    </article>
  );
}

export default function ArchiveFeed({ resources, categories = [] }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const emblaRef = useRef<EmblaCarouselType | null>(null);
  const [drawerPost, setDrawerPost] = useState<Post | null>(null);

  // Build category tabs only from categories that are actually referenced by
  // an article or YouTube video. Categories shared with other content types
  // (e.g. downloads) shouldn't bleed into this section's filter list.
  const cats = useMemo(() => {
    const used = new Set(
      resources.map((r) => r.category).filter((v): v is string => Boolean(v))
    );
    if (categories.length > 0) {
      return categories
        .filter((c) => used.has(c.value))
        .map((c) => ({ label: c.title, value: c.value }));
    }
    return FALLBACK_CATEGORIES.filter((c) => used.has(c.value));
  }, [categories, resources]);

  const filtered =
    activeCategory === "all"
      ? resources
      : resources.filter(
          (r) =>
            r.category === activeCategory ||
            (!r.category && activeCategory === "all")
        );

  const totalSlides = filtered.length;

  return (
    <section className="mb-10 md:mb-16">
      <div className="border-b border-gray-200 pb-4 md:pb-8 mb-8 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
        <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] italic font-bold">
          The Archive
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <button
            onClick={() => {
              setActiveCategory("all");
              setCurrentSlide(0);
              emblaRef.current?.scrollTo(0);
            }}
            className={`px-3 md:px-4 py-1 text-[10px] md:text-[11px] uppercase tracking-widest transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            All
          </button>
          {cats.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setCurrentSlide(0);
                emblaRef.current?.scrollTo(0);
              }}
              className={`px-3 md:px-4 py-1 text-[10px] md:text-[11px] uppercase tracking-widest transition-colors ${
                activeCategory === cat.value
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <>
          <Carousel
            getEmblaApi={(api) => {
              emblaRef.current = api;
            }}
            onSlideChange={setCurrentSlide}
            slideSize={{ base: "85%", sm: "48%", lg: "33.333%" }}
            slideGap={{ base: "md", md: "xl" }}
            withControls={false}
            emblaOptions={{ align: "start", containScroll: "trimSnaps", loop: false }}
          >
            {filtered.map((resource) => (
              <Carousel.Slide key={resource._id}>
                <ArticleCard resource={resource} onOpen={setDrawerPost} cats={cats} />
              </Carousel.Slide>
            ))}
          </Carousel>

          {totalSlides > 3 && (
            <div className="flex items-center justify-between mt-8 md:mt-12">
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
                <div className="w-24 md:w-32 h-[2px] bg-gray-200 relative">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => emblaRef.current?.scrollPrev()}
                  disabled={currentSlide === 0}
                  className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-current cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  onClick={() => emblaRef.current?.scrollNext()}
                  disabled={currentSlide >= totalSlides - 1}
                  className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-current cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-400 py-12 md:py-20 text-base md:text-lg">
          No resources found in this category yet.
        </p>
      )}

      <ArticleDrawer
        post={drawerPost}
        opened={!!drawerPost}
        onClose={() => setDrawerPost(null)}
      />
    </section>
  );
}
