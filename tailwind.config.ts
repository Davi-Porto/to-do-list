import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        clr: "rgb(var(--color))",
        primary: "rgb(var(--primary))",
        check: "rgb(var(--check))",
      },
    },
  },
  plugins: [],
} satisfies Config;
