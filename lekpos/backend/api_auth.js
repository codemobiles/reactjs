const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ result: "login", message: req.body });
});

module.exports = router;
