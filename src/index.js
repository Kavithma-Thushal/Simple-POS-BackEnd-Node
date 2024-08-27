const {connectDB} = require('./config/DBConfig');
const app = require('./config/ServerConfig');

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});