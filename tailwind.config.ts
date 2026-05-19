import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf6ee",
        ink: "#171411",
        gold: "#c79a4a",
        "gold-soft": "#e8c98a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        elegant: "0 30px 60px -30px rgba(23,20,17,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
