/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Disables Tailwind's default resets
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html,css}"],
  plugins: [],
};
