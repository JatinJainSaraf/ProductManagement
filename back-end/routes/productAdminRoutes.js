import express from 'express';
import Product from '../models/products.js';

const router = express.Router();

router.post('/products', async (req, res) => {
    try {
      // Extract the product details from the request body
      const { name, description, price, quantity } = req.body;
      
      // Create a new product instance
      const product = new Product({
        name,
        description,
        price,
        quantity
      });
      
      // Save the product to the database
      await product.save();
      
      res.status(201).json({ success: true, message: 'Product added successfully', data: {id: product._id} });
    } catch (error) {
      console.error('Failed to add product:', error);
      res.status(500).json({ error: 'Failed to add product' });
    }
  });

  router.get('/products', async (req, res) => {
    try {
      // Fetch only the necessary product details from the database
      const products = await Product.find({}, { name: 1, description: 1, price: 1, quantity: 1 });
  
      res.status(200).json({ data: products });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
  

  export default router;

  