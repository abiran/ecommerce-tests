const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { RegistrationPage } = require('../../pages/RegistrationPage');
const { AccountPage } = require('../../pages/AccountPage');


test('Register and login with valid credentials', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  const timestamp = Date.now();
  const user = {
    firstName: 'Test',
    lastName: 'User',
    email: `user${timestamp}@test.com`,
    phone: '1234567890',
    password: 'Test1234!',
  };

  await registrationPage.goto();
  await registrationPage.register(user);

  await loginPage.logout();
  await loginPage.navigateToLogin();
  await loginPage.login(user.email, user.password);
  await expect(page).toHaveURL(/route=account\/account/);
  await expect(accountPage.accountHeader).toBeVisible();
  await expect(accountPage.accountHeader).toContainText('My Account');
});

test('Login with invalid credentials shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  await loginPage.login('invalid@example.com', 'wrongpassword');

  await expect(loginPage.warningAlert).toBeVisible();
  await expect(loginPage.warningAlert).toContainText('Warning: No match for E-Mail Address and/or Password.');
});
