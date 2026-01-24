import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], browserName: 'webkit' },
    },
  ],
});
