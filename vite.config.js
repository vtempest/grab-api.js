import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    svgr(),
    dts({
      insertTypesEntry: true,
      include: [
        'src/**/*.ts',
        'src/icons/index.ts',
        'src/icons/index.d.ts'
      ],
      outDir: 'dist',
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
        entry: {
          'grab-api': resolve(__dirname, 'src/grab-api.ts'),
          'icons': resolve(__dirname, 'src/icons/index.ts')
        },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      // Disable inlineDynamicImports for multiple formats
      output: {
        inlineDynamicImports: false
      }
    },
    minify: 'terser',
    sourcemap: true,
    emptyOutDir: false
  }
});
