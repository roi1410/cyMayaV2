const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router
  .post("/create", courseController.createCourse)
  // .get("/read", courseController)
  // .patch("/update",courseController)
  // .delete("/delete",);
module.exports = router;
