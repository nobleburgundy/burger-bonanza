const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.add(req.body.burger_name, function (result) {
    res.json({ id: result.id });
  });
});
// Export the routes for server.js
module.exports = router;
