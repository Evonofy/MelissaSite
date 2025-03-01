/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#FF3366",
          base: "#570F22",
          dark: "#410B19",
          darkest: "#2B0811",
        },
        primary: {
          light: "#D1AA94",
          base: "#8D5A3D",
          dark: "#6B442E",
          darkest: "#472D1F",
        },
        dark: {
          title: "#F1F5F9",
          paragraph: "#CBD5E1",
          fill: "#0F172A",
          foregroundFill: "#1E293B",
          navbarFill: "#334155",
          footerFill: "#334155",
        },
        light: {
          title: "#1E293B",
          paragraph: "#475569",
          fill: "#E9E9E9",
          foregroundFill: "#F1F5F9",
          navbarFill: "#F8FAFC",
          footerFill: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ["Marcellus", "Arial", "sans-serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
