const express = require("express");
const router = express.Router();

router.get(
  "/product",
  (req, res, next) => {
    if (req.query.token == "ilovedog") {
      next();
    } else {
      res.send("ads");
    }
  },
  (req, res) => {
    res.json({ result: "product" });
  }
);

module.exports = router;
