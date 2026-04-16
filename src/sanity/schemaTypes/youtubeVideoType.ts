import React from "react";
import { defineField, defineType } from "sanity";
import YouTubeUrlInput from "../components/YouTubeUrlInput";

export const youtubeVideoType = defineType({
  name: "youtubeVideo",
  title: "YouTube Video",
  type: "document",
  fields: [
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description: "Paste a YouTube link — title and thumbnail will be fetched automatically.",
      components: { input: YouTubeUrlInput },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Auto-filled from YouTube. Edit to override.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "image",
      title: "Cover Image (override)",
      type: "image",
      options: { hotspot: true },
      description: "Leave blank to use the YouTube thumbnail on the frontend.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "isPinned",
      title: "Pin to Highlights",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "pinnedLabel",
      title: "Pinned Label",
      type: "string",
      hidden: ({ document }) => !document?.isPinned,
    }),
    defineField({
      name: "body",
      title: "Body (optional notes / description)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", url: "youtubeUrl", media: "image" },
    prepare({ title, url }) {
      const videoId = url ? extractVideoIdFromUrl(url) : null;
      const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        : undefined;

      return {
        title: title || url || "Untitled YouTube Video",
        subtitle: url || "",
        media: thumbnailUrl
          ? React.createElement("img", {
              src: thumbnailUrl,
              style: { width: "100%", height: "100%", objectFit: "cover" },
            })
          : undefined,
      };
    },
  },
});

function extractVideoIdFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {
    /* */
  }
  return null;
}
