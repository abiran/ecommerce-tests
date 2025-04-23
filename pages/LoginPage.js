class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[type="submit"]');
    this.warningAlert = page.locator('.alert-danger');
    this.myAccountLink = page.locator('a[title="My Account"]');
    this.loginLink = page.locator('a', { hasText: 'Login' });
    this.myAccountLink = page.locator('a[title="My Account"]');
    this.loginLink = page.locator('a', { hasText: 'Login' });
    this.logoutLink = page.locator('#top-links').getByRole('link', { name: 'Logout' });
    this.continueAfterLogout = page.getByRole('link', { name: 'Continue' });
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async navigateToLogin() {
    await this.page.goto('https://opencart.abstracta.us/');
    await this.myAccountLink.click();
    await this.loginLink.click();
  }

  async logout() {
    await this.myAccountLink.click();
    await this.logoutLink.click();
    await this.continueAfterLogout.click();
  }

  async isLoggedIn() {
    await expect(this.page).toHaveURL(/route=account\/account/);
    await expect(this.page.locator('#content').getByRole('heading', { name: 'My Account' })).toContainText('My Account');
  }
}

module.exports = { LoginPage };
