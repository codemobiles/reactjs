const { verify } = require("./verify");

const express = require("express");
const router = express.Router();


router.get(
  "/product",
  verify,
  (req, res) => {
    res.json({ result: "product" });
  }
);

module.exports = router;
