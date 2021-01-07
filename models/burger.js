const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
  add: function (burger, cb) {
    orm.insertOne(burger, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
