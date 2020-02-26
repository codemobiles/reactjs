const express = require("express");
const router = express.Router();

router.get(
  "/product",
  (req, res, next) => {
    if (req.query.token == "1234") {
      next();
    } else {
      res.end("No Authorized");
    }
  },
  (req, res) => {
    res.json({ result: "product" });
  }
);

module.exports = router;
