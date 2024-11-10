import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      screens:{
        
        xs: {min: '300px' ,max: '567px' },
               },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"]
      },

      backgroundImage: {
        banner: "url('/banner.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
