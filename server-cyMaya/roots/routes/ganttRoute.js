const express = require("express");
const router = express.Router();
const ganttController = require("../controllers/ganttController");

router
  .post("/:courseId", ganttController.createGantt)
  .get("/:ganttId", ganttController.getGantt)
  // .patch("/update",ganttController)
  // .delete("/delete",ganttController);
module.exports = router;
