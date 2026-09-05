/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: "#3B1F63",
        "grape-deep": "#241040",
        magenta: "#FF2E88",
        cyan: "#00D9E9",
        sun: "#FFD23F",
        ink: "#1A1025",
        chalk: "#FBF5FF",
      },
      fontFamily: {
        display: ['"Bungee"', "cursive"],
        pixel: ['"Press Start 2P"', "monospace"],
        body: ['"Nunito"', "sans-serif"],
      },
      boxShadow: {
        hard: "5px 5px 0 0 #1A1025",
        "hard-sm": "3px 3px 0 0 #1A1025",
        "hard-magenta": "5px 5px 0 0 #FF2E88",
        "hard-cyan": "5px 5px 0 0 #00D9E9",
      },
      backgroundImage: {
        checker:
          "repeating-conic-gradient(#1A1025 0% 25%, transparent 0% 50%)",
      },
    },
  },
  plugins: [],
};
