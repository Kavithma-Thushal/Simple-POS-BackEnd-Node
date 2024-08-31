const express = require('express');
const OrderController = require('../controller/OrderController');
const router = express.Router();

router.post('/placeOrder', OrderController.placeOrder);
router.get('/generateOrderId', OrderController.generateOrderId);
router.get('/getOrderCount', OrderController.getOrderCount);
router.get('/loadOrderDetails', OrderController.loadOrderDetails);

module.exports = router;