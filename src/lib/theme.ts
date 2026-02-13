import { createTheme } from "@mantine/core";

// ─── Centralized Color Palette ───────────────────────────────────────────────
export const colors = {
  primary: "#e2725b",
  primaryDark: "#c15b46",
  primaryAlt: "#c16e4a",
  background: "#fcfaf7",
  backgroundDark: "#1a1614",
  accent: "#f4ebe6",
  charcoal: "#2d2d2d",
  warmSand: "#f2ede4",
  paperWhite: "#faf9f6",
  stoneGray: "#4a4a46",
  ivory: "#fcfaf7",
} as const;

// ─── Font Families ───────────────────────────────────────────────────────────
export const fonts = {
  display: "'Lexend', sans-serif",
  serif: "'Noto Serif', serif",
  serifAlt: "'Playfair Display', serif",
  handwriting: "'La Belle Aurore', cursive",
} as const;

// ─── Mantine Theme ───────────────────────────────────────────────────────────
export const mantineTheme = createTheme({
  primaryColor: "terracotta",
  colors: {
    terracotta: [
      "#fef2ef",
      "#fce0da",
      "#f4c0b0",
      "#ec9d84",
      "#e2725b",
      "#d4604a",
      "#c15b46",
      "#a24b39",
      "#843d2f",
      "#6b3226",
    ],
  },
  fontFamily: "'Lexend', sans-serif",
  headings: {
    fontFamily: "'Noto Serif', serif",
  },
});
