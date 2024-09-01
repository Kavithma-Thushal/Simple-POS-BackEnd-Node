const customerService = require('../service/CustomerService');

exports.saveCustomer = async (req, res) => {
    try {
        const response = await customerService.saveCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.searchCustomer = async (req, res) => {
    try {
        const response = await customerService.searchCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const response = await customerService.updateCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        const response = await customerService.deleteCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.loadAllCustomers = async (req, res) => {
    try {
        const response = await customerService.loadAllCustomers();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.generateCustomerId = async (req, res) => {
    try {
        const response = await customerService.generateCustomerId();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.getCustomerCount = async (req, res) => {
    try {
        const response = await customerService.getCustomerCount();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};