/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}",'"./node_modules/tw-elements-react/dist/js/**/*.js"'],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        white: '#fff',
        orange: '#ffb400',
      },
    },
    screens: {
      xs: '480px', // or use a smaller breakpoint if needed
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}
