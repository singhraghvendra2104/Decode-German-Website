"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "@/components/ui/ImageWithSkeleton";
import { urlFor } from "@/lib/sanity";

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-[var(--font-serif)] italic font-bold mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-[var(--font-serif)] italic font-bold mt-7 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-[var(--font-serif)] italic font-semibold mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold mt-5 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
    color: ({ children, value }) => (
      <span style={{ color: value?.value }}>{children}</span>
    ),
    highlight: ({ children, value }) => (
      <mark
        style={{ backgroundColor: value?.color || "#FFF3CD" }}
        className="px-1 rounded-sm"
      >
        {children}
      </mark>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-6">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || ""}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    germanEnglishBlock: ({ value }) => (
      <div className="my-6 border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-[#092226] text-white px-4 py-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
            Deutsch
          </span>
          <p className="mt-1 text-base leading-relaxed">{value.german}</p>
        </div>
        <div className="bg-gray-50 px-4 py-3">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
            English
          </span>
          <p className="mt-1 text-base leading-relaxed text-gray-600">
            {value.english}
          </p>
        </div>
      </div>
    ),
    tipBlock: ({ value }) => {
      const variants: Record<string, { bg: string; border: string; icon: string }> = {
        tip: { bg: "bg-amber-50", border: "border-amber-300", icon: "💡" },
        warning: { bg: "bg-red-50", border: "border-red-300", icon: "⚠️" },
        note: { bg: "bg-blue-50", border: "border-blue-300", icon: "📝" },
      };
      const v = variants[value.variant || "tip"] || variants.tip;
      return (
        <div className={`my-6 ${v.bg} border-l-4 ${v.border} px-4 py-3 rounded-r-lg`}>
          <span className="text-lg mr-2">{v.icon}</span>
          <span className="leading-relaxed">{value.text}</span>
        </div>
      );
    },
    audioBlock: ({ value }) => (
      <div className="my-6 bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">{value.title || "Audio"}</p>
        </div>
        {value.url && (
          <a
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Listen
          </a>
        )}
      </div>
    ),
    videoBlock: ({ value }) => {
      const videoId = value.url ? extractYouTubeId(value.url) : null;
      if (!videoId) return null;
      return (
        <figure className="my-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={value.caption || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface ArticleBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
}

export default function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <div className="prose-decode">
      <PortableText value={body} components={components} />
    </div>
  );
}
