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

// Upload Image
uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.name.split(".")[1];
    doc.image = `${doc.product_id}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.image;

    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.image.path, newpath);

    // Update database
    await Products.findOneAndUpdate({ product_id: doc.product_id }, doc);
  }
};



// Add Product
router.post("/product", async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await Products.create(fields); // insert
      await uploadImage(files, doc); // save image
      res.json({ result: "ok", message: JSON.stringify(doc) }); // reply result
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

// Delete Product
router.delete("/product/id/:id", async (req, res) => {
  let doc = await Products.findOneAndDelete({ product_id: req.params.id });
  res.json({ result: "ok", message: JSON.stringify(doc) });
});

// Update Product
router.put("/product", (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await Products.findOneAndUpdate(
        { product_id: fields.product_id },
        fields
      );
      await uploadImage(files, fields);

      res.json({ result: "ok", message: JSON.stringify(doc) });
    });
  } catch (err) {
    res.json({ result: "nok", message: JSON.stringify(err) });
  }
});

router.get("/testparams/:from-:to/", (req, res) => {
  res.json({ result: req.params });
});

module.exports = router;
