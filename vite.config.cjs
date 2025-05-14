const dotenv = require('dotenv');
const react = require('@vitejs/plugin-react').default;
const tsconfigPaths = require('vite-tsconfig-paths').default;
const svgr = require("vite-plugin-svgr").default;
const { ViteMinifyPlugin } = require('vite-plugin-minify');
const { defineConfig } = require('vite');

dotenv.config();

// https://vite.dev/config/
module.exports = defineConfig({
    define: {
        /* DUMMY JSON BASE URL */
        VITE_DUMMY_JSON_BASEURL: `"${process.env.VITE_DUMMY_JSON_BASEURL}"`,
        /* APPWRITE CONFIGURATION */
        VITE_APPWRITE_BASEURL: `"${process.env.VITE_APPWRITE_BASEURL}"`,
        VITE_APPWRITE_PROJECT: `"${process.env.VITE_APPWRITE_PROJECT}"`,
        VITE_APPWRITE_API_KEY: `"${process.env.VITE_APPWRITE_API_KEY}"`,
        VITE_APPWRITE_DATABASE_ID: `"${process.env.VITE_APPWRITE_DATABASE_ID}"`,
        /* APPWRITE COLLECTIONS */
        VITE_APPWRITE_LOGIN_COLLECTION_ID: `"${process.env.VITE_APPWRITE_LOGIN_COLLECTION_ID}"`,
        VITE_APPWRITE_REGISTER_COLLECTION_ID: `"${process.env.VITE_APPWRITE_REGISTER_COLLECTION_ID}"`,
    },
    plugins: [react(), tsconfigPaths(), svgr(), ViteMinifyPlugin({})],
    server: {
        port: 4005,
        host: true,
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});