const express = require("express");
const router = express.Router();
const 
syllabusController= require("../controllers/syllabusController")
router
  .post("/create", syllabusController.createSyllabus)
  // .get("/read", syllabusController)
  // .patch("/update",syllabusController)
  // .delete("/delete",syllabusController);
module.exports = router;
