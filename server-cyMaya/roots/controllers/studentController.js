const Course = require("../models/courseModel");
const Student = require("../models/studentModel");

exports.createStudents = async (req, res) => {
  try {
    const createdStudents = [];
    const students = req.body.students;
    console.log("🚀 ~ exports.createStudents= ~ req.body.Students:", req.body.Students)
    for (const stu of students) {
      const student = await Student.create({
        ...stu,
        course: req.params.courseId,
      });
      createdStudents.push(student);
    }
    const course = await Course.findByIdAndUpdate(req.params.courseId, {
      students: [...students,createdStudents],
    });
    course.save();
    res.status(200).send({ message: "success", students: createdStudents });
  } catch (error) {
    res.status(500).send({ message: "fail", error: error });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent =await Student.findByIdAndDelete(req.params.studentId);
    const course = await Course.findById(deletedStudent.course._id);
    if (!course) {
      return res.status(404).send({ message: "course chart not found" });
    }
    const studentsList = course.students.filter(
      (stu) => stu.toString() !== deletedStudent.course._id.toString()
    );
    console.log("🚀 ~ exports.deleteStudent ~ studentsList:", studentsList)
    course.students = studentsList;
    await course.save();
    res.status(200).send({status:"success",course:course})
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.studentId,
        req.body,
        { new: true }
      );
      res.status(200).send({status:"success",student:updatedStudent})
  } catch (error) {
    res.status(500).send({ status: "fail" ,error:error});

  }
};
