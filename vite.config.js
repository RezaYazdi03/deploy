import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'vite-plugin-tailwind';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  base: process.env.VITE_BASE_PATH || "/deploy",
})
