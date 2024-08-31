const CustomerService = require('../service/CustomerService');

exports.saveCustomer = async (req, res) => {
    try {
        const response = await CustomerService.saveCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.searchCustomer = async (req, res) => {
    try {
        const response = await CustomerService.searchCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const response = await CustomerService.updateCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const response = await CustomerService.deleteCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.loadAllCustomers = async (req, res) => {
    try {
        const response = await CustomerService.loadAllCustomers();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.generateCustomerId = async (req, res) => {
    try {
        const response = await CustomerService.generateCustomerId();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.getCustomerCount = async (req, res) => {
    try {
        const response = await CustomerService.getCustomerCount();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};