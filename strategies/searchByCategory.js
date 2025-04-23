class SearchByCategory {
    async search(page, categoryName) {
      const categoryLink = page.locator('#menu .nav > li > a', { hasText: categoryName });
      await categoryLink.hover();
  
      const showAllLink = page.locator('a', { hasText: `Show All ${categoryName}` });
      if (await showAllLink.isVisible()) {
        await showAllLink.click();
      } else {
        await categoryLink.click();
      }
    }
  }
  
  module.exports = { SearchByCategory };