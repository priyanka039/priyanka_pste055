// controllers/product.controller.js
exports.getProducts = (req, res) => {
    res.status(200).send("Get all products");
};
exports.createProduct = (req, res) => {
    res.status(201).send("Create a product");
};