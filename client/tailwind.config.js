/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // HTML entry point
    "./src/**/*.{js,ts,jsx,tsx}", // JS/TS/JSX/TSX in src folder
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite React components
  ],
  theme: {
    extend: {}, // Extend the default theme
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
