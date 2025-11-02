import type { Config } from "tailwindcss";
import twElementsPlugin from "tw-elements-react/dist/plugin.cjs";
import lineClamp from '@tailwindcss/line-clamp';
import Button from "material-tailwind/react/Button";
import withMT from "material-tailwind/react/withMT"
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // include libs that generate class names at runtime:
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [twElementsPlugin],
};

export default config;
