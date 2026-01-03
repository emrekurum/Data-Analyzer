class Product {
  constructor({ id, name, price, quantity, category, createdAt, updatedAt }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  validate() {
    if (!this.name || this.name.trim() === '') {
      throw new Error('Product name is required');
    }
    if (this.price <= 0) {
      throw new Error('Product price must be greater than 0');
    }
    if (this.quantity <= 0) {
      throw new Error('Product quantity must be greater than 0');
    }
    if (!this.category || this.category.trim() === '') {
      throw new Error('Product category is required');
    }
  }
}

module.exports = Product;

