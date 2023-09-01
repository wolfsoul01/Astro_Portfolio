/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        astro:{
          100:"#2A233D",
          200:"#4F446D"
        }
      },
    },
  },
  plugins: [],
};
