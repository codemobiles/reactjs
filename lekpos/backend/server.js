// yarn add express body-parser fs-extra formidable cors bcryptjs rand-token jsonwebtoken mongoose mongoose-sequence onesignal-node
// npx nodemon server.js

const express = require("express");
const app = express();


app.use("/api/v2", require("./api"))


app.listen(8081, () => {
  console.log("Running..");
});
