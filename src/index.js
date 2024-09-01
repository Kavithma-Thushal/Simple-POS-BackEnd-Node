const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const handleRuntimeError = require('../src/util/ResponseHandler');

const customerRoute = require('./route/CustomerRoute');
const itemRoute = require('./route/ItemRoute');
const orderRoute = require('./route/OrderRoute');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/customer', customerRoute);
app.use('/api/v1/item', itemRoute);
app.use('/api/v1/order', orderRoute);

app.use(handleRuntimeError);

// DB Connection
mongoose.connect("mongodb://localhost:27017/demo", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('\u001B[32mMongoDB Connected Successfully...!\u001B[0m'))
    .catch(err => console.error('\u001B[31mMongoDB Connection Error: \u001B[0m', err));

// Start server
app.listen(port, () => {
    console.log(`\u001B[34mServer is running on port ${port}\u001B[0m`);
});