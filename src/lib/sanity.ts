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

// Matches the `post` document type in your Sanity Studio
// with additional optional fields for the resources page
export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: SanityImage;
  body?: unknown[];
  // Additional fields added to the post schema for the resources page
  category?: "grammar" | "youtube" | "life-in-germany" | "community" | "resource";
  excerpt?: string;
  youtubeUrl?: string;
  isPinned?: boolean;
  pinnedLabel?: string;
}

export interface Download {
  _id: string;
  _type: "download";
  title: string;
  level: string;
  fileType: string;
  fileSize: string;
  fileUrl?: string;
  category: "grammar-sheets" | "vocabulary" | "audio-drills";
}

export interface ResourcesPageData {
  hero: {
    handwriting: string;
    heading: string;
    headingBreak: string;
    description: string;
    polaroidImage?: SanityImage;
    polaroidCaption: string;
  };
  youtubeCta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    backgroundImage?: SanityImage;
  };
  finalCta: {
    heading: string;
    description: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText: string;
    secondaryButtonUrl: string;
    polaroidImage?: SanityImage;
    handwritingText: string;
  };
}

// ─── Queries (aligned with Sanity Studio schemas) ───────────────────────────

// Fetches the singleton resourcesPage document for hero/CTA content
export const RESOURCES_PAGE_QUERY = `*[_type == "resourcesPage"][0]{
  hero {
    handwriting,
    heading,
    headingBreak,
    description,
    polaroidImage,
    polaroidCaption
  },
  youtubeCta {
    heading,
    description,
    buttonText,
    buttonUrl,
    backgroundImage
  },
  finalCta {
    heading,
    description,
    primaryButtonText,
    primaryButtonUrl,
    secondaryButtonText,
    secondaryButtonUrl,
    polaroidImage,
    handwritingText
  }
}`;

// Fetches pinned posts for the highlights section
export const PINNED_POSTS_QUERY = `*[_type == "post" && isPinned == true] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  category,
  excerpt,
  image,
  youtubeUrl,
  publishedAt,
  isPinned,
  pinnedLabel
}`;

// Fetches all posts for the archive feed (pinned posts also appear here)
export const ALL_POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
  _id,
  title,
  slug,
  category,
  excerpt,
  image,
  youtubeUrl,
  publishedAt
}`;

// Fetches downloads
export const DOWNLOADS_QUERY = `*[_type == "download"] | order(level asc){
  _id,
  title,
  level,
  fileType,
  fileSize,
  fileUrl,
  category
}`;
