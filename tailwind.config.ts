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
      },
    },
    colors : {
      tGray : "#4B5563",
      black : "#111827",
      halfBlack : "#11182750",
      graybg : "#F8F8F8",
      white : "#ffff",
      borderC : "#E5E7EB",
      blue : "#0EA5E9"
    }
  },
  plugins: [],
};
export default config;
