import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/grab-api.js'),
      name: 'grab-api',
      fileName: (format) => `grab-api.${format}.js`
    },
    rollupOptions: {
      output: {
        globals: {}
      }
    },
    minify: 'terser', // or 'esbuild' for faster builds
    sourcemap: true
  }
});