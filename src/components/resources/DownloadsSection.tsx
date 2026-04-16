"use client";

import { useState, useRef, useMemo, useCallback } from "react";
import { Carousel } from "@mantine/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import type { Download } from "@/lib/sanity";

interface Props {
  downloads: Download[];
}

/**
 * Build the sidebar filter tabs from the categories that actually appear on
 * the loaded downloads — editors create these in the Studio via the shared
 * `category` document type, so we don't hardcode a list here.
 */
function buildCategoryTabs(downloads: Download[]) {
  const seen = new Map<string, string>();
  for (const d of downloads) {
    if (d.category && !seen.has(d.category)) {
      seen.set(d.category, d.categoryTitle || d.category);
    }
  }
  return [
    { label: "All", value: "all" },
    ...Array.from(seen, ([value, label]) => ({ value, label })),
  ];
}

function fileIcon(fileType: string) {
  if (
    fileType.toLowerCase().includes("mp3") ||
    fileType.toLowerCase().includes("audio")
  ) {
    return (
      <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10V3.5L18.5 9H15z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 md:w-6 h-5 md:h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

function DownloadCard({ download }: { download: Download }) {
  return (
    <div className="bg-white p-4 md:p-6 flex flex-col justify-between group hover:shadow-xl transition-all h-full min-h-[200px] md:min-h-[240px]">
      <div className="flex justify-between items-start">
        <span className="bg-[#ffdccf] text-[#380d00] text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest">
          {download.level}
        </span>
        {fileIcon(download.fileType)}
      </div>
      <div className="mt-4 md:mt-8">
        <h4 className="text-xl md:text-2xl font-[var(--font-serif)] italic">
          {download.title}
        </h4>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
          {download.fileType} &bull; {download.fileSize}
        </p>
      </div>
      {download.fileUrl ? (
        <a
          href={download.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-8 border border-primary text-primary px-4 py-2 uppercase text-[11px] tracking-widest font-bold group-hover:bg-primary group-hover:text-white transition-colors text-center"
        >
          Download
        </a>
      ) : (
        <button className="mt-4 md:mt-8 border border-primary text-primary px-4 py-2 uppercase text-[11px] tracking-widest font-bold group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
          Download
        </button>
      )}
    </div>
  );
}

// Group items into pairs for 2-row layout on desktop
function chunkPairs(arr: Download[]): Download[][] {
  const chunks: Download[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    chunks.push(arr.slice(i, i + 2));
  }
  return chunks;
}

export default function DownloadsSection({ downloads }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const emblaRef = useRef<EmblaCarouselType | null>(null);

  const categoryTabs = useMemo(() => buildCategoryTabs(downloads), [downloads]);

  const activeCategoryLabel =
    categoryTabs.find((c) => c.value === activeCategory)?.label || "All";

  const handleCategoryChange = useCallback(
    (value: string) => {
      setActiveCategory(value);
      setCurrentSlide(0);
      setDropdownOpen(false);
      emblaRef.current?.scrollTo(0);
    },
    []
  );

  const filtered =
    activeCategory === "all"
      ? downloads
      : downloads.filter((d) => d.category === activeCategory);

  const pairedSlides = chunkPairs(filtered);
  const totalSlides = pairedSlides.length;

  return (
    <section className="mb-10 md:mb-16 py-8 md:py-14 bg-[#e8e3d9] -mx-4 md:-mx-8 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] italic font-bold leading-tight">
              Practice <br />Materials
            </h2>
            <p className="mt-4 md:mt-6 text-gray-500 leading-relaxed text-sm md:text-base">
              Downloadable PDFs and audio guides designed to supplement your
              self-study journey.
            </p>
            {/* Mobile: dropdown filter */}
            <div className="mt-6 lg:hidden relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-300 text-[11px] uppercase tracking-widest font-semibold bg-white"
              >
                <span>{activeCategoryLabel}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </button>
              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 right-0 z-20 bg-white border border-gray-300 border-t-0 shadow-lg">
                    {categoryTabs.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => handleCategoryChange(cat.value)}
                        className={`w-full text-left px-4 py-2.5 text-[11px] uppercase tracking-widest transition-colors ${
                          activeCategory === cat.value
                            ? "bg-primary text-white"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Desktop: sidebar filter tabs */}
            <div className="mt-12 hidden lg:flex lg:flex-col lg:space-y-4">
              {categoryTabs.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`w-full text-left uppercase text-[11px] tracking-[0.2em] border-b border-gray-300 py-3 transition-colors ${
                    activeCategory === cat.value
                      ? "text-primary font-bold"
                      : "hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Desktop navigation arrows */}
            {totalSlides > 1 && (
              <div className="hidden lg:flex items-center gap-3 mt-8">
                <button
                  onClick={() => emblaRef.current?.scrollPrev()}
                  disabled={currentSlide === 0}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  onClick={() => emblaRef.current?.scrollNext()}
                  disabled={currentSlide >= totalSlides - 1}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold ml-2">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            {filtered.length > 0 ? (
              <Carousel
                getEmblaApi={(api) => {
                  emblaRef.current = api;
                }}
                onSlideChange={setCurrentSlide}
                slideSize={{ base: "85%", sm: "48%", lg: "50%" }}
                slideGap={{ base: "sm", md: "md" }}
                withControls={false}
                emblaOptions={{ align: "start", containScroll: "trimSnaps", loop: false }}
              >
                {pairedSlides.map((pair, idx) => (
                  <Carousel.Slide key={idx}>
                    <div className="flex flex-col gap-3 md:gap-4">
                      {pair.map((download) => (
                        <DownloadCard key={download._id} download={download} />
                      ))}
                    </div>
                  </Carousel.Slide>
                ))}
              </Carousel>
            ) : (
              <p className="text-center text-gray-400 py-12">
                No downloads available in this category yet.
              </p>
            )}

            {/* Mobile navigation */}
            {totalSlides > 1 && (
              <div className="flex lg:hidden items-center justify-between mt-6">
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => emblaRef.current?.scrollPrev()}
                    disabled={currentSlide === 0}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => emblaRef.current?.scrollNext()}
                    disabled={currentSlide >= totalSlides - 1}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30 cursor-pointer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
