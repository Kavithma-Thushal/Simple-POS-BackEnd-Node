const express = require('express');
const ItemController = require('../controller/ItemController');
const router = express.Router();

router.post('/saveItem', ItemController.saveItem);
router.get('/searchItem/:code', ItemController.searchItem);
router.put('/updateItem', ItemController.updateItem);
router.delete('/deleteItem/:code', ItemController.deleteItem);
router.get('/loadAllItems', ItemController.loadAllItems);
router.get('/generateItemCode', ItemController.generateItemCode);
router.get('/getItemCount', ItemController.getItemCount);

module.exports = router;