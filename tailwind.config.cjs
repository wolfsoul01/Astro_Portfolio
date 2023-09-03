/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        astro:{
          100:"#2A233D",
          200:"#4F446D",
          300:"#B8B1E7",
          4:"E5E7EB",
          5:"F3F4F6",

        }
      },
      gradientColorStops:{
        astro:{
          100:"#2A233D",
          200:"#4F446D",
          300:"#B8B1E7",
          4:"E5E7EB",
          5:"F3F4F6",

        }
      }
    },
  },
  plugins: [],
};
