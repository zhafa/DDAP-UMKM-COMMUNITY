/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-primary900": "#002739",
        "cust-primary800": "#053B50",
        "cust-primary700": "#164D65",
        "cust-primary600": "#25607B",
        "cust-primary500": "#326E8C",
        "cust-primary400": "#51839F",
        "cust-primary300": "#6C99B3",
        "cust-primary200": "#91B7CE",
        "cust-primary100": "#B3D6E8",
        "cust-primary50": "#D7EFFF",

        "cust-secondary900": "#004C3D",
        "cust-secondary800": "#00685A",
        "cust-secondary700": "#007869",
        "cust-secondary600": "#00887A",
        "cust-secondary500": "#009587",
        "cust-secondary400": "#00A69A",
        "cust-secondary300": "#00B7AD",
        "cust-secondary200": "#64CCC5",
        "cust-secondary100": "#A6E0DC",
        "cust-secondary50": "#DBF2F2",

        "cust-gray": "#373737",
        "cust-yellow": "#FF9900",
      },
    },
  },
  plugins: [daisyui],
};
