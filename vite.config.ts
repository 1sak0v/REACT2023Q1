/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), istanbul({ cypress: true, requireEnv: false })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      include: ['**/*.{jsx,tsx}'],
      exclude: ['src/entry-client.tsx', 'src/entry-server.tsx'],
    },
  },
});
