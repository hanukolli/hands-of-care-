import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#FBF7F1",
        ink: "#26221F",
        teal: {
          DEFAULT: "#2F6F6D",
          dark: "#1F4F4D",
          light: "#DCEDEC",
        },
        coral: {
          DEFAULT: "#D9737A",
          dark: "#B84C56",
          light: "#F6E1E3",
        },
        peach: {
          DEFAULT: "#E8935C",
          dark: "#C97539",
          light: "#FBEADC",
        },
        mint: {
          DEFAULT: "#5FC3B3",
          dark: "#3B948A",
          light: "#E1F5F1",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        script: ["Yellowtail", "cursive"],
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/></svg>')",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
