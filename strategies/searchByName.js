const { SearchStrategy } = require('./SearchStrategy');

class SearchByName extends SearchStrategy {
  async search(page, keyword) {
    const searchInput = page.locator('input[name="search"]');
    const searchButton = page.getByRole('button', { name: '' })
    await searchInput.fill(keyword);
    await searchButton.click();
  }
}

module.exports = { SearchByName };