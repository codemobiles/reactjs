const jwt = require("./jwt");
const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");

router.get("/product", jwt.verify, async (req, res) => {
  let doc = await Products.find({})
  res.json(doc);
});

module.exports = router;
