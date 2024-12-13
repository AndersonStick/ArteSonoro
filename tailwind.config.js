/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#f29325',       // Color azul main
        'custom-hover-blue': '#007172', // Color al tener el mouse encima de un boton azul
        'custom-gris-uno': '#7c7c7c', // Gris 
        'custom-gris-dos': '#84847c', // Gris 2

      }
    },
  },
  plugins: [],
}

