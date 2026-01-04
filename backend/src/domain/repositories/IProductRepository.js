/**
 * Product Repository Interface
 * Defines the contract for product data access
 */
class IProductRepository {
  async create(product) {
    throw new Error('Method create() must be implemented');
  }

  async getSalesDataByCategory() {
    throw new Error('Method getSalesDataByCategory() must be implemented');
  }
}

module.exports = IProductRepository;


