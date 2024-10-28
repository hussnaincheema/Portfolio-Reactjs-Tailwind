import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0)" },
        },
        expandLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
        expandLine: "expandLine 2s ease forwards",
      },
      colors: {
        "dark-teal": "#074957",
      },
    },
  },
  plugins: [],
};
