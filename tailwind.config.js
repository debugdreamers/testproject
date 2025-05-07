/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50, #f9f6f2)',
          100: 'var(--primary-100, #f1ebe0)',
          200: 'var(--primary-200, #e6d8c2)',
          300: 'var(--primary-300, #d9c5a3)',
          400: 'var(--primary-400, #ccb285)',
          500: 'var(--primary-500, #bfa066)',
          600: 'var(--primary-600, #a68b57)',
          700: 'var(--primary-700, #8c7548)',
          800: 'var(--primary-800, #725e3a)',
          900: 'var(--primary-900, #594b2e)',
        },
        secondary: {
          50: 'var(--secondary-50, #f6f3f0)',
          100: 'var(--secondary-100, #e8e0d5)',
          200: 'var(--secondary-200, #d5c3ad)',
          300: 'var(--secondary-300, #c2a686)',
          400: 'var(--secondary-400, #b08a63)',
          500: 'var(--secondary-500, #9d6e40)',
          600: 'var(--secondary-600, #885b34)',
          700: 'var(--secondary-700, #734a29)',
          800: 'var(--secondary-800, #5e3a1f)',
          900: 'var(--secondary-900, #492c16)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};