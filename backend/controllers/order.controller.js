// controllers/order.controller.js
exports.getOrders = (req, res) => {
    res.status(200).send("Get all orders");
};
exports.createOrder = (req, res) => {
    res.status(201).send("Create an order");
};