
// npm i express body-parser fs-extra formidable cors bcryptjs rand-token jsonwebtoken mongoose mongoose-sequence onesignal-node

const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.end("Login 555");
});

app.get("/register", (req, res) => {
  res.end("RRRR 555");
});

app.listen(8081, () => {
  console.log("Running..");
});
