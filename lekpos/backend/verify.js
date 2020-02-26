const verify = (req, res, next) => {
  if (req.query.token == "ilovedog") {
    next();
  }
  else {
    res.send("ads");
  }
};
exports.verify = verify;
