const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

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

// DB Connection
mongoose.connect("mongodb://localhost:27017/demo", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected Successfully...!'))
    .catch(err => console.error('MongoDB Connection Error...! : ', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});