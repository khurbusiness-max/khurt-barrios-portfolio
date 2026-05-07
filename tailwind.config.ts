import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        gold: "#FFC400",
        ink: "#0B0B0B"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Impact", "Arial Narrow", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 35px rgba(255, 196, 0, 0.28)",
        "gold-soft": "0 0 80px rgba(255, 196, 0, 0.16)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle, rgba(255,196,0,0.28), transparent 45%)",
        "gold-line": "linear-gradient(90deg, transparent, rgba(255,196,0,0.95), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
