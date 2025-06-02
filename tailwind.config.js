/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: {
    strategy: 'class', // Usamos clases en lugar de prefers-color-scheme
    storage: 'theme', // Clave para localStorage
  },
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  // ... resto de tu configuración
}
