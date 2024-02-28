const mongoose = require("mongoose");

const syllabusSchema = new mongoose.Schema({
  gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },
  subjects: [{ subjectName: { type: String }, hours: { type: Number } }],
});

const syllabus = mongoose.model("syllabus", syllabusSchema);

module.exports = syllabus;
