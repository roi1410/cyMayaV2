const mongoose = require("mongoose");
const eventSchema = new Schema({
  gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },

  howsInvited: [
    {
      name: String,
      email: String,
    },
  ],
  when: Date,
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
