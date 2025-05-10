import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
import { ViteMinifyPlugin } from 'vite-plugin-minify'

dotenv.config({
  path: '.env'
})


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), ViteMinifyPlugin()],
  server: {
    port: 4005,
    host: true,
    watch: {
      usePolling: true
    }
  },
})
