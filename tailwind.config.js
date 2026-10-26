/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette
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
    },
  },
  plugins: [],
}

