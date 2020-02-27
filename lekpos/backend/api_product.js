const jwt = require("./jwt");
const express = require("express");
const router = express.Router();
const Products = require("./models/product_schema");

const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");


router.get("/product", jwt.verify, async (req, res) => {
  let doc = await Products.find({}).sort({ created: -1 });
  res.json(doc);
});



module.exports = router;
