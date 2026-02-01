import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#12324a",
          light: "#1a4a6e",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
        },
        nav: {
          DEFAULT: "#12324a",
          dark: "#0a1f2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
