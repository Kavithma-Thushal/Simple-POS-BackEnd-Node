const mongoose = require('mongoose');

const dbConfig = {
    url: 'mongodb://localhost:27017/demo'
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('MongoDB Connected...!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = {connectDB};