import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

let _client: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
  if (!_client) {
    _client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    });
  }
  return _client;
}

export function urlFor(source: SanityImageSource) {
  const builder = imageUrlBuilder(getSanityClient());
  return builder.image(source);
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Category {
  _id: string;
  _type: "category";
  title: string;
  value: { current: string };
}

// Unified shape used by frontend components (articles + youtube videos)
export interface Post {
  _id: string;
  _type: "article" | "youtubeVideo";
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: SanityImage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
  category?: string; // resolved from reference
  excerpt?: string;
  youtubeUrl?: string;
  isPinned?: boolean;
  pinnedLabel?: string;
  youtubeThumbnail?: string;
}

export interface Download {
  _id: string;
  _type: "download";
  title: string;
  level: string;
  fileType: string;
  fileSize: string;
  fileUrl?: string;
  /** Category slug, resolved from the `category` reference. */
  category?: string;
  /** Human-readable category title, resolved from the `category` reference. */
  categoryTitle?: string;
}

// ─── Queries (aligned with Sanity Studio schemas) ───────────────────────────

// Fetches pinned articles for the highlights section
export const PINNED_POSTS_QUERY = `*[_type == "article" && isPinned == true] | order(publishedAt desc){
  _id,
  _type,
  title,
  slug,
  "category": category->value.current,
  excerpt,
  image,
  youtubeUrl,
  publishedAt,
  isPinned,
  pinnedLabel,
  body
}`;

// Fetches all articles for the archive feed
export const ALL_POSTS_QUERY = `*[_type == "article" && defined(slug.current)] | order(publishedAt desc){
  _id,
  _type,
  title,
  slug,
  "category": category->value.current,
  excerpt,
  image,
  youtubeUrl,
  publishedAt,
  body
}`;

// Fetches pinned YouTube videos for the highlights section
export const PINNED_VIDEOS_QUERY = `*[_type == "youtubeVideo" && isPinned == true] | order(publishedAt desc){
  _id,
  _type,
  title,
  slug,
  "category": category->value.current,
  excerpt,
  image,
  youtubeUrl,
  publishedAt,
  isPinned,
  pinnedLabel,
  body
}`;

// Fetches all YouTube videos for the archive feed
export const ALL_VIDEOS_QUERY = `*[_type == "youtubeVideo" && defined(youtubeUrl)] | order(publishedAt desc){
  _id,
  _type,
  title,
  slug,
  "category": category->value.current,
  excerpt,
  image,
  youtubeUrl,
  publishedAt,
  body
}`;

// Fetches all categories
export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc){
  _id,
  title,
  "value": value.current
}`;

// Fetches downloads
export const DOWNLOADS_QUERY = `*[_type == "download"] | order(level asc){
  _id,
  title,
  level,
  fileType,
  fileSize,
  fileUrl,
  "category": category->value.current,
  "categoryTitle": category->title
}`;
