const express = require("express");
const router = express.Router();
const ganttController = require("../controllers/ganttController");

router
  .post("/create/:courseId", ganttController.createGantt)
  // .get("/read", ganttController)
  // .patch("/update",ganttController)
  // .delete("/delete",ganttController);
module.exports = router;
