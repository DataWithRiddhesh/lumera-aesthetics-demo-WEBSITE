/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFBF5',
          100: '#FBF3E9',
          200: '#F5E8D4',
          300: '#EFD9BC',
          400: '#E5C49E',
          500: '#D9AC7A',
        },
        champagne: {
          50: '#FBF6EE',
          100: '#F5E9D3',
          200: '#EAD2A8',
          300: '#DDBA7C',
          400: '#CFA058',
          500: '#B9893E',
          600: '#9A6E30',
          700: '#7B5626',
          800: '#5E411D',
          900: '#422D14',
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#2D2A27',
          800: '#1C1917',
          900: '#0C0A09',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(28, 25, 23, 0.08)',
        card: '0 12px 40px -16px rgba(28, 25, 23, 0.12)',
        glow: '0 0 0 1px rgba(185, 137, 62, 0.15), 0 20px 50px -20px rgba(185, 137, 62, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
