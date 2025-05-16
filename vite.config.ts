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
  define: {
    /* DUMMY JSON BASE URLL */
    VITE_DUMMY_JSON_BASEURL: `"${process.env.VITE_DUMMY_JSON_BASEURL}"`,
    /* APPWRITE CONFIGURATION */
    VITE_APPWRITE_BASEURL: `"${process.env.VITE_APPWRITE_BASEURL}"`,
    VITE_APPWRITE_PROJECT: `"${process.env.VITE_APPWRITE_PROJECT}"`,
    VITE_APPWRITE_API_KEY: `"${process.env.VITE_APPWRITE_API_KEY}"`,
    VITE_APPWRITE_DATABASE_ID: `"${process.env.VITE_APPWRITE_DATABASE_ID}"`,
    /* APPWRITE COLLECTIONS */
    VITE_APPWRITE_LOGIN_COLLECTION_ID: `"${process.env.VITE_APPWRITE_LOGIN_COLLECTION_ID}"`,
    VITE_APPWRITE_REGISTER_COLLECTION_ID: `"${process.env.VITE_APPWRITE_REGISTER_COLLECTION_ID}"`,
    VITE_APPWRITE_FORGOT_PASSWORD_COLLECTION_ID: `"${process.env.VITE_APPWRITE_FORGOT_PASSWORD_COLLECTION_ID}"`,
    /* MOCKAPI */
    VITE_MOCKAPI_URL_SECRET: `"${process.env.VITE_MOCKAPI_URL_SECRET}"`,
    VITE_MOCKAPI_API_PREFIX: `"${process.env.VITE_MOCKAPI_API_PREFIX}"`,
  },
  plugins: [react(), tsconfigPaths(), svgr(), ViteMinifyPlugin()],
  server: {
    port: 4005,
    host: true,
    watch: {
      usePolling: true
    }
  },
})
