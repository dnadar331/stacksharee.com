const express = require('express');
const bodyParser = require('body-parser');
const UserInput = require('./models/UserInput');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
const mstring = "mongodb+srv://vthakkar4:25Vansh25@@stackshare.8rgbd4p.mongodb.net/Dummy";
mongoose.connect(mstring, { useNewUrlParser: true, useUnifiedTopology: true }); // Ensure to pass options
const database = mongoose.connection;
database.on('error', (error) => console.log(error));
mongoose.connection.on('connected', () => console.log('Database Connected')); // Change this line

// Route handler for POST request to save user input
app.post('/submit', async (req, res) => {
    try {
        const { name } = req.body;
        await UserInput.create({ name });
        console.log(UserInput);
        res.status(200).send('Data saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
