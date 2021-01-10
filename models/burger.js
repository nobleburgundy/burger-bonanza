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
  update: function (objectColumnValues, condition, cb) {
    orm.updateOne("burgers", objectColumnValues, condition, function (result) {
      cb(result);
    });
  },
  delete: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
