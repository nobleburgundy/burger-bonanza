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

router.put("/api/burgers/:id", function (req, res) {
  const condition = { id: req.params.id };
  // pass devoured as a boolean, so check for 'true' which will return true if 'true' and false if not
  burger.update({ devoured: req.body.devoured === "true" }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export the routes for server.js
module.exports = router;
