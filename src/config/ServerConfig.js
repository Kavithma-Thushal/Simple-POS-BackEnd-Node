const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

module.exports = app;