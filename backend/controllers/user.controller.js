// controllers/user.controller.js
exports.getUsers = (req, res) => {
    res.status(200).send("Get all users");
};
exports.createUser = (req, res) => {
    res.status(201).send("Create a user");
};