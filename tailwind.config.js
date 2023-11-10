/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        lightmode: {
        
"primary": "#8cffda",
        
"secondary": "#8447ff",
        
"accent": "#d972ff",
        
"neutral": "#2a323c",
        
"base-100": "#1d232a",
        
"info": "#3abff8",
        
"success": "#36d399",
        
"warning": "#fbbd23",
        
"error": "#f87272",

"background" : "ffffe8",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
