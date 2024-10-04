const express = require('express');
const cartRoutes = express.Router();
const { authenticate } = require('../middleware/authMiddleware');
const {
    addItemToCart,
    viewCart,
    updateCartItemQuantity,
    removeCartItem
} = require('../controllers/Cart');


cartRoutes.post('/cart', authenticate, addItemToCart);
cartRoutes.get('/cart', authenticate, viewCart);
cartRoutes.put('/cart/:productId', authenticate, updateCartItemQuantity);
cartRoutes.delete('/cart/:productId', authenticate, removeCartItem);

module.exports = cartRoutes;
