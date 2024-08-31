const mongoose = require('mongoose');

const orderDetailsSchema = new mongoose.Schema({
    order: {type: String, ref: 'Order', required: true},
    item: {type: String, ref: 'Item', required: true},
    buyQty: {type: Number, required: true},
    total: {type: Number, required: true}
});

module.exports = mongoose.model('OrderDetails', orderDetailsSchema);