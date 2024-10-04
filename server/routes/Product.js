const express = require('express');
const productRoutes = express.Router();
const {addProduct,updateProduct,deleteProduct,getAllProducts,getProductById} = require('../controllers/Product');
const { authenticate } = require('../middleware/authMiddleware');

productRoutes.post('/products', authenticate, addProduct);
productRoutes.put('/products/:id', authenticate, updateProduct);
productRoutes.delete('/products/:id', authenticate, deleteProduct);
productRoutes.get('/products',authenticate, getAllProducts);
productRoutes.get('/products/:id',authenticate, getProductById);

module.exports = productRoutes;
