const mongoose = require("mongoose");

const ganttSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "  Course" },
  startingDate:{type:Date},

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
    { type: mongoose.Schema.Types.ObjectId, ref: "UnAvailableDates" },
   ],
   
});

const Gantt = mongoose.model("Gantt", ganttSchema);

module.exports = Gantt;
