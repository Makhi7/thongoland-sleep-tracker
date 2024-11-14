import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    

  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pgBgColr : '#B9B4C7',
      navBgColr: "#5C5470",
      headingTxtColr: '#352F44',
      txtColr: '#FAF0E6',
      buttonTxtColr: "#5C5470",
      cardColr:"#f5f5f5",
    }
  },
  plugins: [
    daisyui,
  ],
};
export default config;
