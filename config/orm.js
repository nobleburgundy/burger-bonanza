const connection = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    const query = "SELECT * FROM " + table + ";";
    connection.query(query, function (error, data) {
      if (error) throw error;
      cb(data);
    });
  },
  insertOne: function () {
    console.log("orm insertOne()");
  },
  updateOne: function () {
    console.log("orm updateOne");
  },
};

module.exports = orm;
