import { Product, SalesData } from '../entities/Product';

export interface IProductRepository {
  addProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<void>;
  getSalesData(): Promise<SalesData[]>;
}

