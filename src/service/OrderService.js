const Order = require('../model/OrderModel');
const Customer = require('../model/CustomerModel');
const Item = require('../model/ItemModel');
const responseUtil = require('../util/ResponseUtil');

const placeOrder = async (orderDTO) => {
    const existingOrder = await Order.findOne({orderId: orderDTO.orderId});
    if (existingOrder) {
        return responseUtil('Duplicate Order Id: ' + orderDTO.orderId, 409);
    }

    const customer = await Customer.findById(orderDTO.customerId);
    if (!customer) {
        return responseUtil('Customer Not Found: ' + orderDTO.customerId, 404);
    }

    const order = new Order({
        ...orderDTO,
        customer: customer._id,
    });

    const orderDetailsList = [];
    for (const detail of orderDTO.orderDetailsList) {
        const item = await Item.findById(detail.itemCode);
        if (!item) {
            return responseUtil('Item Not Found: ' + detail.itemCode, 404);
        }
        orderDetailsList.push({
            item: item._id,
            qty: detail.qty,
            unitPrice: detail.unitPrice,
        });
    }

    order.orderDetails = orderDetailsList;
    await order.save();

    return responseUtil('Order Placed Successfully...!', 201);
};

const generateOrderId = async () => {
    const lastOrder = await Order.findOne().sort({_id: -1}).limit(1);
    const lastOrderId = lastOrder ? lastOrder.orderId : 'O00-000';
    return responseUtil('Last Order ID Retrieved Successfully...!', 200, lastOrderId);
};

const getOrderCount = async () => {
    const orderCount = await Order.countDocuments();
    return responseUtil('Order Count Retrieved Successfully...!', 200, orderCount);
};

const loadOrderDetails = async () => {
    const orders = await Order.find().populate('customer').populate('orderDetails.item');
    if (orders.length === 0) {
        return responseUtil('No Orders Found', 204);
    }
    return responseUtil('Orders Loaded Successfully...!', 200, orders);
};

module.exports = {
    placeOrder,
    generateOrderId,
    getOrderCount,
    loadOrderDetails
};