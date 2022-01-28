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
    extend: {
      fontFamily: {
        'sans': ['Inter','sans-serif']
      },
      colors: {
        'ninz': { 
          500: "#12afc4",
          700: "#1b2121",
          800: "#072c31",
        },
      },
      width: {
        '112': '28rem',
      },
      height: {
        '112': '28rem',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
     }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#12afc4',
          'primary-focus': '#0e98ab',
          'primary-content': '#ffffff',
          'secondary': '#e7f1f6',
          'secondary-focus': '#cce4f0',
          'secondary-content': '#2e94c5',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    require('daisyui'),
  ],
  future: {
    purgeLayersByDefault: true,
  },
}
