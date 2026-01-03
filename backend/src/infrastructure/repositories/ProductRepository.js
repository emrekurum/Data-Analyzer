const IProductRepository = require('../../domain/repositories/IProductRepository');
const PostgresClient = require('../database/PostgresClient');

class ProductRepository extends IProductRepository {
  constructor() {
    super();
    this.db = new PostgresClient();
  }

  async create(product) {
    const query = `
      INSERT INTO products (name, price, quantity, category, created_at, updated_at) 
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      RETURNING id, name, price, quantity, category, created_at, updated_at
    `;
    const values = [product.name, product.price, product.quantity, product.category];
    
    try {
      const result = await this.db.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }
  }

  async getSalesDataByCategory() {
    const query = `
      SELECT category, SUM(price * quantity) AS total_sales
      FROM products
      GROUP BY category
      ORDER BY total_sales DESC
    `;
    
    try {
      const result = await this.db.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching sales data:', error);
      throw new Error('Failed to fetch sales data');
    }
  }
}

module.exports = ProductRepository;

