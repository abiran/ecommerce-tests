const { test, expect } = require('@playwright/test');
const { SearchByName } = require('../../strategies/searchByName');

test('Search using strategy pattern (by name)', async ({ page }) => {
  const searchStrategy = new SearchByName();

  await page.goto('https://opencart.abstracta.us/');
  await searchStrategy.search(page, 'MacBook');

  const results = await page.locator('.product-thumb h4 a').allTextContents();
  expect(results.length).toBeGreaterThan(0);
});