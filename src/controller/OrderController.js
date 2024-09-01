const orderService = require('../service/OrderService');

exports.placeOrder = async (req, res) => {
    try {
        const response = await orderService.placeOrder(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.generateOrderId = async (req, res) => {
    try {
        const response = await orderService.generateOrderId();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.getOrderCount = async (req, res) => {
    try {
        const response = await orderService.getOrderCount();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.loadOrderDetails = async (req, res) => {
    try {
        const response = await orderService.loadOrderDetails();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};