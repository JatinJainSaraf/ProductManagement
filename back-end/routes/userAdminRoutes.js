import express from "express";
import User from "../models/users.js";
const router = express.Router();


// Get all users
router.get('/users', async (req, res) => {
    try {
      const { sort, filter } = req.query;
  
      let query = User.find();
  
      // Apply sorting
      if (sort) {
        query = query.sort(sort);
      }
  
      // Apply filtering
      if (filter) {
        query = query.where(filter);
      }
  
      // Fetch the users based on the applied sorting and filtering
      const users = await query.select({ name: 1, email: 1, role: 1 });
  
      res.status(200).json({ users });
    } catch (error) {
      console.error('Failed to fetch users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
  router.get('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Find the user in the database by ID
      const user = await User.findById(userId).select({ name: 1, email: 1, role: 1 });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('Failed to fetch user details:', error);
      res.status(500).json({ error: 'Failed to fetch user details' });
    }
  });

  router.put('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email, role } = req.body;
  
      // Find the user in the database by ID
      let user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user details
      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;
  
      // Save the updated user
      user = await user.save();
  
      res.status(200).json({});
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  });
  
  router.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      
      // Find the user by ID and remove it from the database
      const deletedUser = await User.findByIdAndDelete(userId);
      
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Failed to delete user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });
  
  
  
export default router;