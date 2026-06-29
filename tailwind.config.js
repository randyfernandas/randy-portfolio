/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8b5cf6",
          hover: "#7c3aed",
          light: "#a78bfa",
          dark: "#6d28d9"
        },
        accent: "#06b6d4",
        darkbg: "#0f172a",
        darkcard: "#1e293b",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        card: "0 10px 30px -10px rgba(0,0,0,0.1)",
        "card-hover": "0 20px 40px -15px rgba(139,92,246,0.3)",
      }
    },
  },
  plugins: [],
};

