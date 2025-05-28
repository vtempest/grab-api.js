import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      // Generate .d.ts files
      insertTypesEntry: true,
      // Include all TypeScript files
      include: ['src/**/*.ts', 'src/**/*.js'],
      // Output directory for types
      outDir: 'dist',
      // Generate separate type files
      rollupTypes: true,
      // Copy .d.ts files to output
      copyDtsFiles: true,
      // Additional configuration
      staticImport: true,
      // Ensure global types are properly exported
      compilerOptions: {
        declaration: true,
        declarationMap: true,
        emitDeclarationOnly: false
      },
      // Custom entry points for different type exports
      entryRoot: 'src',
      // Generate types for globals
      afterBuild: () => {
        console.log('TypeScript declarations generated successfully!');
      }
    })
  ],
  build: {
    lib: {
      entry: {
        // Main entry
        index: resolve(__dirname, 'src/grab-api.js'),
        // Types-only entry
        types: resolve(__dirname, 'src/index.d.ts'),
        // Globals-only entry  
        globals: resolve(__dirname, 'src/global.d.ts')
      },
      name: 'GrabAPI',
      fileName: (format, entryName) => {
        if (entryName === 'types' || entryName === 'globals') {
          return `${entryName}.d.ts`;
        }
        return `grab-api.${format}.js`;
      },
      formats: ['es', 'umd', 'cjs']
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['typescript'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].esm.js',
          globals: {}
        },
        {
          format: 'umd',
          name: 'GrabAPI',
          entryFileNames: '[name].umd.js',
          globals: {}
        },
        {
          format: 'cjs', 
          entryFileNames: '[name].cjs.js',
          globals: {}
        }
      ]
    },
    minify: 'terser',
    sourcemap: true,
    // Ensure declaration files are emitted
    emptyOutDir: true
  },
  // Resolve TypeScript files
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // Enable TypeScript processing
  esbuild: {
    // Keep names for better debugging
    keepNames: true
  }
});