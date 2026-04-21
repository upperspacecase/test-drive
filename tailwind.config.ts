import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./remotion/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F1EA",
        ink: "#111112",
        panel: "#35343A",
        "panel-line": "#4A484F",
        rust: "#B4552D",
        mute: "#6C6760",
        "mute-light": "#B8B3AC",
      },
      fontFamily: {
        sans: ["'Inter Tight'", "Inter", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
