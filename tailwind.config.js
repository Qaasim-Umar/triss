/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "#FF9E5E",
        dark: "#0a0a0a",
        surface: "#141414",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '100%': { transform: 'translateY(50px) scale(1.1)' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
