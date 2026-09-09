import type { Config } from "tailwindcss";

/**
 * Tokens sampled from the live GoHighLevel site (fredsupholstery.com) on 2026-09-09.
 * CSS variables on :root:
 *   --color-lfu51py4  #52d5db   nav / review panel
 *   --color-lgjyf8x7  #53D5DA   primary CTA
 *   --color-lfu7rawu  #75dde2   lighter teal
 *   --color-lfu4powu  #979898   logo bar
 *   --color-lfu6nojd  #323232   charcoal bands / footer
 *   --color-lfu7afhb  #1a1a1a   near-black headings
 *   --red             #e93d3d   accent (underlines / names on the live site)
 *
 * Fonts loaded on the live site: Playfair Display SC (wordmark),
 * Playfair Display (headings), Poppins (nav), Montserrat (buttons), Lato (body).
 *
 * Every color in the app must go through these names. Do not hardcode hex in components.
 */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#52D5DB",
          btn: "#53D5DA",
          light: "#75DDE2",
          muted: "rgba(82, 213, 219, 0.72)",
        },
        stone: "#979898",
        charcoal: "#323232",
        ink: "#1A1A1A",
        coral: "#E93D3D",
        smoke: "#F5F5F5",
        white: "#FFFFFF",
        black: "#000000",
        // Aliases so pages not yet rebuilt still compile against the new palette.
        bone: "#FFFFFF",
        sand: "#F5F5F5",
        brass: "#52D5DB",
        deep: "#323232",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display SC", "serif"],
        heading: ["var(--font-heading)", "Playfair Display", "Georgia", "serif"],
        nav: ["var(--font-nav)", "Poppins", "sans-serif"],
        cta: ["var(--font-cta)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Lato", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.22em" }],
        display: ["clamp(2.5rem, 6vw, 4.75rem)", { lineHeight: "1.05" }],
        "heading-xl": ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.15" }],
        "heading-lg": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      maxWidth: { content: "1180px" },
      letterSpacing: {
        nav: "0.08em",
        wide: "0.22em",
      },
    },
  },
  plugins: [],
} satisfies Config;
