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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: ["A1", "A1-B1", "A2", "B1", "B2"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fileType",
      title: "File Type",
      type: "string",
      options: { list: ["PDF", "MP3", "ZIP"] },
      validation: (rule) => rule.required(),
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
      type: "string",
      options: {
        list: [
          { title: "Grammar Sheets", value: "grammar-sheets" },
          { title: "Vocabulary Guides", value: "vocabulary" },
          { title: "Audio Drills", value: "audio-drills" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
