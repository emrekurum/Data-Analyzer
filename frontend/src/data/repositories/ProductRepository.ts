import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { Product, SalesData } from '../../domain/entities/Product';
import { ApiClient } from '../api/ApiClient';

export class ProductRepository implements IProductRepository {
  constructor(private apiClient: ApiClient) {}

  async addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> {
    await this.apiClient.post('/add-product', product);
  }

  async getSalesData(): Promise<SalesData[]> {
    const response = await this.apiClient.get<SalesData[]>('/get-sales-data');
    return response;
  }
}


