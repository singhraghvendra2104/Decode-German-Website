"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";

interface Props {
  resources: Post[];
}

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Grammar Tips", value: "grammar" },
  { label: "YouTube", value: "youtube" },
  { label: "Life in Germany", value: "life-in-germany" },
] as const;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function categoryLabel(category: string) {
  const map: Record<string, string> = {
    grammar: "Grammar Tips",
    youtube: "YouTube",
    "life-in-germany": "Life in Germany",
    community: "Community",
    resource: "Resource",
  };
  return map[category] || category;
}

function ctaLabel(category: string) {
  if (category === "youtube") return "Watch Video";
  return "Read Story";
}

function ArticleCard({ resource }: { resource: Post }) {
  return (
    <article className="group h-full">
      {resource.image && (
        <div className="overflow-hidden mb-4 md:mb-6">
          <Image
            src={urlFor(resource.image).width(600).height(400).url()}
            alt={resource.image.alt || resource.title}
            width={600}
            height={400}
            className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-primary mb-2 md:mb-3 font-semibold">
        <span>{categoryLabel(resource.category || "resource")}</span>
        <span>{formatDate(resource.publishedAt)}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic leading-tight group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      <a
        href={
          resource.slug?.current
            ? `/resources/${resource.slug.current}`
            : "#"
        }
        className="mt-3 md:mt-4 inline-flex items-center text-xs uppercase tracking-widest font-bold group-hover:pl-2 transition-all"
      >
        {ctaLabel(resource.category || "resource")}{" "}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </a>
    </article>
  );
}

export default function ArchiveFeed({ resources }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const emblaRef = useRef<EmblaCarouselType | null>(null);

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
          {CATEGORIES.map((cat) => (
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
                <ArticleCard resource={resource} />
              </Carousel.Slide>
            ))}
          </Carousel>

          {/* Navigation */}
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
    </section>
  );
}
