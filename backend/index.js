const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const notFoundMiddleware = require("./middleware/notFound");

require("dotenv").config();
require("./db/connection");

const app = express();
app.use(bodyParser.json());

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/", (req, res) => {
    res.status(200).send("Application is running");
});

app.use(notFoundMiddleware);

app.listen(5000, (err) => {
    if (err) console.log("err", err);
    console.log("server listening on 5000");
});







































module.exports = app;