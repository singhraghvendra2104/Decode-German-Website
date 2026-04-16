import { defineField, defineType } from "sanity";

export const youtubeVideoType = defineType({
  name: "youtubeVideo",
  title: "YouTube Video",
  type: "document",
  fields: [
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description:
        "Paste a YouTube link — the frontend will automatically fetch the title and thumbnail.",
    }),
    defineField({
      name: "title",
      title: "Title (override)",
      type: "string",
      description: "Leave blank to auto-use the YouTube video title on the frontend.",
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
      description: "Leave blank to auto-use the YouTube thumbnail on the frontend.",
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
    prepare({ title, url, media }) {
      return {
        title: title || url || "Untitled YouTube Video",
        subtitle: url || "",
        media,
      };
    },
  },
});
