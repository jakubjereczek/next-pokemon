export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Suisse Intl', 'sans-serif'],
      mono: ['FK Grotesk Monospaced'],
    },
    extend: {
      screens: {
        uxl: '1366px',
        xl: '1440px', // desktop
      },
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        pill: '9999px',
      },
      colors: {
        white: '#FFFFFF',
        lightBlueGray: '#F6F6FF',
        lightBlue: '#EDF6FF',
        lightGray: '#E7E6EC',
        gray: '#D9D9D9',
        brightPurple: '#5631E8',
        darkNavy: '#0E0940',
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.375', fontWeight: '300' }],
        h2: ['2rem', { lineHeight: '1.375', fontWeight: '500' }],
        h2_min: ['1.5rem', { lineHeight: '1.5', fontWeight: '500' }],
        h3: ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        h4: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-1': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-2': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-3': ['0.75rem', { lineHeight: '1.375', fontWeight: '400' }],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-out',
        'fade-out': 'fadeOut 0.15s ease-out',
      },
    },
  },
  plugins: [],
};
