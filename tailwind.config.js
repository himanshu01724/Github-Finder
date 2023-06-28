module.exports = {
  
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
 },
  variants: {
    extend: {},
  },
  plugins: [require(
    'daisyui'
  )],
}
