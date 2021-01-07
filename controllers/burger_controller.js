const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burgers: ["one", "test"] });
  });
});

// Export the routes for server.js
module.exports = router;
