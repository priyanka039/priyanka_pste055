const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 5000
  
  // Middleware
  app.use(bodyParser.json());

  // MongoDB connection
  mongoose.connect('mongodb://127.0.0.1:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

  // Product Schema
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
  });

  const Product = mongoose.model('Product', productSchema);

  // Create a new product
  app.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Get all products
  app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Update a product by ID
  app.put('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Delete a product by ID
  app.delete('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
      res.status(200).send({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });


//
// routes/product.router.js
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;