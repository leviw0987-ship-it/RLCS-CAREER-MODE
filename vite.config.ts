import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// `base: './'` keeps asset URLs relative so the build works on GitHub Pages
// project sites (https://<user>.github.io/<repo>/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
