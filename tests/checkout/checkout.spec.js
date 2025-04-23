const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { SearchPage } = require('../../pages/SearchPage');
const { ProductDetailPage } = require('../../pages/ProductDetailPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');
const { RegistrationPage } = require('../../pages/RegistrationPage');
const { SearchByName } = require('../../strategies/searchByName');

test('Register, add to cart, and complete checkout', async ({ page }) => {
  const home = new HomePage(page);
  const searchPage = new SearchPage(page);
  const product = new ProductDetailPage(page);
  const checkout = new CheckoutPage(page);
  const register = new RegistrationPage(page);
  const searchStrategy = new SearchByName();

  const timestamp = Date.now();
  const user = {
    firstName: 'Checkout',
    lastName: 'User',
    email: `checkout${timestamp}@test.com`,
    phone: '1234567890',
    password: 'Password123!',
    address: '123 Test St',
    city: 'Testville',
    postcode: '12345',
    country: 'United States',
    state: 'California',
  };

  await register.goto();
  await register.register(user);

  await home.goto();
  await searchStrategy.search(page, 'Samsung Galaxy Tab 10.1');

  await searchPage.waitForResults(); // wait for products before clicking
  await page.locator('.product-thumb h4 a').first().click();
  await product.addToCart();
  await checkout.goto();
  await checkout.completeCheckout(user);

  const msg = await checkout.isSuccess();
  expect(msg).toContain('Your order has been placed!');
});
