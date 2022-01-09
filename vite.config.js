import { defineConfig } from 'vite';
import i18nResources from 'vite-plugin-i18n-resources';
import react from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    i18nResources({
      path: path.resolve(__dirname, './public/locales'),
    }),
  ],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
