const responseUtil = require('../util/ResponseUtil');
const customerModel = require('../model/CustomerModel');

const saveCustomer = async (customerDTO) => {
    const findCustomer = await customerModel.findOne({id: customerDTO.id});
    if (!findCustomer) {
        const customer = new customerModel(customerDTO);
        await customer.save();
        let successResponse = "Customer Saved Successfully...!";
        console.log(`\u001B[34m${successResponse}\u001B[0m`);
        return responseUtil(successResponse, 200);
    } else {
        let errorResponse = "Duplicate Customer Id: " + customerDTO.id;
        console.log(`\u001B[31m${errorResponse}\u001B[0m`);
        return responseUtil(errorResponse, 400);
    }
};

const searchCustomer = async (id) => {
    const searchCustomer = await customerModel.findOne({id});
    if (searchCustomer) {
        let successResponse = "Customer Searched Successfully...!";
        console.log(`\u001B[34m${successResponse}\u001B[0m`);
        return responseUtil(successResponse, 200, searchCustomer);
    } else {
        let errorResponse = 'Customer Not Found: ' + id;
        console.log(`\u001B[31m${errorResponse}\u001B[0m`);
        return responseUtil(errorResponse, 404);
    }
};

const updateCustomer = async (customerDTO) => {
    const updateCustomer = await customerModel.findOneAndUpdate({id: customerDTO.id}, customerDTO, {new: true});
    if (updateCustomer) {
        let successResponse = "Customer Updated Successfully...!";
        console.log(`\u001B[34m${successResponse}\u001B[0m`);
        return responseUtil(successResponse, 200);
    } else {
        let errorResponse = 'Customer Not Found: ' + customerDTO.id;
        console.log(`\u001B[31m${errorResponse}\u001B[0m`);
        return responseUtil(errorResponse, 400);
    }
};

const deleteCustomer = async (id) => {
    const deleteCustomer = await customerModel.findOneAndDelete({id});
    if (deleteCustomer) {
        let successResponse = "Customer Deleted Successfully...!";
        console.log(`\u001B[34m${successResponse}\u001B[0m`);
        return responseUtil(successResponse, 200);
    } else {
        let errorResponse = 'Customer Not Found: ' + id;
        console.log(`\u001B[31m${errorResponse}\u001B[0m`);
        return responseUtil(errorResponse, 404);
    }
};

const loadAllCustomers = async () => {
    const findCustomers = await customerModel.find();
    if (findCustomers.length > 0) {
        let successResponse = "Customers Loaded Successfully...!";
        console.log(`\u001B[34m${successResponse}\u001B[0m`);
        return responseUtil(successResponse, 200, findCustomers);
    } else {
        let errorResponse = 'No Customers Found in DB';
        console.log(`\u001B[33m${errorResponse}\u001B[0m`);
        return responseUtil(errorResponse, 204);
    }
};

const generateCustomerId = async () => {
    const lastCustomer = await customerModel.findOne().sort({_id: -1}).limit(1);
    const lastId = lastCustomer ? lastCustomer.id : 'C00-000';
    let successResponse = "Last Customer ID Retrieved Successfully...!";
    console.log(`\u001B[34m${successResponse}\u001B[0m`);
    return responseUtil(successResponse, 200, lastId);
};

const getCustomerCount = async () => {
    const customerCount = await customerModel.countDocuments();
    let successResponse = "Customer Count Retrieved Successfully...!";
    console.log(`\u001B[34m${successResponse}\u001B[0m`);
    return responseUtil(successResponse, 200, customerCount);
};

module.exports = {
    saveCustomer,
    searchCustomer,
    updateCustomer,
    deleteCustomer,
    loadAllCustomers,
    generateCustomerId,
    getCustomerCount
};