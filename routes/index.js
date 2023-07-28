var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {


  res.render("index", {
    title: "Hello Word",
    data: "Hello World",
  });
});
router.get("/500", function (req, res, next) {
  // trigger a generic (500) error
  next(new Error("keyboard cat!"));
});
module.exports = router;
