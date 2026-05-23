/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        brandPink: '#D53F8C',
        brandBrown: '#6b5b4f',
        cardBorder: '#e0d5c5',
        appBg: '#f5f0e6'
      },
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'],
        body: ['Carlito', 'Arial', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};
