import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      root: 'dev'
    };
  }
  return {
    plugins: [
      react({
        jsxRuntime: 'classic', // Use classic JSX transform
      }),
      cssInjectedByJsPlugin(),
    ],
    build: {
      lib: {
        watch: {},
        entry: resolve(__dirname, 'src/index.js'),
        name: "ReactGithubDots",
        formats: ['es', 'umd'],
        fileName: (format) => `index.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          },
          exports: 'named',
          format: 'umd',
          inlineDynamicImports: true
        }
      },
      commonjsOptions: {
        include: [/node_modules/],
        requireReturnsDefault: 'auto'
      }
    },
    resolve: {
      alias: {
        react: resolve(__dirname, './node_modules/react')
      }
    }
  };
});