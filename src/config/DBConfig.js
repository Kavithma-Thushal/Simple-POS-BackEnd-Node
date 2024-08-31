const mongoose = require("mongoose");

const dbConfig = {
    uri: "mongodb://localhost:27017/demo",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

mongoose.set('debug', true);

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.uri, dbConfig.options);
        console.log("Connected to MongoDB Successfully...!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;