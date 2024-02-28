const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({name:req.body.name});
    res.status(200).send({ status: "success", course: course });
  } catch (error) {
    console.log("🚀 ~ exports.createCourse= ~ error:", error)
    res.status(500).send({ status: "fail", message: "cant create course" });
  }
};
