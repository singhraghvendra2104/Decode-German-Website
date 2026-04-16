import { defineField, defineType } from "sanity";

export const downloadType = defineType({
  name: "download",
  title: "Download",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: ["A1", "A1-B1", "A2", "B1", "B2"],
      },
    }),
    defineField({
      name: "fileType",
      title: "File Type",
      type: "string",
      options: { list: ["PDF", "MP3", "ZIP"] },
    }),
    defineField({
      name: "fileSize",
      title: "File Size",
      type: "string",
    }),
    defineField({
      name: "fileUrl",
      title: "File URL",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description:
        "Pick an existing category or create a new one — categories are shared with articles.",
    }),
  ],
});
