const Course = require("../models/courseModel");

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body.name);
  
};
