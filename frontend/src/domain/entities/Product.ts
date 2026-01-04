export interface Product {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SalesData {
  category: string;
  total_sales: number;
}


