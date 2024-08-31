const nodemailer = require("nodemailer");

const emailConfig = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "kaviyabro9007@gmail.com",
        pass: "bqwyuqfskxeekomn",
    },
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
    },
};

const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    auth: emailConfig.auth,
    tls: emailConfig.tls,
});

module.exports = transporter;