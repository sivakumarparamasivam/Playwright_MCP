import { test, expect } from '@playwright/test';

const BASE = 'http://leaftaps.com/opentaps';
const USER = 'democsr2';
const PASS = 'crmsfa';

test.describe('Leaftaps Create Lead', () => {
  test('Create Lead as democsr2', async ({ page }) => {
    // 1-5: Login
    await page.goto(BASE);
    await page.fill('#username', USER);
    await page.fill('#password', PASS);
    await page.click('.decorativeSubmit');

    // 6-8: Navigate to Create Lead
    // Wait for the CRM/SFA link to appear and click it
    await expect(page.getByText('CRM/SFA')).toBeVisible({ timeout: 5000 });
    await page.getByText('CRM/SFA').click();
    // Click the navbar link with role=link named 'Leads' then 'Create Lead'
    await expect(page.getByRole('link', { name: 'Leads' })).toBeVisible({ timeout: 5000 });
    await page.getByRole('link', { name: 'Leads' }).click();
    await expect(page.getByRole('link', { name: 'Create Lead' })).toBeVisible({ timeout: 5000 });
    await page.getByRole('link', { name: 'Create Lead' }).click();

    // 9-11: Fill lead details
    const company = 'Acme Automation';
    const firstName = 'Jane';
    const lastName = 'Tester';

    await page.fill('#createLeadForm_companyName', company);
    await page.fill('#createLeadForm_firstName', firstName);
    await page.fill('#createLeadForm_lastName', lastName);

    // 12: Submit
    await page.click('input[name="submitButton"]');

    // 13: Verify creation
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(firstName);
    await expect(page.locator('#viewLead_companyName_sp')).toContainText('Acme');
  });
});
