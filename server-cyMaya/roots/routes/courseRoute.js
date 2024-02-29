const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router
  .post(courseController.createCourse)
  .get( "/:courseId",courseController.getCourse)
  // .patch("/update",courseController)
  // .delete("/delete",);
module.exports = router;
