// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = 3000;

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://vthakkar4:25Vansh25@@stackshare.8rgbd4p.mongodb.net/';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define a Mongoose Schema (Example: User)
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Define a Mongoose Model based on the Schema
const User = mongoose.model('User', UserSchema);

// Express route to create a new user
app.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Express route to get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
