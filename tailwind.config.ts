import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvneu': ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 
        "Helvetica", "Arial", "Lucida Grande", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
