module.exports = {
  important: true,
  purge: {
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    // These options are passed through directly to PurgeCSS
  },
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: ['gatsby-plugin-postcss'],
  future: {
    purgeLayersByDefault: true,
  },
}
