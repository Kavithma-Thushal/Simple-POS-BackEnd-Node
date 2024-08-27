const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    code: {type: String, required: true, match: /^I\d{2}-\d{3}$/},
    description: {type: String, required: true, minlength: 4},
    unitPrice: {type: Number, required: true, min: 0},
    qtyOnHand: {type: Number, required: true, min: 0}
});

module.exports = mongoose.model('Item', itemSchema);