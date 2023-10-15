import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/lib/server/tests/integration/**/*.test.ts'],
    threads: false,
    setupFiles: ['src/lib/server/tests/integration/helpers/setup.ts']
  },
  resolve: {
    alias: {
      '$lib': './src/lib',
    }
  }
})

