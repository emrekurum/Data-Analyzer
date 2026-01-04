import { IProductRepository } from '../repositories/IProductRepository';
import { Product } from '../entities/Product';

export class AddProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    if (!product.name || product.name.trim() === '') {
      throw new Error('Product name is required');
    }
    if (product.price <= 0) {
      throw new Error('Product price must be greater than 0');
    }
    if (product.quantity <= 0) {
      throw new Error('Product quantity must be greater than 0');
    }
    if (!product.category || product.category.trim() === '') {
      throw new Error('Product category is required');
    }

    await this.productRepository.addProduct(product);
  }
}

