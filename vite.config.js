import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//});

// https://vitejs.dev/config/
export default defineConfig({
   base: "/", // Ensure this is set to the root of your deployment
   plugins: [react()],
});
