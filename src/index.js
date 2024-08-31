const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/DBConfig");
const transporter = require("./config/EmailConfig");
const serverConfig = require("./config/ServerConfig");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to Database
connectDB();

// Start Server
app.listen(serverConfig.port, () => {
    console.log(`${serverConfig.appName} is running on port ${serverConfig.port}`);
});