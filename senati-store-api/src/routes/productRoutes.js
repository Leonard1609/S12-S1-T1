const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productController');

// Rutas simples por ahora
router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router;