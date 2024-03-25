/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        searchBar: {
          bg: "#1E1E29",
          border: "#d1d5db",
          text: "#374151",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
