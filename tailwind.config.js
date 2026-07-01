/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        // Rose Design Guideline — warm parchment palette
        parchment: "#F7F2EA",
        ink: "#33302A",
        rose: {
          DEFAULT: "#C0705E",
          soft: "#D79E90",
          tint: "#F0E0D9",
        },
        muted: "#8C8475",
        card: "#FFFDF9",
        // Remap the neutral "gray" scale to warm tones so existing
        // gray-* utility classes adopt the Rose guideline automatically.
        gray: {
          50: "#FAF7F1",
          100: "#F1E9DD",
          200: "#E6DCCD",
          300: "#D9CFBF",
          400: "#A89E8E",
          500: "#8C8475",
          600: "#6B6457",
          700: "#524B40",
          800: "#3F3A32",
          900: "#33302A",
          950: "#1C1A16",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
