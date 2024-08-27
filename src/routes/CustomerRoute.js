const customerRoutes = require('./controllers/customer.controller');

// Use routes
app.use('/api/v1/customer', customerRoutes);