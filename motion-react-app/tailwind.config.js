/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ['"Anton"', "sans-serif"], // Define a custom font family named 'anton'
      },
    },
  },
  plugins: [],
};
