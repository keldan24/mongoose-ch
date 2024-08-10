const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, {
  serverSelectionTimeoutMS: 50000 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

function disconnect() {
  mongoose.disconnect();
}

module.exports = { mongoose, disconnect };
