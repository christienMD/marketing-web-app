import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "marketing-orange": {
          100: "#E26E23",
          200: "#E85D04",
        },
        "marketing-black-bg": "#0E0E0E",
        "marketing-gray": "#ADB5BD",
        "marketing-gray-50": "#E3D5CA",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
