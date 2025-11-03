module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,tsx,md,mdx}"],
  theme: {
    container: { center: true, padding: "1.25rem" },
    extend: {
      screens: { "2xl": "1440px", "3xl": "1680px" },
      colors: {
        primary:"#007BFF", accent:"#00E6C3", text:"#111827",
        neutral:{ light:"#F4F5F7", DEFAULT:"#E5E7EB" }
      },
      boxShadow:{ card:"0 12px 36px rgba(17,24,39,.10)" },
      borderRadius:{ card:"16px" }
    }
  },
  plugins: []
};
