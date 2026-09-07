/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF8F4',
          100: '#F4EFE6',
          200: '#EAE2D3',
          300: '#DDD2BF',
          400: '#C7B9A0',
          800: '#26231E',
          900: '#1A1814',
          950: '#0F0E0B',
        },
        gold: {
          50: '#FCF8EE',
          100: '#F7EED4',
          200: '#EDDBA9',
          300: '#DEC27B',
          400: '#CFA854',
          500: '#B89038', // Classic Antique Gold
          600: '#9E7628',
          700: '#7E5B1D',
          800: '#5F4315',
          900: '#432E0E',
        },
        ink: {
          50: '#F6F5F4',
          100: '#E5E3E0',
          200: '#C9C5BF',
          300: '#A8A29A',
          400: '#7A7369',
          500: '#524C44',
          600: '#3D3730',
          700: '#2A2520',
          800: '#1C1814',
          900: '#120F0C', // Deep Editorial Black
          950: '#0A0806', // True Obsidian Ink
        },
        accent: {
          gold: '#C5A059',
          lightgold: '#D8B572',
          bronze: '#8C6828',
          champagne: '#E8D4A8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        malayalam: ['"Noto Serif Malayalam"', '"Manjari"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 4px 20px -2px rgba(18, 15, 12, 0.08), 0 2px 6px -1px rgba(184, 144, 56, 0.12)',
        'magazine': '0 25px 50px -12px rgba(10, 8, 6, 0.45)',
        'gold-glow': '0 0 30px rgba(197, 160, 89, 0.35)',
        'deep': '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
      }
    },
  },
  plugins: [],
}
