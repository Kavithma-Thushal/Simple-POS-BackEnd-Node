const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');

router.post('/placeOrder', orderController.placeOrder);
router.get('/generateOrderId', orderController.generateOrderId);
router.get('/getOrderCount', orderController.getOrderCount);
router.get('/loadOrderDetails', orderController.loadOrderDetails);

module.exports = router;