export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#52a673",
          blue: "#2e6da4",
          gold: "#f5c147",
          mint: "#82c39c",
          gray: "#f8f9fa"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
