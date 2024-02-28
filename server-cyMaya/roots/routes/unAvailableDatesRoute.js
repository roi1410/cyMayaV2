const express = require("express");
const router = express.Router();
const unAvailableDateController = require("../controllers/unAvilableDateController");

router
  .post("/create", unAvailableDateController)
  .get("/read", unAvailableDateController)
  .patch("/update",unAvailableDateController)
  .delete("/delete",unAvailableDateController);
module.exports = router;
