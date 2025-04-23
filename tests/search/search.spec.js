const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { SearchPage } = require('../../pages/SearchPage');
const { SearchByName } = require('../../strategies/searchByName');

test('search by name using strategy pattern', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const searchStrategy = new SearchByName();

  await homePage.goto();
  await searchStrategy.search(page, 'MacBook');

  const productNames = await searchPage.getProductNames();
  expect(productNames.length).toBeGreaterThan(0);
  for (const name of productNames) {
    expect(name.toLowerCase()).toContain('macbook');
  }
});
