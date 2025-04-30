const express = require('express');
const { addProduct, getSalesData } = require('../controllers/productController');
const router = express.Router();

// Ürün ekleme rotası
router.post('/add-product', addProduct);

// Satış verilerini getirme rotası
router.get('/get-sales-data', getSalesData);

module.exports = router;
