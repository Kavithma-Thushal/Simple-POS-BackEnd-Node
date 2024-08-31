const CustomerEntity = require('../model/CustomerModel');

exports.saveCustomer = async (req, res) => {
    const {id, name, address, salary} = req.body;
    try {
        const existingCustomer = await CustomerEntity.findOne({id});
        if (existingCustomer) {
            return res.status(400).json({message: 'Customer already exists...!'});
        }
        const newCustomer = new CustomerEntity({id, name, address, salary});
        await newCustomer.save();
        res.status(201).json({message: 'Customer Saved Successfully...!'});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};