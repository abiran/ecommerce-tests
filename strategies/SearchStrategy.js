class SearchStrategy {
    async search(page, keyword) {
      throw new Error('search() must be implemented');
    }
  }
  
  module.exports = { SearchStrategy };