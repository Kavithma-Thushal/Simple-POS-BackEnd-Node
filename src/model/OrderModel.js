const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {type: String, required: true, unique: true},
    customerId: {type: String, ref: 'Customer', required: true},
    orderDetailsList: [{type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails'}]
});

module.exports = mongoose.model('Order', orderSchema);