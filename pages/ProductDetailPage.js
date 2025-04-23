class ProductDetailPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('#button-cart');
      this.successAlert = page.locator('.alert-success');
    }
  
    async addToCart() {
      await this.addToCartButton.click();
      await this.successAlert.waitFor({ state: 'visible' });
    }
  }
  
  module.exports = { ProductDetailPage };
  