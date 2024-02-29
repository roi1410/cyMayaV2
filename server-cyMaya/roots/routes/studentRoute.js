const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router
  .post("/:courseId", studentController.createStudents)
  .patch("/:studentId",studentController.updateStudent)
  .delete("/:studentId",studentController.deleteStudent);
module.exports = router;
