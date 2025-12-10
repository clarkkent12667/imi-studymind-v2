import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#260448',
          50: '#e5e0f5',
          100: '#d4c9eb',
          200: '#b399f5',
          300: '#9266dd',
          400: '#7048b3',
          500: '#5636ab',
          600: '#260448',
          700: '#1f0339',
          800: '#18022a',
          900: '#11011b',
          950: '#0a010c',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#5636ab',
          50: '#e5e0f5',
          100: '#d4c9eb',
          200: '#b399f5',
          300: '#9266dd',
          400: '#7048b3',
          500: '#5636ab',
          600: '#3f2880',
          700: '#2d1c5c',
          800: '#1b1138',
          900: '#090514',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ffab01',
          50: '#fff9e6',
          100: '#ffedbb',
          200: '#ffe090',
          300: '#ffd465',
          400: '#ffc73a',
          500: '#ffab01',
          600: '#cc8901',
          700: '#996701',
          800: '#664401',
          900: '#332200',
          foreground: '#000000',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config

