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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-inner': 'inset 20px 20px 40px rgba(2, 189, 146, 0.5), inset -20px -20px 40px rgba(2, 189, 146, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
