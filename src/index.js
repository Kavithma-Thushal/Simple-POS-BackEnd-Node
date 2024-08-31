const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/DBConfig");
const emailConfig = require("./config/EmailConfig");
const serverConfig = require("./config/ServerConfig");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to DB
dbConfig();

// Start Server
app.listen(serverConfig.port, () => {
    console.log(`${serverConfig.appName} is running on port ${serverConfig.port}`);
});