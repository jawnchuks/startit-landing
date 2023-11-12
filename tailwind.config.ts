import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Brand Colors
        primaryGreen: '#1FCC6E',
        primaryBlack: '#0F0F0F',
        primaryWhite: '#FFFFFF',
        secondaryDarkGreen: '#08382C',
        secondaryOffWhite: '#F2F2F7',
        // State Colors
        warning: '#F5BB0A',
        success: '#27AE60',
        error: '#EB5757',
        info: '#2F80ED',
        black: {
          100: '#000000',
          200: '#1D1D1D',
          300: '#282828',
        },
        white: {
          100: '#FFFFFF',
        },
        gray: {
          100: '#333333',
          200: '#4F4F4F',
          300: '#828282',
          400: '#BDBDBD',
          500: '#E0E0E0',
        },
      },
      fontSize: {
        'extra-small': '12px',
        small: '14px',
        base: '16px',
        large: '26px',
        'extra-large': '32px',
      },
      // line height
      leading: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.8',
      },
      // letter spacing
      tracking: {
        tighter: '-0.5px',
        tight: '-0.25px',
        normal: '0',
        wide: '0.25px',
        wider: '0.5px',
      },

    },
  },
  plugins: [],
}
export default config
