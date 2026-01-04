const Product = require('../../domain/entities/Product');

class AddProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    const product = new Product({
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity,
      category: productData.category,
    });

    product.validate();

    await this.productRepository.create(product);
    return product;
  }
}

module.exports = AddProductUseCase;


