const connection = require("./connection");

const orm = {
  selectAll: function () {
    console.log("orm selectAll()");
  },
  insertOne: function () {
    console.log("orm insertOne()");
  },
  updateOne: function () {
    console.log("orm updateOne");
  },
};

module.exports = orm;
