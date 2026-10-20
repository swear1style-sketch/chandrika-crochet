/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F9F5EE',
          200: '#F2E9DD',
          300: '#E7D8C5',
          400: '#D5C0A5',
        },
        cabin: {
          900: '#26150C',
          800: '#3D2415',
          700: '#5A3721',
          600: '#7B4C2F',
        },
        moss: {
          900: '#1B2A1E',
          800: '#263C2B',
          700: '#35533C',
          600: '#476E51',
          100: '#E7EFE8',
        },
        amberGold: {
          900: '#754314',
          700: '#9E5B26',
          600: '#C27D38',
          500: '#D99243',
          400: '#EAB069',
          100: '#FDF3E7',
        },
        antiqueGold: {
          DEFAULT: '#B89758',
          light: '#D4B97F',
          dark: '#8C6F35',
        },
        yarnStone: {
          600: '#57524A',
          400: '#8A847B',
          200: '#CDC7BD',
          100: '#EAE6DF',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'artisan': '0 10px 30px -10px rgba(61, 36, 21, 0.08), 0 4px 12px -2px rgba(61, 36, 21, 0.04)',
        'artisan-hover': '0 20px 40px -15px rgba(61, 36, 21, 0.15), 0 8px 20px -4px rgba(61, 36, 21, 0.06)',
        'vintage-frame': 'inset 0 0 0 1px rgba(184, 151, 88, 0.4), 0 12px 32px rgba(38, 21, 12, 0.12)',
      },
    },
  },
  plugins: [],
}
