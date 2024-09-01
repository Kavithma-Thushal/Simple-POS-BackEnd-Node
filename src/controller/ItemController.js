const itemService = require('../service/ItemService');

exports.saveItem = async (req, res) => {
    try {
        const response = await itemService.saveItem(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.searchItem = async (req, res) => {
    try {
        const response = await itemService.searchItem(req.params.code);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.updateItem = async (req, res) => {
    try {
        const response = await itemService.updateItem(req.body);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const response = await itemService.deleteItem(req.params.code);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.loadAllItems = async (req, res) => {
    try {
        const response = await itemService.loadAllItems();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.generateItemCode = async (req, res) => {
    try {
        const response = await itemService.generateItemCode();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.getItemCount = async (req, res) => {
    try {
        const response = await itemService.getItemCount();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};