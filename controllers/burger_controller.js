const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export the routes for server.js
module.exports = router;
