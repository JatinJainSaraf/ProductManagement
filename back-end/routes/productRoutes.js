import express from 'express';
import Product from '../models/products.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
      const { search } = req.query;
      
      // Define the search criteria using a regular expression
      const searchRegex = new RegExp(search, 'i');
      
      // Fetch products matching the search criteria
      const products = await Product.find({
        $or: [
          { name: searchRegex },
          { description: searchRegex }
        ]
      }, { _id: 0, name: 1, description: 1, price: 1, quantity: 1 });
      
      res.status(200).json({ data: products });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  });
  

  export default router;