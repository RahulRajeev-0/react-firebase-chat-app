/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Add this line to ensure Tailwind works with all your JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
