import { IProductRepository } from '../repositories/IProductRepository';
import { SalesData } from '../entities/Product';

export class GetSalesDataUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(): Promise<SalesData[]> {
    return await this.productRepository.getSalesData();
  }
}

