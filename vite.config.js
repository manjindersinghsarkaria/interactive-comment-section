import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/assets\/icons\/(.+)/,
        replacement: `${iconsPath}/$1`
      }
    ]
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: iconsPath,
          dest: "assets"
        }
      ]
    })
  ]
});
