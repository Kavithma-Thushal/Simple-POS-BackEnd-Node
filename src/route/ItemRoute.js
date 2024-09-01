const express = require('express');
const router = express.Router();
const itemController = require('../controller/ItemController');

router.post('/saveItem', itemController.saveItem);
router.get('/searchItem/:code', itemController.searchItem);
router.put('/updateItem', itemController.updateItem);
router.delete('/deleteItem/:code', itemController.deleteItem);
router.get('/loadAllItems', itemController.loadAllItems);
router.get('/generateItemCode', itemController.generateItemCode);
router.get('/getItemCount', itemController.getItemCount);

module.exports = router;