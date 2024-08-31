const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    salary: {type: Number, required: true}
});

module.exports = mongoose.model('Customer', customerSchema);