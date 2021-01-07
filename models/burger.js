const { selectAll } = require("../config/orm");
const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.all("burgers", function (result) {
      cb(result);
    });
  },
};

module.exports = burger;
