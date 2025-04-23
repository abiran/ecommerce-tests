const { test, expect } = require('@playwright/test');
const { SearchByCategory } = require('../../strategies/SearchByCategory');
const { SearchPage } = require('../../pages/SearchPage');
const { HomePage } = require('../../pages/HomePage');

test('Search using strategy pattern (by category)', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchStrategy = new SearchByCategory();
  const searchPage = new SearchPage(page);

  await homePage.goto();
  await searchStrategy.search(page, 'Tablets');

  await searchPage.waitForResults();

  const productNames = await searchPage.getProductNames();
  expect(productNames.length).toBeGreaterThan(0);
});