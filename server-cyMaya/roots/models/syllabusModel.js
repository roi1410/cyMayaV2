const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
  gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },
  subjects: [{ subjectName: { type: String }, hours: { type: Number } }],
});

const Syllabus = mongoose.model("Syllabus", syllabusSchema);

module.exports = Syllabus;
