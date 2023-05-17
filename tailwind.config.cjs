/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["inter tight", "sans"],
      public: ["Inter tight", "sans-serif"],
    },

    extend: {
      colors: {
        blue: {
          950: "#633A19",
        },
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("@tailwindcss/line-clamp"),
  ],
};
