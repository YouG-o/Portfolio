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
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        wave: 'wave 10s -3s linear infinite',
        waveReverse: 'wave 18s linear reverse infinite',
        waveReverseDelayed: 'wave 20s -1s reverse infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '100%': { 'background-position': '0% 0%' },
        },
        wave: {
          '2%': { transform: 'translateX(1)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;