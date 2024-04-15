// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://vthakkar4:password180@stackshare.8rgbd4p.mongodb.net/Dummy';

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
const userInputSchema = new mongoose.Schema({
    User_Id: String,
    password: String
});



// Define a Mongoose Model based on the Schema
const User = mongoose.model('UserInput', userInputSchema);
// module.export=User
// Express route to create a new user
app.post('/g_users', async (req, res) => {
    try {

        const { User_Id, password } = req.body;
        const newUser = new User({ User_Id, password });
        console.log(newUser);
        await newUser.save();
        console.log(newUser);
        // res.send(newUser);
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
