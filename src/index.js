const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const customerRoute = require('./route/CustomerRoute');

// DB Connection
mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected Successfully...!'))
    .catch(err => console.error('MongoDB Connection Error...! : ', err));

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/customers', customerRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});