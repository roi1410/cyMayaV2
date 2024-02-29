const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

async function sendEmail(event) {
 let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mayacy682@gmail.com",
      pass: process.env.MAIL_ENV,
    },
 });

 let mailOptions = {
    from: "mayacy682@gmail.com",
    to: event.howsInvited.map(invitee => invitee.email).join(','), 
    subject: `Invitation to ${event.eventName}`,
    text: `You are invited to ${event.eventName} on ${event.when}.`,
 };

 try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
 } catch (error) {
    console.error("Error occurred: " + error.message);
 }
}

module.exports = { sendEmail };
