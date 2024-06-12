import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({ routesDirectory: 'src/pages' }),
    svgr(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
});
