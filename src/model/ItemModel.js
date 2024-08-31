const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    description: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    qtyOnHand: {type: Number, required: true}
}, {versionKey: false});

module.exports = mongoose.model('Item', itemSchema);