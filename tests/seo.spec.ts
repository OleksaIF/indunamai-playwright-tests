
import { test, expect } from '@playwright/test';

test('basic SEO elements on homepage', async ({ page }) => {
  await page.goto('https://www.indunamai.lt/');

  // Перевірка тега <title>
  const title = await page.title();
  expect(title.length).toBeGreaterThan(10);

  // Перевірка мета-опису
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).not.toBeNull();
  expect(description!.length).toBeGreaterThan(20);

  // Перевірка тега h1
  const h1 = page.locator('h1');
  await expect(h1).toHaveCount(1);

  // ALT-теги у зображень
  const imagesWithoutAlt = await page.locator('img:not([alt])').count();
  expect(imagesWithoutAlt).toBe(0);
});
