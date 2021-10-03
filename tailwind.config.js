module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lindsay: "rgb(112,36,89)",
      },
    },
  },
};
