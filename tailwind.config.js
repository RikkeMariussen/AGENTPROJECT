/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f2f7f2',
          100: '#e0ece0',
          200: '#c3d9c2',
          300: '#9abf99',
          400: '#6d9e6b',
          500: '#4d7f4b',
          600: '#3b643a',
          700: '#2f5030',
          800: '#273f28',
          900: '#203422',
        },
        mist: {
          50:  '#f0f5f9',
          100: '#d9e8f2',
          200: '#b3d1e5',
          300: '#7fb2d0',
          400: '#4d8fb5',
          500: '#2d6f95',
          600: '#22577a',
          700: '#1c4563',
          800: '#183851',
          900: '#142f43',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.35s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
