const AddProductUseCase = require('../../application/usecases/AddProductUseCase');
const GetSalesDataUseCase = require('../../application/usecases/GetSalesDataUseCase');
const ProductRepository = require('../../infrastructure/repositories/ProductRepository');

class ProductController {
  constructor() {
    const productRepository = new ProductRepository();
    this.addProductUseCase = new AddProductUseCase(productRepository);
    this.getSalesDataUseCase = new GetSalesDataUseCase(productRepository);
  }

  addProduct = async (req, res) => {
    try {
      const product = await this.addProductUseCase.execute(req.body);
      res.status(201).json({
        success: true,
        message: 'Product added successfully',
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message || 'Error adding product',
      });
    }
  };

  getSalesData = async (req, res) => {
    try {
      const salesData = await this.getSalesDataUseCase.execute();
      res.status(200).json({
        success: true,
        data: salesData,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message || 'Error fetching sales data',
      });
    }
  };
}

module.exports = ProductController;


