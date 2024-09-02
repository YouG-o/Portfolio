
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(315deg, #043a6b 3%, #0864c4 38%, #0a74d9 68%, #043a6b 98%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "customBg": "linear-gradient(30deg, #C0C0C0 10%, #0864c4 40%)",
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        rotateAnimation: "rotateAnimation 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        rotateAnimation: {
          "0%": { transform: "rotate(0) scale(1)" },
          "50%": { transform: "rotate(120deg) scale(0)" },
          "70%": { transform: "rotate(-120deg) scale(0)" },
          "100%": { transform: "rotate(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;