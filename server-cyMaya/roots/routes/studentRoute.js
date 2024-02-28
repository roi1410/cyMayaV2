const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router
  .post("/create", studentController)
  .get("/read", studentController)
  .patch("/update",studentController)
  .delete("/delete",studentController);
module.exports = router;
