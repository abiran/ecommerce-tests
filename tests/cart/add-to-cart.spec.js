const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { SearchPage } = require('../../pages/SearchPage');
const { ProductDetailPage } = require('../../pages/ProductDetailPage');
const { CartPage } = require('../../pages/CartPage');
const { SearchByName } = require('../../strategies/searchByName');

test('User can add a product to cart and verify contents', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);
  const productDetail = new ProductDetailPage(page);
  const cartPage = new CartPage(page);
  const searchStrategy = new SearchByName();

  await homePage.goto();
  await searchStrategy.search(page, 'iPhone');

  await searchPage.waitForResults();
  await page.locator('.product-thumb h4 a').first().click();

  await productDetail.addToCart();
  await cartPage.goto();

  const cartItems = await cartPage.getProductNames();
  expect(cartItems.length).toBeGreaterThan(0);
  expect(cartItems[0].toLowerCase()).toContain('iphone');
});
