import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dragon-img": "url('/dragon-bg.webp')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
