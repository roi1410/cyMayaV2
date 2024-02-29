const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },
  eventName: { type: String },
  howsInvited: [
    {
      name: String,
      email: String,
    },
  ],
  when: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
