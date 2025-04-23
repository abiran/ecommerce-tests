class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.searchInput = page.locator('input[name="search"]');
      this.searchButton = page.getByRole('button', { name: '' })
    }
  
    async goto() {
      await this.page.goto('https://opencart.abstracta.us/');
    }
  
  }
  
  module.exports = { HomePage };
  