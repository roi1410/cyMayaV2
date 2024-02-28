const express = require("express");
const router = express.Router();

const syllabusController = require("../controllers/syllabusRoute");

router
  .post("/create", syllabusController)
  .get("/read", syllabusController)
  .patch("/update",syllabusController)
  .delete("/delete",syllabusController);
module.exports = router;
