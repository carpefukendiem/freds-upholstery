import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        bone: "#f7f5f1",
        sand: "#e8e2d8",
        brass: "#b08d3f",
        deep: "#0f1a24",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
} satisfies Config;
