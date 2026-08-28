import { test, expect } from '@playwright/test';
import { getSelectedTestData } from '../utils/testData';

const testCases = getSelectedTestData();

for (const testCase of testCases) {
  test(`${testCase.jiraKey} - Create Policy`, async ({ page }) => {
    const { jiraKey, data } = testCase;

    console.log(`Executing ${jiraKey}`);
    console.log(data);

    await page.goto('/policy');

    // Replace these selectors with your application's selectors.
    await page.getByLabel('Product').selectOption(data.product);
    await page.getByLabel('Customer Type').selectOption(data.customerType);
    await page.getByLabel('Payment Type').selectOption(data.paymentType);

    await page.getByRole('button', { name: 'Create Policy' }).click();

    await expect(
      page.getByText('Policy created successfully')
    ).toBeVisible();
  });
}
