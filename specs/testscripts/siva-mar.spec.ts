import { test, expect } from '@playwright/test';

const BASE = 'http://leaftaps.com/opentaps';
const USER = '';
const PASS = '';

test.describe('Leaftaps Create Lead', () => {
  test('Create Lead as siva-mar', async ({ page }) => {
    // 1. Launch the browser (handled by Playwright)
    // 2. Navigate to http://leaftaps.com/opentaps
    await page.goto(BASE);

    // 3. Enter the username
    await page.fill('#username', USER);

    // 4. Enter the password
    await page.fill('#password', PASS);

    // 5. Click Login
    await page.click('.decorativeSubmit');

    // 6. Click CRM/SFA
    await expect(page.getByText('CRM/SFA')).toBeVisible({ timeout: 5000 });
    await page.getByText('CRM/SFA').click();

    // 7. Click Leads
    await expect(page.getByRole('link', { name: 'Leads' })).toBeVisible({ timeout: 5000 });
    await page.getByRole('link', { name: 'Leads' }).click();

    // 8. Click Create Lead
    await expect(page.getByRole('link', { name: 'Create Lead' })).toBeVisible({ timeout: 5000 });
    await page.getByRole('link', { name: 'Create Lead' }).click();

    // 9. Enter Company Name
    const company = 'TechTrends Inc';
    await page.fill('#createLeadForm_companyName', company);

    // 10. Enter First Name
    const firstName = 'Siva';
    await page.fill('#createLeadForm_firstName', firstName);

    // 11. Enter Last Name
    const lastName = 'Mar';
    await page.fill('#createLeadForm_lastName', lastName);

    // 12. Click Create Lead button
    await page.click('input[name="submitButton"]');

    // 13. Verify the Lead is created
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(firstName);
    await expect(page.locator('#viewLead_companyName_sp')).toContainText('TechTrends');

    // 14. Close the browser (handled by Playwright)
  });
});