import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Slug / Value",
      type: "slug",
      options: { source: "title" },
      description: "Used internally to filter articles (e.g. 'grammar', 'life-in-germany').",
    }),
  ],
  preview: {
    select: { title: "title", value: "value.current" },
    prepare({ title, value }) {
      return { title: title || "Untitled", subtitle: value || "" };
    },
  },
});
