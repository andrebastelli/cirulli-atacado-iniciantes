import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf6ee",
        ink: "#171411",
        gold: "#00aec2",
        "primary-soft": "#6fd9e5",
      },
      fontFamily: {
        sans: ["Monteserrat"],
        display: ["Monteserrat"],
      },
      boxShadow: {
        elegant: "0 30px 60px -30px rgba(23,20,17,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
