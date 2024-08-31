const express = require('express');
const customerController = require('../controller/CustomerController');

const router = express.Router();

router.post('/saveCustomer', customerController.saveCustomer);

module.exports = router;