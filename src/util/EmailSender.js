const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendEmail = (to, subject, body) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: body
    };

    return transporter.sendMail(mailOptions);
};

module.exports = {sendEmail};