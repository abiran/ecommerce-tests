class AccountPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.accountHeader = page.locator('#content').getByRole('heading', { name: 'My Account' });
    }
  }
  
  module.exports = { AccountPage };