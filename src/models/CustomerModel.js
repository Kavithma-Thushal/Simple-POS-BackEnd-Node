const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: {type: String, required: true, match: /^C\d{2}-\d{3}$/},
    name: {type: String, required: true, minlength: 4},
    address: {type: String, required: true, minlength: 4},
    salary: {type: Number, required: true, min: 0}
});

module.exports = mongoose.model('Customer', customerSchema);