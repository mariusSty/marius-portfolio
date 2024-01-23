/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-variant": "rgb(var(--color-primary-variant) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-variant":
          "rgb(var(--color-secondary-variant) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
