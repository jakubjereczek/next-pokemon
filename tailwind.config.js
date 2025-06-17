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
      borderRadius: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        pill: '9999px',
      },
      colors: {
        background: '#f8fafc',
        foreground: '#1e293b',
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#64748b',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff',
        },
        modal: '#ffffff',
        input: '#e2e8f0',
        overlay: 'rgb(0 0 0 / 80%)',

        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#f1f1f1',
          200: '#e0e0e0',
          300: '#c4c4c4',
          400: '#9e9e9e',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#121212',
        },
        blue: {
          100: '#cce4ff',
          200: '#99c9ff',
          300: '#66a9ff',
          400: '#3387ff',
          500: '#0065ff',
          600: '#0051cc',
          700: '#003c99',
          800: '#002766',
          900: '#001533',
        },
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.375', fontWeight: '300' }],
        h2: ['1.5rem', { lineHeight: '1.375', fontWeight: '500' }],
        h3: ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        h4: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body-1': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-2': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
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
