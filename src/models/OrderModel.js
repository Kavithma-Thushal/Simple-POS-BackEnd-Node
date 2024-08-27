const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
    itemCode: {type: String, required: true},
    buyQty: {type: Number, required: true, min: 0},
    total: {type: Number, required: true, min: 0}
});

const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    customerId: {type: String, required: true},
    orderDetailsList: [orderDetailsSchema]
});

module.exports = mongoose.model('Order', orderSchema);