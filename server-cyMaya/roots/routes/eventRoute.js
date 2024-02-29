const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/:ganttId", eventController.createANewEvent)
  .patch("/:eventId",eventController.updateEvent)
  .delete("/:ganttId",eventController.deleteEvent);
module.exports = router;
