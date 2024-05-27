/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      content: {
        empty: '""',
        star: '"★"',
        // Add more custom content values as needed
      },
      colors: {
        // Define your custom accent colors
        accent: {
          DEFAULT: "#2563eb", // default accent color
          blue: "#2563eb",
          red: "#ef4444",
          green: "#10b981",
          yellow: "#f59e0b",
          // add more colors as needed
        },
      },
    },
  },
  plugins: [],
};
