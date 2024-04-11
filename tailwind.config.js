import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./app.js"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter", "sunset"],
    darkTheme: "sunset",
  },
  plugins: [daisyui],
}

