/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent:    'var(--color-accent)',
        surface:   'var(--bg-surface)',
        card:      'var(--bg-card)',
        'card-hover': '#191a24',
        border:       'rgba(255,255,255,0.08)',
        'border-light':'rgba(255,255,255,0.15)',
        // Warm editorial palette (hero + navbar first, rest of site later)
        ink:    '#030303',
        cream:  '#F1EEE8',
        'cream-2': '#DEDAD4',
        stone:  '#C4BEB6',
        sand:   '#E5CBB0',
        copper: '#FF8C59',
        peach:  '#F2A67E', // hover colour for clickable names and links
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      backgroundSize: {
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
}

