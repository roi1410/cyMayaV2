const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router
  .post("/create", eventController)
  .get("/read", eventController)
  .patch("/update",eventController)
  .delete("/delete",eventController);
module.exports = router;
