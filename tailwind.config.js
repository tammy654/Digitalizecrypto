/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "linear-blue": "var(----bg_color_2)",
      },
    },
  },
  plugins: [],
};
