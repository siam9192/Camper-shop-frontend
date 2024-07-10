/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors:{
        primary_color:"#370D7B",
        secondary_color:"#5D80F0",
        button_color:"#27104e",
        info_color:"#3DEFC0"
      },
      fontFamily:{
        jakarta:'"Plus Jakarta Sans", sans-serif'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),
  ],
}

