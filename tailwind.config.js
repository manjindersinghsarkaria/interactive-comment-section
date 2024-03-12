/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "576px",
        md: "992px",
        lg: "1280px",
        xl: "1400px",
        "2xl": "1920px"
      },
      colors: {
        success: {
          dark: "rgba(11, 141, 57, 1)",
          normal: "rgba(41, 163, 84, 1)",
          light: "var(--success-light)"
        },
        error: {
          dark: "rgba(202, 29, 8, 1)",
          normal: "rgba(227, 53, 32, 1)",
          light: "var(--error-light)"
        },
        warning: {
          dark: "var(--warning-dark)",
          normal: "var(--warning-normal)",
          light: "var(--warning-light)"
        },
        yellow: {
          10: "var(--yellow-10)",
          50: "var(--yellow-50)",
          400: "var(--yellow-400)",
          500: "var(--yellow-500)"
        }
      }
    }
  },
  plugins: []
};
