module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "lavender-grey": "#D6D7E3",
      "indigo-dye": "#1C3E54",
      "pewter-blue": "#71A2B6",
      "blue-jeans": "#60B2E5",
      "electric-blue": "#53F4FF",
    },
    fontFamily: {
      "arsenal-bold": ["Arsenal Bold", "Bebas Neue", "Arial", "sans"],
      arsenal: ["Arsenal Regular", "Roboto", "Arial", "sans-serif"],
    },
    fontSize: {
      "2xs": ["0.75rem", "1rem"],
      xs: ["0.8125rem", "1.5rem"],
      sm: ["0.875rem", "1.375rem"],
      base: ["1rem", "1.5rem"], // 16px
      lg: ["1.125rem", "1.5rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.625rem", "2rem"],
      "4xl": ["2rem", 1],
      "5xl": ["2.375rem", "2.25rem"],
      "6xl": ["2.75rem", "2.5rem"],
      "7xl": ["3.5rem", "2.5rem"],
      "8xl": ["4.5rem", "3.375rem"],
      none: [0, 0],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
