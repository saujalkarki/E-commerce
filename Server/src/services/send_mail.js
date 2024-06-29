const nodeMailer = require("nodemailer");

const sendEmail = async (mailData) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_USER,
      pass: process.env.SENDER_PASS,
    },
  });

  const mailOption = {
    from: "E_commerce_MAIL <sewantakarki80@gmail.com>",
    to: mailData.email,
    subject: mailData.subject,
    text: mailData.message,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
