module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        light_black: "#1F1F1F",
        light_gray: "#CBCBCB",
        dark_gray: "#636363",
        white: "#FFF",
      },
      fontSize: {
        mili: "12px",
        xsmall: "13px",
        small: "14px",
        medium: "18px",
        large: "22px",
        xlarge: "32px",
      },
      lineHeight: {
        small_lh: "1.2222em",
        medium_lh: "1.09094em",
        large_lh: "1.07682em",
      },
      fontWeight: {
        light: "200",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  variants: {},
  plugins: [],
};
