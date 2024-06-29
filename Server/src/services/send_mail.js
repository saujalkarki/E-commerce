const nodeMailer = require("nodemailer");

const sendEmail = async (data) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_USER,
      pass: process.env.SENDER_PASS,
    },
  });
};

module.exports = sendEmail;
