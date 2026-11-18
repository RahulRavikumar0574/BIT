/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bit: {
          navy: {
            DEFAULT: '#0B2545',
            dark: '#07182C',
            light: '#133E6E',
            soft: '#EEF4F9'
          },
          gold: {
            DEFAULT: '#D97706',
            light: '#F59E0B',
            dark: '#B45309',
            soft: '#FEF3C7'
          },
          maroon: {
            DEFAULT: '#881337',
            dark: '#4C0519',
            light: '#9F1239'
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 37, 69, 0.08), 0 2px 6px -1px rgba(11, 37, 69, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(11, 37, 69, 0.14), 0 4px 12px -2px rgba(11, 37, 69, 0.06)',
      }
    },
  },
  plugins: [],
}

