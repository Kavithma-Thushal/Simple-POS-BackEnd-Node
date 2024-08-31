const Customer = require('../model/CustomerModel');
const responseUtil = require('../util/ResponseUtil');

const saveCustomer = async (customerDTO) => {
    const existingCustomer = await Customer.findOne({id: customerDTO.id});
    if (existingCustomer) {
        return responseUtil('Duplicate Customer Id: ' + customerDTO.id, 400);
    }

    const customer = new Customer(customerDTO);
    await customer.save();
    return responseUtil('Customer Saved Successfully...!', 201);
};

const searchCustomer = async (id) => {
    const customer = await Customer.findOne({id});
    if (!customer) {
        return responseUtil('Customer Not Found: ' + id, 404);
    }
    return responseUtil('Customer Searched Successfully...!', 200, customer);
};

const updateCustomer = async (customerDTO) => {
    const customer = await Customer.findOneAndUpdate({id: customerDTO.id}, customerDTO, {new: true});
    if (!customer) {
        return responseUtil('Customer Not Found: ' + customerDTO.id, 400);
    }
    return responseUtil('Customer Updated Successfully...!', 200);
};

const deleteCustomer = async (id) => {
    const customer = await Customer.findOneAndDelete({id});
    if (!customer) {
        return responseUtil('Customer Not Found: ' + id, 404);
    }
    return responseUtil('Customer Deleted Successfully...!', 200);
};

const loadAllCustomers = async () => {
    const customers = await Customer.find();
    if (customers.length === 0) {
        return responseUtil('No Customers Found in DB', 204);
    }
    return responseUtil('Customers Loaded Successfully...!', 200, customers);
};

const generateCustomerId = async () => {
    const lastCustomer = await Customer.findOne().sort({_id: -1}).limit(1);
    const lastId = lastCustomer ? lastCustomer.id : 'C00-000';
    return responseUtil('Last Customer ID Retrieved Successfully...!', 200, lastId);
};

const getCustomerCount = async () => {
    const customerCount = await Customer.countDocuments();
    return responseUtil('Customer Count Retrieved Successfully...!', 200, customerCount);
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