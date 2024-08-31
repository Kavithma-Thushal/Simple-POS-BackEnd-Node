const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    customer: {type: String, ref: 'Customer', required: true},
    orderDetailsList: [{type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetails'}]
});

module.exports = mongoose.model('Order', orderSchema);