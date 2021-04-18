module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
        jetbrains: ["JetBrains Mono", "mono"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
