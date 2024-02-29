const Course = require("../models/courseModel");
const Student = require("../models/studentModel");

exports.createStudents = async (req, res) => {
  try {
    const createdStudents = [];
    const students = req.body.students;
    console.log(
      "🚀 ~ exports.createStudents= ~ req.body.Students:",
      req.body.Students
    );
    for (const stu of students) {
      const student = await Student.create({
        ...stu,
        course: req.params.courseId,
      });
      createdStudents.push(student);
    }
    const course = await Course.findByIdAndUpdate(req.params.courseId, {
      students: createdStudents
    });
    course.save();
    res.status(200).send({ message: "success", students: createdStudents });
  } catch (error) {
    res.status(500).send({ message: "fail", error: error });
  }
};
