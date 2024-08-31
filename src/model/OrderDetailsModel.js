const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
    orderId: {type: String, ref: 'Order', required: true},
    itemCode: {type: String, ref: 'Item', required: true},
    buyQty: {type: Number, required: true},
    total: {type: Number, required: true}
});

module.exports = mongoose.model('OrderDetails', orderDetailsSchema);