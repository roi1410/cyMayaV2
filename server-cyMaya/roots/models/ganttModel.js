const mongoose = require("mongoose");

const ganttSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "  Course" },

  syllabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Syllabus",
  },

  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  unAvailableDates: [
    { type: mongoose.Schema.Types.ObjectId, ref: "  unAvailableDate" },
  ],
});

const gantt = mongoose.model("gantt", ganttSchema);

module.exports = gantt;
