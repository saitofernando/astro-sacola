/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(0, 126, 204)",
        customSecondary: "rgb(0, 146, 236)",
        customOrange: "#F59B19",
        customDarkBg1: "rgb(0, 31, 51)",
        customDarkBg2: "rgb(0, 40, 65)",
        customDarkBg3: "rgb(0, 47, 77)",
        customDarkBg3Hover: "rgb(0, 50, 80)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "#FFFFFF98",
        customDarkBgTransparent: "rgb(0, 31, 51, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
