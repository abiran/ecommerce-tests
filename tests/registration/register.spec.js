const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../../pages/RegistrationPage');

test('User can register with valid details', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  const timestamp = Date.now();
  const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: `user${timestamp}@test.com`,
    phone: '1234567890',
    password: 'Test1234!',
  };

  await registrationPage.goto();
  await registrationPage.register(testUser);

  const heading = await registrationPage.isSuccess();
  expect(heading).toContain('Your new account has been successfully created!');
});
