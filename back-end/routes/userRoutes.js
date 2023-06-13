import express from "express";
import User from "../models/users.js";
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      // Get the user data from the request body
      const { name, email, password } = req.body;
      
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      
      // Create a new user instance
      const newUser = new User({ name, email, password });
      
      // Save the user to the database
      await newUser.save();
      
      // Respond with a success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // Handle any errors that occur during registration
      console.error('User registration failed:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  

  router.post('/login', async (req, res) => {
    try {
      // Get the user data from the request body
      const { email, password } = req.body;
      
      // Find the user in the database
      const user = await User.findOne({ email }).select({ name: 1, email: 1, role: 1, password: 1 });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Compare the password with the stored hash
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
      const userObject = user.toObject();
      delete userObject.password;
      // Respond with user information or a token for authentication
      res.status(200).json({ data: userObject });
    } catch (error) {
      // Handle any errors that occur during login
      console.error('User login failed:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });
  

 export default router;
