const express = require('express');
const router = express.Router();
const Customer = require('./models/customer.model');
const Joi = require('joi');

// Validation schema
const schema = Joi.object({
    id: Joi.string().pattern(/^C\d{2}-\d{3}$/).required(),
    name: Joi.string().min(4).required(),
    address: Joi.string().min(4).required(),
    salary: Joi.number().min(0).required()
});

// Routes
router.post('/saveCustomer', async (req, res) => {
    try {
        const {error} = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send({message: 'Customer saved successfully'});
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add more routes for search, update, delete, etc.

module.exports = router;