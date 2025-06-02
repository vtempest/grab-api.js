import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    svgr(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts' ],
      outDir: 'dist',
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
      entry: {
        'grab-api': resolve(__dirname, 'src/grab-api.js'),
        'icons': resolve(__dirname, 'src/icons/index.js')
      },
      
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      // Disable inlineDynamicImports for multiple formats
      output: {
        inlineDynamicImports: false
      },
      external: ['typescript']
    },
    minify: 'terser',
    sourcemap: true,
    emptyOutDir: false
  }
});
