class GetSalesDataUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute() {
    return await this.productRepository.getSalesDataByCategory();
  }
}

module.exports = GetSalesDataUseCase;

