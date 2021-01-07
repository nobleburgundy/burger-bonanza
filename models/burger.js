const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
