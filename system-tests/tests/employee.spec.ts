import { test, expect, type Page } from '@playwright/test';
import { createFullName, createJobTitle } from '../util/faker-data';

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
});

test.describe('employee application functionality', () => {

  test('should add a new employee', async ({ page }) => {
  await page.getByRole('button', { name: 'Add a New Employee' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill(createFullName());
  await page.getByPlaceholder('Name').press('Tab');
  await page.getByPlaceholder('Position').fill(createJobTitle());
  await page.getByText('Junior').click();
    });
  }
);

