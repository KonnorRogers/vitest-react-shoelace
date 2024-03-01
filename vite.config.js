import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Comment out "browser" and uncomment this and watch tests fail.
    // environment: 'jsdom',
    browser: {
      enabled: true,
      name: 'chrome', // browser name is required
    },
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
  }
})
