import { defineField, defineType, defineArrayMember } from "sanity";
import PasteTableInput from "../components/PasteTableInput";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
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
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
      description: "Optional — attach a YouTube video to this article.",
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
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              },
              {
                name: "color",
                type: "object",
                title: "Text Color",
                fields: [
                  defineField({
                    name: "value",
                    type: "string",
                    title: "Color",
                    options: {
                      list: [
                        { title: "Coral", value: "#FF803D" },
                        { title: "Teal", value: "#2d8a80" },
                        { title: "Violet", value: "#5a5ab8" },
                        { title: "Amber", value: "#a07030" },
                        { title: "Red", value: "#dc3c3c" },
                        { title: "Green", value: "#2da87a" },
                        { title: "Muted Grey", value: "#8a9ea2" },
                      ],
                    },
                  }),
                ],
              },
              {
                name: "highlight",
                type: "object",
                title: "Highlight",
                fields: [
                  defineField({
                    name: "color",
                    type: "string",
                    title: "Highlight Color",
                    initialValue: "#FFF3CD",
                    options: {
                      list: [
                        { title: "Yellow", value: "#FFF3CD" },
                        { title: "Green", value: "#D4EDDA" },
                        { title: "Blue", value: "#D1ECF1" },
                        { title: "Pink", value: "#F8D7DA" },
                        { title: "Coral Light", value: "#FFE8DE" },
                      ],
                    },
                  }),
                ],
              },
            ],
          },
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        }),
        defineArrayMember({
          type: "object",
          name: "tableBlock",
          title: "Table",
          components: { input: PasteTableInput },
          fields: [
            defineField({
              name: "caption",
              type: "string",
              title: "Table Caption",
            }),
            defineField({
              name: "table",
              type: "table",
              title: "Table",
            }),
          ],
          preview: {
            select: { caption: "caption" },
            prepare({ caption }) {
              return { title: `Table: ${caption || "..."}` };
            },
          },
        }),
        defineArrayMember({
          type: "object",
          name: "germanEnglishBlock",
          title: "German / English Block",
          fields: [
            defineField({ name: "german", type: "text", title: "German Text", rows: 3 }),
            defineField({ name: "english", type: "text", title: "English Translation", rows: 3 }),
          ],
          preview: {
            select: { german: "german" },
            prepare({ german }) {
              return { title: `DE/EN: ${german || "..."}` };
            },
          },
        }),
        defineArrayMember({
          type: "object",
          name: "tipBlock",
          title: "Tip / Highlight Block",
          fields: [
            defineField({ name: "text", type: "text", title: "Tip Text", rows: 3 }),
            defineField({
              name: "variant",
              type: "string",
              title: "Variant",
              initialValue: "tip",
              options: {
                list: [
                  { title: "Tip", value: "tip" },
                  { title: "Warning", value: "warning" },
                  { title: "Note", value: "note" },
                ],
              },
            }),
          ],
          preview: {
            select: { text: "text", variant: "variant" },
            prepare({ text, variant }) {
              return { title: `${(variant || "tip").toUpperCase()}: ${text || "..."}` };
            },
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
            }),
            defineField({
              name: "caption",
              type: "string",
              title: "Caption",
            }),
          ],
        }),
        defineArrayMember({
          type: "object",
          name: "audioBlock",
          title: "Audio Block",
          fields: [
            defineField({ name: "title", type: "string", title: "Audio Title" }),
            defineField({ name: "url", type: "url", title: "Audio URL (Google Drive / direct link)" }),
          ],
          preview: {
            select: { title: "title" },
            prepare({ title }) {
              return { title: `Audio: ${title || "..."}` };
            },
          },
        }),
        defineArrayMember({
          type: "object",
          name: "videoBlock",
          title: "Video Embed",
          fields: [
            defineField({ name: "url", type: "url", title: "YouTube URL" }),
            defineField({ name: "caption", type: "string", title: "Caption" }),
          ],
          preview: {
            select: { caption: "caption", url: "url" },
            prepare({ caption, url }) {
              return { title: `Video: ${caption || url || "..."}` };
            },
          },
        }),
      ],
    }),
  ],
});
