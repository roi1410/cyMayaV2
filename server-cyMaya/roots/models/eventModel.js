const mongoose = require("mongoose");
const { sendEmail } = require("../../utils");
const eventSchema = new mongoose.Schema({
 gantt: { type: mongoose.Schema.Types.ObjectId, ref: "Gantt" },
 eventName: { type: String },
 howsInvited: [
    {
      name: String,
      email: String,
    },
 ],
 when: Date,
});

// Middleware to send email after saving an event
eventSchema.post('save', async function(doc, next) {
 try {
    // Assuming you have a function to send emails
    await sendEmail(doc);
    next();
 } catch (error) {
    console.error("Error sending email: ", error);
    next(error);
 }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
