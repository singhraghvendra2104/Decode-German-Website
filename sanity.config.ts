"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { table } from "@sanity/table";
import { schemaTypes } from "@/sanity/schemaTypes";
import deskStructure from "@/sanity/deskStructure";

export default defineConfig({
  name: "decode-german",
  title: "Decode German",
  projectId: "haa68x1l",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
    table(),
  ],
  schema: {
    types: schemaTypes,
  },
});
