const express = require('express');
const router = express.Router();
const customerController = require('../controller/CustomerController');

router.post('/saveCustomer', customerController.saveCustomer);
router.get('/searchCustomer/:id', customerController.searchCustomer);
router.put('/updateCustomer', customerController.updateCustomer);
router.delete('/deleteCustomer/:id', customerController.deleteCustomer);
router.get('/loadAllCustomers', customerController.loadAllCustomers);
router.get('/generateCustomerId', customerController.generateCustomerId);
router.get('/getCustomerCount', customerController.getCustomerCount);

module.exports = router;