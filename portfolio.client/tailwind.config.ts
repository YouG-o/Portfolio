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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "customBg": "linear-gradient(30deg, #C0C0C0 10%, #0864c4 40%)",
      },
      animation: {
        rotateAnimation: "rotateAnimation 3s ease-in-out infinite",
      },
      keyframes: {
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