const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "  Course" },
  name: { type: String },
  email: { type: String },
  phoneNumber: { type: Number },
  //   grades: [
  //     {
  //       testId: Schema.Types.ObjectId,
  //     },
  //   ],
  isShasan: { type: Boolean },
  coursePaymentImg: { type: String },
  barrowImgs: [{ type: String }],

  gitHubAccount: { type: String },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
