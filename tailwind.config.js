/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '568px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1285px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1336px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1576px'
    }, 
    colors: {
      bgFrom:"#083344",
      bgTo:"#cffafe",
      bgNavbar:"#0891b2",
      textFrom:"#eff6ff",
      textTo:"#67e8f9",
      textColorJob:"#164e63",
      buttonTo:"#1d356f",
      buttonFrom:"#3a7ff2",
      buttonText:"#ffff",
      logoto:"#1e40af",
      transparent:"#ffffff00",
      black:"#000"
    }
  },
  plugins: [],
}

