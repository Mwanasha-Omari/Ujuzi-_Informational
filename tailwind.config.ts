import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1B315B',
        'primary-amber': '#EAB707',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
};

export default config;