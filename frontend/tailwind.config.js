/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Inter", sans-serif'], // Replace with your default sans-serif font
      serif: ['"Playfair Display", serif'], // Replace with your default serif font
      mono: ['"Fira Code", monospace'], // Replace with your default monospaced font
      alexBrush: ['"Alex Brush", cursive'], // Add your custom font
    },
  },
  plugins: [],
}

