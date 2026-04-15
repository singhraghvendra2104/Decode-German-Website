import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ResourcesHero from "@/components/resources/ResourcesHero";
import PinnedHighlights from "@/components/resources/PinnedHighlights";
import ArchiveFeed from "@/components/resources/ArchiveFeed";
import DownloadsSection from "@/components/resources/DownloadsSection";
import YouTubeCTA from "@/components/resources/YouTubeCTA";
import ResourcesFinalCTA from "@/components/resources/ResourcesFinalCTA";
import {
  getSanityClient,
  PINNED_POSTS_QUERY,
  ALL_POSTS_QUERY,
  DOWNLOADS_QUERY,
} from "@/lib/sanity";
import type { Post, Download } from "@/lib/sanity";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Beyond the Classes | Decode German",
  description:
    "Explore our curated library of tips, cultural guides, and deep-dive videos designed to take you from textbook German to real-world fluency.",
  openGraph: {
    title: "Beyond the Classes | Decode German",
    description:
      "Language is lived, not just learned. Tips, guides, and videos for real-world German fluency.",
  },
};

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([^&?/]+)/
  );
  return match?.[1] ?? null;
}

interface YouTubeOEmbed {
  title: string;
  thumbnail_url: string;
}

async function fetchYouTubeMeta(url: string): Promise<YouTubeOEmbed | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function enrichYouTubePosts(posts: Post[]): Promise<Post[]> {
  return Promise.all(
    posts.map(async (post) => {
      if (post.category !== "youtube" || !post.youtubeUrl) return post;

      const videoId = extractYouTubeId(post.youtubeUrl);
      if (!videoId) return post;

      const needsTitle = !post.title || post.title.trim() === "";
      const needsImage = !post.image;

      if (!needsTitle && !needsImage) {
        return { ...post, youtubeThumbnail: undefined };
      }

      const meta = needsTitle ? await fetchYouTubeMeta(post.youtubeUrl) : null;

      return {
        ...post,
        title: needsTitle && meta?.title ? meta.title : post.title,
        youtubeThumbnail: needsImage
          ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          : undefined,
      };
    })
  );
}

// Fallback data when Sanity is not configured or has no content yet
const fallbackPinned: Post[] = [
  {
    _id: "pinned-1",
    _type: "post",
    title: "German Pronunciation Basics",
    slug: { current: "german-pronunciation-basics" },
    category: "youtube",
    excerpt: "Master the Umlauts and CH sounds with precision.",
    publishedAt: "2024-05-15",
    isPinned: true,
    pinnedLabel: "YouTube Pinned",
  },
  {
    _id: "pinned-2",
    _type: "post",
    title: "Akkusativ oder Dativ?",
    slug: { current: "akkusativ-oder-dativ" },
    category: "grammar",
    excerpt: "The ultimate guide to movement vs. location in the German case system.",
    publishedAt: "2024-05-10",
    isPinned: true,
    pinnedLabel: "Grammar Insight",
  },
  {
    _id: "pinned-3",
    _type: "post",
    title: "New A1 Batch Starting Soon",
    slug: { current: "new-a1-batch" },
    category: "community",
    excerpt: "Enrollment open now",
    publishedAt: "2024-05-01",
    isPinned: true,
    pinnedLabel: "Batch Updates",
  },
];

const fallbackResources: Post[] = [
  {
    _id: "res-1",
    _type: "post",
    title: 'How to master the "Genitiv" case without crying',
    slug: { current: "master-genitiv-case" },
    category: "grammar",
    excerpt: "A deep dive into the German genitive case.",
    publishedAt: "2024-05-12",
    isPinned: false,
  },
  {
    _id: "res-2",
    _type: "post",
    title: "10 False Friends in German & English",
    slug: { current: "10-false-friends" },
    category: "youtube",
    excerpt: "Words that look the same but mean different things.",
    publishedAt: "2024-05-05",
    isPinned: false,
  },
  {
    _id: "res-3",
    _type: "post",
    title: "Navigating the German 'Bürgeramt'",
    slug: { current: "navigating-buergeramt" },
    category: "life-in-germany",
    excerpt: "Practical tips for dealing with German bureaucracy.",
    publishedAt: "2024-04-28",
    isPinned: false,
  },
];

const fallbackDownloads: Download[] = [
  {
    _id: "dl-1",
    _type: "download",
    title: "German Cases Cheat Sheet",
    level: "A1-B1",
    fileType: "PDF",
    fileSize: "1.2 MB",
    category: "grammar-sheets",
  },
  {
    _id: "dl-2",
    _type: "download",
    title: "500 Core Words List",
    level: "A1",
    fileType: "PDF",
    fileSize: "3.5 MB",
    category: "vocabulary",
  },
  {
    _id: "dl-3",
    _type: "download",
    title: "Perfekt Tense Audio Drills",
    level: "A2",
    fileType: "MP3",
    fileSize: "15.0 MB",
    category: "audio-drills",
  },
  {
    _id: "dl-4",
    _type: "download",
    title: "Advanced Prepositions Guide",
    level: "B1",
    fileType: "PDF",
    fileSize: "2.1 MB",
    category: "grammar-sheets",
  },
];

async function getResourcesData() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return {
      pinnedResources: fallbackPinned,
      resources: fallbackResources,
      downloads: fallbackDownloads,
    };
  }

  try {
    const client = getSanityClient();
    const [pinnedResources, resources, downloads] = await Promise.all([
      client.fetch<Post[]>(PINNED_POSTS_QUERY),
      client.fetch<Post[]>(ALL_POSTS_QUERY),
      client.fetch<Download[]>(DOWNLOADS_QUERY),
    ]);

    const [enrichedPinned, enrichedResources] = await Promise.all([
      enrichYouTubePosts(pinnedResources?.length ? pinnedResources : fallbackPinned),
      enrichYouTubePosts(resources?.length ? resources : fallbackResources),
    ]);

    return {
      pinnedResources: enrichedPinned,
      resources: enrichedResources,
      downloads: downloads?.length ? downloads : fallbackDownloads,
    };
  } catch {
    return {
      pinnedResources: fallbackPinned,
      resources: fallbackResources,
      downloads: fallbackDownloads,
    };
  }
}

export default async function ResourcesPage() {
  const { pinnedResources, resources, downloads } = await getResourcesData();

  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-10 md:pb-16">
        <ResourcesHero />
        <PinnedHighlights pinnedResources={pinnedResources} />
        <ArchiveFeed resources={resources} />
        <DownloadsSection downloads={downloads} />
        <YouTubeCTA />
        <ResourcesFinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
