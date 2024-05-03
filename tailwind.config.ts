const colors = require("tailwindcss/colors");
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      lBlue: "#0C359E",
      lPink: "#EE99C2",
      lCream: "#FFE3CA",
      lWhite: "#F6F5F5",

      odsBlue: "#00173F",
      odsPurple: "#8E44AD",
      odsGray: "#F2F2F2",
      odsYellow: "#FFD700",
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
export default config;
