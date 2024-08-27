const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kaviyabro9007@gmail.com',
        pass: 'bqwyuqfskxeekomn'
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {transporter};