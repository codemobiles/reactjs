const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
var bcrypt = require("bcryptjs");
const jwt = require("./jwt");
const randtoken = require("rand-token"); // yarn add rand-token

router.post("/login", (req, res) => {
  res.json({ result: "login", message: req.body });
});


router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    res.json({ result: "ok", message: "Register successfully" });
  } catch (err) {
    res.json({ result: "nok", message: err.errmsg });
  }
});


module.exports = router;
