# 🧪 OpenCart Test Automation Framework (Playwright + JavaScript)

This project is an end-to-end UI automation test suite for the [OpenCart demo site](https://opencart.abstracta.us/), built using **Playwright** with **JavaScript**.

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/) for browser automation
- JavaScript for test logic
- Page Object Model (POM) for maintainable test structure
- Strategy Pattern for flexible product search implementations

---

## 📂 Project Structure

```
/tests
  ├─ registration/          # Register new users
  ├─ login/                 # Valid and invalid login tests
  ├─ search/                # Product search tests (by name, by category)
  ├─ cart/                  # Add-to-cart verification
  ├─ checkout/              # End-to-end checkout tests
  ├─ strategy/              # Strategy-based search test examples

/pages                      # Page Object Model classes
  ├─ HomePage.js
  ├─ LoginPage.js
  ├─ RegistrationPage.js
  ├─ SearchPage.js
  ├─ ProductDetailPage.js
  ├─ CartPage.js
  ├─ CheckoutPage.js
  └─ AccountPage.js

/strategies                # Search strategies (Strategy Pattern)
  ├─ searchByName.js
  └─ searchByCategory.js
  └─ SearchStrategy.js

playwright.config.js        # Global config (retries, screenshots, workers)
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies:

```bash
npm install
npx playwright install
```

### 2. Run all tests:

```bash
npx playwright test
```

### 3. Run a specific test:

```bash
npx playwright test tests/checkout/checkout.spec.js
```

### 4. View HTML test report:

```bash
npx playwright show-report
```

---

## 🛠️ Features

- ✅ Dynamically registers a new user per test
- ✅ Logs in using newly registered credentials (no hardcoded users)
- ✅ Implements Page Object Model (POM)
- ✅ Implements Strategy Pattern:
  - Search by product name
  - Search by category
- ✅ Validates search results, cart contents, and checkout flow
- ✅ Takes screenshots only on failure
- ✅ Configured for parallel test execution

---

## 🧪 Playwright Config Highlights

```js
module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
  },
});
```

---

## 📧 Contact

Created by **Abiran Lopez**  
GitHub: [github.com/abiran](https://github.com/abiran)  
Email: abiranlopez@gmail.com
