export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gym: { bg: '#050505', card: '#0d0d0d', border: '#1a1a1a' },
        fire: { red: '#ef233c', orange: '#f97316', yellow: '#fbbf24' }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Barlow', 'sans-serif']
      }
    }
  },
  plugins: []
}
