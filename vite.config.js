import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
            colors: {  
                 'primary': 'rgb(85 81 227)',
                 'secondary': '#2b2d77',
               },
          fontFamily: {
            'hero-font': ['"Playwrite DE SAS"', 'sans-serif'],
          },
        },
      },
    }),
  ],
})
