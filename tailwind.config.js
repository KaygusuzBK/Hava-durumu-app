/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: {
          900: "#13131A",
          800: "#16161F",
          700: "#1C1C27",
          600: "#22222F",
          500: "#3B3B54",
          400: "#7F7F98",
          300: "#ABABC4",
          200: "#BFBFD4",
          100: "#FAFAFA",
          white: "#FFFFFF",
        },
        searchBar: {
          bg: "#1E1E29",
          border: "#d1d5db",
          text: "#374151",
          popover: "#3B3B54",
        },
        Product: {
          blueLight: "#8FB2F5",
        },
      },
      fontSize: {
        "heading-lg": "32px",
        "heading-md": "24px",
        "heading-sm": "20px",
        "heading-xs": "16px",
        "text-lg": "18px",
        "text-md": "16px",
        "text-sm": "14px",
        "text-xs": "12px",
      },
      lineHeight: {
        "heading-lg": "140%",
        "heading-md": "140%",
        "heading-sm": "140%",
        "heading-xs": "140%",
        "text-lg": "140%",
        "text-md": "140%",
        "text-sm": "140%",
        "text-xs": "140%",
      },
      fontWeight: {
        "heading-lg": "700",
        "heading-md": "700",
        "heading-sm": "700",
        "heading-xs": "700",
        "text-lg": "400",
        "text-md": "400",
        "text-sm": "400",
        "text-xs": ["400", "700"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
