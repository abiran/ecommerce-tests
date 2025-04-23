class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#top-links a', { hasText: 'Checkout' });

    this.firstNameInput = page.getByRole('textbox', { name: '* First Name' })
    this.lastNameInput = page.locator('#input-payment-lastname');
    this.address1Input = page.locator('#input-payment-address-1');
    this.cityInput = page.locator('#input-payment-city');
    this.postcodeInput = page.locator('#input-payment-postcode');
    this.countrySelect = page.locator('#input-payment-country');
    this.zoneSelect = page.locator('#input-payment-zone');

    this.continueButtons = page.locator('input[type="button"][value="Continue"]');
    this.termsCheckbox = page.locator('input[name="agree"]');
    this.confirmOrderButton = page.locator('#button-confirm');
    this.successMessage = page.locator('h1', { hasText: 'Your order has been placed!' });
  }

  async goto() {
    await this.checkoutButton.click();
  }

  async completeCheckout(user) {
    // Billing address
    await this.firstNameInput.waitFor({ state: 'visible' });
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.address1Input.fill(user.address);
    await this.cityInput.fill(user.city);
    await this.postcodeInput.fill(user.postcode);
    await this.countrySelect.selectOption({ label: user.country });
    await this.zoneSelect.selectOption({ label: user.state });

    await this.continueButtons.nth(0).click(); // Billing
    await this.continueButtons.nth(1).click(); // Delivery
    await this.continueButtons.nth(2).click(); // Delivery method

    await this.termsCheckbox.check();
    await this.continueButtons.nth(3).click(); // Payment method

    await this.confirmOrderButton.click();
  }


  async isSuccess() {
    return this.successMessage.textContent();
  }
}

module.exports = { CheckoutPage };
