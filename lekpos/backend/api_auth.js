const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");

router.post("/login", (req, res) => {
  res.json({ result: "login", message: req.body });
});

router.post("/register", async (req, res) => {
  let doc = await Users.create(req.body);
  res.json({ result: "ok", doc });
});

module.exports = router;
