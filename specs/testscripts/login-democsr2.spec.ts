import { test, expect } from '@playwright/test';

const BASE = 'http://leaftaps.com/opentaps';
const USER = 'democsr2';
const PASS = 'crmsfa';

test.describe('Leaftaps Login', () => {
  test('Login with democsr2 (happy path)', async ({ page }) => {
    // Navigate to the application
    await page.goto(BASE);

    // Enter credentials and submit
    await page.fill('#username', USER);
    await page.fill('#password', PASS);
    await page.click('.decorativeSubmit');

    // Verify successful login
    await expect(page.locator('text=CRM/SFA')).toBeVisible();
  });
});
