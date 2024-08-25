const express = require('express');
const dotenv = require('dotenv');

// Configuration the .env file
dotenv.config();

// Create Express APP
const app = express();
const port = process.env.PORT || 8000;


// Define the first Route of APP
app.get('/', (req, res) => {
    // Send Hello World
    res.send('Welcome to my supa dupa APP Express + TS + Swagger');
});

// Execute APP and Listen request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
});
