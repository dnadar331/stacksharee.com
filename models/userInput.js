// models/UserInput.js
const mongoose = require('mongoose');

const userInputSchema = new mongoose.Schema({
    name: String
});

const UserInput = mongoose.model('UserInput', userInputSchema);

module.exports = UserInput;
