import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts'],
      outDir: 'dist',
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/grab-api.js'),
      name: 'GrabAPI',
      fileName: (format) => `grab-api.${format}.js`,
      formats: ['es', 'umd', 'cjs']
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
    emptyOutDir: true
  }
});
