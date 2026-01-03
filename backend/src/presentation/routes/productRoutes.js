const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();
const productController = new ProductController();

router.post('/add-product', productController.addProduct);
router.get('/get-sales-data', productController.getSalesData);

module.exports = router;

