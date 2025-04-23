class RegistrationPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('#input-firstname');
      this.lastNameInput = page.locator('#input-lastname');
      this.emailInput = page.locator('#input-email');
      this.phoneInput = page.locator('#input-telephone');
      this.passwordInput = page.locator('#input-password');
      this.passwordConfirmInput = page.locator('#input-confirm');
      this.privacyCheckbox = page.locator('input[name="agree"]');
      this.continueButton = page.locator('input[type="submit"][value="Continue"]');
      this.successHeading = page.getByText('Account Congratulations! Your')
    }
  
    async goto() {
      await this.page.goto('https://opencart.abstracta.us/index.php?route=account/register');
    }
  
    async register({ firstName, lastName, email, phone, password }) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.emailInput.fill(email);
      await this.phoneInput.fill(phone);
      await this.passwordInput.fill(password);
      await this.passwordConfirmInput.fill(password);
      await this.privacyCheckbox.check();
      await this.continueButton.click();
    }
  
    async isSuccess() {
      return this.successHeading.textContent();
    }
  }
  
  module.exports = { RegistrationPage };
  