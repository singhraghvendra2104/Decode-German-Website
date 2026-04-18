import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Image from "@/components/ui/ImageWithSkeleton";
import ArticleBody from "@/components/resources/ArticleBody";
import {
  getSanityClient,
  urlFor,
  ARTICLE_BY_SLUG_QUERY,
  ARTICLE_SLUGS_QUERY,
} from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import { siteConfig } from "@/lib/constants";

export const revalidate = 60;

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  try {
    const client = getSanityClient();
    const slugs = await client.fetch<{ slug: string }[]>(ARTICLE_SLUGS_QUERY);
    return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

async function fetchPost(slug: string): Promise<Post | null> {
  try {
    const client = getSanityClient();
    return await client.fetch<Post | null>(ARTICLE_BY_SLUG_QUERY, { slug });
  } catch {
    return null;
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) {
    return { title: "Article Not Found" };
  }

  const description =
    post.excerpt ||
    "Deep-dive article on German language and culture, by Decode German.";
  const imageUrl = post.image
    ? urlFor(post.image).width(1200).height(630).url()
    : `${siteConfig.url}/og-image.png`;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/beyond-classes/${slug}` },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `${siteConfig.url}/beyond-classes/${slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) notFound();

  const categoryLabel = post.categoryTitle || post.category;

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-10 md:py-16 text-charcoal">
        <nav className="mb-8 text-[11px] uppercase tracking-widest">
          <Link
            href="/beyond-classes"
            className="text-gray-500 hover:text-primary transition-colors"
          >
            ← Beyond Classes
          </Link>
        </nav>

        <header className="mb-8 md:mb-10">
          {categoryLabel && (
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              {categoryLabel}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-[var(--font-serif)] italic font-bold leading-tight">
            {post.title}
          </h1>
          {post.publishedAt && (
            <p className="mt-4 text-sm text-gray-500">
              Published {formatDate(post.publishedAt)}
            </p>
          )}
          {post.excerpt && (
            <p className="mt-6 text-lg text-gray-700 leading-relaxed italic">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.image && (
          <div className="relative w-full aspect-[2/1] mb-10 overflow-hidden">
            <Image
              src={urlFor(post.image).width(1200).height(600).url()}
              alt={post.image.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <article>
          {post.body && post.body.length > 0 ? (
            <ArticleBody body={post.body} />
          ) : (
            <p className="text-gray-400 italic">
              This article has no content yet.
            </p>
          )}
        </article>

        <div className="mt-14 pt-8 border-t border-gray-200">
          <Link
            href="/beyond-classes"
            className="inline-flex items-center text-[11px] uppercase tracking-widest font-bold text-primary hover:opacity-80 transition-opacity"
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
