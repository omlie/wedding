module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "blue-lightest": "#DFF2F6",
      "blue-light": "#BEE3F3",
      "blue-dark": "#557077",
      "orange-accent": "#D79750",
      "pink-accent": "#E79F91",
      text: "#1E292D",
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      adelio: ["Adelio Darmanto"],
      carrois: ["Carrois Gothic"],
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
    maxHeight: {
      image: "512px",
    },
    boxShadow: {
      menu: "0 8px 8px -2px rgba(0,0,0,0.25)",
      card: "0 8px 8px 0px rgba(0,0,0,0.25)",
    },
    borderRadius: {
      none: "0",
      xs: "0.03125rem",
      sm: "0.0625rem",
      default: "0.125rem",
      lg: "0.1875rem",
      xl: "0.25rem",
      "2xl": "0.2875rem",
      "3xl": "0.3125rem",
      "4xl": "0.375rem",
      "5xl": "0.5rem",
      "6xl": "0.625rem",
      "7xl": "0.75rem",
      "8xl": "1rem",
      "9xl": "1.25rem",
      "10xl": "1.4375rem",
      "11xl": "3rem",
      "12xl": "3.125rem",
      "13xl": "3.75rem",
      "14xl": "6rem",
      full: "9999px",
    },
    zIndex: {
      100: 100,
      1000: 1000,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
