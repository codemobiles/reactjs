const express = require("express");
const router = express.Router();
const Trans = require("./models/trans_schema");
const jwt = require("./jwt");

router.post("/transaction", jwt.verify, async (req, res) => {
  try {    
    req.body.staff_id = req.userId
    let doc = await Trans.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (error) {
    res.json({ result: "nok", message: error });
  }
});

module.exports = router;
