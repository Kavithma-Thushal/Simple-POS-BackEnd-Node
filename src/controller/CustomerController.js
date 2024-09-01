const customerService = require('../service/CustomerService');

exports.saveCustomer = async (req, res, next) => {
    try {
        const response = await customerService.saveCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.searchCustomer = async (req, res, next) => {
    try {
        const response = await customerService.searchCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.updateCustomer = async (req, res, next) => {
    try {
        const response = await customerService.updateCustomer(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.deleteCustomer = async (req, res, next) => {
    try {
        const response = await customerService.deleteCustomer(req.params.id);
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.loadAllCustomers = async (req, res, next) => {
    try {
        const response = await customerService.loadAllCustomers();
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.generateCustomerId = async (req, res, next) => {
    try {
        const response = await customerService.generateCustomerId();
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};

exports.getCustomerCount = async (req, res, next) => {
    try {
        const response = await customerService.getCustomerCount();
        res.status(response.status).send(response);
    } catch (error) {
        next(error);
    }
};