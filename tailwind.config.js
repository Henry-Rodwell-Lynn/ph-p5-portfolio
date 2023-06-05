/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "**/*.{html, js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nh': ['neue-haas-grotesk-text', 'sans-serif'],
        'nhi' :['neue-haas-grotesk-text', 'sans-serif'],
      },
      fontStyle: {
        'nhi' :['italic'],
      },

    },
  },
  plugins: [],
}