import { test, expect } from '@playwright/test';

test('search keptuvė and check results', async ({ page }) => {
  await page.goto('https://www.indunamai.lt/');

  await page.getByRole('textbox', { name: 'Paieška' }).click();
  await page.getByRole('textbox', { name: 'Paieška' }).fill('keptuvė');
  await page.getByRole('textbox', { name: 'Paieška' }).press('Enter');

  // Чекаємо появи товарів
  const results = page.locator('.product');
  await expect(results.first()).toBeVisible();
});
