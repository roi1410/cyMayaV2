const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");

router
  .post("/create", user)
  .get("/read", user)
  .patch("/update",user)
  .delete("/delete",user);
module.exports = router;
