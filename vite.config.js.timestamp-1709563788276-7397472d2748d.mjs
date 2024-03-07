// vite.config.js
import { defineConfig } from "file:///C:/Users/ManjinderSarkaria/Documents/React%20Learning/interactive-comment-section/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ManjinderSarkaria/Documents/React%20Learning/interactive-comment-section/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/ManjinderSarkaria/Documents/React%20Learning/interactive-comment-section/node_modules/vite-plugin-static-copy/dist/index.js";
var iconsPath = "node_modules/@shoelace-style/shoelace/dist/assets/icons";
var vite_config_default = defineConfig({
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYW5qaW5kZXJTYXJrYXJpYVxcXFxEb2N1bWVudHNcXFxcUmVhY3QgTGVhcm5pbmdcXFxcaW50ZXJhY3RpdmUtY29tbWVudC1zZWN0aW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNYW5qaW5kZXJTYXJrYXJpYVxcXFxEb2N1bWVudHNcXFxcUmVhY3QgTGVhcm5pbmdcXFxcaW50ZXJhY3RpdmUtY29tbWVudC1zZWN0aW9uXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9NYW5qaW5kZXJTYXJrYXJpYS9Eb2N1bWVudHMvUmVhY3QlMjBMZWFybmluZy9pbnRlcmFjdGl2ZS1jb21tZW50LXNlY3Rpb24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcblxuY29uc3QgaWNvbnNQYXRoID0gXCJub2RlX21vZHVsZXMvQHNob2VsYWNlLXN0eWxlL3Nob2VsYWNlL2Rpc3QvYXNzZXRzL2ljb25zXCI7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9cXC9hc3NldHNcXC9pY29uc1xcLyguKykvLFxuICAgICAgICByZXBsYWNlbWVudDogYCR7aWNvbnNQYXRofS8kMWBcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogaWNvbnNQYXRoLFxuICAgICAgICAgIGRlc3Q6IFwiYXNzZXRzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gIF1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2YSxTQUFTLG9CQUFvQjtBQUMxYyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxzQkFBc0I7QUFFL0IsSUFBTSxZQUFZO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEdBQUcsU0FBUztBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
