import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  experimental: {
    optimizeUniversalDefaults: true
  },
  darkMode: "class",
  theme: {
    /** Define Screen Resolution */
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      /** Define Custom Spacing */
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },
      /** Define Custom Colors */
      colors: {
        primary: '#222E5E',
        secondary: '#2D5296',
        accent: '#F67A31',
        alt: '#BFBFBF',
        alt1: '#E2E2E2',
        alt2: '#EFEFEF',
      },
      /** Define Custom Font Family */
      fontFamily: {
        inherit: 'inherit',
        default: ['Poppins', 'system-ui'],
      },
      /** Define Custom Font Size */
      fontSize: {
        inherit: 'inherit'
      },
      /** Define Custom Line Height */
      lineHeight: {
        inherit: 'inherit'
      },
    },
  },
  corePlugins: {
    container: false,
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    rotate: false,
  }
};
export default config;
