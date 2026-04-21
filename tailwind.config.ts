import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./remotion/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F4EF",
        ink: "#111111",
        rust: "#B4552D",
        mute: "#6B6560",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Fraunces", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};

export default config;
