import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // dev specific config
    return {
      plugins: [react()],
      root: 'dev'
    };
  }
  // build specific config
  return {
    plugins: [
      react(),
      cssInjectedByJsPlugin()
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.jsx'),
        name: 'CommitGraph',
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    }
  };
});