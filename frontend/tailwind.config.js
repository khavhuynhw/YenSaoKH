/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: "#d4af37",
          dark: "#1a1a2e",
          blue: "#16213e",
        },
        accent: {
          blue: "#0f3460",
          "light-gold": "#f4e4a6",
          cream: "#faf8f3",
        },
        text: {
          dark: "#2c2c2c",
          light: "#666666",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
