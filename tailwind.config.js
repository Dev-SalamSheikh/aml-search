/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        sarala: ["Sarala", "sans-serif"],
      },
      colors: {
        primaryColor: "#042826",
        secondaryColor: "#EBEBEB",
        textPrimaryColor: "#042826",
        fontBlack: "#333",
        fileBasedBg: "rgba(255, 255, 255, 0.06)",
        inputBg: "rgba(255, 255, 255, 0.10)",
      },
      boxShadow: {
        cardShadow: "0px 0px 26px 0px rgba(0, 0, 0, 0.15)",
        testiShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.20)",
        tabShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.25)",
        navShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.17);",
      },
    },
  },
  plugins: [],
};
