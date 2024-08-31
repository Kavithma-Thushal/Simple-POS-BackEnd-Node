const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true, unique: true},
    customerId: {type: String, ref: 'Customer', required: true},
    orderDetailsList: [{type: String, ref: 'OrderDetails'}]
}, {versionKey: false});

module.exports = mongoose.model('Order', orderSchema);