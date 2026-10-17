/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#140128",
        darkestPurple: "#190230",
        darkerPurple: "#26024a",
        cardPurple: "#1d0438",
        borderPurple: "#360866",
        neonGreen: "#c8ff00",
        neonLime: "#bfff00",
        purple: "#9860ff",
        lightPurple: "#efedf0",
        border: "rgba(152, 96, 255, 0.2)",
        input: "rgba(152, 96, 255, 0.2)",
        ring: "#c8ff00",
        background: "#140128",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#c8ff00",
          foreground: "#140128",
        },
        secondary: {
          DEFAULT: "#26024a",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff3366",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#230444",
          foreground: "#b8a9cf",
        },
        accent: {
          DEFAULT: "#9860ff",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1d0438",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        '2': '4px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '36': '36px',
        '40': '40px',
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
        pixel: ["'Silkscreen'", "'Press Start 2P'", "monospace"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [],
};
