class SearchPage {
  constructor(page) {
    this.page = page;
    this.productNames = page.locator('.product-thumb h4 a');
  }

  async waitForResults() {
    await this.productNames.first().waitFor({ state: 'visible', timeout: 5000 });
  }

  async getProductNames() {
    return this.productNames.allTextContents();
  }
}

module.exports = { SearchPage };

  