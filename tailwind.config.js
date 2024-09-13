import { nextui } from "@nextui-org/theme";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#D46868",
        "violetgradient": "#FF1CF7",
        "blueprimary": "#122659",
        "yellowprimary": "#FFF0C7",
        "yellowsecondary": "#FFFBF0"
      },
      backgroundImage: {
        "violettogradient": "linear-gradient(to right, #FF1CF7, #b249f8)"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({})
  ]
};
