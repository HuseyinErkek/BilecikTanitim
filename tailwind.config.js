/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/ilceler/yenipazar.html",
              "./public/ilceler/sogut.html",
              "./public/ilceler/pazaryeri.html",
              "./public/ilceler/osmaneli.html",
              "./public/ilceler/inhisar.html",
              "./public/ilceler/golpazari.html",
              "./public/ilceler/bozuyuk.html",
              "./public/index.html",
              "./public/gezilecek_yerler.html",
              "./dist/**/*.css",
              "./public/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui'),],
    daisyui:{
      themes: false,
      darkTheme:"light",
      
    }
  }