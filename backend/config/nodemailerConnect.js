const nodemailer = require("nodemailer");
require('dotenv').config(); 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

transporter.verify().then(() => {
    console.log("Ready to send email");
});

module.exports = { transporter };
