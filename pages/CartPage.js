class CartPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.cartLink = page.locator('#top-links a', { hasText: 'Shopping Cart' });
      this.cartProductNames = page.locator('.table-responsive .text-left a');
    }
  
    async goto() {
      await this.cartLink.first().click();
    }
  
    async getProductNames() {
      return this.cartProductNames.allTextContents();
    }
  }
  
  module.exports = { CartPage };