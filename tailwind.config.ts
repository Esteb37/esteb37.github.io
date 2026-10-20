import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#fafafa",
          elevated: "#ffffff",
          subtle: "#f4f4f5",
        },
        border: {
          DEFAULT: "#e4e4e7",
          strong: "#d4d4d8",
        },
        ink: {
          DEFAULT: "#18181b",
          muted: "#52525b",
          subtle: "#71717a",
        },
        accent: {
          DEFAULT: "#7c3aed",
          deep: "#6d28d9",
          soft: "#f3effe",
          muted: "#e4dafd",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(24, 24, 27, 0.04), 0 12px 32px -16px rgba(24, 24, 27, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
