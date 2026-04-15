import { defineField, defineType } from "sanity";

export const resourcesPageType = defineType({
  name: "resourcesPage",
  title: "Resources Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "handwriting", type: "string", title: "Handwriting Text" }),
        defineField({ name: "heading", type: "string", title: "Heading Line 1" }),
        defineField({ name: "headingBreak", type: "string", title: "Heading Line 2" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "polaroidImage", type: "image", title: "Polaroid Image", options: { hotspot: true } }),
        defineField({ name: "polaroidCaption", type: "string", title: "Polaroid Caption" }),
      ],
    }),
    defineField({
      name: "youtubeCta",
      title: "YouTube CTA Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "buttonText", type: "string", title: "Button Text" }),
        defineField({ name: "buttonUrl", type: "url", title: "Button URL" }),
        defineField({ name: "backgroundImage", type: "image", title: "Background Image" }),
      ],
    }),
    defineField({
      name: "finalCta",
      title: "Final CTA Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "primaryButtonText", type: "string", title: "Primary Button Text" }),
        defineField({ name: "primaryButtonUrl", type: "string", title: "Primary Button URL" }),
        defineField({ name: "secondaryButtonText", type: "string", title: "Secondary Button Text" }),
        defineField({ name: "secondaryButtonUrl", type: "string", title: "Secondary Button URL" }),
        defineField({ name: "polaroidImage", type: "image", title: "Polaroid Image", options: { hotspot: true } }),
        defineField({ name: "handwritingText", type: "string", title: "Handwriting Text" }),
      ],
    }),
  ],
});
